import React, { Component, Fragment } from 'react'

import SearchResults from '../SearchResults';

import SearchIcon from '../../assets/SearchComponent/search-icon.png';
import ClearInput from '../../assets/SearchComponent/grey-circle-x-inside.png';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  handleReset = () => {
    this.props.handleReset();
    this.searchInput.current.focus();
  };

  render() {
    return (
      <Fragment>
        <div className="searchInputWrapper">
          <span className="searchIcon">
            <img src={SearchIcon} alt="search icon"/>
          </span>
          <input
            type="text"
            className="searchInput defaultBoxShadow"
            ref={this.searchInput}
            value={this.props.value}
            onFocus={this.props.handleFocus}
            onChange={this.props.handleChange}
            placeholder="Search for Services"
          />
          {this.props.value && (
            <span
              className="clearIcon"
              onClick={this.handleReset}
            >
              <img
                src={ClearInput}
                alt="search icon"
              />
            </span>
          )}
          {this.props.isResultsOpen && this.props.isDataLoaded && (
            <SearchResults
              results={this.props.results}
              handleReset={this.handleReset}

              handleTagClick={this.props.handleTagClick}
              handleExhibitorClick={this.props.handleExhibitorClick}
            />
          )}
        </div>
        <style jsx>{`
          .searchInputWrapper {
            position: relative;
            display: inline-block;
            flex: 0 0 calc(100% - 350px);

            .searchIcon {
              position: absolute;
              height: 96px;
              align-items: center;
              padding-left: 40px;
              display: flex;

              img {
                height: 32px;
                width: 32px;
              }
            }

            .clearIcon {
              top: 0;
              cursor: pointer;
              position: absolute;
              height: 96px;
              align-items: center;
              padding: 0 32px 0 40px;
              display: flex;
              right: 40px;

              img {
                height: 32px;
                width: 32px;
              }
            }
          }

          .searchInput {
            padding: 36px 0 36px 95px;
            margin-right: 32px;
            border-radius: 8px;
            color: #000000;
            border: 0;
            font-size: 21px;
            font-weight: 400;
            line-height: 18px;
            display: block;
            width: calc(100% - 32px - 95px);
            outline: none;
          }
        `}</style>
      </Fragment>
    )
  }
}
