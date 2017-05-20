// must have @
// must be a valid domain
// - split on . and check last segment for end
const domainChars = /^[a-z\d.]+$/i;

export const validateEmail = email => {
  let validations = {
    valid: false,
    errors: []
  };

  const containsAt = email.includes("@");
  const [, domain = ""] = email.split("@");
  const validDomain =
    domainChars.test(domain) && /\./.test(domain) && !/\.$/.test(domain);
  validations.valid = validDomain && containsAt;
  if (!validDomain) {
    validations.errors.push("Email address has an invalid domain");
  }

  if (!containsAt) {
    validations.errors.push("Email address does not contain @");
  }

  return validations;
};

// must be at least 8 chars
// must contain at one symbol of !#$%&'*+-/=?^_`{|}~
// must contain one capital letter
const passwordSymbols = /[!#$%&'*+-/=?^_`{|}~]/i;

export const validatePassword = password => {
  let validations = {
    valid: false,
    errors: []
  };

  const hasSymbol = passwordSymbols.test(password);
  const hasLength = password.length >= 8;

  validations.valid = hasSymbol && hasLength;

  if (!hasSymbol) {
    validations.errors.push(
      "Password must contain one of the following symbols: !#$%&'*+-/=?^_`{|}~"
    );
  }

  if (!hasLength) {
    validations.errors.push("Password must be at least 8 characters");
  }

  return validations;
};
