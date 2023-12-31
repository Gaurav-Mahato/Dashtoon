import axios from 'axios';
import { IMAGE_ANNOTATION_EXECUTION, IMAGE_REQUEST_FAILURE, IMAGE_REQUEST_PENDING, IMAGE_REQUEST_SUCCESS } from './types';

export const addAnnotation = (annotation) => async(dispatch) => {
    dispatch({type: IMAGE_ANNOTATION_EXECUTION, payload: annotation})
}

export const getImage = (story) => async(dispatch) => {

    dispatch({type: IMAGE_REQUEST_PENDING})
    
    async function query(data) {
        const response = await fetch(
            "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: { 
                    "Accept": "image/png",
                    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                    "Content-Type": "application/json" 
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        return result;
    }
    dispatch({type: IMAGE_REQUEST_PENDING})
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
    query(input).then((response) => {
        const reader = new FileReader()
        reader.onload = () =>{
            const imageEntity = {
                link: reader.result,
                annotation: ''
            }
            dispatch({type: IMAGE_REQUEST_SUCCESS, payload: imageEntity})
        }
        reader.readAsDataURL(response)
        // console.log(reader)
        // console.log(reader)

    })
    .catch((err) => {
        console.error(err)
        dispatch({type: IMAGE_REQUEST_FAILURE,error: err.message})
    })
}