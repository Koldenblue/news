import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default function HomeJumbotron() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className='jumbo-header'>NEWS</h1>
        <p className='jumbo-sub'>
          Welcome to the news of the world.
    </p>
      </Container>
    </Jumbotron>
  )
}

