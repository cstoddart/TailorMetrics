import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { distanceFromCenter } from '../../../utilities';
import { StyledSquare, MaskedImage } from './SquareStyles';
import { defaultCipherList } from 'constants';

export class Square extends Component {
  constructor() {
    super();
    
    this.squareRef = createRef();
    this.state = {
      centerOffset: 0,
    };
  }

  componentDidMount() {
    this.setState({
      centerOffset: distanceFromCenter(this.squareRef.current),
    });
  }

  render() {
    console.log('CO', this.state.centerOffset);
    return (
      // <Container size={props.size}>
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
      // </Container>
    );
  } 
}

Square.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['blue', 'green']).isRequired,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
};
