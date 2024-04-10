import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from './Components/TableComponent.jsx';

import './App.css'

function App() {
  // const [myData, setMyData] = useState([]);
  // const [isError, setIsError] = useState("");

  // const getMyPostData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setMyData(res.data);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getMyPostData();
  // }, []);

  return (
    <>
      {/* <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(0, 10).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div> */}
      <Table />
    </>
  )
}

export default App
