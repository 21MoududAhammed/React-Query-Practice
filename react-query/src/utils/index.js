import axios from 'axios';
const retrieveProducts = async({queryKey}) =>{
    const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
    return response.data;
}

export {retrieveProducts};