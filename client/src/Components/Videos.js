import React, { useEffect } from 'react';
import Youtube from 'react-youtube';
import './Common.scss';
import './Videos.scss';

function Videos(props) {
  const { videos } = props;
  let captions;
  let videoId;
  let videoInfo;
  let startIndex;
  let startTimeCol;
  let startTime;

  console.log(videos.info[0]);
  if (videos.info[0]) {
    videoInfo = videos.info[0];
    videoId = videoInfo.id;
    startIndex = videoInfo.startIndex;
    startTimeCol = videoInfo.captions[startIndex].start.split(':');
    startTime = 60 * Number(startTimeCol[0]) + Number(startTimeCol[1]);

    captions = videos.info[0].captions.map(caption => {
      return (
        <div className="caption-container">
          <span className="caption-content start">
            {caption.start}
          </span>
          <span className="caption-content text">{caption.text}</span>
        </div>
      );
    });
  }

  const options = {
    width: '640',
    height: '390',
    playerVars: {
      autoplay: 1,
      start: startTime,
      modestbranding: 1,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target\
    event.target.pauseVideo();
  }

  return (
    <div className="Videos">
      <span className="foundWord">{videos.foundWord}</span>
      <div>비디오 컴포넌트</div>
      <Youtube videoId={videoId} opts={options} />
      <div id="player"></div>

      <div>VIDEO</div>
      <div className="captions">
        <h1 className="captions-title">Transcript</h1>
        <div className="captions-wrapper">{captions}</div>
      </div>
    </div>
  );
}

export default Videos;
