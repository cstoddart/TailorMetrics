import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { distanceFromCenter } from '../../../utilities';
import { 
  SquareContainer,
  StyledSquare,
  MaskedImage,
  Top,
  Left,
  Right,
  Bottom,
} from './SquareStyles';

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
        <SquareContainer 
          size={this.props.size}
          depth={this.props.depth}
          offset={this.state.centerOffset}
        >
          <Top size={this.props.size} />
          <Left size={this.props.size} />
          <Right size={this.props.size} />
          <Bottom size={this.props.size} />
          <StyledSquare
            className="square"
            size={this.props.size}
            color={this.props.color}
            direction={this.props.direction}
            depth={this.props.depth}
          >
            {this.props.image &&
              <MaskedImage
                size={this.props.size}
                image={this.props.image}
              />
            }
          </StyledSquare>
        </SquareContainer>          
      </div>
    );
  } 
}

Square.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['blue', 'green']).isRequired,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
};
