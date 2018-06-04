export const Required = (name='Field') => {
  return (value) => {
    return value ? undefined : `${name} is required.`;
  };
};

export const NotBlank = (name='Field') => {
  return (value) => {
    if (/\S/.test(value)) {
      return undefined;
    }
    return `${name} cannot be only spaces.`;
  };
};

export const Min = (name='Field', length=1) => {
  return (value) => {
    if (value.length >= length) {
      return undefined;
    }
    return `${name} cannot be shorter than ${length} characters.`;
  };
};

export const Max = (name='Field', length=1) => {
  return (value) => {
    if (value.length <= length) {
      return undefined;
    }
    return `${name} cannot be longer than ${length} characters.`;
  };
};

export const Number = (name='Field') => {
  return (value) => {
    if (!Number.isNaN(value)) {
      return undefined;
    }
    return `${name} must be a number.`;
  };
};

export const AtLeast = (name='Field', minVal=1) => {
  return (value) => {
    if (value * 1 >= minVal * 1) {
      return undefined;
    }
    return `${name} must be at least ${minVal}.`;
  };
};

export const Regex = (name='Field', regex) => {
  return (value) => {
    const reg = new RegExp(regex);
    if (reg.test(value)) {
      return undefined;
    }
    return `${name} is incorrectly formatted.`;
  };
};

export const EndsWith = (name='Field', suffix='') => {
  return (value) => {
    if (value.toLowerCase().endsWith(suffix.toLowerCase())) {
      return undefined;
    }
    return `${name} must end with ${suffix}.`;
  };
};
