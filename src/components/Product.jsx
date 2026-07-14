// groData is the prop
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../public/utils/userContext";
import { useDispatch } from "react-redux";
import { addItems } from "../../public/utils/store/grocerySlice";
const Product = ({ groData, preference }) => {
  const { product_name, brands, image_front_small_url, quantity } = groData;

  const { loggedInUser } = useContext(UserContext);

  const dispatch = useDispatch()
  const handleAddItem = (groData)=>{
          // dispatch an action
           dispatch(addItems(groData))
  }
  return (
    <div className="product relative flex flex-col rounded-[10px] m-4 overflow-hidden  bg-white border-2 border-transparent hover:border-blue-300 transition-all duration-300 cursor-pointer">
      <Link
        to={`/product/${groData.code}`}
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <div className="text-xs py-1 rounded-t-[10px]  text-center w-full rounded-xs text-white bg-green-500">
          Preference Match:{preference}%
        </div>
        <div>
          <img
            className="w-36 h-36 mx-auto object-contain mt-5"
            src={image_front_small_url}
            alt=""
          />
        </div>
        <div className=" px-3 mt-2">
          <h3 className="text-sm font-semibold line-clamp-2 h-10">
            {product_name}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{quantity}</p>

          <p className="text-xs text-gray-500 truncate">{brands}</p>

          {/* <div>{loggedInUser}</div> */}
        </div>
      </Link>
      <button className="m-3 border-2 border-green-600 text-green-600 rounded-lg py-2 hover:bg-green-600 hover:text-white"
      onClick={()=>handleAddItem(groData)}>
        🛒 Add to Grocery List
      </button>
    </div>
  );
};
const calculateScores = (groData) => {
  if (!groData) {
    return 0;
  }
  let score = 0;
  const {
    ecoscore_grade,
    nutriscore_grade,
    nutriments,
    ingredients_analysis_tags,
  } = groData;

  const sugarValue = nutriments?.sugars_100g;
  const proteinvalue = nutriments?.proteins_100g;

  if (ecoscore_grade === "a" || ecoscore_grade === "b") {
    score += 20;
  }
  if (nutriscore_grade === "a") {
    score += 30;
  }
  if (sugarValue != null && sugarValue <= 5) {
    score += 20;
  }
  if (proteinvalue != null && proteinvalue >= 10) {
    score += 20;
  }
  if (ingredients_analysis_tags?.includes("en:palm-oil-free")) {
    score += 10;
  }

  return score;
};

// Higher order component:
// input product card ==> card with preference percentage
export const withPreferenceLabel = (Product) => {
  return (props) => {
    const totalScores = calculateScores(props.groData);

    const MAX_SCORE = 100;
    const percentage = (totalScores / MAX_SCORE) * 100;
    return <Product {...props} score={totalScores} preference={percentage} />;
  };
};

export default Product;
