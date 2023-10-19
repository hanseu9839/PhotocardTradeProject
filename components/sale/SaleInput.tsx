import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { CATEGORY } from "@/lib/utils/constant";
import { DataType } from "@/lib/types/dataType";

const SaleInput = () => {
  const [saleName, setSaleName] = useState("");
  const [saleCategory, setSaleCategory] = useState("");
  const [saleSelect, setSaleSelect] = useState("");
  const [saleContent, setSaleContent] = useState("");
  const [saleImg, setSaleImg] = useState("");
  const tradeList = ["직거래", "택배거래"];

  const router = useRouter();
  const imgRef = useRef<HTMLInputElement | null>();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaleName(e.target.value);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSaleCategory(e.target.value);
  };

  const hanldeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaleSelect(e.target.value);
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSaleContent(e.target.value);
  };

  const handleSaleSubmit = () => {
    router.push("/");
  };

  const handleSaleImage = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSaleImg(reader.result.toString());
    };
  };

  const data: DataType = {
    name: saleName,
    category: saleCategory,
    select: saleSelect,
    content: saleContent,
    image: saleImg,
  };

  useEffect(() => {
    localStorage.setItem("json", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <label htmlFor="imageUpload">
        <img
          src={saleImg ? saleImg : "/photocam.png"}
          alt="이미지"
          width={200}
          className="border-2"></img>
      </label>
      <input
        type="file"
        accept="image/*"
        id="imageUpload"
        className="hidden"
        onChange={handleSaleImage}
        ref={imgRef}
      />

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
          {CATEGORY.map((group) => (
            <option value={group.engname}>{group.korname}</option>
          ))}
        </select>
      </div>

      <div className="select">
        <div className="flex">
          <p>거래형태</p>
          {tradeList.map((trade, index) => (
            <>
              <input
                type="radio"
                id={`select${index}`}
                name="shop"
                value={trade}
                onChange={hanldeSelect}
              />
              <label htmlFor={`select${index}`}>{trade}</label>
            </>
          ))}
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
