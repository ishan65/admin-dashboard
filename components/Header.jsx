import React from "react";
import india from "../public/images/india.png";
import { Bell } from "lucide-react";
import admin from "../public/images/ixt65.jpg";

export const Header = () => {
  return (
    <header className="bg-[#1e1e1e] shadow-lg border-b border-[#1f1f1f] mx-4 sm:mx-6 lg:mx-8">
      <div className="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100">
          Admin Dashboard
        </h1>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <img
            src={india.src}
            alt="India Flag"
            width={25}
            height={18}
            className="rounded-full shadow-md coursor-pointer"
          />
          <div className="relative">
            <Bell className="w-5 sm:w-6 h-5 sm:h-6 text-gray-300 cursor-pointer hover:text-white" />
          </div>
          <div className="flex item-center space-x-2 sm:space-x-3">
            <img
              src={admin.src}
              alt="admin"
              width={35}
              height={35}
              className="rounded-full border shadow-md cursor-pointer"
            />
            <span className="hidden sm:block text-gray-100 font-medium">
              Ishan Mahajan
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
