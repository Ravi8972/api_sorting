import React , {useState} from "react";

function App() {

  const APIURL ="https://jsonplaceholder.typicode.com/users";
  const[users,setUsers] = useState([]);
  const [sort , setSort] = useState(0);

  const getDetails = () =>{
    return fetch(APIURL)
    .then((response)=>response.json())
    .then((data)=>setUsers(data));
    }
    
   const SortData = () =>{
    console.log(users)
    if(sort === 0 || sort === 2){
      setUsers([...users].sort((a,b)=> a.name.length - b.name.length));
      setSort(1);
    }
    else {
      setUsers([...users].sort((a,b)=> b.name.length - a.name.length));
      setSort(2);
    }
   }


  return (
    <div className="App">
      <h1>User Details</h1>
      <div>
        <button onClick={getDetails}> User Details </button>
        <button onClick = {SortData} > Sort Data</button>
      </div>
      <ul>
        {
          users.map((user)=>
          (<li key={user.Id}> Name : {user.name} , {user.name.length} </li>))
        }
        
      </ul>
    </div>
  );
}

export default App;



