import { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";

export default function App() {
  const [idToShowDetails, setIdToShowDetails] = useState(1);
  function handleShowDetails(id){
    setIdToShowDetails(id);
  }
  return (
    <div className="flex">
    <ProductsList onShowDetails={handleShowDetails} />
    <div>
    <ProductDetails id={idToShowDetails}/>
    <AddProduct/>
    </div>
    </div>
  );
}
