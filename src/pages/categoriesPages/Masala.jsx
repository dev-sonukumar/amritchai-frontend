import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";

const Masala = () => {
  const { products } = useContext(ShopContext);
  const [masalaProducts, setMasalaProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item) => item.category === "masala");
    setMasalaProducts(filtered);
  }, [products]);

  return (
    <div className="pt-10 border-t">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
        <Title text1="MASALA" text2="TEA" />
      </div>

      {masalaProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {masalaProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-10">
          No Masala Tea found.
        </div>
      )}
    </div>
  );
};

export default Masala;
