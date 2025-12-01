"use client";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlaneIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ButtonGroup } from "@/components/ui/button-group";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const FoodCard = ({ catId, categoryName }) => {
  const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch(`${BACKEND_URL}/foods/${catId}`, options);
    const jsonData = await data.json();

    setFoods(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full justify-start bg-[#404040] pt-13.5 pl-22 pr-22">
      <div className="text-xl font-semibold text-white">{categoryName}</div>

      <div className="flex h-full gap-9 w-full flex-wrap-3 pt-13.5">
        {foods.map((cur) => (
          <div
            key={cur._id}
            className="flex justify-center items-center border border-[#E4E4E7] bg-white border-solid rounded-[20px]"
          >
            <div className="w-[397px] h-full items-center flex-col justify-center p-3">
              <div className="w-full flex justify-end items-end">
                <img className="w-full h-[210px] relative" src="/homeImg.png" />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-[#EF4444] absolute rounded-full"
                    >
                      <PlusIcon />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[826px] sm:max-h-[412px]">
                    <div className="flex w-full ">
                      <div className="w-full">
                        <Input className="h-full" type="file"></Input>
                      </div>
                      <div className="w-full pl-6">
                        <DialogHeader>
                          <DialogTitle className="h-6"></DialogTitle>
                          <DialogDescription className="text-2xl text-[#EF4444] font-bold">
                            {cur.foodName}
                          </DialogDescription>
                          <h1 className="text-sm text-[#09090B] pt-3 font-medium">
                            {cur.ingredients}
                          </h1>
                        </DialogHeader>
                        <div className="w-full pt-27 pb-6">
                          <div className="w-full flex justify-between">
                            <h2 className="text-[#09090B] text-xl font-bold">
                              <Label className="text-sm font-light">
                                Total price
                              </Label>
                              {cur.price}₮
                            </h2>
                            <div className="flex justify-center items-center text-lg">
                              <Button
                                variant="outline"
                                size="icon"
                                className="text-black rounded-full w-11 h-11"
                              >
                                <MinusIcon />
                              </Button>
                              <p className="pl-3 pr-3">1</p>
                              <Button
                                variant="outline"
                                size="icon"
                                className="text-black rounded-full w-11 h-11"
                              >
                                <PlusIcon />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <DialogFooter>
                            <Button
                              className="w-full h-11 rounded-[999]"
                              type="submit"
                            >
                              Add to cart
                            </Button>
                          </DialogFooter>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <h1 className="flex text-xl font-bold text-[#EF4444] justify-between pt-5">
                {cur.foodName}
                <span className="text-[#09090B] text-lg">{cur.price}₮</span>
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
