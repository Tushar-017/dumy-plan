import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.jpg"
import {
  CatagLink,
  CatalogContainer,
  Frame,
  Image,
  LogoContainer,
  Name,
  SideContent,
  SideNav,
  Catalogs,
} from "./Sidebar.styled"

function Sidebar() {
  return (
    <SideNav>
      <SideContent>
        <LogoContainer>
          <Frame>
            <Image src={logo} alt="Meta-insights-logo" />
          </Frame>
        </LogoContainer>
        <CatalogContainer>
          <ul>
            <CatagLink>
              <NavLink to="/">
                <Name>Data Catalog</Name>
              </NavLink>
            </CatagLink>
            <CatagLink>
              <NavLink to="/jobs">
                <Name>Jobs Catalog</Name>
              </NavLink>
            </CatagLink>
            <CatagLink>
              <NavLink to="/bi">
                <Name>BI Catalog</Name>
              </NavLink>
            </CatagLink>
            <CatagLink>
              <NavLink to="/incident">
                <Name>Incident Management</Name>
              </NavLink>
            </CatagLink>
          </ul>
        </CatalogContainer>
      </SideContent>
    </SideNav>
  )
}

export default Sidebar
