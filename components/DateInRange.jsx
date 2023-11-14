import Link from 'next/link';
import Lang from '@/libs/lang.json';
import ConvertDate from '@/libs/ConvertDate';
import formatCurrency from '@/libs/FormatCurrency';

const ContractDueDateChecker = ({
  contractData,
  startRange,
  endRange,
  bgColor,
}) => {
  //------------------------
  // Assuming contractData is an array of objects as provided in the JSON data

  const isWithinDaysRange = (dueDate, startRange, endRange) => {
    console.log('Start', startRange);
    console.log('End ', endRange);
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const currentDatePlusStart = new Date(currentDate);
    currentDatePlusStart.setDate(currentDate.getDate() + startRange);
    console.log('currentDatePlusStart', currentDatePlusStart);
    const currentDatePlusEnd = new Date(currentDate);
    currentDatePlusEnd.setDate(currentDate.getDate() + startRange + endRange);
    console.log('currentDatePlusEnd', currentDatePlusEnd);
    return (
      dueDateObj >= currentDatePlusStart && dueDateObj <= currentDatePlusEnd
    );
  };

  // Filter out contracts with null Contract_Due_Date, then filter contracts within the specified range (16-30 days)
  const contractsWithinRange = contractData
    .filter((contract) => contract.Contract_Due_Date !== null)
    .filter((contract) =>
      isWithinDaysRange(contract.Contract_Due_Date, startRange, endRange)
    );

  // Sort contractsWithinRange by Organization_Code
  contractsWithinRange.sort((a, b) =>
    a.Organization_Code.localeCompare(b.Organization_Code)
  );
  // Count the number of contracts within the range
  const numberOfContractsInRange = contractsWithinRange.length;

  // You can do further processing or rendering based on contractsWithinRange

  //------------------------

  // An array of month abbreviations to map month names to numerical values
  const monthAbbreviations = [
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

  // Define a mapping object for Org name
  const orgMappings = {
    1059: 'กปภ.ข.6',
    1060: 'กปภ.สาขาขอนแก่น(ชั้นพิเศษ)',
    1061: 'กปภ.สาขาบ้านไผ่',
    1062: 'กปภ.สาขาชุมแพ',
    1063: 'กปภ.สาขาน้ำพอง',
    1064: 'กปภ.สาขาชนบท',
    1065: 'กปภ.สาขากระนวน',
    1066: 'กปภ.สาขาหนองเรือ',
    1067: 'กปภ.สาขาเมืองพล',
    1068: 'กปภ.สาขากาฬสินธุ์',
    1069: 'กปภ.สาขากุฉินารายณ์',
    1070: 'กปภ.สาขาสมเด็จ',
    1071: 'กปภ.สาขามหาสารคาม',
    1072: 'กปภ.สาขาพยัคภูมิพิสัย',
    1073: 'กปภ.สาขาชัยภูมิ',
    1074: 'กปภ.สาขาแก้งคร้อ',
    1075: 'กปภ.สาขาจัตุรัส',
    1076: 'กปภ.สาขาหนองบัวแดง',
    1077: 'กปภ.สาขาภูเขียว',
    1133: 'กปภ.สาขาร้อยเอ็ด',
    1134: 'กปภ.สาขาโพนทอง',
    1135: 'กปภ.สาขาสุวรรณภูมิ',
    1245: 'กปภ.สาขาบำเหน็จณรงค์',
  };

  return (
    <>
      <h2
        className={`pt-2 pb-2 mb-2 text-md font-bold text-center ${bgColor} rounded-md shadow-xl`}>
        {Lang.listHeader} ในช่วงระยะ {startRange}-{endRange} วัน มีจำนวน{' '}
        {numberOfContractsInRange} โครงการ
      </h2>

      <ul>
        {contractsWithinRange.map((task) => (
          <div
            key={task.c_id}
            className='p-4 mb-4 text-left bg-gray-100 rounded-md shadow-md hover:bg-gray-300'>
            <Link href={`/task/${task.c_id}`}>
              <strong>
                {orgMappings[task.Organization_Code] || task.Organization_Code}
              </strong>
              <br />
              <strong>ชื่อโครงการ: </strong> {task.Subject}
              <br />
              <strong>สัญญาเลขที่: </strong> {task.Contract_Number}
              <br />
              <strong>จำนวนเงิน: </strong>{' '}
              {formatCurrency(parseFloat(task.Amount))}
              <br />
              <strong>วันครบกำหนด: </strong>{' '}
              {ConvertDate(task.Contract_Due_Date)}
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};
export default ContractDueDateChecker;
