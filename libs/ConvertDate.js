//Date Convert
const ConvertDate = (inputDate) => {
  // Create an array of month abbreviations in English
  const monthAbbreviationsEn = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  // Create an array of month names in Thai
  const monthNamesTh = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ];

  // Split the inputDate into parts (day, month abbreviation, year)
  const dateParts = inputDate.split('-');
  const day = dateParts[0];
  const monthAbbreviation = dateParts[1].toUpperCase();
  const year = dateParts[2];

  // Find the index of the month abbreviation in the English array
  const monthIndex = monthAbbreviationsEn.indexOf(monthAbbreviation);

  // Get the corresponding month name in Thai
  const monthNameTh = monthNamesTh[monthIndex];

  // Construct the Thai date string
  const thaiDate = `${day} ${monthNameTh} ${parseInt(year) + 2000}`; // Assuming years are in the 2000s

  return thaiDate;
};
export default ConvertDate;
