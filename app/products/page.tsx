import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/" className="py-5">
        Home
      </Link>
      <h1>Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        repellendus beatae vel consequatur illo sequi officia eveniet dolorum
        ipsa possimus omnis, doloribus officiis quo? Beatae minus quod dolore
        perferendis. Perferendis?
      </p>
    </div>
  );
};

export default page;
