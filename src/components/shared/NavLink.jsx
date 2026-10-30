"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${isActive ? "border-b-2 border-b-purple-500" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;


// ১. usePathname()
// এটি বর্তমানে ব্যবহারকারী কোন URL-এ আছে, তা বের করে।
