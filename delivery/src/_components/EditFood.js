"use clinet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { PenIcon, TrashIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const EditFood = ({
  id,
  foodName,
  image,
  ingredients,
  price,
  categoryName,
  categories,
  getData,
}) => {
  const [inputNameValue, setInputNameValue] = useState(foodName);
  const [inputPriceValue, setInpuPriceValue] = useState(price);
  const [inputIngredientsValue, setInputIngredientsValue] =
    useState(ingredients);

  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [inputSelectValue, setInputSelectValue] = useState(categoryName);
  const [isShow, setIsShow] = useState(false);

  const EditFood = async () => {
    await fetch(`${url}/foods`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer ",
      },
      body: JSON.stringify({
        foodName: inputNameValue,
        price: Number(inputPriceValue),
        ingredients: inputIngredientsValue,
        category: inputSelectValue,
        id: id,
        image: "",
      }),
    });

    getData();
    setIsShow(false);
  };
  const DeleteFood = async () => {
    await fetch(`${url}/foods`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer ",
      },
      body: JSON.stringify({
        id: id,
      }),
    });

    getData();
    setIsShow(false);
  };
  return (
    <Dialog open={isShow} onOpenChange={setIsShow}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-11 h-11 absolute text-[#EF4444]"
        >
          <PenIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <p className="w-full">Dishes info</p>
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-between items-center w-full h-15 text-lg font-bold">
          <div className="flex w-full text-sm items-center gap-3">
            <label
              className="text-xs text-[#71717A] w-1/3 font-light"
              htmlFor="Food name"
            >
              Dish name
            </label>
            <Input
              onChange={(e) => setInputNameValue(e.target.value)}
              className="font-light w-72"
              defaultValue={inputNameValue}
              placeholder="Type food name"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full h-15 text-lg font-bold">
          <div className="flex w-full text-sm items-center gap-3">
            <label
              className="text-xs text-[#71717A] w-1/3 font-light"
              htmlFor="Food name"
            >
              Dish category
            </label>
            <Select onValueChange={setInputSelectValue}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={categoryName} />
              </SelectTrigger>

              <SelectContent>
                {categories.map((cur) => (
                  <SelectItem
                    key={cur._id}
                    value={cur._id}
                    defaultValue={cur._id}
                  >
                    {cur.categoryName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-between items-center w-full h-15 text-lg font-bold">
          <div className="flex w-full text-sm items-center gap-3">
            <label
              className="text-xs text-[#71717A] w-1/3 font-light"
              htmlFor="Food name"
            >
              Ingredients
            </label>
            <Input
              onChange={(e) => setInputIngredientsValue(e.target.value)}
              className="font-light w-72"
              defaultValue={inputIngredientsValue}
              type="Food name"
              id="Food name"
              placeholder="Type food name"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full h-15 text-lg font-bold">
          <div className="flex w-full text-sm items-center gap-3">
            <label
              className="text-xs text-[#71717A] w-1/3 font-light"
              htmlFor="Food name"
            >
              Price
            </label>
            <Input
              onChange={(e) => setInpuPriceValue(e.target.value)}
              className="font-light w-72"
              defaultValue={inputPriceValue}
              type="Food name"
              id="Food name"
              placeholder="Type food name"
            />
          </div>
        </div>
        <div className="w-full  gap-3 text-sm">
          <div className="w-full h-40 pb-2">
            <label className=" flex text-xs text-[#71717A] font-medium w-full pb-3">
              Food image
            </label>

            <Input
              type="File"
              defaultValue={image}
              placeholder="Choose a file or drag & drop it here"
              className="w- full h-full flex justify-center items-center bg-[rgba(37,_99,_235,0.20)] border-[1px] rounded-md"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <div className="flex justify-between pt-10 items-center w-full text-lg font-bold ">
            <Button
              onClick={DeleteFood}
              variant="outline"
              size="icon"
              aria-label="Submit"
              className="text-[#EF4444] border-[#EF4444] h-10 w-10"
            >
              <TrashIcon />
            </Button>
            <Button onClick={EditFood} className="h-10 text-sm font-medium">
              Add Dish
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
