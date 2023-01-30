import styled from "styled-components"

export const Top = styled.div`
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Formate = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`

export const Name = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
`

export const Content = styled.p`
  font-size: 13px;
  letter-spacing: 0.2px;
  padding-right: 15px;
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.textColor1};
`

export const Accuracy = styled.div`
  display: inline-block;
  font-size: 13px;
  padding: 6px;
  border-radius: 22px;
  color: white;
  background-color: ${({ theme }) => theme.colors.highlightColor};
`

export const Title = styled.h5`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.headingColor2};
  margin: 0;
  padding: 8px 0;
`
export const EditBtn = styled.div`
  display: inline-block;
  border: 0.4px solid black;
  border-radius: 5px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: -5px;
  right: 4px;
`
