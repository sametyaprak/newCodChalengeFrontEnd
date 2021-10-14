import React from "react";
import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toDoListBase } from "./toDoListBase";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const MainCardComponent = () => {
  const [toDoList, setToDoList] = useState([]);
  
  useEffect(() => {
    setToDoList(toDoListBase);
  }, [toDoList]);

  return (
    <div className="main-card m-5">
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          title: "",
          description: "",
          done: false,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <div>
            <Container className="m-5 justify-content-center">
              <Row className="">
                <Col className="title" style={{ fontSize: 35, color: "black" }}>
                  To Do:
                </Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <Col className="col col-8 justify-content-center">
                  {toDoList
                    .sort(function (a, b) {
                      return a.done - b.done;
                    })
                    .map((data) => (
                      <Row className="d-flex  m-4 list-item">
                        <Col
                          className="col col-6 d-flex justify-content-center title mt-1"
                          style={
                            data.done
                              ? {
                                  textDecoration: "line-through",
                                  color: "green",
                                }
                              : { color: "red" }
                          }
                        >
                          {data.title}
                        </Col>
                        <Col className="col col-6 d-flex justify-content-center title mt-1">
                          <Form.Check
                            name="done"
                            onChange={handleChange}
                            isInvalid={!!errors.done}
                            feedback={errors.done}
                            feedbackType="invalid"
                            id="validationFormik0"
                            checked={data.done}
                            onChange={()=>{
                              
                            }}
                          />
                        </Col>
                      </Row>
                    ))}
                </Col>
              </Row>
            </Container>
            <Container className="m-5 justify-content-center">
              <Row className="">
                <Col className="title" style={{ fontSize: 35, color: "black" }}>
                  Add new Todo...
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik01"
                      >
                        <Form.Label style={{ fontSize: 20, color: "black" }}>
                          To do Title
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                          isValid={touched.title && !errors.title}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik02"
                      >
                        <Form.Label style={{ fontSize: 20, color: "black" }}>
                          To do Description
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          isValid={touched.description && !errors.description}
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Check
                        style={{ fontSize: 20, color: "black" }}
                        name="done"
                        label="Check if it's done already"
                        onChange={handleChange}
                        isInvalid={!!errors.done}
                        feedback={errors.done}
                        feedbackType="invalid"
                        id="validationFormik0"
                      />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default MainCardComponent;
