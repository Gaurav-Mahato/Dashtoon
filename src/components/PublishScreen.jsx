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
                        {/* <Col lg={4} md={6} sm={12}>
                            <Image src={'https://images.unsplash.com/photo-1588090644556-14707d0e886a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk2ODZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDAzMTcwNjF8&ixlib=rb-4.0.3&q=80&w=1080'}
                        </Col> */}
                        {panel.map(p => {
                            return (
                                <Col lg={4} md={6} sm={12} >
                                    <Image src={p} width="100%" />
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
