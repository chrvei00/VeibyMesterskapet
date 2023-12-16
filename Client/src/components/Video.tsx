import React from "react";
import YouTube from "react-youtube";

interface VideoProps {
  videoId: string;
}

class Video extends React.Component<VideoProps> {
  render() {
    const { videoId } = this.props;

    const options = {
      height: "195",
      width: "320",
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return (
      <YouTube
        videoId={videoId}
        {...options}
        onReady={this._onReady}
        id="video"
      />
    );
  }

  _onReady(event: any) {
    event.target.pauseVideo();
  }
}

export default Video;
