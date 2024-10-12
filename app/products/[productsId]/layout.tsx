import React from "react";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactDOM;
}) {
  return (
    <>
      {children}
      <h2>Features Product</h2>
    </>
  );
}
