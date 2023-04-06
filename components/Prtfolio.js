import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import bgIron from "../image/bg_iron.jpg";
import Ironbg from "../image/iron_bg.jpg";

import { FaAngleRight } from "react-icons/fa";
const products = [
  { name: "Gang", image: bgIron },
  { name: "Tôn mạ", image: Ironbg },
  { name: "Ống thép", image: bgIron },
  { name: "Điện máy gia dụng", image: Ironbg },
];

function Prtfolio(props) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="p-4 ">
      <div className="">
        <button className="bg-transparent border border-black text-black hover:bg-orange-500 font-bold py-2 px-4 rounded-full">
          Danh Mục Sản Phẩm
        </button>
      </div>
      <div className=" flex flex-col md:flex-row md:justify-between  items-center">
        <div className="w-full md:w-1/2 px-4 py-4 md:p-0">
          <div className="border-2  border-gray-200 rounded-lg overflow-hidden">
            <div className="flex justify-center">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={700}
                height={500}
                objectFit="cover"
                className="p-4 rounded-lg"
              />
            </div>
            <p className="text-center font-bold py-4">{selectedProduct.name}</p>
          </div>
        </div>
        <div className=" ">
          <div className="ml-10 ">
            <div className="">
              <div className="mt-5">
                <h1 className="text-5xl font-bold">Projects Preview</h1>
              </div>
            </div>
            <div className="pb-20 ml-2 mt-5 mb-20">
              <div className="mb-20 pb-10">
                <span className="flex hover:text-orange-600 underline">
                  View More <FaAngleRight className="mt-1 ml-2"></FaAngleRight>
                </span>
              </div>
            </div>
          </div>
          <div className="flex  mb-4 overflow-x-auto md:overflow-x-visible">
            <nav className="flex justify-center border border-black rounded-xl p-4 ml-10 whitespace-nowrap">
              {products.map((product) => (
                <button
                  key={product.name}
                  className={`flex flex-col items-center justify-center hover:text-orange-600 mx-4 ${
                    product.name === selectedProduct.name
                      ? "text-orange-600"
                      : "text-black"
                  }`}
                  onMouseEnter={() => handleProductSelect(product)}
                >
                  <p className="text-xl font-medium whitespace-nowrap flex">
                    <FaAngleRight className="mt-1" />
                    {product.name}
                  </p>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prtfolio;