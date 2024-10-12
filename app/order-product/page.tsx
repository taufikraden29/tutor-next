"use client";

import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.back();
  };
  return (
    <div>
      <h1>Order Producet</h1>
      <button onClick={handleClick}>Place Holder</button>
    </div>
  );
};

export default page;
