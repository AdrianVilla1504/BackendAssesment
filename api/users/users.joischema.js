const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
});

function validateUser(req, res, next) {
  const { name, email, password } = req.body;
  const user = { name, email, password };
  const { error } = userSchema.validate(user);

  if (error) {
    console.log('ERROR: MISSING DATA FROM FIELDS');
    return res.status(400).json({ message: 'MISSING DATA FROM FIELDS' });
  }

  next();
  return null;
}

module.exports = { validateUser };
