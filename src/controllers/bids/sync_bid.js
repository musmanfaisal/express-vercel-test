const { sendSuccess, errorHandler } = require("../../middlewares");
const Bid = require("../../../models/bid");

const syncBid = ({ bigQueryService, dbService }) => async (req, res, next) => {
  try {
    const { bid } = req.body;
    const { jobDetails, bidCoverLetter, bidProfile, bidURL, bidTime, bidder, client, bidQuestions } = bid;
    const { jobTitle, jobCategories, jobDescription, jobSkills, jobAttributes } = jobDetails;
    const { company, history, location, name, paymentMethod, rating, upworkPlus } = client;
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

    // if Bid is already synced then it will return an error
    const bidAlreadyExist = await Bid.find({ bidURL: bidRow.bidURL, bidProfile: bidRow.bidProfile })
    if (bidAlreadyExist.length) return res.status(409).send({ error: true, msg: "Bid already exist" });

    // Saving data to MongoDB
    await dbService.uploadDataToDB(bidRow);

    // Saving data to BigQuery
    const bidQuery = bigQueryService.initiateBigQuery();
    await bigQueryService.uploadDataToBigQuery(bidRow, bidQuery, "phaedra_bids", "bids");

    sendSuccess(res);
  }
  catch (error) {
    errorHandler(error, req, res, next);
  }
}

module.exports = { syncBid };
