import UserCard from './components/UserCard'
import './App.css'

function App() {
  const users = [
    {
      "profilkep": "https://avatar.iran.liara.run/public/33",
      "nev": "Kiss József",
      "email": "kissjosef@liara",
      "telefonszam": "06201234567",
      "statusz": "Aktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/8",
      "nev": "Kovács Péter",
      "email": "kovacs@liara",
      "telefonszam": "06221177493",
      "statusz": "Aktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/51",
      "nev": "Nagy Anna",
      "email": "nagy@liara",
      "telefonszam": "06218255150",
      "statusz": "Inaktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/94",
      "nev": "Tóth Gábor",
      "email": "toth@liara",
      "telefonszam": "06256902061",
      "statusz": "Inaktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/39",
      "nev": "Szabó Katalin",
      "email": "szabo@liara",
      "telefonszam": "06247616277",
      "statusz": "Inaktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/54",
      "nev": "Varga László",
      "email": "varga@liara",
      "telefonszam": "06279980436",
      "statusz": "Inaktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/25",
      "nev": "Horváth Zoltán",
      "email": "horvath@liara",
      "telefonszam": "06237963866",
      "statusz": "Inaktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/36",
      "nev": "Balogh Éva",
      "email": "balogh@liara",
      "telefonszam": "06212643749",
      "statusz": "Aktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/95",
      "nev": "Farkas Dániel",
      "email": "farkas@liara",
      "telefonszam": "06277391705",
      "statusz": "Inaktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/21",
      "nev": "Kiss Anikó",
      "email": "kiss@liara",
      "telefonszam": "06308617931",
      "statusz": "Aktív"
    },
    {
      "profilkep": "https://avatar.iran.liara.run/public/95",
      "nev": "Molnár Tamás",
      "email": "molnar@liara",
      "telefonszam": "06302199680",
      "statusz": "Inaktív"
    }
  ]

  return (
    <>
      <div>
        {users.map((user, index) => (
          
        <UserCard
          key={index}
          profilkep={user.profilkep} // Csak a kép URL-je
          nev={user.nev}
          email={user.email}
          telefonszam={user.telefonszam}
        />

        ))}
      </div>
    </>
  )
}

export default App