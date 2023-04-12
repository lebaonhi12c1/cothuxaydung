import DefaultLayout from "@/layout/DefaultLayout";
import { useState, useEffect } from "react";
import bgIron from "@/image/bg_iron.jpg";
import Ironbg from "@/image/iron_bg.jpg";
import Image from "next/image";
import Link from "next/link";

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

function Products({ products = sampleProducts }) {
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("");
  const categories = ["all", "tôn mạ", "ống thép", "gang", "điện máy"];
  const addToCart = (product) => {
  console.log("Thêm sản phẩm vào giỏ hàng:", product);
    // Thêm logic thêm sản phẩm vào giỏ hàng ở đây
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterProducts = () => {
    let filteredProducts = [];
    if (products && products.length > 0) {
      filteredProducts = products.filter((product) => {
        if (category === "all" || product.category === category) {
          if (price === "") {
            return true;
          } else if (price === "0-100") {
            return product.price >= 0 && product.price <= 100;
          } else if (price === "100-500") {
            return product.price > 100 && product.price <= 500;
          } else if (price === "500-1000") {
            return product.price > 500 && product.price <= 1000;
          } else if (price === "1000+") {
            return product.price > 1000;
          }
        }
        return false;
      });
    }
    return filteredProducts;
  };

  useEffect(() => {
    setFilteredProducts(filterProducts());
  }, [category, price, products]);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Danh sách sản phẩm</h1>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="mr-2">Danh mục sản phẩm:</span>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="border border-gray-400 py-1 px-2 rounded"
          >
            <option value="all">Tất cả</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <span className="mr-2">Giá cả:</span>
          <select
            value={price}
            onChange={handleChangePrice}
            className="border border-gray-400 py-1 px-2 rounded"
          >
            <option value="">Tất cả</option>
            <option value="0-100">Dưới 100 đồng</option>
            <option value="100-500">Từ 100 - 500 đồng</option>
            <option value="500-1000">Từ 500 - 1000 đồng</option>
            <option value="1000+">Trên 1000 đồng</option>
          </select>
          <button
            onClick={() => setFilteredProducts(filterProducts())}
            className="bg-blue-500 text-white py-1 px-2 ml-2 rounded"
          >
            Lọc
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.name}
                className="border border-gray-400 rounded-lg shadow-sm p-4 hover:shadow-2xl transition duration-150"
              >
               <Link href={`/product-details/${product.slug}`}>
  
    <div className="relative overflow-hidden h-48 w-full mb-4">
      <Image
        src={product.image}
        alt={product.name}
        layout="fill"
        objectFit="cover"
        className="absolute h-full w-full rounded-t-lg transform hover:scale-110 transition duration-300"
      />
    </div>
    <div className="p-4 flex whitespace-nowrap">
      <div>
        <h2 className="text-lg font-bold whitespace-nowrap hover:text-or  mb-2">{product.name}</h2>
        <span className="text-sm font-light block">
          {product.category}
        </span>
      </div>
      <div className="pl-20 ml-10 ">
        <span className="text-lg font-bold text-orange-600 block">
          {product.price} đồng
        </span>
      </div>
    </div>
  
</Link>
              </div> 
            ))
          ) : (
            <p className="text-center text-lg font-semibold">
              Không tìm thấy sản phẩm phù hợp.
            </p>
          )}
        </div>
    </div>
  );
}

export default function WithDefaultLayout(props) {
  return (
    <DefaultLayout>
      <Products {...props} />
    </DefaultLayout>
  );
}