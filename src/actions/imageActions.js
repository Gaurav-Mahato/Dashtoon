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
}