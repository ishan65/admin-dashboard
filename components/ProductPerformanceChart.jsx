"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Legend,
  Bar,
} from "recharts";

const ProductPerformanceChart = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch or generate product performance data here
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => setProductData(data.products))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border-[#1f1f1f] mx-2 md:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <h2 className="text-base md:text-xl font-semibold mb-4 text-gray-100 text-center md:text-left">
        Product Performance
      </h2>
      <div className="w-full h-64 md:h-80">
        <ResponsiveContainer>
          <BarChart data={productData}>
            <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              interval={"preserveStartEnd"}
            />
            <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} width={40} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend
              wrapperStyle={{
                fontSize: "12px",
              }}
            />
            <Bar
              dataKey="Retention"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
            <Bar
              dataKey="Revenue"
              fill="#266976"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
            <Bar
              dataKey="Profit"
              fill="#667043"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
            {/* Add other necessary components like XAxis, YAxis, Tooltip, and Bar here */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProductPerformanceChart;
