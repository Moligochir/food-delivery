"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, ImageIcon, PenIcon, XIcon } from "lucide-react";

import { AddFood } from "./AddFood.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const FoodData = ({ catId, categoriesData }) => {
  const [isShow, setIsShow] = useState(false);
  const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch("http://localhost:8000/foods", options);
    const jsonData = await data.json();

    setFoods(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full relative justify-start bg-white p-4 rounded-[6px]">
      <div className="text-xl font-semibold">{categoriesData} (6)</div>
      <div className="flex h-full gap-3 w-full flex-wrap pt-4">
        <div className="flex justify-center items-center border-[1px] border-[#18181B] border-dashed rounded-[20px]">
          <div className="w-full h-full items-center flex-col justify-center pl-15 pr-15 pt-17 pb-17">
            <AddFood categoryId={catId} getData={getData} />

            <p className="text-sm w-[154px] pt-6 text-center text-[#18181B]">
              Add new Dish to Appetizers
            </p>
          </div>
        </div>
        {foods.map((cur, index) => (
          <div
            key={index}
            className="flex justify-center items-center border-[1px] border-[#E4E4E7] border-solid rounded-[20px]"
          >
            <div className="w-[260px] h-full items-center flex-col justify-center p-3">
              <div className="w-full flex justify-end items-end">
                <img className="w-full h-[129px] relative" src="/globe.svg" />

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-11 h-11 absolute text-[#EF4444]"
                >
                  <PenIcon />
                </Button>
              </div>
              <h1 className="flex text-sm text-[#EF4444] justify-between pt-5">
                {cur.foodName}
                <span className="text-[#09090B] text-xs">{cur.price}₮</span>
              </h1>
              <p className="text-xs w-full pt-2 text-start text-[#09090B]">
                {cur.ingredients}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
