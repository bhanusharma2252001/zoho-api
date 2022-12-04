import React, { useState } from "react";
import { useEffect } from "react";
import TableRow from "./tableRow";
import axios from "axios"
function createTableRow(user) {
  return <TableRow firstname = {user.First_Name} lastname = {user.Last_Name} email ={user.Email}/>
}
const BasicTable = ()=> {
  const [ data, setData ] = useState([]);
    
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/users/')
      .then((res) => {
        console.log(res);
         setData(res.data)
       })
       .catch((err) => console.log(err));
      },[]);
  // const [ data, setData ] = useState([]);
  // useEffect( ()=>{fetch("http://localhost:3000/api/users/")
  //     .then((o)=> {
  //       var myAPIRES = o.json()
  //       setData([myAPIRES])
  //       console.log("hello",myAPIRES) 
  //     })},[]) 
          
    
  return (<table>
  <tr>
    <th>firstname</th>
    <th>lastname</th>
    <th>email</th>
  </tr>
{data.map((o)=>{
  return createTableRow(o)
})}
</table>)}

export default BasicTable;
