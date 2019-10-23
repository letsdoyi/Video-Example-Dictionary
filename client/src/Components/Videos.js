import React, { useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import { dividedTimeToOne } from '../Utility';
import loader from '../Images/loader3.gif';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import './Common.scss';
import './Videos.scss';
import Dictionary from '../Components/Dictionary';

import Switch from '@material-ui/core/Switch';

function Videos(props) {
  console.log('videos props:', props);
  const {
    videos,
    videoState,
    dictionary,
    updateStartTimeTo,
    updateCurrentTo,
    updateVideoOrder,
    onLoadVideoData,
    request,
  } = props;
  let captions;
  let videoId;
  let videoInfo;
  let startIndex;
  let firstStartTime;
  let firstDuration;
  let timers = [];

  const [isAddedClass, setIsAddedClass] = useState(false);
  function onSwitchToggle() {
    setIsAddedClass(!isAddedClass);
  }
  useEffect(() => {
    if (videos.info[videoState.order]) {
      videoInfo = videos.info[videoState.order];
      videoId = videoInfo.id;
      startIndex = videoInfo.startIndex;
      firstStartTime = Math.floor(
        Number(videoInfo.captions[startIndex].start),
      );
      firstDuration = Number(videoInfo.captions[startIndex].dur);
      updateStartTimeTo(firstStartTime, firstDuration);
    }
  }, [videos.info[videoState.order]]);

  if (videos.info[videoState.order]) {
    videoInfo = videos.info[videoState.order];
    videoId = videoInfo.id;
    startIndex = videoInfo.startIndex;

    captions = videos.info[videoState.order].captions.map(
      (caption, index) => {
        const durationMilliseconds = caption.dur;
        let count = 0;
        return (
          <div
            key={index}
            className="caption-container"
            onClick={() => {
              if (count === 0) {
                caption.start -= 0.0001;
                count++;
              } else {
                caption.start += 0.0001;
                count--;
              }
              updateStartTimeTo(caption.start, durationMilliseconds);
            }}
          >
            <span className="caption-content start">
              {caption.startForDisplay}
            </span>
            <span className="caption-content text">
              {caption.text}
            </span>
          </div>
        );
      },
    );
  } else {
    return (
      <div className="videos-loader">
        <img src={loader} />
        {dictionary && <Dictionary {...props} />}
      </div>
    );
  }

  const options = {
    playerVars: {
      autoplay: 1,
      start: videoState.startTimeSeconds,
      end: videoState.startTimeSeconds + videoState.durationMilliseconds / 1000,
      modestbranding: 1,
      loop: 1,
    },
  };

  function onPlayerReady(event) {
    console.log('onPlayerReady 실행되는지');
  }

  function onPlayerPlay(event) {
    console.log('onPlayerPlay 실행');

    updateCurrentTo('play');
    console.log(event.target.getCurrentTime());
    // let timer = setTimeout(() => {
    //   event.target.pauseVideo();
    // }, videoState.durationMilliseconds);
    // timers.push(timer);
    if (videoState.current === 'repeat') {
      event.target.seekTo(videoState.startTimeSeconds);
      event.target.playVideo();
    }
  }

  function onPlayerStateChange(event) {
    console.log('onPlayerStateChange 실행');
    // console.log('event', event.data);
    // console.log('youtubeState:', Youtube.PlayerState);
  }

  function onPlayerPause(event) {
    updateCurrentTo('pause');
    // console.log('onPlayerPause 실행');
    // timers.forEach(timer => {
    //   console.log('timerClear', timer);
    //   clearTimeout(timer);
    // });
    // if (videoState.current === 'repeat') {
    //   event.target.seekTo(videoState.startTimeSeconds);
    //   event.target.playVideo();
    // }
  }

  const captionsClassBox = ['captions'];
  const captionsWrapperClassBox = ['captions-wrapper'];
  if (isAddedClass) {
    captionsClassBox.push('foldTo150');
    captionsWrapperClassBox.push('foldTo70');
  }

  return (
    <div className="Videos">
      {dictionary && <Dictionary {...props} />}
      <span className="foundWord">{videos.foundWord}</span>
      <div className="player-caption-container">
        <Youtube
          videoId={videoId}
          opts={options}
          onReady={onPlayerReady}
          onPlay={onPlayerPlay}
          onPlayerStateChange={onPlayerStateChange}
          onPause={onPlayerPause}
        />
        <div className="player"></div>

        <div className={captionsClassBox.join(' ')}>
          <div className="caption-title-wrapper">
            <h1 className="captions-title">Transcript</h1>
            <Switch
              defaultChecked
              value="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              onClick={() => onSwitchToggle()}
            />
          </div>

          <div className={captionsWrapperClassBox.join(' ')}>
            {captions}
          </div>
        </div>
        <div className="video-controller-container">
          <Button
            size="large"
            onClick={() => updateVideoOrder(-1)}
            disabled={videoState.order <= 0}
            color="secondary"
          >
            <KeyboardArrowLeft />
            BACK
          </Button>
          <div
            className="repeat-button"
            onClick={() => updateCurrentTo('repeat')}
          >
            repeat
          </div>
          <Button
            size="large"
            onClick={() => updateVideoOrder(1)}
            disabled={videoState.order >= videos.info.length - 1}
            color="secondary"
          >
            NEXT
            <KeyboardArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Videos;
