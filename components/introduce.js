import React from "react";
import Aos from "aos";
//countup
import CountUp from "react-countup";
//intersetion observer hook
import { InView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const MyComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
};

function Introduce(props) {
  return (
    <div className="bg-about bg-cover ">
      <div className="pl-20   bg-black bg-opacity-50 ">
        <div className="p-4 ml-20">
          <motion.h5   animate={{ x: 0 }}
                  initial={{ x: "100vw" }}
                  transition={{ duration: 1 }}
                  exit={{ x: "-100vw" }}
                  key="myMotion" className="text-lg text-white mb-2 mr-4">Chúng tôi là</motion.h5>
          <motion.h2   animate={{ x: 0 }}
                  initial={{ x: "100vw" }}
                  transition={{ duration: 2 }}
                  exit={{ x: "-100vw" }}
                  key="myMotion" className="text-4xl font-bold text-orange-600">Tập đoàn K.P</motion.h2>
          <motion.p   animate={{ x: 0 }}
                  initial={{ x: "100vw" }}
                  transition={{ duration: 3 }}
                  exit={{ x: "-100vw" }}
                  key="myMotion" className="pt-4 text-white">
            Két Phát là Tập đoàn sàn xuất công nghiệp hàng đầu Việt Nam,
            <br /> chuyên về linh vực gang thép, sản phẩm thép, điện mây gia
            dụng,
            <br /> nông nghiệp và bắt động sàn. Két Phát được thành lập từ{" "}
            <br /> năm 1968 và niêm yết cổ phiếu trên thị trường chứng khoán{" "}
            <br /> Việt Nam với mã KPG từ năm 2007. Kết Phát có thị phần số 1{" "}
            <br /> Việt Nam về thép xây dựng, ống thép và thịt bò Úc. Kết Phát
            có <br /> triết lý kinh doanh là `Két hợp cùng phát triễn` và trách
            nhiệm xã <br />
            hội với cộng đồng
          </motion.p>
        </div>
        <div className=" mt-4 ml-20 flex  text-white">
          <div className="p-4">
            <div className="text-4xl font-bold">
              {InView ? (
                <CountUp start={1900} end={1968} duration={4} separator="" />
              ) : null}
            </div>
            <br />
            <motion.div animate={{ x: 0 }}
                  initial={{ x: "100vw" }}
                  transition={{ duration: 2 }}
                  exit={{ x: "-100vw" }}
                  key="myMotion"> Năm thành lập</motion.div>
            <div>______</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold">
              {InView ? (
                <CountUp start={100} end={282} duration={4} separator="" />
              ) : null}{" "}
            </div>
            <br />
            <motion.div animate={{ x: 0 }}
                  initial={{ x: "100vw" }}
                  transition={{ duration: 3 }}
                  exit={{ x: "-100vw" }}
                  key="myMotion"> Dự án hoàn thành</motion.div>
            <div>______</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold">
              {" "}
              {InView ? (
                <CountUp start={50} end={150} duration={4} separator="" />
              ) : null}{" "}
            </div>
            <br />
            <motion.div animate={{ x: 0 }}
                  initial={{ x: "100vw" }}
                  transition={{ duration: 4 }}
                  exit={{ x: "-100vw" }}
                  key="myMotion"> Chuyên Viên</motion.div>
            <div>______</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold">
              {InView ? (
                <CountUp start={0} end={35} duration={4} separator="" />
              ) : null}{" "}
            </div>
            <br />
            <motion.div animate={{ x: 0 }}
                  initial={{ x: "100vw" }}
                  transition={{ duration: 5 }}
                  exit={{ x: "-100vw" }}
                  key="myMotion"> Đối tác kinh doanh </motion.div>
            <div>______</div>
          </div>
        </div>
        <div className="p-2 pb-6 ml-20  text-white">
          <div className="p-2 pb-4 font-light text-3xl">N.Tiger</div>
          <h3 className="ml-1 p-1">N.T.NHAN</h3>
          <h3 className="ml-2">CEO, K.P Construction</h3>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
