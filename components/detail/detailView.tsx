import React, { useEffect, useRef, useState } from "react";
import { DataType } from "@/lib/types/dataType";
import { useRouter } from "next/router";
import { PHOTOCARD_MENU_BUTTON } from "@/lib/utils/styles";

const detailView = () => {
  const router = useRouter();

  const detailId = router.query.detailId;
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("json")));
  }, []);

  return (
    <>
      {data && data.length && (
        <>
          {data.map(
            (item, index) =>
              item[0].id == detailId && (
                <div className="p-20 w-full [text-align:-webkit-center]">
                  <div className="flex justify-center">
                    <div className="w-[300px] h-[300px]">
                      <img src={item[0].image} id={index}></img>
                    </div>
                    <div className="px-10 py-2 text-left">
                      <div className="text-2xl">{item[0].name}</div>
                      <div className="text-sm py-2">
                        좋아요 : 3 조회수 : 4 20분전
                      </div>
                      <button className="bg-black text-white rounded-md px-3 py-1 mx-1">
                        좋아요
                      </button>
                      <button className="bg-black text-white rounded-md px-3 py-1">
                        채팅
                      </button>
                    </div>
                  </div>
                  <div className="w-[55%]">
                    <div className="text-left">
                      <p className="text-2xl pb-4">상품정보</p>
                      <span className="text-md ">{item[0].content}</span>
                      <div className="text-sm w-max px-2 border-2 mx-2 my-2 rounded-lg border-slate-400">
                        {item[0].select}
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </>
      )}
    </>
  );
};
export default detailView;
