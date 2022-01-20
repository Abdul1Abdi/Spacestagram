import './App.css';
import DateForm from './DateForm';
import DisplayPhotos from './DisplayPhotos';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let currentDate = new Date();
  // This gets us the current date, new Date format doesn't match so toISOString gives us the correct date info but with extra info at the end. This splits off the info we need
  currentDate = currentDate.toISOString().split("T")[0];

  const [startDate, setStartDate] = useState("2021-01-01");
  const [endDate, setEndDate] = useState(currentDate);
  const [submit, setSubmit] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //NASA APOD endpoint URL
  const url = "https://api.nasa.gov/planetary/apod";


  //Get data from API
  const getNASAData = async () => {
    const response = await axios({
      url: url,
      method: "GET",
      dataResponse: "json",
      params: {
        start_date: "2021-01-01",
        end_date: "2021-01-19",
        api_key: "ZJR60oMxAe8iWaxaVWxEj4G2hbqa4aO13p5njp1B" 
      }
    }).catch(error => {
      setErrorMessage("Sorry there was an error getting data from the API");
    })
    setPhotos(response.data);
  }

  const startDateHandler = (event) => {
    setStartDate(event.target.value);
  }

  const endDateHandler = (event) => {
    setEndDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmit(true);
  }

  const likeToggle = index => {
    // Create copy of useState photos
    const copyOfPhotos = [...photos];
    // Make copy of photo at index of button clicked
    const photo = copyOfPhotos[index];
    // If it is undefined or liked is set to false, add/change it to true
    if (!photo.liked){
      photo.liked = true;
    } else {
      // If it is true change it to false
      photo.liked = false;
    }
    //reassign changed photo to copy of state photos array
    copyOfPhotos[index] = photo;
    //set useState photos to the updated copy which will trigger rerender with updated like button
    // Styling is changed using ternary class name in DisplayPhotos.js
    setPhotos(copyOfPhotos);
  }
  //useEffect to get API data on load

  useEffect(() => {
    // API call will be made only if the user submitted a date
    if (submit) {
      getNASAData();
    }
  }, [submit])


  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Spacestagram</h1>
          <DateForm
            startDate={startDate}
            endDate={endDate}
            startDateHandler={startDateHandler}
            endDateHandler={endDateHandler}
            submitHandler={submitHandler} />
          <p className="error">{errorMessage ? errorMessage : null}</p>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <DisplayPhotos
            photos={photos}
            likeToggle={likeToggle}
          />
        </div>
      </main>
      <footer>
        <div className="wrapper">
          <p>Made by <a href="https://github.com/Abdul1Abdi" target="_blank">Abdul</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
