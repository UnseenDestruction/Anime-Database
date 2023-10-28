const AnimeCard = ({ element }) => {


    return (
            <article className="anime-card">
                <a href={element.url}
                target="_blank"
                rel="noreferrer">
                    <figure>
                        <img src={element.images.jpg.image_url} alt="Anime" />
                    </figure>
                    <h3>{element.title}</h3>
                </a>
            </article>
    )
}


export default AnimeCard;