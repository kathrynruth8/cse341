const awesomeFunction = (req, res, next) => {
  res.json('Emma Lambert');
};

const returnAnotherPerson = (req, res, next) => {
  res.json('Another person');
};

module.exports = { awesomeFunction, returnAnotherPerson };
