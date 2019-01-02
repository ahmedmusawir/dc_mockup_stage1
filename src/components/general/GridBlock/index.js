import styled from 'styled-components';

export const GridBlock = styled.div`
	cursor: move;
	// padding: ${props => (props.nopadding ? '0rem' : '1rem')};
	grid-area: ${props => {
    let ratio;
    if (props.size === 'xs') {
      ratio = 'span 1 / span 1';
    } else if (props.size === 'sm') {
      ratio = 'span 2 / span 3';
    } else if (props.size === 'md') {
      ratio = 'span 3 / span 3';
    } else if (props.size === 'lg') {
      ratio = 'span 4 / span 6';
    } else if (props.size === 'custom') {
      ratio = 'span 4 / span 4';
    }
    return ratio;
  }};
`;

GridBlock.defaultProps = {
  size: 'md',
};

export default GridBlock;
