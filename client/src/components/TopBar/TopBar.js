import React, { useEffect, useState } from 'react';
import NewsSearch from '../NewsSearch';
import ShouldLogIn from './ShouldLogIn';

export default function TopBar() {

  return (<>
    <div className='topbar'>
      <NewsSearch />
      <div className='empty-div'></div>
      
      <ShouldLogIn />
    </div>
  </>)
}