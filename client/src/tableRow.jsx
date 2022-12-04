import React from "react";
const TableRow = (props) => {
  return (
    <tr>
      <td>{props.firstname}</td>
      &nbsp;
      <td>{props.lastname}</td>
      &nbsp; &nbsp; &nbsp;
      <td>{props.email}</td>
    </tr>
  )
}

export default TableRow;
