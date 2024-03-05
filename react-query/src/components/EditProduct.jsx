import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EditProduct({ editableProduct }) {
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn:(product)=> axios.patch(`http://localhost:3000/products/${product.id}`, product),
        onSuccess: ()=>{
            queryClient.invalidateQueries(['products'])
        }
    })
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    rating: "",
    description: "",
    thumbnail: "",
  });
  function handleChange(e) {
    const name = e.target.name;
    setProduct({
      ...product,
      [name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    mutate(product);
  }

  useEffect(() => {
    {
      editableProduct &&
        setProduct({
          ...product,
          id: editableProduct?.id,
          title: editableProduct?.title,
          price: editableProduct?.price,
          rating: editableProduct?.rating,
          description: editableProduct?.description,
          thumbnail: editableProduct?.thumbnail,
        });
    }
  }, [editableProduct]);

  return (
    <div className=" border border-red-400 my-5 p-4 w-full">
      <h2 className="text-center text-3xl font-bold mb-2">Update Product</h2>
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
        <button
          className="w-full border rounded-xl bg-green-500 py-3 font-bold text-white text-2xl"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}
