import React, { useEffect } from 'react';
import Axios from 'axios';
export default function TopHeadlines() {

  useEffect(() => {
    Axios.get('/api/news/topheadlines').then(data => {
      console.log(data);
    })
  }, [])

  return (<>
  </>)
}