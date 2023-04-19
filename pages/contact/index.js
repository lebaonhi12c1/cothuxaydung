import DefaultLayout from "@/layout/DefaultLayout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Image from "next/image";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="bg-white p-10">
      {/* Tên công ty và logo */}
      <section className="text-center py-10">
        <h1 className="text-6xl font-bold mb-2">K.P Group</h1>
        <p className="text-gray-600">Tạo nền móng cho tương lai</p>
      </section>

      {/* Giới thiệu ngắn gọn */}
      <section
        className="container mx-auto bg-white bg-opacity-90 text-center border border-black rounded"
        data-aos="fade-up"
      >
        <h2 className="text-3xl mt-2 text-black sm:mt-4 font-bold mb-6">
          Giới thiệu về chúng tôi
        </h2>
        <div className="flex flex-wrap m-4 justify-center">
          <div className="w-full lg:w-1/2 px-4 ">
            <p className="text-lg text-black  leading-relaxed">
              Tập đoàn Khải Phát, thành lập từ năm 1968, là một trong những tập
              đoàn hàng đầu tại Việt Nam chuyên cung cấp vật liệu xây dựng chất
              lượng cao cho các công trình dân dụng, công nghiệp và hạ tầng trên
              toàn quốc. Với hơn 30 năm kinh nghiệm trong ngành, Khải Phát tự
              hào là đối tác tin cậy của hàng ngàn doanh nghiệp, chủ đầu tư và
              khách hàng cá nhân. Tập đoàn Khải Phát không chỉ phân phối các sản
              phẩm từ các thương hiệu uy tín trong nước, mà còn nhập khẩu trực
              tiếp từ các nhà sản xuất vật liệu hàng đầu thế giới. Sự đa dạng về
              loại hình sản phẩm, kết hợp với chính sách giá cạnh tranh, cam kết
              chất lượng và dịch vụ hậu mãi tốt, đã giúp tập đoàn Khải Phát vững
              vàng trên thị trường và giành được niềm tin của khách hàng. Ngoài
              ra, Khải Phát còn đầu tư vào việc phát triển hệ thống cửa hàng và
              trung tâm thương mại chuyên về xây dựng trên khắp cả nước, mang
              đến cho khách hàng trải nghiệm mua sắm tiện lợi và đáng tin cậy.
              Đồng thời, tập đoàn cũng không ngừng nâng cao chất lượng dịch vụ,
              áp dụng công nghệ tiên tiến và phát triển kinh doanh trực tuyến,
              nhằm đáp ứng nhu cầu ngày càng cao của khách hàng trong thờời đại
              số hóa. Sứ mệnh của tập đoàn Khải Phát là đồng hành cùng sự phát
              triển bền vững của ngành xây dựng Việt Nam, góp phần xây dựng một
              tương lai tươi sáng cho đất nước.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:pl-0">
            <img
              className="rounded-lg shadow-md mb-4 w-full h-auto object-cover"
              src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Ảnh minh họa cho Khải Phát"
            />
          </div>
        </div>
      </section>

      {/* Đội ngũ cốt cán */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Đội ngũ cốt cán</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <section
            data-aos="fade-right"
            className="text-center py-10"
            data-aos-deplay="400"
          >
            <div className="bg-slate-500 p-6 rounded-lg">
              <img
                className="h-32 w-32 mx-auto mb-4 rounded-full"
                src={
                  "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt="Nhân Tiger"
              />
              <h3 className="text-2xl font-semibold mb-2">Ngô Thành Nhân</h3>
              <p className="text-white">Giám Đốc Marketing</p>
            </div>
          </section>
          <section
            data-aos="fade-down"
            className="text-center py-10"
            data-aos-deplay="500"
          >
            <div className="bg-slate-500 p-6 rounded-lg">
              <img
                className="h-32 w-32 mx-auto mb-4 rounded-full"
                src="https://images.pexels.com/photos/16330446/pexels-photo-16330446.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Thành viên 1"
              />
              <h3 className="text-2xl font-semibold mb-2">Lê Bảo Nhi</h3>
              <p className="text-white">Giám đốc Thiết Kế</p>
            </div>
          </section>
          <section
            data-aos="fade-left"
            className="text-center py-10"
            data-aos-deplay="600"
          >
            <div className="bg-slate-500 p-6 rounded-lg">
              <img
                className="h-32 w-32 mx-auto mb-4 rounded-full"
                src="https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Thành viên 1"
              />
              <h3 className="text-2xl font-semibold mb-2">Ngô Hoài Nam</h3>
              <p className="text-white">Giám đốc Nhân Sự</p>
            </div>
          </section>
          {/* Thêm các thành viên khác tương tự */}
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Giá trị cốt lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="p-4 bg-white text-yellow-700 rounded-full mr-4 font-bold text-lg">
                1
              </div>
              <section data-aos="fade-right" data-aos-deplay="800">
                <p className="font-semibold">
                  Chất lượng: Cam kết cung cấp các sản phẩm vật liệu xây dựng
                  chất lượng cao, đáp ứng tiêu chuẩn quốc tế và nhu cầu của
                  khách hàng.
                </p>
              </section>
            </div>
            <div className="flex items-center">
              <div className="p-4 bg-white rounded-full text-yellow-700 mr-4 font-bold text-lg">
                2
              </div>
              <section data-aos="fade-up" data-aos-deplay="900">
                <p className="font-semibold">
                  Uy tín: Xây dựng và duy trì niềm tin của khách hàng, đối tác
                  và cộng đồng thông qua việc tuân thủ đạo đức kinh doanh và
                  chính sách minh bạch.
                </p>
              </section>
            </div>
            <div className="flex items-center">
              <div className="p-4 bg-white rounded-full text-yellow-700 mr-4 font-bold text-lg">
                3
              </div>
              <section data-aos="fade-left" data-aos-deplay="1000">
                <p className="font-semibold">
                  Dịch vụ khách hàng: Luôn lắng nghe và hiểu nhu cầu của khách
                  hàng, cung cấp dịch vụ hỗ trợ nhanh chóng và chuyên nghiệp,
                  tạo ra trải nghiệm mua sắm tốt nhất.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Thành tựu và giải thưởng */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Thành tựu và giải thưởng</h2>
        <section data-aos="fade-right" data-aos-deplay="1100">
          <div className="grid grid-cols-2 sm:grid-cols-4 whitespace-nowrap gap-8">
            {/* Giải thưởng 1 */}
            <div className="flex flex-col items-center">
              <img
                src={
                  "https://sudospaces.com/hoaphat-com-vn/2019/10/top-10-doanh-nghiep-vat-lieu-xay-dung-uy-tin-nam-2019-large.jpg"
                }
                alt="Giải thưởng 1"
                className="mb-2"
                title="top 10 doanh nghiệp vật liệu uy tín"
                width="290"
                height="180"
              />

              <p className="sm:text-lg text-sm whitespace-normal">
                top 10 doanh nghiệp vật liệu uy tín
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={
                  "https://sudospaces.com/hoaphat-com-vn/2019/09/vnr-500-medium.png"
                }
                alt="Giải thưởng 2"
                className="mb-2"
                title="top 500 doanh nghiệp lớn nhất việt nam"
                width="260"
                height="180"
              />
              <br />
              <p className="sm:text-lg text-sm whitespace-normal">
                top 500 doanh nghiệp lớn nhất việt nam
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={
                  "https://sudospaces.com/hoaphat-com-vn/2019/10/logo-forbes-50-large.jpg"
                }
                alt="Giải thưởng 3"
                className="mb-2"
                title="top 50 công ty niêm yết tốt nhất"
                width="220"
                height="180"
              />
              <p className="sm:text-lg text-sm whitespace-normal">
                top 50 công ty niêm yết tốt nhất
              </p>
            </div>
            <div className="flex flex-col whitespace-nowrap items-center">
              <img
                src={
                  "https://sudospaces.com/hoaphat-com-vn/2019/08/vietnam-value-large.jpg"
                }
                alt="Giải thưởng 4"
                className="mb-2 "
                title="thương hiệu quốc gia"
                width="160"
                height="180"
              />
              <p className="sm:text-lg text-sm whitespace-normal">
                thương hiệu quốc gia
              </p>
            </div>
            {/* Thêm các giải thưởng khác tương tự */}
          </div>
        </section>
      </section>

      {/* Các đối tác và khách hàng */}
      <section className="bg-slate-300 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Đối tác và khách hàng</h2>
          <section data-aos="fade-left" data-aos-deplay="1200">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">
              {/* Logo đối tác 1 */}
              <div className="flex justify-center items-center">
                <img
                  src={"https://www.hoaphat.com.vn/assets/images/logo.png"}
                  alt="Đối tác 1"
                  className="w-32 h-auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={
                    "https://tonnamkim.com/wp-content/uploads/2022/12/LOGO-TON-NAM-KIM-NGANG-DOC-05-1.png"
                  }
                  alt="Đối tác 1"
                  className="w-32 h-auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={"https://www.fhs.com.vn/Portal/assets/images/LOGO.png"}
                  alt="Đối tác 1"
                  className="w-12 h-auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={
                    "https://hkimg.bjyyb.net/sites/61500/61978/20210314115428204.webp"
                  }
                  alt="Đối tác 1"
                  className="w-32 h-auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={"https://www.vis.com.vn/images/logo-art.png"}
                  alt="Đối tác 1"
                  className="w-32 h-auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={
                    "https://www.novaland.com.vn/Data/Sites/1/media/Default/logo-nvl.jpg"
                  }
                  alt="Đối tác 1"
                  className="w-32 h-auto"
                />
              </div>
              {/* Thêm logo các đối tác khác tương tự */}
            </div>
          </section>
        </div>
      </section>

      {/* Liên hệ */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Liên hệ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Thông tin liên hệ */}
          <div>
            <p className="font-semibold text-xl mb-2">Tên công ty</p>
            <p>Địa chỉ: 1212 Đường Phạm Thế Hiển, Quận 8, TP HCM</p>
            <p>Số điện thoại: (84) 123 456 789</p>
            <p>Email: KhaiPhatGroup@company.com.vn</p>
            <p className="mt-4">
              Theo dõi chúng tôi trên mạng xã hội:
              <a
                href="https://www.facebook.com/thanhnhan.393939"
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://twitter.com"
                className="ml-2 text-blue-400 hover:text-blue-600"
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </p>
          </div>
          {/* Bản đồ */}
          <div className="w-full h-64 mt-10 relative">
            <iframe
              title="Google Maps"
              className="absolute bottom-10  left-0 w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.896170788047!2d106.66140757469667!3d10.742485089404266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e59fbb77249%3A0xf75ca3fcbc572f93!2zMTIxMiBQaOG6oW0gVGjhur8gSGnhu4NuLCBQaMaw4budbmcgNSwgUXXhuq1uIDgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1681809139424!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

AboutUs.getLayout = DefaultLayout;
