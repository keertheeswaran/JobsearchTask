export const isNumeric = (value) => {
  return /^[1-9]\d*(\.\d+)?$|^$/.test(value);
};

export const Numeric = (value) => {
  return /^[0-9]\d*(\.\d+)?$|^$/.test(value);
};

export const isString = (value) => {
  return /^[A-Za-z\s]*$/.test(value);
};

// Utility function to check if a value contains only letters and Numbers don't Accept special Characters
export const isValidString = (value) => {
  return /^[A-Za-z0-9\s]*$/.test(value);
};

export const isDecimal = (value) => {
  return /^[0-9.]*$/.test(value);
};

export const isValidEmail = (value) => {
  return /^[a-zA-Z0-9.@]*$/.test(value);
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
