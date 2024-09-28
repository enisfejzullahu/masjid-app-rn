export const validateEmail = (email) => {
  // Basic email validation regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateCardNumber = (number) => {
  // Basic Luhn algorithm for credit card validation
  const regex = /^\d{13,19}$/; // Matches card numbers with 13-19 digits
  return regex.test(number) && luhnCheck(number);
};

export const validateExpiryDate = (date) => {
  // Check if the date matches the MMYY format
  const regex = /^(0[1-9]|1[0-2])(\d{2})$/;
  return regex.test(date);
};

export const validateCVC = (cvc) => {
  // Validates CVC format
  const regex = /^\d{3,4}$/;
  return regex.test(cvc);
};

// Luhn algorithm check
const luhnCheck = (number) => {
  let sum = 0;
  let shouldDouble = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i), 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
};
