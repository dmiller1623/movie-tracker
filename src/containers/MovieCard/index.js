import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../../actions';
import { addNewFavorite } from '../../utilities/apiCalls/apiCalls';

class MovieCard extends Component {
  toggleFavorite = async () => {
    const movie = {...this.props, user_id: this.props.user.id}
    // if (!this.props.favorites.includes(movie))
    const newFavorite = await addNewFavorite(movie);
    // this.props.addFavorite(newFavorite);
  }

  render() {
    const { title, poster_path} = this.props;
    const posterUrl = `http://image.tmdb.org/t/p/w185//${poster_path}`;
    return (
      <article onClick={() => this.toggleFavorite()}>
        <h2>{title}</h2>
        <img src={posterUrl} alt={title + ' poster_path'} />
      </article>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addFavorite: (movie) => dispatch(addFavorite(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);