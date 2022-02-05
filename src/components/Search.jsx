import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleSearchChange = (e) => {
        this.setState({search: e.target.value})
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleSearchButton = () => {
        this.props.searchMovies(this.state.search, this.state.type);
    }

    handleFilter = (e) => {
        this.setState(() => ({type: e.target.value}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input type="search"
                           className="validate"
                           placeholder="search"
                           value={this.state.search}
                           onChange={this.handleSearchChange}
                           onKeyDown={this.handleKeyDown}
                    />
                    <a className="waves-effect waves-light btn search-btn"
                       onClick={this.handleSearchButton}>Search</a>
                </div>
                <div>
                    <p className="radio">
                        <label>
                            <input name="type"
                                   type="radio"
                                   value="all"
                                   onChange={this.handleFilter}
                                   checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input name="type"
                                   type="radio"
                                   value="movie"
                                   onChange={this.handleFilter}
                                   checked={this.state.type === 'movie'}
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input name="type"
                                   type="radio"
                                   value="series"
                                   onChange={this.handleFilter}
                                   checked={this.state.type === 'series'}
                            />
                            <span>Series</span>
                        </label>
                    </p>
                </div>
            </div>
        );
    }
}

export default Search;