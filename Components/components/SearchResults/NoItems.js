import React, { PureComponent, Fragment } from 'react';

import warningIcon from '../../assets/SearchBarButton/grey-warning.png';

class NoItems extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="leftBlock">
          <div className="imgWrapper">
            <img src={warningIcon} alt="warning-icon" />
          </div>
          <div className="textWrapper">
            <span className="mainTitle">
              No results found. Please try again.
            </span>
            <span className="subTitle">
              List a few reasons why there are no search results, further encourage the user to start over.
            </span>
          </div>
        </div>
        <style jsx>{`
          .leftBlock {
            display: flex;
          }

          .imgWrapper img {
            width: 51px;
            height: 51px;
            margin-right: 20px;
          }

          .textWrapper {
            display: flex;
            flex-direction: column;

            .mainTitle {
              color: #010000;
              line-height: 26px;
              font-size: 24px;
              margin-bottom: 10px;
            }

            .subTitle {
              color: #b4b4b4;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default NoItems;
