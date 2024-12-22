import axios from "axios";
import toast from "react-hot-toast";


const handleError = (error) => {
  
    if(!error.response.data.message){
      toast.error("Server Not Responding!")
      return
    }
  
    toast.error(error.response.data.message);
    return
  };
  
  
  export const getAllTokens = async () => {
    try {
      const response = await axios.get(`/api/getTokensMock/`);
      if(response.status===200){
        return response.data.data;
      }

    }catch(error){
      handleError(error)

    }
      
  };
  
  
  export const getToken = async (token) => {
    
    try {
      const response = await axios.get(`/api/getTokenMock?token_address=${token}`);
      if(response.status===200){
        return response.data.data;
      }

    }catch(error){
      handleError(error)

    }
      
  };
  