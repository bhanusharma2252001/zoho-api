import React, { useState } from "react";
import { useEffect } from "react";
import TableRow from "./tableRow";
function createTableRow(user) {
  return <TableRow firstname={user.First_Name} lastname={user.Last_Name} email={user.Email} />
}
const BasicTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/users/")
      .then((o) => {
        var myAPIRES = o.json()
        myAPIRES.then((o) => {
          setData(o)
        })
      })
  }, [])


  return (<div><center>
    <h1>Total Users - {data.length} </h1>
    <table>
      <tr>
        <th>firstname</th>&nbsp;
        <th>lastname</th> &nbsp;
        <th>email</th>
      </tr>
      {data.map((o) => {
        return createTableRow(o)
      })}
    </table></center></div>)
}

export default BasicTable;
