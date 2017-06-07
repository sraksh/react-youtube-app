import React, { Component } from 'react';

class VideoListItem extends Component {
	constructor(props){
		super(props);
		this.imageUrl= this.props.video.snippet.thumbnails.default.url;
		this.title= this.props.video.snippet.title;
	    this.onVideoClick = this.onVideoClick.bind(this);
	}
	onVideoClick() {
    	this.props.onVideoSelect(this.props.video);
  	}
	render() {
		return(
			<li onClick={this.onVideoClick} className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={this.imageUrl}/>
					</div>
					<div className="media-body">
						<div className="media-heading">
							{this.title}
						</div>
					</div>
				</div>
			</li>
		);
	}
}
export default VideoListItem;