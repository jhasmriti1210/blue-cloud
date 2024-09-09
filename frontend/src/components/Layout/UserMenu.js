
import { Layout } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className=" shadow-lg rounded-lg p-4">
          <h4 className="text-xl font-bold mb-4 text-center">Dashboard</h4>
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/dashboard/user/profile"
              className="block px-4 py-2 rounded-lg  hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition duration-200"
            >
              Profile
            </NavLink>
            <NavLink
              to="/dashboard/user/orders"
              className="block px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition duration-200"
            >
              Orders
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserMenu;
