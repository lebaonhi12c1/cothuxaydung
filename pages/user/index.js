import React, { useState } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import { useCart } from "@/components/CartContext";
import Image from "next/image";

function TabButton({ active, onClick, children }) {
  const baseClasses =
    "px-4 py-2 font-semibold border-b-2 transition-colors duration-200";
  const activeClasses = "border-blue-500 text-blue-500";
  const inactiveClasses = "text-gray-500 border-transparent";
  const classes = `${baseClasses} ${active ? activeClasses : inactiveClasses}`;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default function User() {
  const [activeTab, setActiveTab] = useState("carts");
  const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useCart();
  console.log("User cart:", cart);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-500">Trang người dùng</h1>
      </div>
      <div className="flex justify-center mb-6 space-x-4">
        <TabButton
          active={activeTab === "carts"}
          onClick={() => setActiveTab("carts")}
        >
          Giỏ hàng
        </TabButton>
        <TabButton
          active={activeTab === "orders"}
          onClick={() => setActiveTab("orders")}
        >
          Theo dõi đơn hàng
        </TabButton>
        <TabButton
          active={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        >
          Chỉnh sửa thông tin
        </TabButton>
      </div>
      <div className="bg-white shadow-md rounded p-6">
        {activeTab === "carts" && (
          <>
            <h3 className="text-lg font-semibold mb-4">
              Sản phẩm trong giỏ hàng
            </h3>
            {cart.map((item, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Image
                      width={80}
                      height={80}
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <button
                        onClick={() => removeProduct(item)}
                        className="block text-red-500 hover:text-red-700 mt-2"
                      >
                        Xóa
                      </button>
                      <p className="text-gray-500">
                        Đơn giá: {item.price.toLocaleString("vi-VN")} đồng
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded px-2 py-1"
                    >
                      -
                    </button>
                    <span className="mx-2 text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded px-2 py-1"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-semibold">
                      {(item.quantity * item.price).toLocaleString("vi-VN")}{" "}
                      đồng
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {activeTab === "orders" && <div>{/* Render theo dõi đơn hàng */}</div>}
        {activeTab === "profile" && (
          <>
            <h3 className="text-lg font-semibold mb-4">
              Chỉnh sửa thông tin người dùng
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Lưu thông tin
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

User.getLayout = DefaultLayout;
