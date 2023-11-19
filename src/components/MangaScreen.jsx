import React,{useState,useEffect} from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import FormContainer from './FormContainer';
import {useSelector,useDispatch} from 'react-redux'
import { addAnnotation, getImage } from '../actions/imageActions';
import Loader from './Loader';
import Message from './Message';
import { IMAGE_REQUEST_PENDING, IMAGE_REQUEST_SUCCESS } from '../actions/types';

const MangaScreen = () => {
    const [story,setStory] = useState('')
    const [annotation,setAnnotation] = useState('')
    // const [panelState,setPanelState] = useState(null)
    const dispatch = useDispatch()
    const {loading,panel,error} = useSelector(state => state.panel)
    useEffect(() => {
        
    },[panel])
    const submitHandler = async (e) => {
        e.preventDefault()
        if(panel.length === 0 || panel[panel.length-1].annotation !== '') dispatch(getImage(story))
        else{
            dispatch(addAnnotation(annotation))
            setAnnotation('')
            setStory('')
        }
    }
    return <>
        <main className='py-3'>
            <Container style={{minHeight: '80vh'}}>
                <Row className="mb-3 mt-3" style={{display: 'flex',flexDirection: 'row'}}>
                    <Col sm={12} md={12} lg={8} className="display-area" style={{display: 'flex', justifyContent: 'center',position: 'relative'}}>
                        {/* {loading && <Loader></Loader>}
                        {error && <Message variant="danger" message={error}></Message>}    */}
                        {loading ? <Loader></Loader> : error ? <Message variant="danger" message={error}></Message> : (panel.length !== 0 && panel[panel.length-1].annotation === '') ? <>
                            <div style={{
                                position: 'absolute',
                                top: '10%',
                                right: '10%', 
                                padding: '10px 20px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                color: 'black',
                                maxWidth: '45%',
                                textAlign: 'center'
                            }}>
                                <p>{annotation}</p>
                            </div>
                            <Image src={panel[panel.length-1].link} style={{width: '100%'}}></Image>
                        </>: <h1>Let's visualize</h1>}
                    </Col> {/* Manga Panel Images */}
                    <Col sm={12} md={12} lg={4} className="display-text" style={{}}>
                        <FormContainer style={{}}>
                            <div className="col-sm-12 col-md-12">
                                <h1 className="mb-3 mb-lg-5 mb-md-4 mb-sm-3">Enter Your Story</h1>
                                <div>
                                    {panel && <h2>{panel.length} Panels</h2>}
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <Form onSubmit={submitHandler}>
                                    {(panel.length === 0 || panel[panel.length-1].annotation !== '') ? 
                                    
                                    <Form.Group controlId="story">
                                        <Form.Label>Story</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder='Enter your story' value={story} onChange={(e) => setStory(e.target.value)}></Form.Control>
                                    </Form.Group> : 
                                    <Form.Group>
                                        <Form.Label>Annotation</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder='Enter your annotation' value={annotation} onChange={(e) => setAnnotation(e.target.value)}></Form.Control>
                                    </Form.Group>}
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