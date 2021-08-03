import React from 'react';
import axios from 'axios';
import './App.styles.css';
import { useEffect, useState } from 'react';
import { Container, Button } from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import categories from './data/category';
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className='App'
      style={{ height: '100vh', backgroundColor: '#282c34', color: '#d580ff' }}
    >
      <Container
        maxWidth='md'
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;