import React, { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result);
          setLoading(false);
        },
        (error) => {
          throw error;
        }
      )
  }, [])
  return (
    <div>
      <h1>Data List</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
        </tr>
        {loading &&
          <tr>
            <th>Loading.....</th>
          </tr>}
        {users.map((d) => {
          return (
            <tr>
              <td>{d.name}</td>
              <td>{d.username}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
export default App;
