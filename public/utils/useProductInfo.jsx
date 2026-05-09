import { PRODUCTINFO_URL } from "./constants";
import { useEffect, useState } from "react";

const useProductInfo = (barcode) => {
  const [productInfo, setproductInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(PRODUCTINFO_URL + barcode);
    const json = await data.json();
    console.log(json);

    setproductInfo(json.product);
  };

  return productInfo;
};

export default useProductInfo;
