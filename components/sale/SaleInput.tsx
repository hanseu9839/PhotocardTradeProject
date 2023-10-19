import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SaleInput = () => {
  const [saleName, setSaleName] = useState("");
  const [saleCategory, setSaleCategory] = useState("");
  const [saleSelect, setSaleSelect] = useState("");
  const [saleContent, setSaleContent] = useState("");
  const router = useRouter();

  const handleName = (e: any) => {
    setSaleName(e.target.value);
  };

  const handleCategory = (e: any) => {
    setSaleCategory(e.target.value);
  };

  const hanldeSelect = (e: any) => {
    setSaleSelect(e.target.value);
  };

  const handleContent = (e: any) => {
    setSaleContent(e.target.value);
  };

  const handleSaleSubmit = () => {
    router.push("/");
  };

  const data = {
    name: saleName,
    category: saleCategory,
    select: saleSelect,
    content: saleContent,
  };

  useEffect(() => {
    localStorage.setItem("json", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <div className="flex">
        <p>상품명</p>
        <input
          className="border-2 border-slate-400"
          placeholder="상품명을 입력해주세요"
          onChange={handleName}></input>
      </div>
      <div className="flex">
        <label htmlFor="category">카테고리</label>
        <select name="group" id="category" onChange={handleCategory}>
          <option value="boygroup">보이그룹</option>
          <option value="girlgroup">걸그룹</option>
          <option value="boysolo">솔로(남)</option>
          <option value="girlsolo">솔로(여)</option>
          <option value="actorboy">배우(남)</option>
          <option value="actorgirl">배우(여)</option>
          <option value="character">방송/예능/캐릭터</option>
        </select>
      </div>
      <div className="select">
        <div className="flex">
          <p>거래형태</p>
          <input
            type="radio"
            id="select"
            name="shop"
            value="직거래"
            onChange={hanldeSelect}
          />
          <label htmlFor="select">직거래</label>

          <input
            type="radio"
            id="select2"
            name="shop"
            value="택배거래"
            onChange={hanldeSelect}
          />
          <label htmlFor="select2">택배거래</label>
        </div>
      </div>
      <div className="flex">
        <p>설명</p>
        <textarea onChange={handleContent} className="border-2"></textarea>
      </div>
      <div>
        <button onClick={handleSaleSubmit}>등록하기</button>
      </div>
    </>
  );
};

export default SaleInput;
