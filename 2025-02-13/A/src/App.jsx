import { useState, useEffect } from 'react'
import axios from 'axios'
import MyButton from './components/MyButton'
import './App.css'

const baseURL = "https://retoolapi.dev/MVwfIW/data"

const setUsers = async () => {
  const {data} = await axios.get(baseURL)
  setUsers(data)
}

function App() {
  const [users, setUsers] = useState([])
  useEffect(() =>{
    setUsers()
  }, [])

  return (
    <>
      <form>
        <fieldset>
          <legend> Kiválasztott felhasználó adatai</legend>
          <input type="text" name="nev" id="nev" placeholder="Felhasználó neve"/>
          <input type="number" name="fizetes" id="fizetes" placeholder="fizetés"/>
        </fieldset>
        <MyButton color="green">Küldés</MyButton>
      </form>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Fizetés</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({id, nev, fizetes}) => (
            <tr key={id}>
              <td>{nev}</td>
              <td>{fizetes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App