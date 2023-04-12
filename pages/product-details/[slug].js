import DefaultLayout from "@/layout/DefaultLayout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import bgIron from "@/image/bg_iron.jpg";
import Ironbg from "@/image/iron_bg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RelatedProducts from "@/components/ProductSlider";

const sampleProducts = [
  {
    slug: "san-pham-a",
    name: "Sản phẩm A",
    category: "tôn mạ",
    price: 50,
    image: bgIron,
  },
  {
    slug: "san-pham-b",
    name: "Sản phẩm B",
    category: "ống thép",
    price: 150,
    image: Ironbg,
  },
  {
    slug: "san-pham-c",
    name: "Sản phẩm C",
    category: "gang",
    price: 550,
    image: bgIron,
  },
  {
    slug: "san-pham-d",
    name: "Sản phẩm D",
    category: "điện máy",
    price: 1001,
    image: Ironbg,
  },
];

const ProductDetails = () => {
  
  const router = useRouter();
  const { slug } = router.query;
  const product = sampleProducts.find((p) => p.slug === slug);
  const [mainImage, setMainImage] = useState(product ? product.image : "");
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleProducts.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMainImage(sampleProducts[currentIndex].image);
  }, [currentIndex]);

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <Image
              src={mainImage}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto"
            />
            <div className="flex flex-wrap justify-center mt-4 space-x-2">
              {sampleProducts.map((p, index) => (
                <div
                  key={index}
                  className="w-16 h-16 border-2 border-gray-200 rounded-full overflow-hidden cursor-pointer"
                  onClick={() => handleThumbnailClick(p.image)}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={100}
                    height={100}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>    
          <div>
            <div>
            <h1 className="text-2xl font-bold mb-6">{product.name}</h1>
            <table className="w-min border-collapse border border-gray-300 mb-6">
                <tbody>
                  <tr>
                    <th className="text-left whitespace-nowrap border border-gray-300 px-4 py-2 ">Kích thước tiêu chuẩn</th>
                    <td className="border border-gray-300 px-4 py-2">Thông tin chi tiết</td>
                  </tr>
                  <tr>
                    <th className="text-left whitespace-nowrap border border-gray-300 px-4 py-2">Độ dày</th>
                    <td className="border border-gray-300 px-4 py-2">Thông tin chi tiết</td>
                  </tr>
                  <tr>
                    <th className="text-left whitespace-nowrap border border-gray-300 px-4 py-2">Tỉ lệ carbon</th>
                    <td className="border border-gray-300 px-4 py-2">Thông tin chi tiết</td>
                  </tr>
                  <tr>
                    <th className="text-left whitespace-nowrap border border-gray-300 px-4 py-2">Ứng dụng</th>
                    <td className="border border-gray-300 px-4 py-2">Thông tin chi tiết</td>
                  </tr>
                </tbody>
              </table>
              <ul>
                <li>
                  <strong>Danh mục:</strong> {product.category}
                </li>
                <li>
                <   div className="text-red-600 text-2xl">{product.price.toLocaleString("vi-VN") } đồng</div>         
                 </li>
              </ul>
            </div>
            <div>
              <button className="bg-red-500 text-white py-1 px-2 rounded mt-2">
                Mua ngay
              </button>{" "}
              <br />
              <button className="bg-blue-500 text-white py-1 px-2 rounded mt-2">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Mô tả sản phẩm:</h2>
            <p>
              Nội dung mô tả sản phẩm sẽ được thêm vào đây. Hãy cung cấp thông tin chi tiết về sản phẩm, các tính năng đặc biệt và lợi ích mà sản phẩm mang lại cho người dùng.
            </p>
          </div>
          
        </div>
        <RelatedProducts products={sampleProducts} ></RelatedProducts>
      </div>   
  </DefaultLayout>
  );
};

export default ProductDetails;