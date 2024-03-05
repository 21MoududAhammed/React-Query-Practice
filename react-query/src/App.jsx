import { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

export default function App() {
  const [idToShowDetails, setIdToShowDetails] = useState(1);
  const [editableProduct, setEditableProduct] = useState(null);
  function handleShowDetails(id){
    setIdToShowDetails(id);
  }
  function handleEditProduct(product){
    setEditableProduct(product);
  }
  return (
    <div className="flex">
    <ProductsList onShowDetails={handleShowDetails} onEditProduct={handleEditProduct}/>
    <div>
    <ProductDetails id={idToShowDetails}/>
    <AddProduct/>
    <EditProduct editableProduct={editableProduct}/>
    </div>
    </div>
  );
}
