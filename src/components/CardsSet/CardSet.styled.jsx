import styled from "styled-components"

export const Envelop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h5`
  margin: 15px 0 6px 0;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textColor3};
`

export const More = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BtnText = styled.span`
  font-size: 13px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
`
