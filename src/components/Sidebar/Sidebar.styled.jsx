import styled from "styled-components"

export const SideNav = styled.div`
  width: 12.6vw;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
`

export const SideContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  flex: 1;
  width: inherit;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 10px 15px 10px;
`
export const Frame = styled.div`
  border: 1px solid black;
  width: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 74px;
  padding: 2px 0;
`
export const CatalogContainer = styled.div`
  margin-top: 14px;
  margin-left: 1.2rem;
`

export const CatagLink = styled.li`
  margin-top: 2px;

  & > a {
    display: flex;
    padding: 2px;
    width: 100%;
    border-radius: 4px 0 0 4px;
    background: ${({ theme }) => theme.colors.body3};
    color: ${({ theme }) => theme.colors.textColor1};
    box-sizing: border-box;
  }

  & > a.active {
    background: ${({ theme }) => theme.colors.body};
    border-top: 0.5px solid black;
    border-left: 0.5px solid black;
    border-bottom: 0.5px solid black;
    width: 100.7%;
    box-sizing: border-box;

    box-shadow: -4px 1px 12px -3px rgba(82, 82, 82, 0.45);
    -webkit-box-shadow: -4px 1px 12px -3px rgba(82, 82, 82, 0.45);
    -moz-box-shadow: -4px 1px 12px -3px rgba(82, 82, 82, 0.45);
  }
`

export const Name = styled.span`
  font-size: 12px;
  padding: 6px;
  width: 100%;
`
