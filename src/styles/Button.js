import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const Button = styled.button`
  color: ${colors.green};
  background-color: transparent;
  border: 1px solid ${colors.green};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smish};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 ${colors.green};
    transform: translate(-5px, -5px);
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
