import { DateIkon } from "@/app/FoodIkon/dateIkon";
import { DeliveryIkon } from "@/app/FoodIkon/deliveryIkon";
import { MenuIkon } from "@/app/FoodIkon/menuikon";

import { SortIkon } from "@/app/FoodIkon/sortIkon";
import { OrderData } from "./OrderData";
import Link from "next/link";
import { NomNom } from "@/app/FoodIkon/nomnom";

export const AdminOrder = () => {
  return (
    <div className="w-full h-full flex">
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
        <Link href={`/admin/food`}>
          <div className="flex justify-center items-center w-full pl-5 pr-5 pt-10">
            <MenuIkon />
            <h1 className="text-sm text-[#09090B] pl-2">Food menu</h1>
          </div>
        </Link>
        <div className="flex w-full pl-14 pr-14 pt-6">
          <button className="flex justify-center items-center gap-2 w-full text-white bg-[#18181B] rounded-[999] h-10">
            <DeliveryIkon />
            <p className="text-sm">Orders</p>
          </button>
        </div>
      </div>
      <div className="h-full w-[80%] pl-6 pt-6 pr-10 pb-13 bg-[#E4E4E7]">
        <div className="w-full flex justify-end pb-6">
          <div className="w-9 h-9 rounded-[999]  bg-black"></div>
        </div>

        <div className="w-full flex justify-between bg-white p-4 ">
          <div className="text-xl font-semibold">
            Orders<p className="text-xs text-[#71717A] font-light">82 items</p>
          </div>
          <div className="flex items-center text-sm gap-3">
            <div className="flex items-center p-2 gap-2 border-[1px] border-[#E4E4E7] rounded-[9999]">
              <DateIkon />
              <p>13 June 2023 - 14 July 2023</p>
            </div>
            <button className="border-[1px] border-[#E4E4E7] bg-[#E4E4E7] text-white font-medium rounded-[9999] p-2">
              Change delivery state
            </button>
          </div>
        </div>
        <div className="text-[#71717A] w-full text-sm items-center flex justify-between ">
          <div className="w-auto p-4">
            <input type="checkbox" className="w-4 h-4 flex"></input>
          </div>

          <p className="w-14 p-4">№</p>
          <h1 className="w-[213px] flex justify-start p-4">Customer</h1>
          <h2 className="w-40 justify-start p-4">Food</h2>
          <div className="w-40 flex items-center justify-between p-4">
            Date
            <SortIkon />
          </div>
          <h1 className="w-40 p-4 flex">Total</h1>
          <h2 className="w-[213px] flex p-4">Delivery Address</h2>
          <div className="w-40 flex items-center justify-between p-4">
            <h1 className="flex ">Delivery state</h1>
            <SortIkon />
          </div>
        </div>
        <OrderData />
      </div>
    </div>
  );
};
