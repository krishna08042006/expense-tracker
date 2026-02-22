import {useState} from "react";

export default function App(){
  const[input,setInput]=useState("");
  const[num,setNum]=useState("");
  const[item,setItem]=useState([]);

  function handleSubmit(){

    if(!input || !num) return;

    setItem([...item,{
      id:Date.now(),
      input,num}]) 

   setInput("");
   setNum("");

  }

  function Deletehandle(id){
    setItem(item.filter((items)=>items.id!==id))
  }

  return(
  <>
  <h1>Expense Tracker</h1> 
   
   <label htmlFor="input">Name</label>
  <input type="text" value={input} id="input" onChange={(e)=>setInput(e.target.value)}/> 
 
  <br/><br/>

  <label htmlFor="salary">salary</label>
  <input type="number" value={num} id="salary" onChange={(e)=>setNum(e.target.value)}/> 

  <button onClick={handleSubmit}>submit</button> 

   <table border="1" cellPadding="10px">
    <thead>
     <tr>
      <th>Name</th>
      <th>amount</th> 
     </tr>
    </thead>

    <tbody>
    <tr>
      {
        item.map((items)=>(
          <div>
        <td>{items.input}</td>
        <td>{items.num}</td>
        <button onClick={()=>Deletehandle(items.id)}>delete</button> 
        </div> 
        ))
      }
    </tr>
    </tbody>
   </table>

  </>
  )
}