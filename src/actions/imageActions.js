import axios from 'axios';
import { IMAGE_REQUEST_FAILURE, IMAGE_REQUEST_PENDING, IMAGE_REQUEST_SUCCESS } from './types';

export const getImage = (story) => async(dispatch) => {
    dispatch({type: IMAGE_REQUEST_PENDING})
    console.log(story)
    const input = {
        "inputs": story
    }
    const config =  {
        headers: { 
            Accept: "image/png",
            Authorization: "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
            'Content-Type': "application/json" 
        }
    }
    try{
        const {data} = await axios.post('https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud',JSON.stringify(input),config)
        // const response = await axios.post('/panels',JSON.stringify(data),headers)
        // const result = await response.blob()
        dispatch({type: IMAGE_REQUEST_SUCCESS, payload: data})
    }
    catch(error){
        console.error(error)
        dispatch({type: IMAGE_REQUEST_FAILURE, payload: error.message})
    }
    
}