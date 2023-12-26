import './App.css';
import {useState,useEffect} from 'react';


function App() {

  const [resourceType,setResourcetype]=useState('post')

  useEffect(()=>{
    console.log("Useeffect is called")

    return ()=>{
      console.log("Component  is about to  unmount ");
    }
  },[resourceType])
  return (
    <div className="App">
      <div>{resourceType}</div>
      <button onClick={()=>setResourcetype('post')}>Post</button>
      <button onClick={()=>setResourcetype('User')}>User</button>
      <button onClick={()=>setResourcetype('comment')}>Comment</button>
      
    </div>
  );
}

export default App;
