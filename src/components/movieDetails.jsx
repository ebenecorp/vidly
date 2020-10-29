import React from "react";
import { toast } from "react-toastify";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "./../services/movieService";

class MovieDetails extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().min(1).max(100).label("Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .max(10)
      .min(1)
      .label("DailyRentalRate"),
  };

  async pupolateGenre() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async pupolateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error("the movie does not exist");
      this.props.history.replace("/notfound");
    }
  }

  async componentDidMount() {
    await this.pupolateGenre();
    await this.pupolateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async() => {
     await saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  
  render() {
    return (
      <div>
        <h1>Movie form </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
        {/* <button onClick={this.handleSave}>Save</button> */}
      </div>
    );
  }
}

export default MovieDetails;
