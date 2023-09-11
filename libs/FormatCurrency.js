//Thai Currency
const FormatCurrency = (value) => {
  return value.toLocaleString('th-TH', {
    style: 'currency',
    currency: 'THB',
  });
};
export default FormatCurrency;
