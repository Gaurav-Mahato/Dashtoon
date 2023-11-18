import React,{useState,useEffect} from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import FormContainer from './FormContainer';
import {useSelector,useDispatch} from 'react-redux'
import { getImage } from '../actions/imageActions';
import Loader from './Loader';
import Message from './Message';
import { IMAGE_REQUEST_PENDING, IMAGE_REQUEST_SUCCESS } from '../actions/types';

const MangaScreen = () => {
    const [story,setStory] = useState('')
    // const [panelState,setPanelState] = useState(null)
    const dispatch = useDispatch()
    const {loading,panel,error} = useSelector(state => state.panel)
    useEffect(() => {
        
    },[panel])
    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(getImage(story))
    }
    return <>
        <main className='py-3'>
            <Container style={{minHeight: '80vh'}}>
                <Row className="mb-3 mt-3" style={{display: 'flex',flexDirection: 'row'}}>
                    <Col sm={12} md={12} lg={8} className="display-area" style={{display: 'flex', justifyContent: 'center'}}>
                        {/* {loading && <Loader></Loader>}
                        {error && <Message variant="danger" message={error}></Message>}    */}
                        {loading ? <Loader></Loader> : error ? <Message variant="danger" message={error}></Message> : panel.length !== 0 ? <>
                            <Image src={panel[panel.length-1]} style={{width: '512px'}}></Image>
                        </>: <h1>Let's visualize</h1>}
                    </Col> {/* Manga Panel Images */}
                    <Col sm={12} md={12} lg={4} className="display-text" style={{display: 'flex', flexDirection: 'row'}}>
                        <FormContainer style={{display: 'flex',alignContent: 'space-between', alignItems: 'stretch'}}>
                            <div className="col-sm-12 col-md-12">
                                <h1 className="mb-3 mb-lg-5 mb-md-4 mb-sm-3">Enter Your Story</h1>
                                <div>
                                    {panel && <h2>{panel.length} Panels</h2>}
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <Form onSubmit={submitHandler}>
                                    <Form.Group controlId="story">
                                        <Form.Label>Story</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder='Enter your story' value={story} onChange={(e) => setStory(e.target.value)}></Form.Control>
                                    </Form.Group>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <Button style={{'marginTop': '10px'}} type="submit" variant="primary" size="lg">
                                            Visualise
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </FormContainer>
                    </Col> {/* Manga Form */}
                </Row>
            </Container>
        </main>
    </>
}

export default MangaScreen;