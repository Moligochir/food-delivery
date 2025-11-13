"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, ImageIcon, PenIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const AddFood = ({ categoryId, getData }) => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPriceValue, setInpuPriceValue] = useState("");
  const [inputIngredientsValue, setInputIngredientsValue] = useState("");
  const [isShow, setIsShow] = useState(false);
  console.log(inputNameValue, "sda");
  console.log(inputPriceValue, "2");
  console.log(inputIngredientsValue, "3");

  const CreateFood = async () => {
    await fetch("http://localhost:8000/foods", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer ",
      },
      body: JSON.stringify({
        foodName: inputNameValue,
        price: inputPriceValue,
        ingredients: inputIngredientsValue,
        category: categoryId,
        image: "",
      }),
    });
    getData();
    setIsShow(false);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Dialog open={isShow} onOpenChange={setIsShow}>
        <DialogTrigger asChild>
          <Button className="rounded-[100%] w-9 h-9" variant="destructive">
            +
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <p className="w-full">Add new Dish to Appetizers</p>
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-between items-center w-full h-15 text-lg font-bold">
            <div className="grid w-[45%] text-sm items-center gap-3">
              <label className="text-sm font-medium" htmlFor="Food name">
                Food name
              </label>
              <Input
                onChange={(e) => setInputNameValue(e.target.value)}
                className="font-light"
                type="Food name"
                id="Food name"
                placeholder="Type food name"
              />
            </div>
            <div className="grid w-[45%] text-sm items-center gap-3">
              <label className="text-sm font-medium" htmlFor="Food name">
                Food price
              </label>
              <Input
                onChange={(e) => setInpuPriceValue(e.target.value)}
                className="font-light"
                type="Food price"
                id="Food price"
                placeholder="Enter price..."
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full text-lg font-bold">
            <div className="grid w-full h-[112px] gap-3 text-sm">
              <label
                className="text-sm font-light w-full"
                htmlFor="Ingredients"
              >
                Ingredients
              </label>
              <Input
                onChange={(e) => setInputIngredientsValue(e.target.value)}
                className="font-light h-[90px] w-full text-start"
                type="Ingredients"
                id="Ingredients"
                placeholder="List ingredients..."
              />
            </div>
          </div>
          <div className="w-full  gap-3 text-sm">
            <div className="w-full h-40 pb-2">
              <label className=" flex text-sm font-medium w-full pb-3">
                Food image
              </label>

              <Input
                type="File"
                placeholder="Choose a file or drag & drop it here"
                className="w- full h-full flex justify-center items-center bg-[rgba(37,_99,_235,0.20)] border-[1px] rounded-md"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <div className="flex justify-end pt-10 items-center w-full text-lg font-bold ">
              <Button onClick={CreateFood} className="h-10 text-sm font-medium">
                Add Dish
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
