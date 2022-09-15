const { quotes } = require("../data");
const { getRandomElement } = require("../utils");

exports.randomQutes = (req, res, next) => {
  let quoteRandom = getRandomElement(quotes);
  console.log(quoteRandom);
  //  return object  => quote: { quote object}
  res.status(200).send({ quote: quoteRandom });
};

//! u need to send this if there is a valid query.person.otherwise send [qoutes]
exports.getAllQuotes = (req, res) => {
  if (req.query.person) {
    res.send({
      quotes: quotes.filter((obj) => obj.person === req.query.person),
    });
  } else {
    res.send({ quotes });
  }
};

exports.createQuotes = (req, res, next) => {
  const quote = req.query.quote;
  const person = req.query.person;
  if (quote && person) {
    quotes.push({ quote, person });
    res.status(200).send({ quote: { quote, person } });
  } else {
    res.status(401).send("Check the input");
  }
};
