import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";

const Chocolate = () => {
  const { products } = useContext(ShopContext);
  const [teaProducts, setTeaProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item) => item.category === "chocolate");
    setTeaProducts(filtered);
  }, [products]);

  return (
    <div className="pt-10 border-t">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
        <Title text1="CHOCOLATE" text2="TEA" />
      </div>

      {teaProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {teaProducts.map((item, index) => (
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
          No Chocolate Tea found.
        </div>
      )}
    </div>
  );
};

export default Chocolate;
