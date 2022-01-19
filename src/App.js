import './App.css';
import DateForm from './DateForm';
import DisplayPhotos from './DisplayPhotos';
import axios from "axios";
import { useEffect, useState } from "react";

// Trouble getting data using async await
// used a .env file to hide API key. want to learn some backend
// to hide the API key from public eyes
// Learned how to use date input in form
// Learned how to get current date and learned about epoch time

function App() {
  const currentDate = new Date();

  const [startDate, setStartDate] = useState("2021-01-01");
  const [endDate, setEndDate] = useState("");
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
        api_key: process.env.REACT_APP_API_KEY //Using a hidden file to hide API key, not a perfect way but I want to learn more back-end to find a securer way to store APIs
      }
    }).catch(error => {
      setErrorMessage("Sorry there was an error getting data from the API");
    })
    setPhotos(response.data);
  }

  //useEffect to get API data on load

  useEffect(() => {
    getNASAData();
  }, [])


  return (
    <div className="App">
      <header>
        <h1>See Space</h1>
        <DateForm />
        <p className="error">{errorMessage ? errorMessage : null }</p>
      </header>
      <main>
        <DisplayPhotos photos={photos} />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
