"use client";

import React, { useState } from "react";
import { getVisitor, setVisitor } from "@/lib/visitorPrisma";

function Footer() {
  const [visitedNum, setVisitedNum] = useState(0);
  const visited = sessionStorage.getItem("visited");

  if (visited) {
    getVisitor().then((value) => {
      if (value) {
        setVisitedNum(value);
      }
    });
  } else {
    sessionStorage.setItem("visited", "true");
    setVisitor().then((value) => {
      if (value) {
        setVisitedNum(value);
      }
    });
  }
  
  return (
    <footer className="flex h-[100px] items-center px-12 rounded-t-3xl bg-gray-300 font-bold text-3xl">
      {visitedNum ? <p>Visior: {visitedNum}</p> : null}
    </footer>
  );
}

export default Footer;
