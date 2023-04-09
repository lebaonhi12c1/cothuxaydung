import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const RelatedProducts = ({ products }) => {
  const router = useRouter();

  return (
    <div className="related-products mt-6">
      <h2 className="text-xl font-bold mb-4">Sản phẩm liên quan:</h2>
      <div className="w-full">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={2000}
        transitionTime={1000}
        showArrows={false}
        showIndicators={false}
        className="m-4"
        swipeable
        centerMode
        slidesToShow={1}
        centerSlidePercentage={20}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card cursor-pointer p-4 bg-white rounded-lg border border-gray-200 shadow-md transition-all duration-200 ease-in-out transform hover:scale-110"
            onClick={() => router.push(`/product-details/${product.slug}`)}
          >
            <div className="w-full flex justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={170}
                height={200}
                className="product-image mx-auto"
              />
            </div>
            <h3 className="text-center mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-center text-red-600 font-medium">
              {product.price.toLocaleString("vi-VN")} đồng
            </p>
          </div>
        ))}
      </Carousel>

      </div>
      </div>
  );
};

export default RelatedProducts;
