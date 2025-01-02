import React from "react";

const products = [
  {
    id: 1,
    title: "Mexican Burger",
    category: "fixing",
    price: "250.00",
    imageUrl:
      "data:image/jpeg;base64,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",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Classic Burger",
    category: "delights",
    price: "200.00",
    imageUrl:
      "https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg",
    bgColor: "bg-teal-500",
  },
  {
    id: 3,
    title: "Family Burger",
    category: "fixing",
    price: "450.00",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419424_640.jpg",
    bgColor: "bg-amber-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`relative overflow-hidden rounded-lg shadow-lg ${product.bgColor} group`}
        >
          {/* Background SVG */}
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          {/* Product Image */}
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <img
              className="relative w-40 h-40 object-cover rounded-full"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          {/* Product Info */}
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 mb-1">{product.category}</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-lg">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2">
                Rs. {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
