const Joi = require("@hapi/joi");

// Register validation
module.exports.create = (fields) => {
  const schema = Joi.object({
    bidCompany: Joi.string().required(),
    bidCoverLetter: Joi.string().optional(),
    bidProfile: Joi.string().required(),
    bidQuestionsAnswer: Joi.array(),
    bidTime: Joi.date().required(),
    bidURL: Joi.string().required(),
    bidder: Joi.string().required(),
    clientCompany: Joi.string().required(),
    clientHistory: Joi.array()
      .items(
        Joi.object({
          value: Joi.string(),
        })
      )
      .optional(),
    clientLocationCountry: Joi.string().required(),
    clientLocationState: Joi.string().optional(),
    clientName: Joi.string().required(),
    clientPaymentMethod: Joi.string().required(),
    clientRating: Joi.string().optional(),
    clientUpworkPlus: Joi.boolean(),
    jobExperienceLevel: Joi.string().required(),
    jobHourlyRange: Joi.string().required(),
    jobHourly: Joi.string().required(),
    jobProjectLengthDuration: Joi.string().optional(),
    jobCategories: Joi.string().optional(),
    jobDescription: Joi.string().max(1500).allow(""),
    jobSkills: Joi.array()
      .items(
        Joi.object({
          value: Joi.string(),
        })
      )
      .optional(),
    jobTitle: Joi.string().optional(),
  });

  return schema.validate(fields);
};
