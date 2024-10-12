import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <Link href="/blog" className="px-5">
        Blog
      </Link>
      <Link href="/products" className="py-5">
        Produk
      </Link>
      <Link href="/about" className="py-5">
        About
      </Link>
      <h1 className="text-center flex">Raden Muhamad Irsyad Taufik</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur
        voluptatum dolores iusto sit ratione veniam laborum vero laboriosam a
        neque tempore ipsam sapiente earum sed illo, accusamus iste alias.
      </p>
    </div>
  );
};

export default page;
