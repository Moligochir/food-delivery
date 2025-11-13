import { DownArrow } from "@/app/FoodIkon/downArrow";
import { SortIkon } from "@/app/FoodIkon/sortIkon";

export const OrderData = () => {
  return (
    <div className="text-[#71717A] bg-white h-14 w-full text-sm items-center flex relative justify-between ">
      <div className="w-auto p-4">
        <input type="checkbox" className="w-4 h-4 flex"></input>
      </div>

      <p className="w-14 p-4">1</p>
      <h1 className="w-[213px] flex justify-between p-4">Test@gamil.com</h1>
      <h2 className="w-40 justify-between flex p-4">
        2foods
        <div>
          <DownArrow />
        </div>
      </h2>

      <div className="w-40 flex items-center justify-between p-4">
        2024/12/20
      </div>
      <h1 className="w-40 p-4 flex ">$26.97</h1>
      <h2 className="w-[213px] text-xs truncate p-4">
        2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100
        айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн
        эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д
        ногоон20
      </h2>
      <div className="w-40 flex items-center   justify-start  p-4">
        <h1 className="flex border-[#EF4444] border-[1px] rounded-[999] items-center p-2 font-black text-[#09090B] text-xs bg-white">
          Pending
          <SortIkon />
        </h1>
      </div>
      <div className="absolute w-[263px] bg-white border-[1px] rounded-md left-[27%] z-[1] top-[70%] ">
        <div className="text-xs flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-8 h-7" src="/file.svg" />
            Sunshine Stackers
          </div>
          <h1>x 1</h1>
        </div>
        <div className="text-xs flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-8 h-7" src="/file.svg" />
            Sunshine Stackers
          </div>
          <h1>x 1</h1>
        </div>
      </div>
      <div className="absolute w-36 bg-white border-[#F4F4F5] rounded-md left-[86.7%] z-10 top-[79.9%] hidden">
        <div className="flex justify-between w-full p-2">
          <div className="text-xs pl-2 pr-2 font-medium text-[#18181B] border-[#F4F4F5] bg-[#F4F4F5] rounded-full">
            Delivered
          </div>
        </div>
        <div className="flex justify-between w-full p-2">
          <div className="text-xs pl-2 pr-2 font-medium text-[#18181B] border-[#F4F4F5] bg-[#F4F4F5] rounded-full">
            Pending
          </div>
        </div>
        <div className="flex justify-between w-full p-2">
          <div className="text-xs pl-2 pr-2 font-medium text-[#18181B] border-[#F4F4F5] bg-[#F4F4F5] rounded-full">
            Cancelled
          </div>
        </div>
      </div>
    </div>
  );
};
