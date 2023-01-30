import styled from "styled-components"

export const NavigationBar = styled.div`
  width: 100%;
  height: 27px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const Tab = styled.ul`
  width: 100%;
  height: 22px;
  border-radius: 4px 4px 0px 0px;
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

export const NavItem = styled.li`
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: #535455;
  border-radius: 5px 5px 0px 0px;

  & > a {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    color: ${({ theme }) => theme.colors.body2};

    padding: 0;
    margin: auto;
  }
  & > a.active {
    background: ${({ theme }) => theme.colors.body3};
    color: white;
  }
`
