const Joi = require('joi');

exports.createUser = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().max(20).required().messages({
      'string.empty': 'first_name is required',
      'string.max': 'first_name must not exceed 20 characters',
    }),
    last_name: Joi.string().max(20).required().messages({
      'string.empty': 'Last name is required',
      'string.max': 'Last name must not exceed 20 characters',
    }),
    mobile: Joi.string().max(30).messages({
      'string.max': 'Mobile must not exceed 30 characters',
    }),
    email: Joi.string().email().required().messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email',
    }),
    password: Joi.string().min(6).max(100).required().messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters',
      'string.max': 'Password must not exceed 100 characters',
    })
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}

exports.updateUser = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().max(20).messages({
      'string.max': 'first_name must not exceed 20 characters',
    }),
    last_name: Joi.string().max(20).messages({
      'string.max': 'Last name must not exceed 20 characters',
    }),
    mobile: Joi.string().max(30).messages({
      'string.max': 'Mobile must not exceed 30 characters',
    }),
    email: Joi.string().email().messages({
      'string.email': 'Email must be a valid email',
    }),
    password: Joi.string().min(6).max(100).messages({
      'string.min': 'Password must be at least 6 characters',
      'string.max': 'Password must not exceed 100 characters',
    })
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}
