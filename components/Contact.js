
import React from "react";
import pexel from "../image/pexels-susanne-jutzeler-sujufoto-7796409.jpg";
import Image from "next/image";

function Contact(props) {
  return (
    <div className="flex justify-center p-8 bg-gray-100">
      <div className="">
        <div className="pt-4 pb-4">
          <p className="pt-4 pb-4 text-2xl text-gray-800">Contact</p>
          <h1 className="text-4xl text-gray-800">Our Team</h1>
        </div>
        <div>
          <div className="flex p-2">
            <div>
              <Image
                src={pexel}
                alt=""
                width={100}
                height={100}
                className="rounded-xl mt-2 mr-6"
              />
            </div>
            <div>
              <p className="text-gray-800">ENGINEER MAIN AREA</p>
              <p className="text-gray-800">
                Jane Zuckent - Email: jane@construction.com
              </p>
            </div>
          </div>
          <div className="flex p-2">
            <div>
              <Image
                src={pexel}
                alt=""
                width={100}
                height={100}
                className="rounded-xl mt-2 mr-6"
              />
            </div>
            <div>
              <p className="text-gray-800">ARCHITECT</p>
              <p className="text-gray-800">
                Nick Wild - Email: nick@construction.com
              </p>
            </div>
          </div>
          <div className="flex p-2">
            <div>
              <Image
                src={pexel}
                alt=""
                width={100}
                height={100}
                className="rounded-xl mt-2 mr-6"
              />
            </div>
            <div>
              <p className="text-gray-800">DESIGNER</p>
              <p className="text-gray-800">
                Duke Donnols - Email: duke@construction.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-20 pl-10">
        <div className="border border-black rounded-md">
          <div className="p-10 mr-20">
            <div className="justify-center p-4 ml-10 pl-10">
              <h1 className="pl-10  text-4xl text-gray-800">
                GET IN TOUCH
              </h1>
              <br />
              <h3 className="text-gray-800 ml-5">
                Hãy gửi thông tin của bạn cho chúng tôi
              </h3>
            </div>
            <div>
              <div className="ml-20">
                <div className="m-4 border border-black rounded-md">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2 w-full outline-none"
                  />
                </div>
                <div className="m-4 border border-black rounded-md">
                  <input
                    type="text"
                    placeholder="Email"
                    className="p-2 w-full outline-none"
                  />
                </div>
                <div className="m-4 border border-black rounded-md">
                  <input
                    type="text"
                    placeholder="Message"
                    className="p-2 w-full outline-none"
                  />
                </div>
                <div className="ml-4 mr-4 text-center">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md">
                    SEND REQUEST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
