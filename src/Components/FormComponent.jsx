// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';
// import axios from 'axios';

// export default function FormComponent() {
//     const [inputData, setInputData] = useState({
//         id: '',
//         title: '',
//         body: ''
//     })
//     function handleSubmit(event) {
//         event.preventDefault();
//         axios.post('https://jsonplaceholder.typicode.com/posts', inputData).then(res => {
//             alert("Data Added succefully");
//         })
//     }

//     return (<>
//         <Form onSubmit={handleSubmit}>
//             <Row>
//                 <Col>
//                     <Form.Control htmlFor="id" placeholder="id" onChange={(event) => {
//                         setInputData({ ...inputData, id: event.target.value })
//                     }} />
//                 </Col>
//                 <Col>
//                     <Form.Control htmlFor='title' placeholder="title" onChange={(event) => {
//                         setInputData({ ...inputData, title: event.target.value })
//                     }} />
//                 </Col>
//                 <Col>
//                     <Form.Control htmlFor="body" placeholder="body" onChange={(event) => {
//                         setInputData({ ...inputData, body: event.target.value })
//                     }} />
//                 </Col>
//             </Row>
//             <Button variant="dark" type='submit'>Dark</Button>
//         </Form>
//     </>
//     );
// }