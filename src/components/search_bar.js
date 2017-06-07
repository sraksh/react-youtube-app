import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.onSearchTermChange = this.onSearchTermChange.bind(this);
		this.state = { term : ''};
	}
	render() {
	    return (
	    <div className="search-bar">
	      <input placeholder="Search" value={this.state.term} onChange={event => this.onSearchTermChange(event.target.value)} />
	     </div>
	    );
	  }
	  onSearchTermChange(term) {
	  	this.setState({term});
	   	this.props.onSearchChange(term);
	  }
	}
export default SearchBar;
