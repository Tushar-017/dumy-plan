import styled from "styled-components"
import { keyframes } from "styled-components"

const slider = keyframes`
  0% {
    display: none;
    opacity: 0;
    width: 0px;
  }
  20%{
    display: none;
    opacity: 0;
    width: 70px;
  }
  40%{
    display: flex;
    opacity: 0.2;
    width: 140px;
  }
  60%{
    display: flex;
    opacity: 0.4;
    width: 200px;
  }
  85% {
    display: flex;
    width: 240px;
    opacity: 0.6;
  }
  100% {
    display: flex;
    opacity: 1;
  }
`

export const DetailView = styled.div`
  margin-top: 26px;
  top: 4px;
  left: -9.5px;
  height: calc(60vh - 26px);
  border-radius: 4px 0 0 4px;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 8px;
  background-color: ${({ theme }) => theme.colors.body2};
  opacity: ${({ show }) => (show ? 1 : 0)};
  animation: ${slider};
  animation-duration: 200ms;
  animation-fill-mode: forwards;
`

export const Title = styled.h5`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.headingColor2};
  margin: 0;
  padding: 8px 0;
`
export const Data = styled.div`
  padding: 3px;
`

export const Item = styled.div`
  font-size: 12px;
  letter-spacing: 0.2px;
  padding: 2px 1px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
