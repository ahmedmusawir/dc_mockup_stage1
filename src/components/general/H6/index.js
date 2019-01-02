import styled from 'styled-components';

export const H6 = styled.h6`
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
    props.theme.texts.h6FontSize ? props.theme.texts.h6FontSize : props.size};

  font-weight: ${props =>
    props.theme.texts.h6FontWeight
      ? props.theme.texts.h6FontWeight
      : props.weight};
`;

H6.defaultProps = {
  size: '1rem',
  color: 'midnightblue',
  weight: '400',
};

export default H6;
