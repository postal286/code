import React, { PureComponent, Fragment } from 'react'
import moment from 'moment';

import SignOutIcon from '../../assets/SearchComponent/sign-out-icon.png';

export default class SignOutButton extends PureComponent {
  state = {
    time: moment(),
  };

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: moment() }), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <button className="signOutButton defaultBoxShadow">
          <div className="leftSide">
            <div className="firstBlock">
              <span className="date">{this.state.time.format('ddd, Do')}</span>
              <span className="time">{this.state.time.format('hh:mm')}</span>
            </div>
            <div className="secondBlock">
              <div>
                <span className="name">Hello {user.name},</span>
                <span className="buttonTitle">Sign Out</span>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="thirdBlock">
              <img src={SignOutIcon} alt="sign out icon"/>
            </div>
          </div>
        </button>
        <style jsx>{`
          .signOutButton {
            display: flex;
            padding: 16px;
            width: 413px;
            height: 96px;
            color: #fff;
            border: 0;
            flex: 0 0 25%;
            flex-basis: 350px;
            background-color: #fff;
            color: #000;
            padding: 16px 24px;
            align-items: center;
            justify-content: space-between;
            border-radius: 8px;
            outline: none;
            .leftSide {
              display: flex;
            }

            .date,
            .name {
              color: #515151;
              margin: 10px 0 5px 0;
              font-size: 14px;
              display: block;
              font-weight: 400;
              line-height: 18px;
            }

            .time,
            .buttonTitle {
              color: #000000;
              font-size: 24px;
              font-weight: 700;
              line-height: 18px;
            }

            .firstBlock {
              padding-right: 24px;
              padding-bottom: 10px;
              border-right: 1px solid #333;
            }

            .secondBlock {
              padding-bottom: 10px;
              padding-left: 24px;
            }

            .thirdBlock {
              width: 34px;
              height: 30px;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}
