import { Table, Container, Col, Form, Row, Button } from 'react-bootstrap/';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import FormComponent from './FormComponent.jsx';

export default function TableComponent() {
    const [records, setRecords] = useState([]);

    const [inputData, setInputData] = useState({
        id: '',
        title: '',
        body: ''
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setRecords(res.data)
        })
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', inputData).then(res => {
            setRecords([...records, res.data]);
            setInputData({ id: "", title: "", body: "" });
            alert("Data Added succefully");
        })
    }
    return (<>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control htmlFor="id" placeholder="id" onChange={(event) => {
                            setInputData({ ...inputData, id: event.target.value })
                        }} />
                    </Col>
                    <Col>
                        <Form.Control htmlFor='title' placeholder="title" onChange={(event) => {
                            setInputData({ ...inputData, title: event.target.value })
                        }} />
                    </Col>
                    <Col>
                        <Form.Control htmlFor="body" placeholder="body" onChange={(event) => {
                            setInputData({ ...inputData, body: event.target.value })
                        }} />
                    </Col>
                </Row>
                <Button variant="dark" type='submit'>submit</Button>
            </Form>
        </Container>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {records.map((record, id) => (
                    <tr key={id}>
                        <td>{record.id}</td>
                        <td>{record.title}</td>
                        <td>{record.body}</td>
                    </tr>
                ))}

            </tbody>
        </Table>
    </>
    )
}