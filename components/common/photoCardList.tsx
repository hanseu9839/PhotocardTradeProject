import React, { useEffect, useState } from "react";
import PhotoCard from "../photo/photoCard";

const photoCardList = () => {
  return (
    <>
      <>
        <div className="px-24 px-10 grid grid-cols-6">
          <PhotoCard></PhotoCard>
        </div>
      </>
    </>
  );
};
export default photoCardList;
