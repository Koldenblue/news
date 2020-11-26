import React, { useEffect, useState } from 'react';
import ShouldLogIn from './ShouldLogIn';

export default function TopBar() {

  return (<>
    <div className='topbar'>
      <div className='empty-div'></div>
      <ShouldLogIn />
    </div>
  </>)
}