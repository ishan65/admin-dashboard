"use client";

import {
  House,
  DollarSign,
  Info,
  Mail,
  Settings,
  ShoppingBag,
  Users,
  Bell,
  ShoppingCart,
  Menu,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ICONS = {
  House,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Mail,
  Users,
  Bell,
  Info,
};

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [SidebarItems, setSidebarItems] = useState([]);
  const pathname = usePathname();
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setSidebarItems(data.setSidebarItems));
  }, []);

  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 mb-4 rounded-md hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer"
        >
          <Menu size={24}></Menu>
        </button>
        <nav className="mt-8 grow">
          {SidebarItems.map((item) => {
            const IconComponent = ICONS[item.icon];

            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${
                    pathname === item.href ? "bg-[#2f2f2f]" : ""
                  }`}
                >
                  <IconComponent className="w-10 size-10" />
                  {isSidebarOpen && (
                    <span className="ml-6 text-2xl whitespace-nowrap">
                      {item.name}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
