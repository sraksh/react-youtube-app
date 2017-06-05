import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBWftLvtNkbFEg4yok2WF_97DTSfpeTMDw';

class App extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
    this.videoSearch('surfboards');
    this.onVideoSelect = this.onVideoSelect.bind(this);
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (anydata) => {
			this.setState ({ 
				videos: anydata,
				selectedVideo: anydata[0]
			});
		});
	}
	onVideoSelect(selectedVideo) {
		this.setState ({
			selectedVideo: selectedVideo
		})
	}
  render() {
    return (
      <div>
        <SearchBar onSearchChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}
ReactDOM.render(<App / >, document.getElementById('root'));
