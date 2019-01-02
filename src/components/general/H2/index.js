import styled from 'styled-components';

export const H2 = styled.h2`
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
    props.theme.texts.h2FontSize ? props.theme.texts.h2FontSize : props.size};
  font-weight: ${props =>
    props.theme.texts.h2FontWeight
      ? props.theme.texts.h2FontWeight
      : props.weight};
`;

H2.defaultProps = {
  size: '2rem',
  color: 'midnightblue',
  weight: '400',
};

export default H2;
