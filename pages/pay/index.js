import React, { useState } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import { useCart } from "@/components/CartContext";
import Image from "next/image";

function Pay() {
  const [activeTab, setActiveTab] = useState("carts");
  const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useCart();
  console.log("...", cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white shadow-md rounded p-6">
              <h3 className="text-lg font-semibold mb-4">
                Sản phẩm trong giỏ hàng
              </h3>
              {cart.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Image
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
                      <span className="mx-2 text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item)}
                        className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded px-2 py-1"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold">
                        {item.quantity * item.price.toLocaleString("vi-VN")}{" "}
                        đồng
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                Tổng tiền: {totalPrice.toLocaleString("vi-VN")} đồng
              </h3>
            </div>
          </div>

          <div>
            <div className="bg-white shadow-md rounded p-6">
              <h3 className="text-lg font-semibold mb-4">
                Thông tin thanh toán
              </h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Họ tên
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nhập họ tên"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nhập email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 mb-2">
                    Địa chỉ
                  </label>
                  <textarea
                    id="address"
                    className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nhập địa chỉ"
                    rows="4"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="paymentMethod"
                    className="block text-gray-700 mb-2"
                  >
                    Phương thức thanh toán
                  </label>
                  <select
                    id="paymentMethod"
                    className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Chọn phương thức thanh toán</option>
                    <option value="cod">Thanh toán khi nhận hàng (COD)</option>
                    <option value="bank">Chuyển khoản ngân hàng</option>
                  </select>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Xác nhận thanh toán
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Pay;
