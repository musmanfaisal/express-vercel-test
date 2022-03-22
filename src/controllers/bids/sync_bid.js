const { sendSuccess, errorHandler } = require("../../middlewares");

const syncBid = ({ bigQueryService }) => async (req, res, next) => {
  try {
    const { bid } = req.body;
    const { jobDetails, bidCoverLetter, bidProfile, bidURL, bidTime, bidder, client, bidQuestions } = bid;
    const { jobTitle, jobCategories, jobDescription, jobSkills, jobAttributes } = jobDetails;
    const { company, history, location, name, paymentMethod, rating, upworkPlus} = client;
    const bidRow = {
      bidCompany: "Phaedra",
      bidCoverLetter: bidCoverLetter,
      bidProfile: bidProfile,
      bidQuestionsAnswer: bidQuestions,
      bidTime: bidTime,
      bidURL: bidURL,
      bidder: bidder.bidder,
      clientCompany: company,
      clientHistory: history,
      clientLocationCountry: location.country,
      clientLocationState: location.state,
      clientName: name,
      clientPaymentMethod: paymentMethod,
      clientRating: rating,
      clientUpworkPlus: upworkPlus.toString(),
      jobExperienceLevel: jobAttributes.experience_level,
      jobHourlyRange: jobAttributes.hourly_range,
      jobHourly: jobAttributes.hourly,
      jobProjectLengthDuration: jobAttributes.project_length_duration,
      jobCategories: jobCategories,
      jobDescription: jobDescription,
      jobSkills: jobSkills,
      jobTitle: jobTitle
    }
    const bidQuery = bigQueryService.initiateBigQuery();
    const responseData = await bigQueryService.uploadDataToBigQuery(bidRow, bidQuery, "phaedra_bids", "bids")
    sendSuccess(res);
  }
  catch (error) {
    errorHandler(error, req, res, next);
  }
}

module.exports = { syncBid };