import Header from "@/components/global/Header";
import ProductsGrid from "@/components/produtos/ProductsGrid/ProductsGrid";
import SectionOurProducts from "@/components/produtos/SectionOurProducts/SectionOurProducts";
import React from "react";

export default async function Products() {
  return (
    <>
      <main className="relative">
        <Header />
        <SectionOurProducts />
        <ProductsGrid />
      </main>
      <div id="calc"></div>
    </>
  );
}
