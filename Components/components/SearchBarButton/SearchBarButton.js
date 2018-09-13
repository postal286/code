import React, { PureComponent, Fragment } from 'react';

class SearchBarButton extends PureComponent {
  render() {
    const { handleClick, className, children } = this.props;
    return (
      <Fragment>
        <button
          className={`button ${className ? className : ''}`}
          onClick={handleClick}
        >
          {children}
        </button>
        <style jsx>{`
          .button {
            color: #ef8117;
            outline: none;
            font-size: 22px;
            cursor: pointer;
            min-width: 250px;
            border-radius: 10px;
            border-radius: 50px;
            border-color: #ef8117;
            background-color: #fff;
            border: 1px solid #ef8117;
            box-shadow: 0 0 5px rgba(239, 129, 23, 0.3);

            &:active {
              border-color: #d27200;
              color: #d27200;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default SearchBarButton;
