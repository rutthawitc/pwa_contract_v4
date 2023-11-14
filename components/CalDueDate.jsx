'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Lang from '@/libs/lang.json';
import ConvertDate from '@/libs/ConvertDate';
import formatCurrency from '@/libs/FormatCurrency';

const CalDueDate = ({ jsonData, minDate, maxDate, bgColor }) => {
  const [tasksInRange, setTasksInRange] = useState([]);

  useEffect(() => {
    const currentDate = new Date();

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

    // Filter the JSON data based on the condition
    const filteredTasks = jsonData.filter((item) => {
      // Convert the 'd-M-y' formatted due date to a JavaScript Date object
      const dueDateParts = item.Contract_Due_Date.split('-');
      //console.log('Due Date Part :', dueDateParts);
      const dueDate = new Date(
        parseInt(dueDateParts[2], 10) + 2000, // Assuming years are in the 2000s
        monthAbbreviations.indexOf(dueDateParts[1].toUpperCase()),
        parseInt(dueDateParts[0], 10)
      );
      console.log('Due Date :', dueDate, '  Due Date Part :', dueDateParts);
      console.log('Current Date :', currentDate);
      //console.log(currentDate);

      // Calculate the difference in days between due date and current date
      const timeDifference = dueDate - currentDate;
      const daysDifference = timeDifference / (1000 * 3600 * 24);

      //const dayDiff = Math.round(daysDifference);
      console.log('Date Diff :', daysDifference, 'Days');

      // Check if due date is within the range of 1 to 30 days
      return daysDifference >= minDate && daysDifference <= maxDate;
    });

    // Sort the filtered tasks by task.id
    filteredTasks.sort((a, b) => a.Organization_Code - b.Organization_Code);

    console.log(filteredTasks);

    setTasksInRange(filteredTasks);
  }, [jsonData, minDate, maxDate]); // Include jsonData in the dependency array

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

  const tasksCount = tasksInRange.length;

  return (
    <>
      <h2
        className={`pt-2 pb-2 mb-2 text-md font-bold text-center ${bgColor} rounded-md shadow-xl`}>
        {Lang.listHeader} ในช่วงระยะ {minDate}-{maxDate} วัน มีจำนวน{' '}
        {tasksCount} โครงการ
      </h2>

      <ul>
        {tasksInRange.map((task) => (
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
export default CalDueDate;
