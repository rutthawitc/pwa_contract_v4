'use client';
import useSWR from 'swr';
import CalDueDate from '@/components/CalDueDate';
import Lang from '@/libs/lang.json';
import { BarLoader } from 'react-spinners';
import axios from 'axios';

export default function Home() {
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
      // <div className='load'>
      //   <hr />
      //   <hr />
      //   <hr />
      //   <hr />
      // </div>
      <BarLoader
        color='#36d7b7'
        height={15}
        loading
        speedMultiplier={1}
        width={300}
      />
    );

  const fillteredDate = data.filter(
    (item) =>
      item.Contract_Due_Date !== null && item.Contract_Due_Date !== undefined
  );

  //console.log(fillteredDate);
  // render data
  return (
    <div className='text-center'>
      <h2 className='py-3 mb-2 text-2xl font-bold text-center bg-blue-400 rounded-md'>
        {Lang.main_title}
      </h2>
      <CalDueDate
        jsonData={fillteredDate}
        minDate={1}
        maxDate={30}
        bgColor={'bg-red-200'}
      />
      <CalDueDate
        jsonData={fillteredDate}
        minDate={31}
        maxDate={90}
        bgColor={'bg-blue-200'}
      />
    </div>
  );
}
