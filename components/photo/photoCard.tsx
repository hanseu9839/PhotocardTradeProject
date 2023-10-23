import React, { useEffect, useRef, useState } from "react";
import { DataType } from "@/lib/types/dataType";
import { useRouter } from "next/router";

const photoCard = () => {
  const router = useRouter();
  const BtnRef = useRef();

  const groupId = router.query.groupId;
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("json")));
  }, []);

  const handleClick = (item) => {
    router.push(`/detail/${item}`);
  };

  return (
    <>
      {data && data.length && (
        <>
          {data.map(
            (item, index) =>
              item[0].category == groupId && (
                <button
                  onClick={() => handleClick(item[0].id)}
                  key={index}
                  value={item[0].id}
                  className="border-2 w-max">
                  <div className="w-[250px] h-[250px]">
                    <img src={item[0].image} id={index}></img>
                  </div>
                  <div className="w-full">
                    <div className="pt-7 pb-2 px-4 text-[15px] border-b-2">
                      {item[0].name}
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
            (item) =>
              (router.route == "/" || "allgroup" == groupId) && (
                <button
                  onClick={() => handleClick(item[0].id)}
                  className="border-2 w-max">
                  <div className="w-[250px] h-[250px]">
                    <img src={item[0].image}></img>
                  </div>
                  <div className="w-full">
                    <div className="pt-7 pb-2 px-4 text-[15px] border-b-2">
                      {item[0].name}
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
