'use client';
import useSWR from 'swr';
import React from 'react';
import { useRouter } from 'next/navigation';
import ConvertDate from '@/libs/ConvertDate';
import { BarLoader } from 'react-spinners';
import axios from 'axios';

const Page = ({ params }) => {
  const router = useRouter();
  //console.log(params.c_id);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  //const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    //'http://localhost:3004/data',
    'http://110.76.155.100:10002/data',
    fetcher
  );

  if (error)
    return (
      <div className='text-3xl font-bold text-center text-red-500'>
        Failed to load!
      </div>
    );
  if (isLoading)
    return (
      <BarLoader
        color='#36d7b7'
        height={15}
        loading
        speedMultiplier={1}
        width={300}
      />
    );

  //   const fillteredDate = data.filter(
  //     (item) =>
  //       item.Contract_Due_Date !== null && item.Contract_Due_Date !== undefined
  //   );
  // console.log(fillteredDate);

  // Find the specific data item based on the ID
  const dataItem = data.find((item) => item.c_id === params.c_id);
  //console.log(dataItem);
  if (!dataItem) {
    return <div>ไม่มีข้อมูล</div>;
  }

  //Org Mapping
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

  // render data

  return (
    <>
      <>
        <button type='button' onClick={() => router.back()}>
          <h2 className='px-12 py-2 mx-8 mt-2 font-semibold text-center text-gray-700 rounded-lg shadow sm:mx-0 sm:px-1 bg-slate-400 hover:bg-slate-300 md:mx-1 md:px-4'>
            Back
          </h2>
        </button>
      </>
      <div className='px-12 py-8 mx-8 mt-4 rounded-md shadow-md bg-slate-200 sm:mx-0 sm:px-1 md:mx-1 md:px-4'>
        <strong>ประเภท: </strong> {dataItem.Main_Guarantee_Type}
        <br />
        <strong>
          {orgMappings[dataItem.Organization_Code] ||
            dataItem.Organization_Code}
        </strong>
        <br />
        <strong>เลขที่สัญญา: </strong> {dataItem.Contract_Number}
        <br />
        <strong>บริษัท:</strong> {dataItem.Company_Name}
        <br />
        <strong>โครงการ: </strong> {dataItem.Subject}
        <br />
        <strong>วันครบกำหนด: </strong> {ConvertDate(dataItem.Contract_Due_Date)}
        <br />
        <strong>วันที่ตรวจรับ: </strong> {ConvertDate(dataItem.Approval_Date)}
      </div>
      <>
        <button type='button' onClick={() => router.back()}>
          <h2 className='px-12 py-2 mx-8 mt-4 font-semibold text-center text-gray-700 rounded-lg shadow bg-slate-400 hover:bg-slate-300 sm:mx-0 sm:px-1 md:mx-1 md:px-4'>
            Back
          </h2>
        </button>
      </>
    </>
  );
};
export default Page;
