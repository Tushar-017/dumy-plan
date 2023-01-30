import styled from "styled-components"

export const MainHeader = styled.div`
  width: 100%;
  padding: 18px 0;
  box-sizing: border-box;
`
export const Info = styled.div`
  display: flex;
  margin: 0 auto;
  padding-left: 10px;
  align-items: center;
  justify-content: flex-start;
`

export const AppTitle = styled.h1`
  font-weight: 600;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.headingColor};
  letter-spacing: 0.7px;
`
// export const ActiveUser = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: auto;
//   gap: 0.5rem;
//   margin-right: 1.5rem;
// `

// export const Image = styled.img`
//   width: 26px;
// `
// export const Welcome = styled.span`
//   font-size: 13px;
//   color: ${({ theme }) => theme.colors.textColor2};
// `
