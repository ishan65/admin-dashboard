"use client";

import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];
import { motion } from "framer-motion";

const CategoryDistributionChart = () => {
  const [categoryData, setcategoryData] = useState([]);
  const [isSmallorMediumScreen, setIsSmallorMediumScreen] = useState(false);

  useEffect(() => {
    // Fetch or generate category distribution data here
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => setcategoryData(data.categories))
      .catch((error) => console.error("Error fetching category data:", error));
  }, []);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallorMediumScreen(window.innerWidth < 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const outerRadius = isSmallorMediumScreen ? 60 : 80;

  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl
  p-4 md:p-6 border-[#1f1f1f] mx-2 md:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <h2 className="text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left">
        Category Distribution
      </h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={outerRadius}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderBlock: "#4b5563",
                borderRadius: "8px",
                padding: "8px",
                fontSize: "14px",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend
              iconType="circle"
              layout="horizontal"
              align="center"
              wrapperStyle={{ fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart;
