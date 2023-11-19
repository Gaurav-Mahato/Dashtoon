import axios from 'axios';
import { IMAGE_ANNOTATION_EXECUTION, IMAGE_REQUEST_FAILURE, IMAGE_REQUEST_PENDING, IMAGE_REQUEST_SUCCESS } from './types';

export const addAnnotation = (annotation) => async(dispatch) => {
    dispatch({type: IMAGE_ANNOTATION_EXECUTION, payload: annotation})
}

export const getImage = (story) => async(dispatch) => {

    dispatch({type: IMAGE_REQUEST_PENDING})

    try{
        const {data} = await axios.get(
            `https://api.unsplash.com/photos/random?client_id=eG43SZmBnYLPcWEjn8xM_OB6i3DpA8G6b7pYpYh7O-M&orientation=squarish&query=${story}`
        )
        // console.log(data.urls.regular)
        const imageEntity = {
            link: data.urls.regular,
            annotation: ''
        }

        dispatch({type: IMAGE_REQUEST_SUCCESS, payload: imageEntity})
    }
    catch(err){
        console.error(err)
        dispatch({type: IMAGE_REQUEST_FAILURE, payload: err.message})
    }

    // async function query(data) {
    //     const response = await fetch(
    //         "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
    //         {
    //             headers: { 
    //                 "Accept": "image/png",
    //                 "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
    //                 "Content-Type": "application/json" 
    //             },
    //             method: "POST",
    //             body: JSON.stringify(data),
    //         }
    //     );
    //     const result = await response.blob();
    //     return result;
    // }
    // dispatch({type: IMAGE_REQUEST_PENDING})
    // console.log('Triggered')
    // const input = {
    //     "inputs": story
    // }
    // const config =  {
    //     headers: { 
    //         Accept: "image/png",
    //         Authorization: "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
    //         'Content-Type': "application/json" 
    //     }
    // }
    // try{

    //     const {data} = await axios.post('https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud',JSON.stringify(input),config)
    //     data = await data.blob()
    //     const reader = new FileReader()
    //     reader.onload = () => console.log('reader loaded')
    //     reader.readAsDataURL(data)
    //     // const response = await axios.post('/panels',JSON.stringify(data),headers)
    //     // const result = await response.blob()
    //     dispatch({type: IMAGE_REQUEST_SUCCESS, payload: reader.result})
    // }
    // catch(error){
    //     console.error(error)
    //     dispatch({type: IMAGE_REQUEST_FAILURE, payload: error.message})
    // }

    // query(input).then((response) => {
    //     const reader = new FileReader()
    //     reader.onload = () => dispatch({type: IMAGE_REQUEST_SUCCESS, payload: reader.result})
    //     reader.readAsDataURL(response)
    //     // console.log(reader)
    //     // console.log(reader)
        
    // })
    // .catch((err) => {
    //     console.error(err)
    //     dispatch({type: IMAGE_REQUEST_FAILURE,error: err.message})
    // })
}