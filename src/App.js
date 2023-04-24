import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import { Route, Routes } from 'react-router';
import SingleHeroPage from './SingleHeroPage/SingleHeroPage';
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const [heroes, setHeroes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters?apikey=354ccd1ec621ef1a5005bc23b26f8aa6`)
    .then((res) => res.json())
    .then((data)=> {
      setHeroes(data.data.results);

    })
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainContent heroes={heroes} setHeroes={setHeroes} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}></Route>
        <Route path='/heroes/:id' element={<SingleHeroPage/>}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
