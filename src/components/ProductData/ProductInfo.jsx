import {  useParams } from "react-router-dom";
import ProductInfoShimmer from "./ProductInfoShimmer";
import HealthCard from "./HealthCard";
import { PRODUCTINFO_URL } from "../../utils/constants";
import useProductInfo from "../../utils/useProductInfo";
import mapHealthData from "../../utils/Mapper.jsx/healthMapper";
import { useState } from "react";

const ProductInfo = () => {
  const { barcode } = useParams();
  // custom hook:
  const productInfo = useProductInfo(barcode);

   const [openIndex,setopenIndex]=useState(null);
   const[manageArrow,setmanageArrow]=useState(null)

  const health = productInfo ? mapHealthData(productInfo) : null;
   const sections= health ?[
    {key:"nutrition",title:"Nutrition",data:health.nutrition},
    {key:"safety",title:"Safety",data:health.safety},
    {key:"diet",title:"Diet",data:health.diet},
    {key:"environment",title:"Environment",data:health.environment},

   ]: []
console.log(sections)


  const handleClick=(index)=>{
       setopenIndex(openIndex===index ? null : index)
       setmanageArrow()

     }

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
    <div>
      <div className="product-info m-6  p-6 flex gap-30 bg-slate-200 rounded-[7px]">
        <span>
          <img
            className="w-125 h-100 object-contain ml-9 rounded-[10px] mt-2 "
            src={image_front_small_url}
            alt=""
          />
        </span>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-[2.6rem] ">
            {product_name}- {brands}-{quantity}
          </h1>
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

      <div className="bg-slate-300 m-6 p-4">
        {" "}
        <HealthCard sections={sections} openIndex={openIndex} handleClick={handleClick} />
      </div>
    </div>
  );
};
export default ProductInfo;
