import React from "react";

class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img
                alt="Image_not_found"
                width="120"
                src={this.props.movie.poster_src}
              />
            </td>
            <td>
              <p className="movie-title">{this.props.movie.title}</p>
              <p className="movie-content">{this.props.movie.overview}</p>
              <button
                onClick={this.viewMovie.bind(this)}
                className="btn"
                title="Add to Favourites"
              >
                <i className="fa fa-star" />
              </button>
              <button
                onClick={this.viewMovie.bind(this)}
                className="btn"
                title="View More "
              >
                <i className="fa fa-binoculars" />
              </button>
              <button
                onClick={this.viewMovie.bind(this)}
                className="btn"
                title="Watch Later"
              >
                <i className="fa fa-clock" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
