"use client";

import { NomNom } from "@/app/FoodIkon/nomnom";
import { FoodData } from "./FoodData";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { MenuIkonWhite } from "@/app/FoodIkon/menuikonWhite";
import { DeliveryIkonBl } from "@/app/FoodIkon/deliveryIkonBl";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const AdminFood = () => {
  const [categories, setCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  // const UPLOAD_PRESET = "foodDelivery";

  // const CLOUD_NAME = "didfxzpn3";

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
    console.log("Input value is now:", event.target.value);
  };

  const CreateCategory = async () => {
    await fetch("http://localhost:8000/food-category", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer ",
      },
      body: JSON.stringify({
        categoryName: inputValue,
      }),
    });
    getData();
    setIsShow(false);
  };

  const getData = async () => {
    const data = await fetch("http://localhost:8000/food-category", options);
    const jsonData = await data.json();

    setCategories(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full flex relative">
      <div className="h-full w-[20%] bg-white ">
        <div className="flex justify-center items-center w-full pl-5 pr-5 pt-9">
          <NomNom />

          <p className="text-sm pl-2 pr-9 text-[#71717A]">
            <span className="text-xl font-black text-[#09090B] flex">
              NomNom
            </span>
            Swift delivery
          </p>
        </div>
        <div className="flex w-full pl-14 pr-14 pt-6">
          <div className="flex justify-center items-center w-full gap-2 text-white bg-[#18181B] rounded-[999] h-10 ">
            <MenuIkonWhite />
            <h1 className="text-sm pl-2">Food menu</h1>
          </div>
        </div>
        <Link href={`/admin`}>
          <div className="flex w-full pl-14 pr-14 pt-6">
            <button className="flex justify-center items-center gap-2 w-full text-[#18181B]] h-10">
              <DeliveryIkonBl />
              <p className="text-sm">Orders</p>
            </button>
          </div>
        </Link>
      </div>
      <div className="h-full w-[80%] pl-6 pt-6 pr-10 pb-13 bg-[#E4E4E7]">
        <div className="w-full flex justify-end pb-6">
          <div className="w-9 h-9 rounded-[999]  bg-black"></div>
        </div>

        <div className="w-full justify-start bg-white p-4 rounded-[6px]">
          <div className="text-xl font-semibold">Dishes category</div>
          <div className="flex flex-wrap gap-3 w-full">
            {categories.map((cur, index) => (
              <Button key={index} className={"rounded-[999]"} variant="outline">
                {cur.categoryName}
                <p className="text-white text-xs rounded-[9999] pl-2 pr-2 bg-black">
                  12
                </p>
              </Button>
            ))}

            <Dialog open={isShow} onOpenChange={setIsShow}>
              <DialogTrigger asChild>
                <Button
                  className="rounded-[100%] w-9 h-9"
                  variant="destructive"
                >
                  +
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    <p className="w-full">Add new category</p>
                  </DialogTitle>
                </DialogHeader>
                <div className="flex items-center gap-2">
                  <div className="flex justify-between items-center w-full text-lg font-bold">
                    <div className="grid w-full text-sm items-center gap-3">
                      <label className="text-sm font-light" htmlFor="email">
                        Category name
                      </label>
                      <Input
                        onChange={handleSearchInput}
                        className="font-light"
                        type="Category name"
                        value={inputValue}
                        id="Category name"
                        placeholder="Type category name..."
                      />
                    </div>
                  </div>
                </div>
                <DialogFooter className="sm:justify-start">
                  <div className="flex justify-end items-center w-full text-lg font-bold ">
                    <Button
                      onClick={CreateCategory}
                      className="h-10 text-sm font-medium"
                    >
                      Add category
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="w-full pt-6">
          {categories.map((cur, index) => (
            <div key={index} className="w-full pt-4">
              <FoodData
                // key={cur.id}
                catId={cur.id}
                categoriesData={cur.categoryName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
