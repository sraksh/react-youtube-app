// import React, { Component } from 'react';
import React from 'react';

const VideoDetail = ({video}) => {
  
  if(!video) {
    return <div> Loading.... </div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  
  return(
    <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        </div>
      </div>
    )
}

// class VideoDetail extends Component {
// 	  	render() {
//       if(!this.props) {
//   			return (<div>Loading...</div>);
//   	   }
//   		else {
//         this.videoId = this.props.video.videoId;
//         this.url = `https://www.youtube.com/embed/${this.videoID}`;
//       		return(
//       			<div className="video-detail col-md-8">
//       				<div className="embed-responsive embed-responsive-16by9">
//       					<iframe className="embed-responsive-item" src={this.url}></iframe>
//       				</div>
//       				<div className="details">
//       				<div>{this.props.video.snippet.title}</div>
//       				<div>{this.props.video.snippet.description}</div>
//       				</div>
//       			</div>
//       		);
//       }
//     }
// }
export default VideoDetail;