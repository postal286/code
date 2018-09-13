import React, { Fragment, PureComponent } from 'react';

import exhibitorIcon from '../../assets/SearchComponent/exhibitor-icon.png';
import pinIcon from '../../assets/SearchComponent/orange-pin.png';

class ExibitorCard extends PureComponent {
  render() {
    const { item, handleExhibitorClick } = this.props;
    return (
      <Fragment>
        <div
          className="itemWrapper"
          onClick={() => handleExhibitorClick(item.id)}
        >
          <img
            src={exhibitorIcon}
            alt="exhibitor-icon"
            className="exhibitorIcon"
          />
          <div className="textWrapper">
            <div className="title">{item.title}</div>
            <div className="standWrapper">
              <img
                src={pinIcon}
                alt="pin-icon"
                className="pinIcon"
              />
              <div className="stand">{item.stand.name}</div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .itemWrapper {
            display: flex;
            padding: 40px 0;
            border-bottom: 1px solid #e9e9e7;

            &:first-child {
              padding: 0 0 40px;
            }

            &:last-child {
              padding-bottom: 0;
              border-bottom: 0;
            }
          }

          .exhibitorIcon {
            margin-right: 40px;
            width: 32px;
            height: 32px;
          }

          .textWrapper {
            .title {
              color: #010000;
              line-height: 25px;
              font-size: 20px;
              margin-bottom: 10px;
            }

            .standWrapper {
              display: flex;
              align-items: center;
              flex-direction: row;

              .pinIcon {
                margin-right: 5px;
              }
            }

            .stand {
              color: #ef8117;
              font-size: 16px;
              line-height: 16px;
              font-size: 18px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default ExibitorCard;
