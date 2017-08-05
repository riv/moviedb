import React from 'react';
import { connect } from 'react-redux';

class SearchMovies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>Search Goes HERE!!!</div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies: movies
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMovies);
