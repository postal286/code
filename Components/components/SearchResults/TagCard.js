import React, { Fragment, PureComponent } from 'react';

import SearchBarButton from '../SearchBarButton';

import mapIcon from '../../assets/SearchBarButton/map-icon.png';
import tagIcon from '../../assets/SearchComponent/tag-icon.png';
import dropdownIcon from '../../assets/SearchComponent/grey-arrow-up.png';
import ExibitorCard from './ExibitorCard';

class TagCard extends PureComponent {
  state = {
    isOpen: false,
  };

  renderExhibitors = (exhibitors) => exhibitors.map((item) => {
    return (
      <ExibitorCard
        item={item}
        key={item.id}
        handleExhibitorClick={() => {}}
      />
    );
  });

  handleToggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { item, handleTagClick } = this.props;
    return (
      <Fragment>
        <div
          className="itemWrapper noSelect"
          // onClick={() => handleTagClick(item.id)}
        >
          <div className="leftColumn">
            <img
              src={tagIcon}
              alt="tag-icon"
              className="tagIcon"
            />
            <div className="textWrapper">
              <div className="title">
                {item.name}
              </div>
              <div className="stand">
                {this.state.isOpen ?
                  `Showing all ${item.exhibitors.length} Exhibitors tagged ${item.name}`
                  :
                  `Show All ${item.exhibitors.length} Exhibitors`
                }
              </div>
            </div>
          </div>
          <div className="rightColumn">
              {this.state.isOpen && (
                <SearchBarButton
                  className="startButton"
                  handleClick={() => {}}
                >
                  <div className="buttonContent">
                    <img
                      src={mapIcon}
                      alt="map-icon"
                      className="mapIcon"
                    />
                    <span>Show All on Map</span>
                  </div>
                </SearchBarButton>
              )}
              <div
                onClick={this.handleToggle}
                className="toggleWrapper"
              >
                <img
                  src={dropdownIcon}
                  alt="dropdown-icon"
                  className={`dropdownIcon ${this.state.isOpen ? 'inverse' : ''}`}
                />
              </div>
            </div>
        </div>
        {this.state.isOpen && (
          <div className="listWrapper">
            {this.renderExhibitors(item.exhibitors)}
          </div>
        )}
        <style jsx>{`
          .itemWrapper {
            display: flex;
            justify-content: space-between;
            padding: 40px 0;
            min-height: 83px;
            border-bottom: 1px solid #e9e9e7;

            &:first-child {
              padding: 0 0 40px;
            }

            &:last-child {
              padding-bottom: 0;
              border-bottom: 0;
            }
          }

          .listWrapper {
            padding: 40px 0;
            margin-left: 72px;
          }

          .leftColumn {
            display: flex;
            flex-direction: row;
          }

          .rightColumn {
            display: flex;
            flex-shrink: 0;
            margin-left: 20px;
            align-items: center;
          }

          .tagIcon {
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

            .stand {
              color: #ef8117;
              font-size: 16px;
              line-height: 24px;
              font-size: 18px;
            }
          }

          .buttonContent {
            display: flex;
            padding: 27px 40px;
          }

          .mapIcon {
            margin-right: 7px;
          }

          .startButton {
            padding: 30px 40px;
          }

          .dropdownIcon {
            width: 29px;
            height: 16px;
            margin-left: 40px;
            display: flex;
            cursor: pointer;
            align-items: center;

            &.inverse {
              transform: rotate(180deg);
            }
          }

          .toggleWrapper {
            min-height: 51px;
            display: flex;
            align-items: center;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default TagCard;
