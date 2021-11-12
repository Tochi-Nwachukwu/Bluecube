import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import SideNav from './components/SideNav'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import Card from './components/Card'
import axios from 'axios'
import Profile from './components/Profile'


function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('boys');


  const baseUrl = 'https://api.unsplash.com/search/photos';
  const accessKey = 'wPZ4XYRHKCBtghITTdKLsMJKQDp6l43ZZ5GA1re0kYc'

  const URL = `${baseUrl}?client_id=${accessKey}&query=${searchTerm}`

  const getData = () => {
    axios.get(URL).then((response) => {
      setData(response.data.results)
    })

    console.log(data)
  }


  const getSearchTerm = (e) => {

    const searchEntry = e.target.value;
    console.log(searchEntry)

    setSearchTerm(searchEntry)
    getData()
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <SideNav />
      <div className='main'>
        <div className="top-bar">
          <SearchBar searchFunction={getSearchTerm} />
          <Profile />
        </div>
        <Filter />

        <div className="card-section">
          {data.map((item) => (<Card key={item.id} cardData={item} />))}
        </div>

      </div>
    </div>
  )
}

export default App
