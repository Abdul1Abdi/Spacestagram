
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const DisplayPhotos = ({photos, likeToggle}) => {
    const heart = <FontAwesomeIcon icon={faHeart} />
    return(
        <ul>
            {
                photos.map((photo, index) => {
                    // Changes class name depending on whether the photo is licked or not. 
                    // This is changed using the likeToggle
                    const likeClass = photo.liked ? "liked" : "unliked"

                    return(
                        // Since there is only 1 photo per day the date can serve as a unique ID
                        <li key={photo.date}>
                            <img src={photo.url} alt={photo.title}/>
                            <div className="textContainer">
                                <h3>{photo.title}</h3>
                                <p>{photo.explanation}</p>
                                <div className="buttonAndMetaContainer">
                                    <div className="authorAndDateContainer">
                                        <p>{photo.copyright}</p>
                                        <p>{photo.date}</p>
                                    </div>
                                    <button className={likeClass} onClick={() => likeToggle(index)}>Like <span className="heart">{heart}</span></button>
                                </div>

                            </div>
                            
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default DisplayPhotos;