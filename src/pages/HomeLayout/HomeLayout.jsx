import React from "react"
import styled from "styled-components"
import Header from "../../components/Header/Header"
import OnlineUser from "../../components/OnlineUser/OnlineUser"
import Sidebar from "../../components/Sidebar/Sidebar"
import Dashboard from "../Dashboard/Dashboard"

const LayoutItem = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 9.3fr 1.2fr;
`
const Container = styled.div`
  flex-grow: 1;
`

const HomeLayout = () => {
  return (
    <LayoutItem>
      <Sidebar />
      <Container>
        <Header />
        <Dashboard />
      </Container>
      <OnlineUser />
    </LayoutItem>
  )
}

export default HomeLayout
