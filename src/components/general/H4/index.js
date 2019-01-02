import styled from 'styled-components';

export const H4 = styled.h4`
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
    props.theme.texts.h4FontSize ? props.theme.texts.h4FontSize : props.size};
  font-weight: ${props =>
    props.theme.texts.h4FontWeight
      ? props.theme.texts.h4FontWeight
      : props.weight};
`;

H4.defaultProps = {
  size: '1.5rem',
  color: 'midnightblue',
  weight: '400',
};

export default H4;
