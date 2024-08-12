import Image from "next/image";
import logo from "../public/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { TbLogin } from "react-icons/tb";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { MdOutlineMenu } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import { FaBasketShopping } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function Navbar() {
  return (
    <nav className="flex flex-col w-full h-[110px] items-center justify-center m-auto shadow-md ">
      <div className="flex flex-row-reverse justify-between items-center w-11/12  ">
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="flex flex-row-reverse justify-center items-center">
            <Image src={logo} width={115} height={30} alt="logo" />
            <div className="flex justify-center items-center mr-6">
              <input
                className="bg-gray-100 text-right h-[45px]  rounded-l-lg  w-[550px] focus:outline-none"
                type="text"
                id="search"
                name="search"
                placeholder="جستجو"
              />
              <div className=" flex justify-center items-center h-[45px] bg-gray-100  rounded-r-lg">
                <IoIosSearch className="text-gray-400 w-[25px] h-[25px] bg-gray-100 ml-3 mr-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-center items-center ">
          <div className="flex justify-center items-center border-[1px] pt-2 pb-2 pl-4 pr-3 rounded-lg cursor-pointer">
            <p className=" text-[14px] text-center justify-center text-gray-800">
              ورود <b className="text-[12px]">|</b> ثبت نام
            </p>
            <TbLogin className="w-[25px] h-[25px] ml-2 " />
          </div>
          <div className=" border-r-2  mr-3">
            {" "}
            <PiShoppingCartSimpleBold className="w-[25px] h-[25px] mr-4 " />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between items-center mt-6 w-11/12 ">
        <div className="flex flex-row-reverse justify-center items-center text-[13px] gap-4 text-gray-500 font-medium ">
          <div className="flex  justify-center items-center cursor-pointer">
            <p className="mr-2">دسته بندی کالاها</p>
            <MdOutlineMenu />
          </div>
          <div className="flex  justify-center items-center border-r-[1px] border-gray-300 pr-2 h-4 cursor-pointer">
            <p className="mr-1">شگفت انگیزها</p>
            <TbDiscount />
          </div>
          <div className="flex  justify-center items-center cursor-pointer">
            <p className="mr-2">سوپرمارکت</p>
            <FaBasketShopping />
          </div>
          <div className="flex  justify-center items-center cursor-pointer">
            <p className="mr-2">کارت هدیه</p>
            <FaRegCreditCard />
          </div>
          <div className="flex  justify-center items-center cursor-pointer  ">
            <p className="mr-2">پرفروش ترین ها</p>
            <FaFire />
          </div>
          <div className="flex  justify-center items-center cursor-pointer ">
            <p className="mr-2">تخفیف ها و پیشنهادها</p>
            <MdOutlineDiscount />
          </div>
          <div className="flex  justify-center items-center cursor-pointer  ">
            <p className="mr-2">سوالی دارید؟</p>
          </div>
          <div className="flex  justify-center items-center cursor-pointer  ">
            <p className="mr-2">!در دیجی کالا بفروشید</p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex  justify-center items-center text-[15px]  text-gray-500 font-medium  ">
            <p className="mr-1 ">شهر خود را انتخاب کنید</p>
            <MdLocationOn className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
