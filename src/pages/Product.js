import React from "react";
import "../styles/product.scss";
import App from "../App";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Tabs from "../components/Tabs";

const Product = () => {
  return (
    <App>
      <>
        <div className="wrap-product-page">
          <div className="cover-header">
            <div>
              <h4 className="font-weight-500">Products</h4>
            </div>

            <div className="cover-sort">
              <Dropdown
                icon="icon-download"
                label="Export"
                backgroundColor={"#fff"}
              />
              <Button
                icon={"icon-plus"}
                backgroundColor={"#0A6EE1"}
                iconColor={"#fff"}
              />
            </div>
          </div>

          <div className="cover-tabs">
            <Tabs />
          </div>

          <div className="cover-table-product">
            <div className="cover-search-group">
              <Search placeholder="Search products..." isShowFilter={true} />
              <Dropdown label="Actions" isShowBorder={true} />
            </div>
            <Table />
            <Pagination />
          </div>
        </div>
      </>
    </App>
  );
};

export default Product;
