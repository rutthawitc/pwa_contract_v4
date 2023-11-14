import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] bg-slate-100'>
      <div className='relative flex max-w-[800px] h-[730px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]'>
        <div className='flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100'>
          <h4 className='text-xl font-bold text-grey-700'>
            ระบบแจ้งเตือนระยะเวลาค้ำประกันสัญญาเพื่อตรวจสอบความชำรุดบกพร่อง
            กปภ.ข.๖
          </h4>
          <button className='linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200'></button>
        </div>
        <div className='w-full px-4 overflow-x-scroll md:overflow-x-hidden'>
          <Link
            className='flex items-center justify-between pt-4 pb-2 tracking-wide text-gray-700 text-start sm:text-xs lg:text-xl hover:bg-slate-200'
            href='/range1to3'>
            {' '}
            โครงการที่ใกล้ครบกำหนดระยะเวลาค้ำประกันสัญญา ในระยะ 3 วัน
          </Link>
          <hr />
          <Link
            className='flex items-center justify-between pt-4 pb-2 tracking-wide text-gray-700 text-start sm:text-xs lg:text-xl hover:bg-slate-200'
            href='/range4to15'>
            {' '}
            โครงการที่ใกล้ครบกำหนดระยะเวลาค้ำประกันสัญญา ในระยะ 4 - 15 วัน
          </Link>
          <hr />
          <Link
            className='flex items-center justify-between pt-4 pb-2 tracking-wide text-gray-700 text-start sm:text-xs lg:text-xl hover:bg-slate-200'
            href='/range16to30'>
            {' '}
            โครงการที่ใกล้ครบกำหนดระยะเวลาค้ำประกันสัญญา ในระยะ 16 - 30 วัน
          </Link>
          <hr />
          <Link
            className='flex items-center justify-between pt-4 pb-2 tracking-wide text-gray-700 text-start sm:text-xs lg:text-xl hover:bg-slate-200'
            href='/range31to60'>
            {' '}
            โครงการที่ใกล้ครบกำหนดระยะเวลาค้ำประกันสัญญา ในระยะ 31 - 60 วัน
          </Link>
          <hr />
          <Link
            className='flex items-center justify-between pt-4 pb-2 tracking-wide text-gray-700 text-start sm:text-xs lg:text-xl hover:bg-slate-200'
            href='/range61to90'>
            {' '}
            โครงการที่ใกล้ครบกำหนดระยะเวลาค้ำประกันสัญญา ในระยะ 61 - 90 วัน
          </Link>
        </div>
      </div>
    </div>
  );
}
