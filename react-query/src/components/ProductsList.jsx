import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { retrieveProducts } from "../utils/index";
import axios from "axios";
import { useState } from "react";

export default function ProductsList({ onShowDetails, onEditProduct }) {
    const [ page, setPage] = useState(1);
  const queryClient = useQueryClient();
  //   to load products
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", {page}],
    queryFn: retrieveProducts,
  });
  // to delete a product
  const { mutate } = useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:3000/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  function handleDeleteProduct(id) {
    mutate(id);
  }

  if (isLoading) return <div>Fetching.....</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="w-2/5">
      <h1 className="text-center text-5xl font-bold my-3">Products List</h1>
      <ul>
        {products.data.map((product) => (
          <li
            key={product.id}
            className="border border-green-600 p-3 m-2 rounded"
          >
            <img src={product.thumbnail} alt="" />
            <h1 className="text-4xl text-center">{product.title}</h1>
            <div className="text-center">
              <button
                className="w-full  py-3 bg-gray-600 text-white font-bold rounded-xl my-2"
                onClick={() => onShowDetails(product.id)}
              >
                Show Details
              </button>
              <button
                className="w-full py-3 bg-gray-600 text-white font-bold rounded-xl my-2"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </button>
              <button
                className="w-full py-3 bg-gray-600 text-white font-bold rounded-xl my-2"
                onClick={() => onEditProduct(product)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-5 mx-2">
        {products.prev && (
          <button
            className="w-full py-3 bg-red-600 text-white font-bold rounded-xl my-2"
            onClick={() => setPage(products.prev)}
          >
            prev
          </button>
        )}
        {products.next && (
          <button
            className="w-full py-3 bg-red-600 text-white font-bold rounded-xl my-2"
            onClick={() => setPage(products.next)}
          >
            Next
          </button>
        )}
      </div>
      
    </div>
  );
}
