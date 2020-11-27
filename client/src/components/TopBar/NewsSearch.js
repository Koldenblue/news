import Axios from 'axios';
import React from 'react';

export default function NewsSearch() {
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
    Axios.get('/api/news/search/' + searchTerm).then(data => {
      console.log(data);
    })
  }
  
  return (
    <form onSubmit={(event) => search(event)} className='search-form'>
      <input type='text'></input>
      <button type='submit'>Search</button>
    </form>
  )
}