import styled, { keyframes } from 'styled-components';
import {fadeIn} from 'react-animations';
 
const fadeInAnimation = keyframes`${fadeIn}`;
 
export const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;
