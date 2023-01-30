import React from "react"
import styled from "styled-components"
import DataDetails from "../DataDetails/DataDetails"
import Table from "../Table/Table"
import Tabs from "../Tabs/Tabs"

const DataView = styled.div`
  width: 100%;
  height: 60vh;
  border-radius: ${({ show }) => (show ? "0px 4px 4px 0px" : "4px")};
  border-left: ${({ show }) => (show ? "none" : "")};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-top: none;
`

const BottomView = ({ isOpen }) => {
  return (
    <div style={{ marginTop: "15px", padding: "4px", display: "flex" }}>
      <DataDetails isOpen={isOpen} />
      <DataView show={isOpen}>
        <Tabs />
        <div style={{ backgroundColor: "#6e8387ff", height: "100%" }}>
          <Table />
        </div>
      </DataView>
    </div>
  )
}

export default BottomView
