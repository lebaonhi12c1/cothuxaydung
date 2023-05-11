// import React, { useContext, useEffect, useState } from "react";
// import DefaultLayout from "@/layout/DefaultLayout";
// import { useCart } from "@/components/CartContext";
// import Image from "next/image";
// import { userContext } from "@/context/user";

// function TabButton({ active, onClick, children }) {
//   const baseClasses =
//     "px-4 py-2 font-semibold border-b-2 transition-colors duration-200";
//   const activeClasses = "border-blue-500 text-blue-500";
//   const inactiveClasses = "text-gray-500 border-transparent";
//   const classes = `${baseClasses} ${active ? activeClasses : inactiveClasses}`;

//   return (
//     <button onClick={onClick} className={classes}>
//       {children}
//     </button>
//   );
// }

// export default function User() {
//   const {user,handleSetUser} = useContext(userContext)
//   const [userinfo,setUserinfo] = useState({
//     name: user?.name || null,
//     email: user?.email || null,
//     phone: user?.phone || null,
//     address: user?.address || null,
//   })
//   const [orders,setOrders] = useState(null)
//   const [activeTab, setActiveTab] = useState("carts");
//   const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useCart();
//   const getOrders = async()=>{
//    try {
//     const res = await fetch(`http://localhost:8080/order/customer/${JSON.parse(localStorage.getItem('user'))._id}`)
//     const orders = await res.json()
//     setOrders(orders)
//    } catch (error) {
//     console.log(error)
//    }
//   }
//   useEffect(()=>{
//     getOrders()
//   },[])
//   console.log(userinfo)
//   console.log("User cart:", cart);
//   const handleUpdateProfile = async()=>{
//     try {
//       const res = await fetch('http://localhost:8080/user/update',{
//         method: 'put',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: user.username,
//           ...userinfo
//         })
//       })
//       const data = await res.json()
//       console.log(data)
//       handleSetUser(data.user)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-blue-500">Trang người dùng</h1>
//       </div>
//       <div className="flex justify-center mb-6 space-x-4">
//         <TabButton
//           active={activeTab === "carts"}
//           onClick={() => setActiveTab("carts")}
//         >
//           Giỏ hàng
//         </TabButton>
//         <TabButton
//           active={activeTab === "orders"}
//           onClick={() => setActiveTab("orders")}
//         >
//           Theo dõi đơn hàng
//         </TabButton>
//         <TabButton
//           active={activeTab === "profile"}
//           onClick={() => setActiveTab("profile")}
//         >
//           Chỉnh sửa thông tin
//         </TabButton>
//       </div>
//       <div className="bg-white shadow-md rounded p-6">
//         {activeTab === "carts" && (
//           <>
//             <h3 className="text-lg font-semibold mb-4">
//               Sản phẩm trong giỏ hàng
//             </h3>
//             {cart.map((item, index) => (
//               <div key={index} className="border-b border-gray-200 py-4">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <Image
//                       width={80}
//                       height={80}
//                       src={item.image}
//                       alt={item.name}
//                       className="w-20 h-20 object-cover rounded mr-4"
//                     />
//                     <div>
//                       <h3 className="text-lg font-semibold">{item.name}</h3>
//                       <button
//                         onClick={() => removeProduct(item)}
//                         className="block text-red-500 hover:text-red-700 mt-2"
//                       >
//                         Xóa
//                       </button>
//                       <p className="text-gray-500">
//                         Đơn giá: {item.price.toLocaleString("vi-VN")} đồng
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <button
//                       onClick={() => decreaseQuantity(item)}
//                       className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded px-2 py-1"
//                     >
//                       -
//                     </button>
//                     <span className="mx-2 text-gray-700">{item.quantity}</span>
//                     <button
//                       onClick={() => increaseQuantity(item)}
//                       className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded px-2 py-1"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div className="text-right">
//                     <span className="text-lg font-semibold">
//                       {(item.quantity * item.price).toLocaleString("vi-VN")}{" "}
//                       đồng
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </>
//         )}
//         {activeTab === "orders" && <div className="flex flex-col gap-8">{orders?.map((item,index)=>(
//           <div className="" key={item._id}>
//             <div className="grid grid-cols-3 border border-slate-400 rounded-sm p-4">
//               <div className="flex flex-col gap-4">
//                   {item.productid.map(item=>(
//                     <div className="flex gap-4" key={item?._id}>
//                       <img src={item?.image} alt="" className="w-[100px] h-[80px] object-cover" />
//                       <div className="flex flex-col  gap-2">
//                         <span className="">Name: {item.name}</span>
//                         <span className="">Quantity: {item.quantity}</span>
//                         <span className="">Category: {item?.categoryid?.name}</span>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//               <div className="flex flex-col gap-4">
//                 <span className="text-[24px] text-rose-500">Sumary: {item.sumary}</span>
//                 <span className="text-orange-500">Vat: {item.vat}</span>
//                 <span className="text-blue-500">Debt: {item.debt}</span>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div>Status:</div>
//                 <div className="py-2 h-fit text-center px-4 rounded-sm text-white bg-green-500 w-fit flex flex-col">
//                   {item.status}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )) ?? "Loading..."}</div>}
//         {activeTab === "profile" && (
//           <>
//             <h3 className="text-lg font-semibold mb-4">
//               Chỉnh sửa thông tin người dùng
//             </h3>
//             <div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="fullName"
//                   className="block text-gray-700 font-semibold mb-2"
//                 >
//                   Họ và tên
//                 </label>
//                 <input
//                   defaultValue={user?.name || 'Update'}
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   onChange={e=>setUserinfo({...userinfo,name: e.target.value})}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 font-semibold mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   defaultValue={user?.email || 'Update'}
//                   type="email"
//                   id="email"
//                   name="email"
//                   onChange={e=>setUserinfo({...userinfo,email: e.target.value})}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="phoneNumber"
//                   className="block text-gray-700 font-semibold mb-2"
//                 >
//                   Số điện thoại
//                 </label>
//                 <input
//                   defaultValue={user?.phone || 'Update'}
//                   type="tel"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   onChange={e=>setUserinfo({...userinfo,phone: e.target.value})}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="address"
//                   className="block text-gray-700 font-semibold mb-2"
//                 >
//                   Địa chỉ
//                 </label>
//                 <input
//                   defaultValue={user?.address || 'Update'}
//                   type="text"
//                   id="address"
//                   name="address"
//                   onChange={e=>setUserinfo({...userinfo,address: e.target.value})}
//                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onClick={handleUpdateProfile}
//               >
//                 Lưu thông tin
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
// User.getLayout = DefaultLayout;
import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import { useCart } from "@/components/CartContext";
import Image from "next/image";
import { BsPerson, BsFillPencilFill } from "react-icons/bs";
import { userContext } from "@/context/user";
import CardOrder from "@/components/CardOrder";

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
  const { user, handleSetUser } = useContext(userContext)
  const [activeTab, setActiveTab] = useState("all");
  const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useCart();
  console.log("User cart:", cart);
  const [userinfo, setUserinfo] = useState({
    name: user?.name || null,
    email: user?.email || null,
    phone: user?.phone || null,
    address: user?.address || null,
  })
  const [orders, setOrders] = useState(null)
  const getOrders = async () => {
    try {
      const res = await fetch(`http://localhost:8080/order/customer/${JSON.parse(localStorage.getItem('user'))._id}`)
      const orders = await res.json()
      setOrders(orders)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getOrders()
  }, [])
  const handleUpdateProfile = async () => {
    try {
      const res = await fetch('http://localhost:8080/user/update', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
          ...userinfo
        })
      })
      const data = await res.json()
      console.log(data)
      handleSetUser(data.user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row">
        <aside className="bg-white shadow-md rounded p-6 w-full md:w-1/4 md:mr-8 mb-8 md:mb-0">
          <div className="flex items-center mb-6">
            <BsPerson className="text-4xl text-gray-500 mr-4" />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-700">
                Tên người dùng
              </h2>
              <button
                onClick={() => setActiveTab("profile")}
                className="text-sm flex font-semibold text-gray-400 mt-1"
              >
                <BsFillPencilFill className="m-1" /> Chỉnh sửa thông tin
              </button>
            </div>
          </div>
          <nav>
            <TabButton
              active={activeTab === "all"}
              onClick={() => setActiveTab("all")}
            >
              Tất cả đơn hàng
            </TabButton>
            <TabButton
              active={activeTab === "pending"}
              onClick={() => setActiveTab("pending")}
            >
              Đơn hàng đang duyệt
            </TabButton>
            <TabButton
              active={activeTab === "delivering"}
              onClick={() => setActiveTab("delivering")}
            >
              Đơn hàng Đang giao
            </TabButton>
            <TabButton
              active={activeTab === "completed"}
              onClick={() => setActiveTab("completed")}
            >
              Hoàn thành
            </TabButton>
            <TabButton
              active={activeTab === "canceled"}
              onClick={() => setActiveTab("canceled")}
            >
              Đơn hàng Đã hủy
            </TabButton>
          </nav>
        </aside>
        <div className="bg-white shadow-md rounded p-6 w-full md:w-3/4">
          {activeTab === 'all' && (
            <div className="flex flex-col-reverse gap-4">
                {orders?.map(item=>(
                  <div className="" key={item._id}>
                    <CardOrder item={item}/>
                  </div>
                ))?? 'Loading....'}
            </div>
          )}
          {activeTab === 'pending' && (
            <div className="flex flex-col-reverse gap-4">
                {orders?.map(item=>(
                  item.status === 'pending' && <div className="" key={item._id}>
                    <CardOrder item={item}/>
                  </div>
                ))?? 'Loading....'}
            </div>
          )}
           {activeTab === 'delivering' && (
            <div className="flex flex-col-reverse gap-4">
                {orders?.map(item=>(
                  item.status === 'delivering' && <div className="" key={item._id}>
                    <CardOrder item={item}/>
                  </div>
                ))?? 'Loading...'}
            </div>
          )}
           {activeTab === 'completed' && (
            <div className="flex flex-col-reverse gap-4">
                {orders?.map(item=>(
                  item.status === 'completed' && <div className="" key={item._id}>
                    <CardOrder item={item}/>
                  </div>
                ))?? 'Loading....'}
                {orders?.filter(item=>item.status === 'completed').length === 0 && 'NO ORDER'}
            </div>
            
          )}
          {activeTab === 'canceled' && (
            <div className="flex flex-col-reverse gap-4">
                {orders?.map(item=>(
                  item.status === 'canceled' && <div className="" key={item._id}>
                    <CardOrder item={item}/>
                  </div>
                ))?? 'Loading....'}
            </div>
            
          )}
          {activeTab === "profile" && (
            <>
              <h3 className="text-lg font-semibold mb-4">
                Chỉnh sửa thông tin người dùng
              </h3>
              <div>
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
                    defaultValue={user?.name || 'Update'}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onChange={e=>setUserinfo({...userinfo,name: e.target.value})}
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
                    onChange={e=>setUserinfo({...userinfo,email: e.target.value})}
                    defaultValue={user?.email || 'Update'}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    onChange={e=>setUserinfo({...userinfo,phone: e.target.value})}
                    defaultValue={user?.phone || 'Update'}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    onChange={e=>setUserinfo({...userinfo,address: e.target.value})}
                    defaultValue={user?.address || 'Update'}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onClick={handleUpdateProfile}
                >
                  Lưu thông tin
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

User.getLayout = DefaultLayout;