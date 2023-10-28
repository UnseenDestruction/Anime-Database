import Header from './Components/Header/header.jsx'
import Nav from './Components/left/nav.jsx'
import Content from './Components/Content/content.jsx'
import { useState, useEffect } from 'react'



function App() {

  const [animeList, setAnimeList] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = useState([])

  const GetTopAnime = async () => {
      const response = await fetch('https://api.jikan.moe/v4/top/anime')
      const { data } = await response.json();

        setTopAnime(data.slice(0, 6))
  }


  useEffect( () => {
      GetTopAnime();

  }, [])


  const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`)
			.then(res => res.json());

      console.log(temp)

		setAnimeList(temp);
	}

  return (
    <div className='App'>
      <Header />
      <div className='content-wrap'>
        <Nav topAnime={topAnime} />
        <Content HandleSearch={HandleSearch}
					search={search}
					setSearch={setSearch}
					animeList={animeList} />
      </div>
    </div>
  )
}

export default App
