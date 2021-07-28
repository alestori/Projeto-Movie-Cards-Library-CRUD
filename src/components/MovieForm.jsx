import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as movieAPI from '../services/movieAPI';
import { shouldRedirect } from '../redux/actions';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { redirecter } = this.props;
    movieAPI.createMovie(this.state);
    redirecter(true);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="movie_title">
          Título
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <label htmlFor="movie_subtitle">
          Subtítulo
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image">
          Imagem
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="movie_storyline">
          Sinopse
          <textarea
            id="movie_storyline"
            value={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="movie_genre">
          Gênero
          <select
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="movie_rating">
          Avaliação
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="form-btn-div">
        <button
          type="button"
          onClick={ this.handleSubmit }
          className="button form-btn"
        >
          SUBMIT
        </button>
        <Link
          to="/"
          style={ { textDecoration: 'none' } }
          className="form-return button"
        >
          <p className="btn-text">VOLTAR</p>
        </Link>
      </div>
    );
  }

  render() {
    const { redirect } = this.props;

    if (redirect) return <Redirect to="/" />;

    return (
      <main>
        <form>
          <div className="row">
            {this.renderTitleInput()}
            {this.renderSubtitleInput()}
          </div>
          <div className="row">
            {this.renderImagePathInput()}
            {this.renderStorylineInput()}
          </div>
          <div className="row">
            {this.renderGenreSelection()}
            {this.renderRatingInput()}
          </div>
          {this.renderSubmitButton()}
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  redirect: state.redirecter.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  redirecter: (boolean) => dispatch(shouldRedirect(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);

MovieForm.defaultProps = {
  movie: {
    title: '',
    subtitle: '',
    storyline: '',
    rating: '',
    imagePath: '',
    genre: '',
  },
};

MovieForm.propTypes = {
  redirecter: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }),
};
