"use client";
import useSWR from "swr";
import Loading from "../../loading";
import fetcher from "../fetcher";
import { notFound } from "next/navigation";
const Item = ({
  params,
}: {
  params: {
    itemID: number;
  };
}) => {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.itemID}`,
    fetcher
  );
  if (error) {
    notFound()
  }
  if (isLoading) return <Loading />;
  return (
    <div className="max-w-[400px] m-auto flex flex-col items-center">
      <img src={data.images[0]} alt="" className="h-[300px]" />
      <div>
        <p>{data.title}</p>
        <p>${data.price}</p>
      </div>
    </div>
  );
};

export default Item;
