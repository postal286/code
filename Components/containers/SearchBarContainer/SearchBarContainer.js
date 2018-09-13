import React, { Component, Fragment } from 'react';

import SearchInputComponent from '../../components/SearchInputComponent';
import SignOutButtonComponent from '../../components/SignOutButtonComponent';

import Keyboard from '../../services/KeyboardHelper';
import { ftSearch } from '../../services/SearchService';

class SearchBar extends Component {
  state = {
    results: [],
    value: '',
    isResultsOpen: false,
    isDataLoaded: false,
  };

  static defaultProps = {
    user: {
      name: 'Thomas',
    },
  };

  handleExhibitorClick = (id) => {
    console.log(`Ex click with id = ${id}`);
    this.setState({ isResultsOpen: false });
  };

  handleTagClick = (id) => {
    console.log(`Tag click with id = ${id}`);
    this.setState({ isResultsOpen: false });
  };

  handleFocus = () => {
    this.setState({ isResultsOpen: true });
    Keyboard.show();
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    ftSearch(event.target.value)
      .then((results) => {
        this.setState({ results, isDataLoaded: true });
      });
  };

  handleReset = () => {
    this.setState({
      value: '',
      results: [],
      isDataLoaded: false,
      isResultsOpen: false,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="searchContainer">
          <div className="searchContainerInner">
            <SearchInputComponent
              value={this.state.value}
              handleFocus={this.handleFocus}
              handleChange={this.handleChange}

              results={this.state.results}
              handleReset={this.handleReset}
              isDataLoaded={this.state.isDataLoaded}
              isResultsOpen={this.state.isResultsOpen}

              handleTagClick={this.handleTagClick}
              handleExhibitorClick={this.handleExhibitorClick}
            />
            <SignOutButtonComponent
              user={this.props.user}
            />
          </div>
        </div>
        <style jsx>{`
          .searchContainer {
            min-width: 900px;
            position: fixed;
            top: 0px;
            right: 0;
            left: 0;
            display: flex;
            justify-content: center;
            z-index: 1000;
            background-color: rgba(81, 81, 81, .3);

            .searchContainerInner {
              margin: 32px;
              display: flex;
              width: 100%;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default SearchBar;
