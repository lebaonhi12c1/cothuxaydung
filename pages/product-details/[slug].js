import DefaultLayout from "@/layout/DefaultLayout";
import { useRouter } from "next/router";
import Image from "next/image";
import bgIron from "@/image/bg_iron.jpg";
import Ironbg from "@/image/iron_bg.jpg";

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

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">{product.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div>
            <div>
              <h2 className="text-lg font-bold mb-2">Thông tin sản phẩm:</h2>
              <ul>
                <li>
                  <strong>Danh mục:</strong> {product.category}
                </li>
                <li>
                  <strong>Giá:</strong> {product.price.toLocaleString("vi-VN")} đồng
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
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetails;
