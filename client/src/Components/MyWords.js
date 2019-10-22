import React, { useEffect } from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import './Common.scss';
import './Popup.scss';

function MyWords(props) {
  const { myWords, updateMyWords, onDeleteWordClick } = props;

  const myWordsKeys = Object.keys(myWords);
  let myWordList;
  let resultsList;

  if (myWordsKeys.indexOf('undefined') !== -1) {
    return myWordsKeys.filter(key => {
      return key !== 'undefined';
    });
  }
  if (myWordsKeys.length) {
    myWordList = myWordsKeys.map(key => {
      resultsList = myWords[key]['results'].map(result => {
        return (
          <div className="resultsList">
            <div>{result['partOfSpeech']}</div>
            <div>{result['definition']}</div>
          </div>
        );
      });
      return (
        <div className="word-wrapper">
          <RemoveCircleIcon
            onClick={ev => {
              debugger;
              handleRemoveButtonClick(ev, key);
            }}
          />
          <div>{myWords[key]['results'][0]['partOfSpeech']}</div>
          <div>{myWords[key]['word']}</div>
          <div>{myWords[key]['pronunciation']['all']}</div>
          {resultsList}
        </div>
      );
    });
  }

  function handleRemoveButtonClick(ev, key) {
    console.log(key);
    console.log('wordInfo:', myWords[key]);
    updateMyWords(key, 'remove');
    onDeleteWordClick(key, myWords);
  }

  return (
    <>
      {myWordList && <div className="MyWords">{myWordList}</div>}
      {!myWordList && (
        <div className="MyWords">There is no my word list yet.</div>
      )}
    </>
  );
}

export default MyWords;
