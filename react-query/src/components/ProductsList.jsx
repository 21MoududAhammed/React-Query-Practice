import { useQuery } from "@tanstack/react-query";
import { retrieveProducts } from "../utils/index";

export default function ProductsList({onShowDetails}) {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
  });
  if (isLoading) return <div>Fetching.....</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="w-2/5">
      <h1 className="text-center text-5xl font-bold my-3">Products List</h1>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="border border-green-600 p-3 m-2 rounded"
          >
            <img src={product.thumbnail} alt="" />
            <h1 className="text-4xl text-center">{product.title}</h1>
            <div className="text-center">
              <button className="w-full  py-3 bg-gray-600 text-white font-bold rounded-xl my-2"
              onClick={()=> onShowDetails(product.id)}
              >
                Show Details
              </button>
              <button className="w-full py-3 bg-gray-600 text-white font-bold rounded-xl my-2">
                Delete
              </button>
              <button className="w-full py-3 bg-gray-600 text-white font-bold rounded-xl my-2">
               Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
