const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validations = {
  required: (value) => {
    return value == undefined || value === null || value === "";
  },
  format: (value, rule) => {
    switch (rule.value) {
      case "email":
        return !emailRegex.test(value);
      default:
        return false;
    }
  },
  minLength: (value, rule) => value && value.length < rule.value,
};

const validate = (value, field) => {
  const { validation } = field;
  let error = "";
  if (validation) {
    const rules = Object.keys(validation);
    for (const rule of rules) {
      const invalid = validations[rule](value, validation[rule]);
      if (invalid) {
        error = validation[rule].message;
        break;
      }
    }
    return error;
  }
};

export default validate;
