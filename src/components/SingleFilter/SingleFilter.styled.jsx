import styled from "styled-components"

export const Filter = styled.div`
  margin: 14px 5px 10px 2px;
  display: flex;
  align-items: center;
`

export const FilterText = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.textColor3};
`

export const Select = styled.select`
  padding: 2px;
  margin-right: 20px;

  &:focus {
    outline: none;
  }
`
