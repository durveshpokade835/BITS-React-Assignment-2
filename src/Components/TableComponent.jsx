import { Table, Container, Col, Form, Row, Button } from 'react-bootstrap/';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import FormComponent from './FormComponent.jsx';

export default function TableComponent() {
    const [records, setRecords] = useState([]);
    const [editID, setEditID] = useState()
    const [inputData, setInputData] = useState({
        id: '',
        title: '',
        body: ''
    })


    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', inputData).then(res => {
            setRecords([...records, res.data]);
            setInputData({
                id: '',
                title: '',
                body: ''
            });
            alert("Data Added succefully");
        })
    }
    function handleDelete(deleteID) {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${deleteID}`).then(res => {
            const updatedRecords = [...records];
            updatedRecords.splice(deleteID, 1);
            setRecords(updatedRecords);
        })
    }

    function handleEdit(eId) {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${eId}`).then(res => {
            setInputData(res.data)

        })
    }
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/posts/${editID}`, inputData).then(res => {
            // setRecords([res.data, ...records]);
            setInputData({
                id: '',
                title: '',
                body: ''
            });
            alert("Data Added succefully");
        })
    };

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setRecords(res.data)
        })
    }, [])


    return (<>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control htmlFor="id" value={inputData.id}
                            placeholder="id" onChange={(event) => {
                                setInputData({ ...inputData, id: event.target.value })
                            }} />
                    </Col>
                    <Col>
                        <Form.Control htmlFor='title'
                            value={inputData.title} placeholder="title" onChange={(event) => {
                                setInputData({ ...inputData, title: event.target.value })
                            }} />
                    </Col>
                    <Col>
                        <Form.Control htmlFor="body"
                            value={inputData.body}
                            placeholder="body" onChange={(event) => {
                                setInputData({ ...inputData, body: event.target.value })
                            }} />
                    </Col>
                </Row>
                <Button variant="dark" type='submit'>Add</Button>
                <Button variant="dark" type='submit' onClick={handleUpdate}>Update</Button>
            </Form>
        </Container>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>Description</th>
                    <th colSpan={2}>CRUD Operations</th>
                </tr>
            </thead>
            <tbody>
                {records.map((record, id) => (
                    <tr key={id}>
                        <td>{record.id}</td>
                        <td>{record.title}</td>
                        <td>{record.body}</td>
                        <td><Button variant="light" type='submit' onClick={() => {
                            handleEdit(record.id)
                            setEditID(record.id)
                        }}>Edit</Button></td>
                        <td><Button variant="light" type='submit' onClick={() => handleDelete(id)}>Delete</Button></td>
                    </tr>
                ))}

            </tbody>
        </Table>
    </>
    )
}