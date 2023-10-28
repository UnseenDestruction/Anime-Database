import { useState } from 'react';
import AnimeCard from './card.jsx'


const Content = (props) => {

    const [toggler, setTogller] = useState('black')

    const mode = () => {
        setTogller(toggler === 'black' ? "white" : "black" )
    }
    
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={props.HandleSearch}>
                    <input
                        type="search"
                        placeholder="Search for an anime...." 
                        required
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </form>
            </div>
            <div className='anime-list'>
                {props.animeList && props.animeList.data ? (
                    props.animeList.data.map(element => (
                        <AnimeCard 
                            element={element}
                            key={element.mal_id}
                        />
                    ))
                ) : (
                    <p>No anime data available.</p>
                )}
            </div>
        </main>
    );
}

export default Content;
