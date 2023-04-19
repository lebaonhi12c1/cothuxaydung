import React, { useEffect, useState } from "react";
import Aos from "aos";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Introduce = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className="bg-about bg-cover introduce">
      <div className="pl-6 bg-black bg-opacity-20  introduce-bg ">
        <div className="p-4 ml-4 ">
          <motion.h5
            animate={{ x: 0 }}
            initial={{ x: "100vw" }}
            transition={{ duration: 1 }}
            exit={{ x: "-100vw" }}
            key="myMotion"
            className="text-lg text-white mb-2 mr-4"
          >
            Chúng tôi là
          </motion.h5>
          <motion.h2
            animate={{ x: 0 }}
            initial={{ x: "100vw" }}
            transition={{ duration: 2 }}
            exit={{ x: "-100vw" }}
            key="myMotion"
            className="text-4xl font-bold text-orange-600"
          >
            Tập đoàn K.P
          </motion.h2>
          <motion.p
            animate={{ x: 0 }}
            initial={{ x: "100vw" }}
            transition={{ duration: 3 }}
            exit={{ x: "-100vw" }}
            key="myMotion"
            className="pt-4 text-white introduce-description"
          >
            Két Phát là Tập đoàn sản xuất công nghiệp hàng đầu Việt Nam, chuyên
            về linh vực gang thép, sản phẩm thép, điện máy gia dụng, nông nghiệp
            và bất động sản. Két Phát được thành lập từ năm 1968 và niêm yết cổ
            phiếu trên thị trường chứng khoán Việt Nam với mã KPG từ năm 2007.
            Kết Phát có thị phần số 1 Việt Nam về thép xây dựng, ống thép và
            thịt bò Úc. Kết Phát có triết lý kinh doanh là `Kết hợp cùng phát
            triển` và trách nhiệm xã hội với cộng đồng.
          </motion.p>
        </div>
        <div className="mt-4 ml-4 pl-2   flex flex-wrap text-white">
          <div className="stats-item m-2  ">
            <div className="text-4xl font-bold ml-2">
              {isMounted ? (
                <CountUp start={1900} end={1968} duration={4} separator="" />
              ) : null}
            </div>
            <br />
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: "100vw" }}
              transition={{ duration: 2 }}
              exit={{ x: "-100vw" }}
              className=""
              key="myMotion"
            >
              Năm thành lập
            </motion.div>
            <div></div>
          </div>
          <div className="stats-item m-2 ">
            <div className="text-4xl font-bold  ml-8">
              {isMounted ? (
                <CountUp start={100} end={282} duration={4} separator="" />
              ) : null}{" "}
            </div>
            <br />
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: "100vw" }}
              transition={{ duration: 3 }}
              exit={{ x: "-100vw" }}
              key="myMotion"
            >
              Dự án hoàn thành
            </motion.div>
            <div></div>
          </div>
          <div className="stats-item m-2 ">
            <div className="text-4xl font-bold ml-3">
              {" "}
              {isMounted ? (
                <CountUp start={50} end={150} duration={4} separator="" />
              ) : null}{" "}
            </div>
            <br />
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: "100vw" }}
              transition={{ duration: 4 }}
              exit={{ x: "-100vw" }}
              key="myMotion"
            >
              Chuyên Viên
            </motion.div>
            <div></div>
          </div>
          <div className="stats-item m-2 ">
            <div className="text-4xl font-bold ml-12">
              {isMounted ? (
                <CountUp start={0} end={35} duration={4} separator="" />
              ) : null}{" "}
            </div>
            <br />
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: "100vw" }}
              transition={{ duration: 5 }}
              exit={{ x: "-100vw" }}
              key="myMotion"
            >
              Đối tác kinh doanh
            </motion.div>
            <div></div>
          </div>
        </div>
        <div className="p-2 pb-6 ml-4  text-white">
          <div className="p-2 pb-4 font-light text-3xl">N.Tiger</div>
          <h3 className="ml-1 p-1">N.T.NHAN</h3>
          <h3 className="ml-2">CEO, K.P Construction</h3>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
