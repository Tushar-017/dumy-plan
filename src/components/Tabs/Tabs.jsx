import React from "react"
import { NavLink } from "react-router-dom"
import { NavigationBar, NavItem, Tab } from "./Tabs.styled"

const Tabs = () => {
  return (
    <NavigationBar>
      <Tab>
        <NavItem>
          <NavLink to={"/"}>Columns</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/profileMetrics"}>Profiling Metrics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/quality"}>Quality</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/Lineage"}>Lineage</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/Preview"}>Preview</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/Queries"}>Queries</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/Utilization"}>Utilization</NavLink>
        </NavItem>
      </Tab>
    </NavigationBar>
  )
}

export default Tabs
