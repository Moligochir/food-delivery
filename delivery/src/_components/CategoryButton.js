"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const CategoryButton = ({ categoryName, catId }) => {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch(`${url}/foods/${catId}`, options);
    const jsonData = await data.json();

    setFoods(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Button className={"rounded-[999]"} variant="outline">
      {categoryName}
      <p className="text-white text-xs rounded-[9999] pl-2 pr-2 bg-black">
        {foods.length}
      </p>
    </Button>
  );
};
