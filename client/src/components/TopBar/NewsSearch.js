import Axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";

export default function NewsSearch() {
  const history = useHistory();

  const search = (event) => {
    event.preventDefault();
    console.log("submitted")
    console.log(event.target);
    // the value of the input search field
    console.log(event.target[0].value)
    let searchTerm = event.target[0].value;
    if (searchTerm === '') {
      return;
    }
    // Axios.get('/api/news/search/' + searchTerm).then(data => {
    //   console.log(data);
    // })
    let currentLocation = window.location.pathname;
    let alreadyNews;
    if (currentLocation === '/news') {
      alreadyNews = true;
    }
    else {
      alreadyNews = false;
    }
    history.push('/news?q=' + searchTerm);
    if (alreadyNews) {
      window.location.reload();
    }
  }
  
  return (
    <form onSubmit={(event) => search(event)} className='search-form'>
      <input className='search-input' type='text'></input>
      <button className='btn-secondary btn dropdown-basic should-log-in' type='submit'>Search</button>
    </form>
  )
}