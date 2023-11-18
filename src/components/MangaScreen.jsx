import React,{useState,useEffect} from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import FormContainer from './FormContainer';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import { getImage } from '../actions/imageActions';
import Loader from './Loader';
import Message from './Message';
import { IMAGE_REQUEST_PENDING, IMAGE_REQUEST_SUCCESS } from '../actions/types';

const MangaScreen = () => {
    const [story,setStory] = useState('')
    const [panelState,setPanelState] = useState(null)
    const dispatch = useDispatch()
    const {loading,panel,error} = useSelector(state => state.panel)
    useEffect(() => {
        console.log('Render Triggered')
    },[panel])
    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch({type: IMAGE_REQUEST_PENDING})
        // dispatch(getImage(story))
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
        query({"inputs": "Astronaut riding a horse"}).then((response) => {
            // setPanelState(response)
            const reader = new FileReader()
            reader.onload = () => {
                setPanelState(reader.result)
            }
            reader.readAsDataURL(response)
            console.log(response)
            dispatch({type: IMAGE_REQUEST_SUCCESS})
        });
    }
    // const convert = async() => {
    //     if(panel){
    //         const result = await panel.blob()
    //         console.log(result)
    //         setPanelState(result)
    //         return panelState
    //     }
    // }
    return <>
        <main className='py-3'></main>
        <Container>
            <Row>
                <Col sm={12} md={12} lg={8} className="display-area">
                    {/* {loading && <Loader></Loader>}
                    {error && <Message variant="danger" message={error}></Message>}    */}
                    {loading ? <Loader></Loader> : error ? <Message variant="danger" message={error}></Message> : panel ? <>
                        <Image src={panelState}></Image>
                    </>: <h1>Hello</h1>}
                </Col> {/* Manga Panel Images */}
                <Col sm={12} md={12} lg={4} className="display-text">
                    <FormContainer>
                        <h1>Enter Your Story</h1>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="story">
                                <Form.Label>Story</Form.Label>
                                <Form.Control type="text" placeholder='Enter your story' value={story} onChange={(e) => setStory(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Button style={{'marginTop': '10px'}} type="submit" variant="primary">
                                Visualise
                            </Button>
                        </Form>
                    </FormContainer>
                </Col> {/* Manga Form */}
            </Row>
        </Container>
    </>
}

export default MangaScreen;