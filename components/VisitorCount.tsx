"use client";

import React, { useEffect, useState } from 'react'
import { getVisitor, setVisitor } from "@/lib/visitorPrisma";

const VisitorCount = () => {
  const [visitedNum, setVisitedNum] = useState(0);

  useEffect(() => {
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
  }, []);
  return (
    <div>
      {visitedNum ? <p>Visior: {visitedNum}</p> : null}
    </div>
  )
}

export default VisitorCount