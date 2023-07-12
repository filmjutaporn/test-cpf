import React from "react";
import styles from "../styles/product.module.scss";
import MainLayout from "../MainLayout";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Tabs from "../components/Tabs";
import Checkbox from "../components/Checkbox";
import { useProduct } from "../hooks/useProduct";

const Product = () => {
  const {
    handleSearch,
    products = [],
    searchValue = "",
    handleClearSearch,
    inputSearch = "",
    handleChange,
  } = useProduct();

  const tableHeader = [
    <Checkbox />,
    "Product name",
    "Product No.",
    "Category",
    "Date",
    "Price",
    "Status",
    "",
  ];

  return (
    <MainLayout>
      <div className={styles["wrap-product-page"]}>
        <div className={styles["cover-header"]}>
          <h4 className="font-weight-500">Products</h4>

          <div className={styles["cover-sort"]}>
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

        <div className={styles["cover-tabs"]}>
          <Tabs />
        </div>

        <div className={styles["cover-table-product"]}>
          <div className={styles["cover-search-group"]}>
            <Search
              placeholder="Search products..."
              isShowFilter={true}
              handleSearch={(e) => handleSearch(e)}
              isShowClearSearch={searchValue !== ""}
              handleClearSearch={() => handleClearSearch()}
              value={inputSearch}
              handleChange={(e) => handleChange(e)}
            />
            <Dropdown label="Actions" isShowBorder={true} />
          </div>

          <Table tableBody={products} tableHeader={tableHeader} />

          {products?.length > 0 && (
            <Pagination total={products?.length} page={1} pageSize={10} />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
