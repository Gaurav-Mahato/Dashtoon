import React from "react";
import {Row,Col,Container} from "react-bootstrap";

const FormContainer = ({children}) => {
    return(
        
          <Row className="justify-content-md-center col-sm-12 col-md-12">
              <Col md={12} xs={12} style={{display: 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>
                  {children}
              </Col>
          </Row>
        
    )
}

export default FormContainer;