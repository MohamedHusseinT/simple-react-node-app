import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Student({data}){
  return(
    <div className="Student">
      <p>{data.name} - {data.email} - {data.id}</p>
    </div>
  )
}
function App() {
  const [data, setData] = useState([]);
  async function getData(){
    try {
      axios.defaults.baseURL = "http://workshop1-lb01-82469052.us-east-2.elb.amazonaws.com";
      const res = await axios.get("/students");
      setData(res.data);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="App">
      {
        data.map((item, index) => <Student data={item} key={item.id}/>)
      }
    </div>
  );
}

export default App;
