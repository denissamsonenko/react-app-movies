import React from "react";
import Movies from "../components/Movies";
import axios from "axios";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    };

    componentDidMount() {
        axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(r => this.setState({movies: r.data.Search, loading: false}))
            .catch((err) => {
                console.log(err);
                this.setState({loading: false});
            })
    }

    searchMovies = (criteria, type = 'all') => {
        this.setState({loading: true})
        axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${criteria}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(r => this.setState({movies: r.data.Search, loading: false}))
            .catch((err) => {
                console.log(err);
                this.setState({loading: false});
            })
    }

    render() {
        const {movies, loading} = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies}/>
                {loading
                    ? <Preloader/>
                    : (<Movies movies={movies}/>)}
            </main>
        );
    }
}

export default Main;