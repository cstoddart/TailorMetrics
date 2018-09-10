import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { distanceFromCenter } from '../../../utilities';
import { StyledSquare, MaskedImage } from './SquareStyles';

export class Square extends Component {
  squareRef = createRef();
  state = {
    centerOffset: 0,
  };

  componentDidMount() {
    this.setState({
      centerOffset: distanceFromCenter(this.squareRef.current),
    });
  }

  render() {
    return (
      <div ref={this.squareRef}>
        <StyledSquare
          size={this.props.size}
          color={this.props.color}
          direction={this.props.direction}
          depth={this.props.depth}
          offset={this.state.centerOffset}
        >
          {this.props.image &&
            <MaskedImage
              size={this.props.size}
              image={this.props.image}
            />
          }
        </StyledSquare>
      </div>
    );
  } 
}

Square.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['blue', 'green']).isRequired,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
};
