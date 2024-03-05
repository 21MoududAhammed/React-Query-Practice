import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../utils";

export default function ProductDetails({id}){
    
    const {data:product, error, isLoading} = useQuery({
        queryKey:["products",`${id}`],
        queryFn: getProductDetail,
    })
  
    if(error) return <div>{error.message}</div>
    if(isLoading) return <div>Fetching....</div>
    return (
       <div className="w-2/5">
        <h1 className="text-5xl font-bold text-center my-2 ">Product Details</h1>
         <div className="border border-gray-900 p-2  mt-5">
            <img className="rounded-full max-w-96" src={product.thumbnail} alt="" />
            <h1 className="text-4xl">{product.title}</h1>
            <h2 className="text-3xl">Price: {product.price}</h2>
            <h3 className="text-2xl">Rating: {product.rating}</h3>
            <p>Description: {product.description}</p>

        </div>
       </div>
    );
}