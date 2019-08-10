const { validationResult } = require("express-validator/check");

//Function to validate de fields title and description
const createValidator = check => {
  return [
    check("name")
      .not()
      .isEmpty()
      .withMessage("The product name is required"),
    check("description")
      .not()
      .isEmpty()
      .withMessage("The product description is required"),
    check("idCategory")
      .not()
      .isEmpty()
      .withMessage("The product category is required")
  ];
};

const changeStatusValidator = check => {
  return [
    check("active")
      .not()
      .isEmpty()
      .withMessage("Category status is required")
  ];
};

const updateValidator = check => {
  return [
    check("name")
      .not()
      .isEmpty()
      .withMessage("The product name is required"),
    check("description")
      .not()
      .isEmpty()
      .withMessage("The product description is required"),
    check("idCategory")
      .not()
      .isEmpty()
      .withMessage("The product category is required")
  ];
};

//Obtain the errors of validations, is an array, if not exists errors will be empty
const validatorErrors = req => {
  return !validationResult(req).isEmpty() ? validationResult(req).array() : [];
};

//Export functions to validate an errors founds
module.exports = {
  createValidator,
  changeStatusValidator,
  updateValidator,
  validatorErrors
};
