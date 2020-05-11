
import React from 'react';
import { connect } from 'react-redux';
import { selectMovieAction } from '../actions/index';

const MovieListComponent = ({ movies, selectMovieAction }) => {
    const listItems = movies.map((movie) => {
        return (
            <div key={movie.title}>
                <span>{movie.title}</span>
                <button onClick={
                    () => selectMovieAction(movie)
                }>details</button>
            </div>
        );
    });

    return (
        <div className='list-container'>
            <h2>Movie List</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}


const mapDispatchToProps = {
    selectMovieAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListComponent);