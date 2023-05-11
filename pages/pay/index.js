import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import { useCart } from "@/components/CartContext";
import Image from "next/image";
import { userContext } from "@/context/user";
import { useRouter } from "next/router";
import Notification from "@/components/Notification";
function Pay() {
  const router = useRouter()
  const [notification, setNotification] = useState({
    isnotification: false,
    message: ''
  })
  const { user } = useContext(userContext)
  const [infoPayment, setInfoPayment] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
  })
  const [infoReceicer,setInfoReceicer] = useState(
    {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
    }
  )

  const [activeTab, setActiveTab] = useState("carts");
  const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useCart();
  console.log("...", cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handlePayment = async () => {
    console.log(user, cart)
    if (!user) {
      router.push('/login')
      return
    }
    try {
      const res = await fetch(`http://localhost:8080/user/update`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
          ...infoPayment
        })
      })
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    try {
      const res = await fetch(`http://localhost:8080/order/create`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerid: user._id,
          productid: cart,
          sumary: totalPrice,
          vat: Math.ceil(totalPrice * 0.05),
          debt: Math.ceil(totalPrice * 0.1),
          receiver: infoReceicer
        })
      })
      const data = await res.json()
      console.log(data)
      setNotification({ isnotification: true, message: data.message })
    } catch (error) {
      console.log(error)
      setNotification({ isnotification: true, message: error.toString() })
    }
  }
  useEffect(() => {
    const close = setTimeout(() => {
      notification.isnotification && setNotification({ ...notification, isnotification: false })
    }, 2000);
    return () => clearTimeout(close)
  }, [notification.isnotification])
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                        width={300}
                        height={200}
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

          <div className="col-span-2 flex flex-col gap-4 shadow-md shadow-slate-300 p-4 rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="">
                <h3 className="text-lg font-semibold mb-4">
                  Thông tin thanh toán
                </h3>
                <div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Họ tên
                    </label>
                    <input
                      id="name"
                      defaultValue={user?.name}
                      type="text"
                      className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Nhập họ tên"
                      onChange={e => setInfoPayment({ ...infoPayment, name: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      defaultValue={user?.email}
                      id="email"
                      type="email"
                      className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Nhập email"
                      onChange={e => setInfoPayment({ ...infoPayment, email: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      defaultValue={user?.phone}
                      id="phone"
                      type="tel"
                      className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Nhập số điện thoại"
                      onChange={e => setInfoPayment({ ...infoPayment, phone: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 mb-2">
                      Địa chỉ
                    </label>
                    <textarea
                      defaultValue={user?.address}
                      id="address"
                      className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Nhập địa chỉ"
                      rows="4"
                      onChange={e => setInfoPayment({ ...infoPayment, address: e.target.value })}
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
                </div>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold mb-4">
                  Thông tin người nhận
                </h3>
                <div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Họ tên
                    </label>
                    <input
                      id="name"
                      defaultValue={user?.name}
                      type="text"
                      className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Nhập họ tên"
                      onChange={e => setInfoReceicer({ ...infoReceicer, name: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      defaultValue={user?.email}
                      id="email"
                      type="email"
                      className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Nhập email"
                      onChange={e => setInfoReceicer({ ...infoReceicer, email: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      defaultValue={user?.phone}
                      id="phone"
                      type="tel"
                      className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Nhập số điện thoại"
                      onChange={e => setInfoReceicer({ ...infoReceicer, phone: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 mb-2">
                      Địa chỉ
                    </label>
                    <textarea
                      defaultValue={user?.address}
                      id="address"
                      className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Nhập địa chỉ"
                      rows="4"
                      onChange={e => setInfoReceicer({ ...infoReceicer, address: e.target.value })}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                onClick={handlePayment}
              >
                Xác nhận thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
      <Notification isOpen={notification.isnotification} message={notification.message} />
    </DefaultLayout>
  );
}

export default Pay;
