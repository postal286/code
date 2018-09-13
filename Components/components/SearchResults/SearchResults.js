import React, { PureComponent, Fragment } from 'react';

import SearchBarButton from '../SearchBarButton';
import ExibitorCard from './ExibitorCard';
import TagCard from './TagCard';
import NoItems from './NoItems';

import arrowIcon from '../../assets/SearchBarButton/right-orange-arrow.png';

class SearchResults extends PureComponent {
  render() {
    const { results, handleReset } = this.props;
    return (
      <Fragment>
        <div className="searchResultsWrapper defaultBoxShadow">
          {results.map((item, index) => {
            if (item.entity === 'exhibitors') {
              return (
                <ExibitorCard
                  key={index}
                  item={item}
                  handleExhibitorClick={this.props.handleExhibitorClick}
                />
              );
            } else if (item.entity === 'tags') {
              if (item.exhibitors.length === 0) { return }
              return (
                <TagCard
                  key={index}
                  item={item}
                  handleTagClick={this.props.handleTagClick}
                />
              );
            }
          })}
          {results.length === 0 && (
            <div className="noItems">
              <NoItems />
              <div className="buttonWrapper">
                <SearchBarButton handleClick={handleReset}>
                  <div className="buttonContent">
                    <span className="text">Start Again</span>
                    <img src={arrowIcon} alt="button-icon"/>
                  </div>
                </SearchBarButton>
              </div>
            </div>
          )}
        </div>
        <style jsx>{`
          .searchResultsWrapper {
            position: absolute;
            width: calc(100% - 32px - 80px);
            max-height: 530px;
            overflow: scroll;
            padding: 40px;
            background-color: #fff;
            margin: 5px 32px 0 0;
            border-radius: 8px;
            min-height: 333px;

            .noItems {
              display: flex;
              justify-content: space-between;
              align-items: center;

              .text {
                margin-right: 75px;
                font-size: 22px;
              }

              .buttonContent {
                padding: 26px 30px;
              }

              .buttonWrapper {
                margin-left: 20px;
              }

              @media screen and (max-width: 1260px) {
                align-items: flex-start;
                flex-direction: column;

                .buttonWrapper {
                  margin: 20px 0 0 71px;
                }
              }

            }
          }
        `}</style>
      </Fragment>
    );
  };
}

export default SearchResults;
