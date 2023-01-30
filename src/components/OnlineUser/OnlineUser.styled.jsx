import styled from "styled-components"

export const UserBlock = styled.div`
  /* width: 180px;
  min-width: 180px; */

  box-sizing: border-box;
`

export const CurrentUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 10px auto;
  /* padding-left: 10px; */
`

export const Image = styled.img`
  width: 24px;
  margin: 0;
  padding: 0;
  border: 0.75px solid black;
  border-radius: 2px;
`
export const Welcome = styled.span`
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.textColor2};
`
