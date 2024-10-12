import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

const page = () => {
  return (
    <div>
      <Link href="/" className="py-5">
        Home
      </Link>
      <h1>Blog</h1>
    </div>
  );
};

export default page;
