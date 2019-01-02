import styled from 'styled-components';

export const H5 = styled.h5`
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
    props.theme.texts.h5FontSize ? props.theme.texts.h5FontSize : props.size};

  font-weight: ${props =>
    props.theme.texts.h5FontWeight
      ? props.theme.texts.h5FontWeight
      : props.weight};
`;

H5.defaultProps = {
  size: '1.25rem',
  color: 'midnightblue',
  weight: '400',
};

export default H5;
