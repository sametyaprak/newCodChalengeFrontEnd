import React from "react";
import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { toDoListBase } from "./toDoListBase";

const MainCardComponent = () => {
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
      setToDoList(toDoListBase)
     
  }, [toDoList])

  return (
    <div className="main-card m-5">
      <Container className="m-5 justify-content-center">
        <Row className="">
          <Col className="title" style={{fontSize:35, color:'black'}}>To Do:</Col>
        </Row>
        <Row className="d-flex justify-content-center">
            <Col className="col col-8 justify-content-center">
            {toDoList.map((data) => (
            <Row className="d-flex justify-content-center m-4 list-item">
              <Col className="col col-6 d-flex justify-content-center title align-items-center"  style={
                            data.done 
                              ? { textDecoration: "line-through",color:"green" }
                              : { color: "red" }
                          }>
                
                {data.title}
              </Col>
              <Col className="col col-1 d-flex justify-content-center align-items-center">
                
                <Form.Check aria-label="option 1"  type="checkbox" checked={data.done} />
              </Col>
            </Row>
          ))}
            
            </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default MainCardComponent;
