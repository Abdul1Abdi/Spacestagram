import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";



function App() {

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
        api_key: process.env.REACT_APP_API_KEY //Using a hidden file to hide API key, not a perfect way but I must learn more back-end to find a secure-er way to store APIs
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
        <p className="error">{errorMessage ? errorMessage : null }</p>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
