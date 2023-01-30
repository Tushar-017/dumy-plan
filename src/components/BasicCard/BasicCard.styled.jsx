import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dadcdc;
  width: 275px;
  min-width: 240px;
  padding: 6px 1px 6px 2px;
  border-radius: 8px;
  border: 0.2px solid gray;
`
export const CardTitle = styled.p`
  font-size: 11.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.headingColor};
  margin-bottom: 5px;
`

export const Data = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 3.8fr;
  column-gap: 16px;
`
export const Text = styled.p`
  font-size: 10px;
`
