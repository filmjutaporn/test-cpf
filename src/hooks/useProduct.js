import React, { useEffect, useState } from "react";
import axios from "axios";

export const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    handleFetchProductList();
  }, []);

  const handleSearch = (e) => {
    const { value } = e.target;
    if (e?.key === "Enter") {
      setSearchValue(value);
      handleFetchProductList(value);
    }
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setInputSearch("");
    handleFetchProductList();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputSearch(value);
  };

  const handleFetchProductList = (params) => {
    let url = "http://localhost:3001/products";

    if (params) {
      url += `/${params}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response?.data?.products);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    handleSearch,
    products,
    searchValue,
    inputSearch,
    handleClearSearch,
    handleChange,
  };
};
