import { useDispatch, useSelector } from "react-redux";
import Product from "../../../src/components/Product";
import { clearItems } from "./grocerySlice";
import ProductInfoShimmer from "../../../src/components/ProductData/ProductInfoShimmer";
const GroceryList = () => {

  // const groceryItems = useSelector((store) => store.grocery.items);
 
         const store =useSelector((store)=>store)
         const groceryItems = store.grocery.items;

  const dispatch = useDispatch();
  const handleRemoveList = () => {
    dispatch(clearItems());
  };
  return (
    <div>
      <div className="flex justify-center my-6 ">
        <button
          onClick={handleRemoveList}
          className=" bg-slate-700 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200"
        >
          🗑️ Remove All List Items
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6 p-7 m-7 bg-slate-200">
        {groceryItems.map((items) => {
          return <Product groData={items} key={items.code} />;
        })}
        {groceryItems.length === 0 && (
          <h1>
            : 🛒 Your Grocery List is Empty. Browse products and add your first
            item.
          </h1>
        )}
      </div>
    </div>
  );
};
export default GroceryList;
