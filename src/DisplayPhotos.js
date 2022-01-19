
const DisplayPhotos = ({photos}) => {
    console.log(photos)
    return(
        <ul>
            {
                photos.map(photo => {
                    return(
                        // Since there is only 1 photo per day the date can serve as a unique ID
                        <li key={photo.date}>
                            <img src={photo.url} alt={`A photo of ${photo.title}`}/>
                            <h3>{photo.title}</h3>
                            <p>{photo.explanation}</p>
                            <div className="buttonAndMetaContainer">
                                <div className="authorAndDateContainer">
                                    <p>{photo.copyright}</p>
                                    <p>{photo.date}</p>
                                </div>
                                <button>Like</button>
                            </div>
                            
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default DisplayPhotos;