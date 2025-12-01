"use client";
import { NomNom } from "./FoodIkon/nomnom";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const Footer = () => {
  const [categories, setCategories] = useState([]);
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const getData = async () => {
    const data = await fetch(`${url}/food-category`, options);
    const jsonData = await data.json();

    setCategories(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[1440px]">
      <div className="flex justify-start items-start w-full pt-19 pb-19 pl-22 pr-22 bg-[#18181B]">
        <div className="">
          <div className="flex justify-center items-center">
            <NomNom />
          </div>

          <div className="text-sm text-[#71717A]">
            <h5 className="text-xl font-black flex text-[#FAFAFA]">
              Nom
              <span className="text-xl font-black text-[#EF4444] flex">
                Nom
              </span>
            </h5>
            Swift delivery
          </div>
        </div>
        <div className="flex justify-between items-start w-full pl-55 pr-42">
          <div className="text-white">
            <div className="flex justify-start pb-4 items-center text-white">
              <h6 className="text-[#71717A]">NOMNOM</h6>
            </div>

            <div className="flex justify-start pb-4 items-center">Home</div>
            <div className="flex justify-start pb-4 items-center">
              Contact us
            </div>
            <div className="flex justify-start pb-4 items-center">
              Delivery zone
            </div>
          </div>

          <div className="text-white">
            <div className="flex justify-start pb-4 items-start text-white">
              <h6 className="text-[#71717A]">MENU</h6>
            </div>

            {categories.map((cur) => (
              <div
                key={cur._id}
                className="grid grid-cols-2 gap-x-14 pb-4 justify-start items-start text-white"
              >
                <div className="flex justify-start items-start text-medium">
                  {cur.categoryName}
                </div>
              </div>
            ))}
          </div>
          <div className="text-white">
            <div className="flex justify-start pb-4 items-center text-white">
              <h6 className="text-[#71717A]">FOLLOW US</h6>
            </div>

            <div className="flex gap-4">
              <img className="w-7 h-7" src="/faceBook.png" />

              <div className="">
                <img className="w-7 h-7" src="/Instagram.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start w-full pt-19 pl-22 pr-22 text-[#71717A] bg-[#18181B]">
        <hr className="w-full"></hr>
      </div>
      <div className="flex justify-start items-start w-full p-8 gap-12 pb-[111px] pl-22 pr-22 text-[#71717A] bg-[#18181B]">
        <div>Copy right 2024 © Nomnom LLC</div>
        <div>Privacy policy </div>
        <div>Terms and conditoin</div>
        <div>Cookie policy</div>
      </div>
    </div>
  );
};
