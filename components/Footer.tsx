import React from "react";
import VisitorCount from "./VisitorCount";

function Footer() {
  return (
    <footer className="flex h-[100px] items-center px-12 rounded-t-3xl bg-gray-300 font-bold text-3xl">
      <VisitorCount />
    </footer>
  );
}

export default Footer;
