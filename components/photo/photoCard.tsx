import React, { useEffect, useRef, useState } from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import storage from "@/lib/utils/storage";
import checkGroup from "./checkGroup";

const photoCard = () => {
  const router = useRouter();
  const BtnRef = useRef();

  const groupId = router.query.groupId;

  const { data: data } = useSWR("posting", storage);

  const handleClick = (item: any) => {
    router.push(`/detail/${item}`);
  };

  return (
    <>
      {data && data.length && (
        <>
          {data.map(
            (item: any, index: any) =>
              item[0].category == groupId && (
                <button
                  onClick={() => handleClick(item[1])}
                  key={index}
                  value={item[1]}
                  className="border-2 w-max">
                  <div className="w-[250px] h-[250px]">
                    {/* <img src={item[0].image} id={index}></img> */}
                  </div>
                  <div className="w-full">
                    <div className="pt-7 pb-2 px-4 text-[15px] border-b-2">
                      {item[0].title}
                    </div>
                    <div className="pt-2 px-2 text-sm">조회수 : </div>
                  </div>
                </button>
              )
          )}
        </>
      )}
      {data && data.length && (
        <>
          {data.map(
            (item: any) =>
              (router.route == "/" || "allgroup" == groupId) && (
                <button
                  onClick={() => handleClick(item[1])}
                  className="border-2 w-max">
                  <div className="w-[250px] h-[250px]">
                    {/* <img src={item[0].image}></img> */}
                  </div>
                  <div className="w-full">
                    <div className="pt-7 pb-2 px-4 text-[15px] border-b-2">
                      {item[0].title}
                    </div>
                    <div className="pt-2 px-2 text-sm">조회수 : </div>
                  </div>
                </button>
              )
          )}
        </>
      )}
    </>
  );
};
export default photoCard;
