import styled from "styled-components"

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 11fr 0.5fr;
  align-items: center;
  padding: 3px 0;
  padding-top: 5px;
  background: #fff;
  border-radius: 15px;
  border: 0.02px solid gray;
`
export const Input = styled.input`
  border: none;
  background-color: inherit;
  font-size: 12px;
  font-weight: lighter;
  letter-spacing: 0.5px;
  color: gray;
  &:focus {
    outline: none;
  }
`

export const IconCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
