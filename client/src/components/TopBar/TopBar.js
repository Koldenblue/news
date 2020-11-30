import React, { useEffect, useState } from 'react';
import NewsSearch from './NewsSearch';
import ShouldLogIn from './ShouldLogIn';

export default function TopBar(props) {

  return (<>
    <div className='topbar'>
      <NewsSearch search={props.search}/>
      <div className='empty-div'></div>
      
      <ShouldLogIn />
    </div>
  </>)
}