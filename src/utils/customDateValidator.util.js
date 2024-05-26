const { isValid, parse } = require('date-fns');

const customDateValidator = (value, helpers) => {
  const parsedDate = parse(value, 'dd-MM-yyyy', new Date());

  if (!isValid(parsedDate) || value.length !== 10) {
    return helpers.message('Date must be in the format dd-MM-yyyy');
  }

  return value; 
};

module.exports = { customDateValidator }