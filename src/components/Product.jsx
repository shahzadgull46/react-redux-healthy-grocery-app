// groData is the prop
import { Link } from "react-router-dom";

const Product = ({ groData }) => {
  const { product_name, brands, image_front_small_url, quantity } = groData;

  return (
    <Link
      to={`/product/${groData.code}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <div className="product flex flex-col rounded-[10px] m-4 p-4 w-74.5 h-78 bg-white border-2 border-transparent hover:border-blue-300 transition-all duration-300 cursor-pointer">
        <div>
          <img
            className="w-50 h-50 p-3  flex justify-center items-center object-contain"
            src={image_front_small_url}
            alt=""
          />
        </div>
        <div className="flex items-center">
          <span>{product_name} -</span>
          <span>{quantity}</span>
          <span>{brands}</span>
        </div>
       
      </div>
    </Link>
  );
};
export default Product;
