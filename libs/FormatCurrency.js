//Thai Currency
const FormatCurrency = (number) => {
  // return value.toLocaleString('th-TH', {
  //   style: 'currency',
  //   currency: 'THB',
  // });

  // Check if the number is not null or undefined
  if (number !== null && number !== undefined) {
    // Use toLocaleString to format the number with commas and two decimal places
    const formattedNumber = number.toLocaleString('th-TH', {
      style: 'currency',
      currency: 'THB',
    });

    // Replace the currency symbol with ' บาท'
    const formattedCurrency = formattedNumber.replace('THB', 'บาท');

    return formattedCurrency;
    // If the number is null or undefined, return an empty string or handle it as needed
    return '';
  }
};
export default FormatCurrency;
