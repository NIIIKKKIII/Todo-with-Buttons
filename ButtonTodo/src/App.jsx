import axios from "axios";
import { useEffect, useState } from "react";

function App(){
const [selectedID, setSelectedID] = useState(1);
 return <div>
<button onClick={()=> setSelectedID(1)}>1</button>
<button onClick={()=> setSelectedID(2)}>2</button>
<button onClick={()=> setSelectedID(3)}>3</button>
<button onClick={()=> setSelectedID(4)}>4</button>
<button onClick={()=> setSelectedID(5)}>5</button>
<button onClick={()=> setSelectedID(6)}>6</button>
<button onClick={()=> setSelectedID(7)}>7</button>
<button onClick={()=> setSelectedID(8)}>8</button>
<button onClick={()=> setSelectedID(9)}>9</button>
<button onClick={()=> setSelectedID(10)}>10</button>

<div><Todo id={selectedID}/></div>
</div>
};



function Todo({ id }){
const [todo, setTodo] = useState({});

useEffect(()=>{
  axios.get(`http://localhost:3000/todo?id=${id}`)
  .then(response=>{setTodo(response.data)});
},[id])
return <div>
  ID:{id}
  <h1>{todo.Title}</h1><br />
  <h4>{todo.Description}</h4>
</div>

}
export default App;