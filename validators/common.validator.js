const Joi = require('joi');

exports.id = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().required().messages({
            'number.base': 'Id must be a number',
            'number.empty': 'Id is required',
        })
    });

    const { error } = schema.validate(req.params);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}