import React, { useEffect, useState } from 'react';
import NewsSearch from './NewsSearch';
import ShouldLogIn from './ShouldLogIn';
import { useHistory } from "react-router-dom";

export default function TopBar(props) {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  }

  return (<>
    <div className='topbar'>
      <NewsSearch search={props.search}/>
      <div className='empty-div'></div>
      
      {/* <ShouldLogIn /> */}
      <button 
        className='btn-secondary btn dropdown-basic should-log-in'
        onClick={goHome}
      >
        Home
      </button>
    </div>
  </>)
}