import { Button } from "@/components/ui/button";
import { NomNom } from "./FoodIkon/nomnom";
import {
  ChevronRightIcon,
  MapPin,
  MapPinIcon,
  ShoppingCartIcon,
  User2Icon,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center w-full p-4 pl-22 pr-22 bg-[#18181B]">
        <div className="flex">
          <NomNom />

          <p className="text-sm pl-2 pr-9 text-[#71717A]">
            <h5 className="text-xl font-black flex text-[#FAFAFA]">
              Nom
              <span className="text-xl font-black text-[#EF4444] flex">
                Nom
              </span>
            </h5>
            Swift delivery
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            className="rounded-[999] bg-[#F4F4F5] text-[#18181B]"
            variant="destructive"
          >
            Sign up
          </Button>
          <Button className="rounded-[999]" variant="destructive">
            Log in
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-4 pl-22 pr-22 bg-[#18181B]">
        <div className="flex">
          <NomNom />

          <p className="text-sm pl-2 pr-9 text-[#71717A]">
            <h5 className="text-xl font-black flex text-[#FAFAFA]">
              Nom
              <span className="text-xl font-black text-[#EF4444] flex">
                Nom
              </span>
            </h5>
            Swift delivery
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            className="rounded-[999] bg-[#F4F4F5] text-[#EF4444]"
            variant="destructive"
          >
            <MapPinIcon />
            Delivery address:
            <span className="flex items-center text-[#71717A]">
              Add Location
              <ChevronRightIcon />
            </span>
          </Button>

          <Button
            className="rounded-full bg-[#F4F4F5] text-[#18181B]"
            variant="destructive"
            size="icon"
          >
            <ShoppingCartIcon />
          </Button>
          <Button className="rounded-full" variant="destructive">
            <User2Icon />
          </Button>
        </div>
      </div>
    </div>
  );
};
