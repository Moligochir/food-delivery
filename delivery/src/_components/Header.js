"use client";
import { Button } from "@/components/ui/button";
import { NomNom } from "./FoodIkon/nomnom";
import {
  ChevronRightIcon,
  MapPin,
  MapPinIcon,
  ShoppingCartIcon,
  User2Icon,
} from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { FoodCard } from "./FoodCard";
import { useContext } from "react";
import { AuthContext } from "@/_context/AuthProvider";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ",
  },
};

export const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const { token, loading, user } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const HandleClickSignOut = () => {
    return localStorage.clear(HandleClickSignOut);
  };

  const getData = async () => {
    const data = await fetch(`${url}/food-category`, options);
    const jsonData = await data.json();

    setCategories(jsonData);
  };
  console.log(user, "usershoo");
  console.log(token, "tokshoo");

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[1440px]">
      {/* <div className="flex justify-between items-center w-full p-4 pl-22 pr-22 bg-[#18181B]">
        <div className="flex">
          <NomNom />

          <div className="text-sm pl-2 pr-9 text-[#71717A]">
            <h1 className="text-xl font-black flex text-[#FAFAFA]">
              Nom
              <span className="text-xl font-black text-[#EF4444] flex">
                Nom
              </span>
            </h1>
            Swift delivery
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            className="rounded-[999] bg-[#F4F4F5] text-[#18181B]"
            variant="secondary"
          >
            Sign up
          </Button>
          <Button className="rounded-[999]" variant="destructive">
            Log in
          </Button>
        </div>
      </div> */}
      <div className="flex justify-between items-center w-full h-[172px] p-4 pl-22 pr-22 bg-[#18181B]">
        <div className="flex">
          <NomNom />

          <div className="text-sm pl-2 pr-9 text-[#71717A]">
            <h5 className="text-xl font-black flex text-[#FAFAFA]">
              Nom
              <span className="text-xl font-black text-[#EF4444] flex">
                Nom
              </span>
            </h5>
            Swift delivery
          </div>
        </div>
        <div className="flex gap-3 relative">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="rounded-[999] bg-[#F4F4F5] text-[#EF4444]"
                variant="secondary"
              >
                <MapPinIcon />
                Delivery address:
                <span className="flex items-center text-[#71717A]">
                  Add Location
                  <ChevronRightIcon />
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-lg">
                  Please write your delivery address!
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Input
                    className="h-20"
                    id="Delivery address"
                    name="name"
                    placeholder="Please share your complete address"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Deliver Here</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button
            className="rounded-full bg-[#F4F4F5] text-[#18181B]"
            variant="secondary"
            size="icon"
          >
            <ShoppingCartIcon />
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button className="rounded-full" variant="destructive">
                <User2Icon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full ">
              <h1 className="w-full flex justify-center items-center">
                {user?.email}
              </h1>

              <Button
                onClick={HandleClickSignOut}
                className="rounded-[999] w-full flex justify-center items-center"
                variant="outline"
              >
                Sign out
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <img className="w-full h-[570px]" src="/homeImg.png" />
      {categories.map((cur) => (
        <FoodCard
          key={cur._id}
          catId={cur._id}
          categoryName={cur.categoryName}
        />
      ))}
    </div>
  );
};
