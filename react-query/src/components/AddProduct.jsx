import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addProduct } from "../utils";

export default function AddProduct() {
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: addProduct,
        onSuccess: ()=>{
            queryClient.invalidateQueries(["products"])
        }
    })
  const [product, setProduct] = useState({
    id:'',
    title: "",
    price: "",
    rating: "",
    description: "",
    thumbnail:'',
  });
  function handleChange(e) {
    const name = e.target.name;
    setProduct({
        ...product,
        id: crypto.randomUUID().toString(),
        [name]: e.target.value,
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
    mutate(product);
  }
  return (
    <div className=" border border-red-400 my-5 p-4 w-full">
        <h2 className="text-center text-3xl font-bold mb-2">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black rounded ps-2 w-full mb-2"
          type="text"
          value={product.title}
          onChange={handleChange}
          name="title"
          placeholder="add title"
          id=""
        />{" "}
        <br />
        <input
          className="border border-black rounded ps-2 w-full mb-2"
          type="text"
          value={product.price}
          onChange={handleChange}
          name="price"
          placeholder="add price"
          id=""
        />{" "}
        <br />
        <input
          className="border border-black rounded ps-2 w-full mb-2"
          type="text"
          value={product.rating}
          onChange={handleChange}
          name="rating"
          placeholder="add rating"
          id=""
        />
        <br />
        <input
          className="border border-black rounded ps-2 w-full mb-2"
          type="text"
          value={product.description}
          onChange={handleChange}
          name="description"
          placeholder="add description"
          id=""
        />{" "}
        <br />
        <input
          className="border border-black rounded ps-2 w-full mb-2"
          type="text"
          value={product.thumbnail}
          onChange={handleChange}
          name="thumbnail"
          placeholder="add thumbnail url"
          id=""
        />{" "}
        <br />
        <button className="w-full border rounded-xl bg-green-500 py-3" type="submit">Add</button>
      </form>
    </div>
  );
}
