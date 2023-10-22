import React, { useEffect, useState } from "react";
import { DataType } from "@/lib/types/dataType";

const photoCard = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("json")));
  }, []);

  const handleClick = (e: any) => {
    console.log(e);
    console.log("gg");
  };

  return (
    <>
      {data && data.length && (
        <>
          {data.map((item) => (
            <div onClick={handleClick} className="border-2 w-max">
              <div className="w-[250px] h-[250px]">
                <img src={item[0].image}></img>
              </div>
              <div className="w-full">
                <div className="pt-7 pb-2 px-4 text-[15px] border-b-2">
                  {item[0].name}
                </div>
                <div className="pt-2 px-2 text-sm">조회수 : </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default photoCard;
