"use client"
import { Button } from "@/components/ui/button";
import { PlaneIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const FoodCard = ( { catId, categoryName }) => {
    
const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foods/${catId}`, options);
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
                                         <Button variant="outline" size="icon" className="text-[#EF4444] absolute rounded-full">
                                                <PlusIcon />
                                            </Button>
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
             
                       
                           
      