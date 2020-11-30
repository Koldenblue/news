import React, { useEffect, useState } from 'react';
import TopBar from './TopBar/TopBar';
import Footer from './Footer';
import Axios from 'axios';
import HomeJumbotron from './HomeJumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

export default function NewsQueryRes() {
  const [headlines, setHeadlines] = useState();

  const blankArticle = {
    author: null,
    content: null,
    publishedAt: null,
    source: {
      id: null,
      name: null
    },
    title: null,
    description: null,
    url: null,
    urlToImage: null
  }

  console.log(window.location)
  // the search term will be in the url leading to this component
  // let search = window.location.search.slice(3,)
  let search = window.location.search
  console.log(search);
  console.log(window.location)
  let searchIndex = search.indexOf('?q=')
  console.log(searchIndex)
  // make sure search index isn't -1
  // also find the end of the term
  // also be wary of ampersands - code is %26
  search = search.slice(searchIndex + 3,)
  console.log(search);

  useEffect(() => {
    Axios.get('/api/news/search/' + search).then(data => {
      let articles = data.data.articles;
      let key = -1;
      // map the articles array to an html grid of rows
      setHeadlines(articles.map(article => {
        key++;
        // have three articles per row. If the article doesn't exist, set it to blank.
        if (key % 3 === 0) {
          try {
            var articleOne = articles[key];
            if (articleOne === undefined) {
              articleOne = blankArticle;
            }
          }
          catch (err) {
            articleOne = blankArticle;
          }
          try {
            var articleTwo = articles[key + 1];
            if (articleTwo === undefined) {
              articleTwo = blankArticle;
            }
          }
          catch {
            articleTwo = blankArticle;
          }
          try {
            var articleThree = articles[key + 2];
            if (articleThree === undefined) {
              articleThree = blankArticle;
            }
          }
          catch {
            articleThree = blankArticle;
          }
          return (
            <Row key={key}>
              <Col md={4} className='article col-one'>
                <a className='article-img' target='_blank' href={articleOne['url']}>
                  <Image href={articleOne['url']} className='article-img' src={articleOne['urlToImage']} />
                </a>
                <h3>{articleOne ? articleOne['title'] : ''}</h3>
              </Col>
              <Col md={4} className='article col-two'>
                <a className='article-img' target='_blank' href={articleTwo['url']}>
                  <Image className='article-img' src={articleTwo['urlToImage']} />
                </a>
                <h3>{articleTwo ? articleTwo['title'] : ''}</h3>
              </Col>
              <Col md={4} className='article col-three'>
                <a className='article-img' target='_blank' href={articleThree['url']}>
                  <Image className='article-img' src={articleThree['urlToImage']} />
                </a>
                <h3>{articleThree ? articleThree['title'] : ''}</h3>
              </Col>
            </Row>)
        }
        // return three articles for each row, return null if (i % 3 !== 0)
        else {
          return (
            null
          )
        }
      }))

    }).catch(err => {
      console.error(err);
    })
  },[])

  return(
    <>
    <TopBar />
    <HomeJumbotron />
    {/* search results go here */}
    <Container>
      <h1 className='headlines-header'>Search Results for {search}</h1>
      <hr />
      {headlines}
    </Container>
    <Footer />
    </>
  )
}