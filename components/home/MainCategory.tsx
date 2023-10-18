import React from "react";
import CustomLink from "../common/CustomLink";
import { MAIN_CATEGORI_BUTTON } from "../../lib/utils/styles";
import { CATEGORY } from "@/lib/utils/constant";

const MainCategory = () => {
  return (
    <div className="p-10 pt-20 [text-align:-webkit-center]">
      <ul className="grid grid-cols-5 w-max">
        {CATEGORY.map((group) => (
          <li className={MAIN_CATEGORI_BUTTON}>
            <CustomLink
              href={`/groupview/${group.engname}`}
              as={`/groupview/${group.engname}`}>
              <span>{group.korname}</span>
            </CustomLink>
          </li>
        ))}
        <li className={MAIN_CATEGORI_BUTTON}></li>
        <li className={MAIN_CATEGORI_BUTTON}></li>
      </ul>
    </div>
  );
};
export default MainCategory;
