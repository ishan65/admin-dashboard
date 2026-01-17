"use client";
import React from "react";
import StatCard from "../../components/StatCard";
import { DollarSign, ShoppingBag, SquareActivity, Users } from "lucide-react";
import { motion } from "framer-motion";
import SalesOverviewChart from "../../components/SalesOverviewChart";
import CategoryDistributionChart from "../../components/CategoryDistributionChart";
import OrderDistributionChart from "../../components/OrderDistributionChart";

const pages = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Sales" icon={DollarSign} value="$123,123" />
          <StatCard name="Total Clients" icon={Users} value="1,234" />
          <StatCard name="Total Products" icon={ShoppingBag} value="145" />
          <StatCard name="Stock" icon={SquareActivity} value="12,845" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <OrderDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default pages;
