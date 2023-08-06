import React from "react";
import Link from "next/link";


const Menu = ({ to, text, isActive }: {
  to: string,
  text: string,
  isActive: boolean
}) => {
  return <Link className={isActive ? "active" : ""} href={to}>{text}</Link>;
};

export default Menu;