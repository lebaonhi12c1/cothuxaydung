import React from "react";
import { AiTwotoneGold } from "react-icons/ai";
import { BsFillGeoAltFill } from "react-icons/bs";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { ImPhone } from "react-icons/im";

function Footer(props) {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-600 text-slate-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-4xl font-bold mb-4 md:mb-0">
            <AiTwotoneGold className="text-6xl inline-block mr-2" /> K.P
          </div>
          <div className="mb-4 md:mb-0">
          
          </div>
          <div className="flex space-x-6">
            <button className="text-3xl hover:text-white">
              <IoLogoFacebook />
            </button>
            <button className="text-3xl hover:text-white">
              <IoLogoInstagram />
            </button>
            <button className="text-3xl hover:text-white">
              <IoLogoTwitter />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center md:text-left">
            <h3 className="mb-4">Văn phòng Hà Nội</h3>
            <p>
              <BsFillGeoAltFill className="inline-block mr-1" /> 66 Nguyễn Du,
              P. Nguyễn Du, Q. Hai Bà Trưng, Hà Nội
            </p>
            <p className="hover:text-white">
              <ImPhone className="inline-block mr-1" /> 024 628 48 666
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-4">Văn phòng Tp.HCM</h3>
            <p>
              <BsFillGeoAltFill className="inline-block mr-1" /> 1212 Phạm Thế
              Hiển, Phường 5, Quận 8, TP HCM
            </p>
            <p className="hover:text-white ">
              <ImPhone className="inline-block mr-1" /> 024 628 48 666
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-4">Văn phòng Đà Nẵng</h3>
            <p>
              <BsFillGeoAltFill className="inline-block mr-1" /> 77 Nguyễn Huệ,
              P. Nguyễn Huệ, Q. Hai Bà Trưng, Đà Nẵng
            </p>
            <p className="hover:text-white">
              <ImPhone className="inline-block mr-1" /> 024 628 48 666
            </p>
          </div>
        </div>
        <div className=" border-black  border-t-2 mt-4">
          {" "}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 ">
            <div className="text-center md:text-left mb-4 md:mb-0">
              Copyright © 2019 Ket Phat Group. Designed by K.P
            </div>
            <div className="flex space-x-4">
              <button className="hover:text-white">Điều khoản sử dụng</button>
              <button className="hover:text-white">Chính sách bảo mật</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
