import React from 'react';
import { Button, form } from 'react-bootstrap';
import { Input } from 'react-materialize';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.updateQuery = this.updateQuery.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.state = {
      queryString: '',
      checked: false
    };
  }

  clearInput () {
    this.setState({queryString: ''});
  }

  updateQuery(e) {
    this.setState({queryString: e.target.value});
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      this.submitQuery();
    }
  }

  handleButton(e) {
    e.preventDefault();
    this.submitQuery();
  }

  handleRadio (e) {
    this.setState({checked: e.target.checked})
  }

  submitQuery () {
    this.props.clearError();
    if (this.state.checked) {
      this.props.movieSearchById(this.state.queryString);
      this.props.history.push(`/movie/${this.state.queryString}`);
    } else {
      this.props.movieSearch(this.state.queryString);
      this.props.history.push('/');
    }
    this.clearInput();
  }

  render() {
    return(
      <div>
        <form onKeyDown={this.handleKeyDown}>
          <p>Check radio button to toggle between search modes</p>
          <input type='checkbox' onChange={this.handleRadio} defaultChecked={this.state.checked}/>
          <input id="searchBar" value={this.state.queryString} onChange={this.updateQuery} type="text" name="search" placeholder={this.state.checked ? "Search by Id" : "Search by name"}/>
          <Button onClick={this.handleButton}>Search</Button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
