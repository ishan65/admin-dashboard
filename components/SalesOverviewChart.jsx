"use client";
import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

const SalesOverviewChart = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Fetch or generate sales data here
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => setSalesData(data.sales))
      .catch((error) => console.error("Error fetching sales data:", error));
  }, []);

  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-x1 p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <h2 className="text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left">
        Sales Overview
      </h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <CartesianGrid stroke="#4b5563" strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} width={40} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e1e",
                borderColor: "#4b5563",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#9c27b0"
              strokeWidth={3}
              dot={{ fill: "#9c27b0", r: 4 }}
              activeDot={{ r: 6, stokeWidth: 2, stroke: "#9c27b0" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
