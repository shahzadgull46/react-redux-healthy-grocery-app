import { useParams } from "react-router-dom";
import { PRODUCTINFO_URL } from "../../../public/utils/constants";
import "./ProductInfo.css";
import ProductInfoShimmer from "./ProductInfoShimmer";
import useProductInfo from "../../../public/utils/useProductInfo";

const ProductInfo = () => {
  const { barcode } = useParams();
  // custom hook:
  const productInfo = useProductInfo(barcode);

  if (productInfo === null) {
    return <ProductInfoShimmer />;
  }
  const {
    product_name,
    code,
    quantity,
    brands,
    packaging,
    categories,
    countries,
    image_front_small_url,
    origin,
    origins_tags,
    manufacturing_places,
    manufacturing_places_tags,
  } = productInfo;
  return (
    <div className="product-info-wrapper">
      <span className="product-info-image-box">
        <img className="product-info-img" src={image_front_small_url} alt="" />
      </span>
      <div className="product-info-details">
        <h1 className="product-info-title">{product_name}</h1>
        {[
          { label: "Barcode", value: code },
          { label: "Quantity", value: quantity },
          { label: "Brands", value: brands },
          { label: "Packaging", value: packaging },
          { label: "Categories", value: categories },
          { label: "Origin of the product", value: origin || origins_tags },
          {
            label: "Manufacturing or processing places",
            value:
              manufacturing_places ||
              manufacturing_places_tags ||
              "Not Specified",
          },
          { label: "Countries where sold", value: countries },
        ].map((item, index) => (
          <p key={index}>
            <b>{item.label}:</b> {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ProductInfo;
