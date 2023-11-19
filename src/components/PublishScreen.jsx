import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import {useSelector} from "react-redux"

const PublishScreen = () => {
    useEffect(() => {
        alert('Confirm the 10 selected panels')
    },[])
    const {panel} = useSelector(state => state.panel)
    return(
        <>
            <main className="py-3">
                <h3 className="text-center">Confirm your panels</h3>
                {panel.length > 0 ? <Container>
                    <Row className="mb-5">
                        {panel.map(p => {
                            return (
                                <Col lg={4} md={6} sm={12} style={{position: 'relative'}}>
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
                                        <p>{p.annotation}</p>
                                    </div>
                                    <Image src={p.link} width="100%" />
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Button variant="primary" size="lg">Publish</Button>
                        </div>
                    </Row>
                </Container> : <h1>Hello World</h1>}
            </main>
        </>
    )
}

export default PublishScreen;
