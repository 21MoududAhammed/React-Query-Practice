import axios from 'axios';
const retrieveProducts = async({queryKey}) =>{
    const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
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

export {retrieveProducts, getProductDetail, addProduct};