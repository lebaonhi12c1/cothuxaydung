import React, { useState } from "react";
import {
  IoCartSharp,
  IoPerson,
  IoSearchSharp,
  IoMenuSharp,
} from "react-icons/io5";
import SearchModal from "./SearchModal";
import CartModal from "./CartModal";
import Link from "next/link";
import product from "@/pages/products/index";
import { useCart } from "@/components/CartContext";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenCartModal = () => {
    setIsCartOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsCartOpen(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div className="bg-about bg-cover">
      <nav className="flex items-center justify-between p-4 border border-black bg-black bg-opacity-80">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <button className="border border-solid border-orange-600 bg-black bg-opacity-80 p-4 text-white mr-2 md:mr-20 md:ml-11">
              K.P Construction
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-orange-500">
            <IoMenuSharp className="w-8 h-8" />
          </button>
        </div>
        <div
          className={`hidden md:flex items-center text-white ml-6 md:border-l-0 ${
            showMobileMenu ? "flex" : "hidden"
          }`}
        >
          <div className="border border-solid border-orange-600 border-r md:border-r-0 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
            <Link className="text-white  hover:text-black" href="/contact">
              {" "}
              <button>Giới thiệu</button>
            </Link>
          </div>
          <div className="border border-solid border-orange-600 border-r-0 md:border-l-0 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 active:bg-orange-600 active:bg-opacity-80 transition duration-150">
            <Link className="text-white  hover:text-black" href="/products">
              <button>Sản phẩm</button>
            </Link>
          </div>
          <div className="border border-solid border-orange-600 border-r-0 md:border-l-0 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
            <button>Chất lượng K.P</button>
          </div>
          <div className="border border-solid border-orange-600 bg-opacity-80 border-l-3 p-4 text-black hover:bg-gray-300 hover:text-black bg-orange-500 active:bg-orange-600 active:bg-opacity-80 transition duration-150">
            <button>Xem Ngay !</button>
          </div>
          <div className="flex items-center ml-auto">
            <a href="#" className="text-orange-500 m-4">
              <button onClick={handleOpenModal}>
                <IoSearchSharp className="w-8 h-8"></IoSearchSharp>
              </button>
            </a>
            <a href="#" className="text-orange-500 m-4">
              <button>
                <IoPerson id="search-btn" className="w-8 h-8"></IoPerson>
              </button>
            </a>
            <a href="#" className="text-orange-500 m-4 ">
              <button onClick={handleOpenCartModal} className="flex">
                <IoCartSharp className="w-8 h-8 "></IoCartSharp>
                <span className="relative inline-block">
                  <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-orange-500 rounded-full flex items-center justify-center">
                    {totalQuantity}
                  </span>
                </span>
              </button>
            </a>
          </div>
        </div>
      </nav>
      <div className={`md:hidden ${showMobileMenu ? "block" : "hidden"}`}>
        <div className="flex flex-col justify-center  bg-black bg-opacity-80">
          <div className="flex flex-row items-center justify-between border-b border-solid border-gray-400 p-4">
            <div className="flex ">
              <a href="#" className="text-orange-500 m-4">
                <button onClick={handleOpenModal}>
                  <IoSearchSharp className="w-8 h-8"></IoSearchSharp>
                </button>
              </a>
              <a href="#" className="text-orange-500 m-4">
                <button>
                  <IoPerson id="search-btn" className="w-8 h-8"></IoPerson>
                </button>
              </a>
              <a href="#" className="text-orange-500 m-4">
                <button onClick={handleOpenCartModal}>
                  <IoCartSharp className="w-8 h-8"></IoCartSharp>
                  <span className="relative inline-block">
                    <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-orange-500 rounded-full flex items-center justify-center">
                      {totalQuantity}
                    </span>
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <div className="border border-solid border-orange-600 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
              <Link className="text-white  hover:text-black" href="/contact">
                {" "}
                <button>Giới thiệu</button>
              </Link>
            </div>
            <div className="border border-solid border-orange-600 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
              <Link className="text-white  hover:text-black" href="/products">
                <button>Sản phẩm</button>
              </Link>
            </div>
            <div className="border border-solid border-orange-600 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
              <button>Chất lượng K.P</button>
            </div>
            <div className="border border-solid border-orange-600 bg-opacity-80 border-l-3 p-4 text-black hover:bg-gray-300 hover:text-black bg-orange-500 active:bg-orange-600 active:bg-opacity-80 transition duration-150">
              <button>Xem Ngay !</button>
            </div>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isOpen} onRequestClose={handleCloseModal} />
      <CartModal isOpen={isCartOpen} onRequestClose={handleCloseCartModal} />
    </div>
  );
}

export default Navbar;
