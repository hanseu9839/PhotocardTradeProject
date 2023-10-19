import React, { useEffect, useState } from "react";
import { DataType } from "@/lib/types/dataType";

const photoCardList = () => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("json")));
  }, []);

  return (
    <>
      {data && (
        <>
          <div className="p-10 pt-20 [text-align:-webkit-center]">
            <img src={data.image}></img>
            <span>{data.name}</span>
            <span>{data.category}</span>
            <span>{data.select}</span>
            <span>{data.content}</span>
          </div>
          <div className="p-10 pt-20 [text-align:-webkit-center]">
            <img src={data.image}></img>
            <span>{data.name}</span>
            <span>{data.category}</span>
            <span>{data.select}</span>
            <span>{data.content}</span>
          </div>
        </>
      )}
    </>
  );
};
export default photoCardList;
