import styled from "styled-components"

export const Block = styled.div`
  padding: 12px 10px;
  height: calc(100vh - 92px);
  background-color: ${({ theme }) => theme.colors.body};
  margin-bottom: 15px;
  border: 0.5px solid black;
  border-radius: 4px;
  overflow-y: scroll;
`

export const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: start;
`
export const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BtnText = styled.span`
  font-size: 13px;
  cursor: pointer;
`
