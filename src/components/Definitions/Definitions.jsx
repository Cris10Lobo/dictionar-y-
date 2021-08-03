import React from 'react';
import './Definitions.styles.css';
import { Typography, Divider, makeStyles } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  divider: {
    background: '#d580ff',
    margin: '10px 0',
  },
}));

const Definitions = ({ word, category, meanings }) => {
  const classes = useStyles();

  const start = () => {
    if (document.getElementById('audio')) {
      document.getElementById('audio').play();
    }
  };

  return (
    <>
      <div className='meanings'>
        {category === 'en' && (
          <Typography variant='h5'>
            <VolumeUpIcon className='play-word' onClick={start}></VolumeUpIcon>
          </Typography>
        )}

        {meanings[0] && word && category === 'en' && (
          <audio
            style={{ display: 'none' }}
            id='audio'
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          >
            Your browser doesn't support audio
          </audio>
        )}

        {word === '' ? (
          <span className='subTitle'>Start by typing in Search </span>
        ) : (
          meanings.map((mean) =>
            mean.meanings.map((item) =>
              item.definitions.map((def) => (
                <div key={def.definition} className='singleMean'>
                  <Typography variant='caption'>Definiton:</Typography>
                  <br />
                  <Typography variant='h4'>{def.definition}</Typography>
                  <br />
                  {def.example && (
                    <span>
                      <Typography variant='caption'>Example:</Typography>
                      <br></br>
                      {def.example}
                    </span>
                  )}
                  <br />
                  {def.synonyms && (
                    <span>
                      <Typography variant='caption'>Synonyms:</Typography>
                      <br></br>
                      {def.synonyms.map((s) => `${s},`)}
                    </span>
                  )}

                  <Divider className={classes.divider} variant='fullWidth' />
                </div>
              ))
            )
          )
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '20px',
        }}
      >
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/Cris10Lobo/dictionar-y-'
        >
          <GitHubIcon />
        </a>
      </div>
    </>
  );
};

export default Definitions;
