import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MAIN_CATEGORI_BUTTON_ON } from "../../lib/utils/styles";
import { CATEGORY } from "@/lib/utils/constant";
import NavLink from "../common/NavLink";
import PhotoCardList from "../common/photoCardList";

const MainCategory = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const b = localStorage.getItem("json");
    const c = JSON.parse(b);
    setData(c);
  }, []);
  console.log(data);

  const router = useRouter();

  return (
    <>
      <div className="p-10 pt-20 [text-align:-webkit-center]">
        <ul className="grid grid-cols-5 w-max">
          {CATEGORY.map((group) => (
            <li className={MAIN_CATEGORI_BUTTON_ON}>
              <NavLink
                href={`/groupview/${group.engname}`}
                as={`/groupview/${group.engname}`}>
                <span>{group.korname}</span>
              </NavLink>
            </li>
          ))}
          <li className={MAIN_CATEGORI_BUTTON_ON}></li>
          <li className={MAIN_CATEGORI_BUTTON_ON}></li>
        </ul>
      </div>
      {router.route == "/" && <PhotoCardList></PhotoCardList>}
    </>
  );
};
export default MainCategory;
