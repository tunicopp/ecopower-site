export const formatCEP = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");
  const formattedValue = cleanedValue.replace(/(\d{5})(\d{3})/, "$1-$2");
  return formattedValue;
};

export const cnpjMask = (value: string) => {
  return value
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const cpfVerify = (value: string) => {
  const newValue = value.replace(/[.-\/\s]/g, "");
  if (newValue.length > 14) {
    return cnpjMask(newValue);
  } else {
    return cpfMask(newValue);
  }
};
