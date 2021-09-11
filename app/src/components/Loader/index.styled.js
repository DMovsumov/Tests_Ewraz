import styled, {keyframes} from "styled-components";

const ring = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoaderWrap = styled.div`
    display: inline-block;
    width: 100px;
    height: 100px;
    
    :after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: ${ring} 1.2s linear infinite;
    }
`;
