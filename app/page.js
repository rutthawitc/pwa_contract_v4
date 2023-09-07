"use client";
import useSWR from "swr";
import CalDueDate from "@/components/CalDueDate";
import Lang from "@/libs/lang.json";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3004/data",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const fillteredDate = data.filter(
    (item) =>
      item.Contract_Due_Date !== null && item.Contract_Due_Date !== undefined
  );

  console.log(fillteredDate);
  // render data
  return (
    <div className="text-center">
      <h2 className="py-3 mb-2 text-2xl font-bold text-center bg-blue-400 rounded-md">
        {Lang.main_title}
      </h2>
      <CalDueDate
        jsonData={fillteredDate}
        minDate={1}
        maxDate={30}
        bgColor={"bg-red-200"}
      />
      <CalDueDate
        jsonData={fillteredDate}
        minDate={31}
        maxDate={90}
        bgColor={"bg-blue-200"}
      />
    </div>
  );
}
