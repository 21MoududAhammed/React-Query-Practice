import axios from 'axios';
const retrieveProducts = async({queryKey}) =>{
    // console.log(queryKey);
    const response = await axios.get(`http://localhost:3000/${queryKey[0]}?_page=${queryKey[1].page}&_per_page=5`);
    

    return response.data;
}

const getProductDetail = async({queryKey}) =>{
    const response = await axios.get(`http://localhost:3000/${queryKey[0]}/${queryKey[1]}`);
    return response.data;
}

const addProduct =(newProduct)=>{
    const response =  axios.post(`http://localhost:3000/products`, newProduct)
    return response;
}

// const editProduct=({})

export {retrieveProducts, getProductDetail, addProduct};