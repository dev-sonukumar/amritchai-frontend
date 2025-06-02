// src/pages/Orders.jsx
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    const loadOrderData = async () => {
      if (!token) return;
      setLoading(true);
      try {
        const { data } = await axios.post(
          `${backendUrl}/api/order/userorders`,
          {},
          { headers: { token } }
        );

        if (data.success) {
          const allOrdersItem = data.orders.flatMap((order, idx) =>
            order.items.map((item, i) => ({
              ...item,
              _id: `${item._id}_${order._id}_${i}`,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
              orderId: order._id,
            }))
          );
          setOrderData(allOrdersItem.reverse());
        }
      } catch (error) {
        console.error("Error loading orders:", error);
      }
      setLoading(false);
    };

    loadOrderData();
  }, [token]);

  const totalPages = Math.ceil(orderData.length / itemsPerPage);
  const paginatedOrders = orderData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status) => {
    const statusLower = status?.toLowerCase();
    if (statusLower === "Order Placed") return "bg-yellow-500";
    // if (statusLower === "Order Placed") return "bg-green-500";
    if (statusLower === "processing") return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {loading ? (
        <p className="text-center py-10 text-gray-500">
          Loading your orders...
        </p>
      ) : (
        <div>
          {paginatedOrders.length > 0 ? (
            paginatedOrders.map((item) => (
              <div
                key={item._id}
                className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-start gap-6 text-sm">
                  <img
                    className="w-16 sm:w-20"
                    src={item.image[0]}
                    alt={item.name}
                  />
                  <div>
                    <p className="sm:text-base font-medium">{item.name}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-base text-gray-700">
                      <p>
                        {currency}
                        {item.price}
                      </p>
                      <p>Qty: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className="mt-1 text-sm">
                      Date:{" "}
                      <span className="text-gray-400">
                        {new Date(item.date).toDateString()}
                      </span>
                    </p>
                    <p className="mt-1 text-sm">
                      Payment:{" "}
                      <span className="text-gray-400">
                        {item.paymentMethod}
                      </span>
                    </p>
                    <p className="mt-1 text-sm">
                      Payment Status:{" "}
                      <span
                        className={`font-medium ${
                          item.payment ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {item.payment ? "Paid" : "Unpaid"}
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Order ID: #{item.orderId.slice(-6)}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={`min-w-2 h-2 rounded-full ${getStatusColor(
                        item.status
                      )}`}
                    />
                    <p className="text-sm md:text-base capitalize">
                      {item.status}
                    </p>
                  </div>
                  <button
                    onClick={() => alert("Tracking not implemented yet")}
                    className="border px-4 py-2 text-sm"
                  >
                    Track
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-10 text-gray-500">No orders found.</p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-4 py-1 mx-1 border rounded ${
                    currentPage === idx + 1 ? "bg-gray-800 text-white" : ""
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
