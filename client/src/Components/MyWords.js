import React, { useEffect } from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import './Common.scss';
import './Popup.scss';

function MyWords(props) {
  const { myWords } = props;
  console.log('myWords:', myWords);
  const myWordsKeys = Object.keys(myWords);
  const myWordList = myWordsKeys.map(key => {
    const resultsList = myWords[key]['results'].map(result => {
      return (
        <div className="resultsList">
          <div>{result['partOfSpeech']}</div>
          <div>{result['definition']}</div>
        </div>
      );
    });
    return (
      <div className="word-wrapper">
        <RemoveCircleIcon />
        <div>{myWords[key]['results'][0]['partOfSpeech']}</div>
        <div>{myWords[key]['word']}</div>
        <div>{myWords[key]['pronunciation']['all']}</div>
        {resultsList}
      </div>
    );
  });

  return (
    <>
    {
      myWordList.length !== 0 &&
      <div className="MyWords">{myWordList}</div>
    }
    {
      myWordList.length === 0 &&
        <div className="MyWords">There is no my word list yet.</div>
    }
    </>
  )
}

export default MyWords;
