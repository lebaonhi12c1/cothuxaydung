import React from "react";
//icons
import { AiTwotoneGold } from "react-icons/ai";
import { BsFillGeoAltFill, BsFacebook, BsInstagram } from "react-icons/bs";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import { ImPhone } from "react-icons/im";
//
``
function Footer(props) {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-600 text-slate-800">
      <div className="container mx-auto ">
        <div className="pt-6">
          <div className="flex justify-center">
            <div className="ml-10  m-4 p-2 ">
              <h1 className="text-4xl font-bold">
                <AiTwotoneGold className="ml-1 text-6xl"></AiTwotoneGold> K.P
              </h1>
            </div>
            <div className="mr-5  m-4 p-4 mt-10 pt-10">
              <p className="flex ml-10 pl-20 ">
                {" "}
                <BsFillGeoAltFill className="m-1"></BsFillGeoAltFill> KCN Phố
                Nối A, Xã Giai Phạm, Huyện Yên Mỹ, Tỉnh Hưng Yên, Việt Nam{" "}
              </p>
            </div>
            <div className="ml-20 mt-10 pt-8">
              <button className="mr-6 text-3xl hover:text-white">
                {" "}
                <IoLogoFacebook />{" "}
              </button>
              <button className="mr-6 text-3xl hover:text-white">
                {" "}
                <IoLogoInstagram />{" "}
              </button>
              <button className="mr-6 text-3xl hover:text-white">
                <IoLogoTwitter />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center ml-10 pl-10">
          <div className="p-4 ">
            <div className=" mb-4">
              <span className="">Văn phòng Hà Nội</span>
            </div>
            <div className="mb-2">
              <span className="flex ">
                <BsFillGeoAltFill className="m-1 "></BsFillGeoAltFill> 66 Nguyễn
                Du, P. Nguyễn Du, Q. Hai Bà Trưng, Hà Nội
              </span>
            </div>
            <span className="flex hover:text-white">
              <ImPhone className="m-1 "></ImPhone> 024 628 48 666
            </span>
          </div>
          <div className="p-4">
            <div className=" mb-4">
              <span className="">Văn phòng Tp.HCM</span>
            </div>
            <div className=" mb-2">
              <span className="flex">
                <BsFillGeoAltFill className="m-1 "></BsFillGeoAltFill> 66 Nguyễn
                Du, P. Nguyễn Du, Q. Hai Bà Trưng, Hà Nội
              </span>
            </div>

            <span className="flex hover:text-white">
              <ImPhone className="m-1 "></ImPhone> 024 628 48 666
            </span>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <span>Văn phòng Đà Nẵng</span>
            </div>
            <div className="mb-2">
              <span className="flex">
                <BsFillGeoAltFill className="m-1 "> </BsFillGeoAltFill> 66
                Nguyễn Du, P. Nguyễn Du, Q. Hai Bà Trưng, Hà Nội
              </span>
            </div>

            <span className="flex hover:text-white">
              <ImPhone className="m-1 "></ImPhone> 024 628 48 666
            </span>
          </div>
        </div>
        <div className="p-4 pt-10 flex justify-center">
          <div className="flex ">
            <div className="p-4 mr-20 pr-20 ">
              <span className="pr-20 ">
                Copyright © 2019 Ket Phat Group. Designed
                by K.P
              </span>
            </div>
            <div className="ml-20 pl-20 mt-4">
              <button className="ml-10 mr-10 hover:text-white">Điều khoản sử dụng </button>
              <button className="hover:text-white">Chính sách bảo mật</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
