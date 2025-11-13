import { LeftArrow } from "@/app/FoodIkon/leftArrow"
import { RightArrow } from "@/app/FoodIkon/rightArrow"

export const PageButton = ()=> {
    return(
    <div className="w-full flex justify-end pt-10 gap-2">
              <button className="w-8 h-8 rounded-[999] bg-white items-center flex justify-center text-black"><LeftArrow/></button>
              <button className="w-8 h-8 rounded-[999] bg-black items-center flex justify-center text-white text-sm font-medium">1</button>
              <button className="w-8 h-8 rounded-[999] bg-white items-center flex justify-center text-black text-sm font-medium">2</button>
              <button className="w-8 h-8 rounded-[999] bg-white items-center flex justify-center text-black text-sm font-medium">3</button>
              <button className="w-8 h-8 rounded-[999] bg-white items-center flex justify-center text-black text-sm font-medium">...</button>
              <button className="w-8 h-8 rounded-[999] bg-white items-center flex justify-center text-black text-sm font-medium">10</button>
              <button className="w-8 h-8 rounded-[999] bg-white items-center flex justify-center text-black"><RightArrow/></button>
            </div>
            )
        }