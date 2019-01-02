import styled from 'styled-components';

export const H3 = styled.h3`
  font-family: ${props => props.theme.texts.headingFont};
  color: ${props => {
    let color;
    if (props.dark) {
      color = props.theme.colors.textColorDark;
    } else if (props.light) {
      color = props.theme.colors.textColorLight;
    } else {
      color = props.color ? props.color : props.theme.colors.primaryColor;
    }
    return color;
  }};
  font-size: ${props =>
    props.theme.texts.h3FontSize ? props.theme.texts.h3FontSize : props.size};
  font-weight: ${props =>
    props.theme.texts.h3FontWeight
      ? props.theme.texts.h3FontWeight
      : props.weight};
`;

H3.defaultProps = {
  size: '1.75rem',
  color: 'midnightblue',
  weight: '400',
};

export default H3;
