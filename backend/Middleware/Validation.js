const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message, // Only the specific validation message
    });
  }

  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(), // Changed `Joi.string.email` to `Joi.string().email()`
    password: Joi.string().min(4).max(100).required(), // Changed `Joi.string.min` to `Joi.string().min`
  });

  const { error } = schema.validate(req.body); // Changed `schema.validate(req, res)` to `schema.validate(req.body)`
  if (error) {
    return res.status(400).json({
      message: error.details[0].message, // Only the specific validation message
    });
  }

  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};
