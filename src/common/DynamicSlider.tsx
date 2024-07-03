"use client";

import React, { useState } from "react";
import Image from "next/image";
import sidebarLogo from "@/assets/images/white-logo-circle.svg";
import { FaRegAddressCard } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsFileEarmarkText } from "react-icons/bs";
import { ImUser, ImUsers } from "react-icons/im";
import { HomeIcon } from "lucide-react";
import { GoHomeFill } from "react-icons/go";
import { IoMdBookmarks } from "react-icons/io";
interface subMenu {
  id: number;
  label: string;
  href: string;
}
interface NavigationItem {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  submenu?: subMenu[];
}

const navigationItems: NavigationItem[] = [
  {
    id: 1,
    icon: FaRegAddressCard,
    label: "Dashboard",
    href: "#",
  },
  {
    id: 2,
    icon: ImUser,
    label: "User Management",
    href: "#",
    submenu: [
      { id: 1, label: "List of Users", href: "#" },
      { id: 2, label: "Manage Roles", href: "#" },
    ],
  },
  {
    id: 3,
    icon: GoHomeFill,
    label: "Manage Projects",
    href: "#",
    submenu: [
      { id: 4, label: "List of Projects", href: "#" },
      { id: 5, label: "All Units", href: "#" },
      { id: 6, label: "Manage Amenities", href: "#" },
      { id: 7, label: "Payment Plans", href: "#" },
    ],
  },
  {
    id: 4,
    icon: IoMdBookmarks,
    label: "Bookings",
    href: "#",
  },
  {
    id: 5,
    icon: ImUsers,
    label: "Customers",
    href: "#",
    submenu: [
      { id: 8, label: "Web Customers", href: "#" },
      { id: 9, label: "Owners", href: "#" },
    ],
  },
  {
    id: 6,
    icon: IoLocationSharp,
    label: "Site visits",
    href: "#",
  },
  {
    id: 7,
    icon: LiaFileInvoiceDollarSolid,
    label: "Transactions",
    href: "#",
  },
  {
    id: 8,
    icon: BsFileEarmarkText,
    label: "Policies",
    href: "#",
  },
  {
    id: 9,
    icon: ImUser,
    label: "Masters",
    href: "#",
  },
];

const navigationData = (items: NavigationItem[]): React.ReactNode => {
  // State to manage the visibility of submenus
  const [visibleSubmenus, setVisibleSubmenus] = useState<{
    [key: number]: boolean;
  }>({});

  // Toggle the visibility of a submenu
  const toggleSubmenu = (id: number) => {
    setVisibleSubmenus((prevState) => {
      // First, create a new state with all submenus set to false
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[Number(key)] = false;
        return acc;
      }, {} as Record<number, boolean>);

      // Toggle the state of the clicked submenu
      return {
        ...newState,
        [id]: !prevState[id],
      };
    });
  };

  return (
    <ul className="space-y-2 font-medium">
      {items?.map((item) => (
        <li key={item.id}>
          {item.submenu && item.submenu.length > 0 ? (
            <>
              <button
                type="button"
                className="flex items-center w-full py-3 text-base text-[rgba(255,255,255,0.85)] transition duration-75 hover:text-[#DEBD6B] focus:text-[#DEBD6B]"
                aria-controls="dropdown-example"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu(item.id);
                }}
              >
                <span className="flex items-center justify-center min-w-[60px]">
                  {React.createElement(item.icon, { className: "text-[19px]" })}
                </span>
                <span className="flex items-center w-[calc(100%_-_60px)] pe-3">
                  {item.label}
                  <svg
                    className="w-3 h-3 ml-auto"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </span>
              </button>

              {visibleSubmenus[item.id] &&
                item?.submenu?.map((menu) => (
                  <ul
                    id="dropdown-example"
                    className="bg-[rgba(0,0,0,0.08)] py-1"
                  >
                    <li key={menu.id}>
                      <a
                        href={menu.href}
                        className="flex items-center w-full py-2 text-[rgba(255,255,255,0.85)] transition duration-75 pl-[75px] group hover:text-[#DEBD6B] focus:text-[#DEBD6B]"
                      >
                        {menu.label}
                      </a>
                    </li>
                  </ul>
                ))}
            </>
          ) : (
            <a
              href={item.href}
              className="flex items-center py-3 text-[rgba(255,255,255,0.85)] rounded-lg dark:text-white hover:text-[#DEBD6B] focus:text-[#DEBD6B]"
            >
              <span className="flex items-center justify-center min-w-[60px]">
                {React.createElement(item.icon, { className: "text-[19px]" })}
              </span>
              <span className="w-[calc(100%_-_60px)]">{item.label}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};
function DynamicSlider() {
  return (
    <div className="atmoshphere-sidebar z-1 w-full max-w-[300px] bg-[#2d5e59] transition-all fixed start-0 top-0 bottom-0">
      <div className="sidebar-wrap h-full">
        <div className="atmosphere-logo flex justify-center px-3 py-[11.23px] text-center bg-[rgba(0,0,0,0.1)] border-[rgba(0,0,0,0.1)] border-b">
          <Image className="max-w-[48px] w-full" src={sidebarLogo} alt="" />
        </div>
        <div className="atmosphere-sidebar-navs py-8 border-t border-[rgba(255,255,255,0.1)] h-[calc(100vh_-_70px)]">
          <small className="text-white opacity-50 text-uppercase mb-2 uppercase text-[12px] w-[60px] flex justify-center">
            menu
          </small>
          <div className="navbar-nav w-full">
            <aside
              id="sidebar-multi-level-sidebar"
              className=""
              aria-label="Sidebar"
            >
              <div className="">{navigationData(navigationItems)}</div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicSlider;
