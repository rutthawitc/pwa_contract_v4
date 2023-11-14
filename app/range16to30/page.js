'use client';
import ContractDueDateChecker from '@/components/DateInRange';
import useSWR from 'swr';
import axios from 'axios';
import { BarLoader } from 'react-spinners';

export default function Home() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR('/api/getdata', fetcher);
  //console.log(data);
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

  return (
    <div>
      <ContractDueDateChecker
        contractData={data}
        startRange={16}
        endRange={30}
        bgColor={'bg-orange-400'}
      />
    </div>
  );
}
