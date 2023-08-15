import Header from "@/components/global/Header";
import ProductsGrid from "@/components/products/ProductsGrid/ProductsGrid";
import SectionOurProducts from "@/components/products/SectionOurProducts/SectionOurProducts";
import React from "react";

export default async function Products() {
  return (
    <main className="relative">
      <Header />
      <SectionOurProducts />
      <ProductsGrid />
    </main>
  );
}
