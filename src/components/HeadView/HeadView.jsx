import React, { useState } from "react"
import {
  Accuracy,
  Content,
  EditBtn,
  Formate,
  Name,
  Title,
  Top,
} from "./HeadView.styled"
import { Edit } from "@mui/icons-material"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"

const HeadView = ({ setIsOpen, isOpen }) => {
  const [alignment, setAlignment] = useState("web")

  const handleChange = (event, newAlignment) => {
    setIsOpen(!isOpen)
    setAlignment(newAlignment)
  }
  // const handleChange2 = (event, newAlignment) => {}
  return (
    <div style={{ padding: "4px" }}>
      <Top>
        <Formate>
          <Name>Table</Name>
          <Content>
            BigQuery {">"} spdb-data {">"} mall
          </Content>
        </Formate>

        <Accuracy>99.99%</Accuracy>
      </Top>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Title>shop_tax__daily</Title>
        <ToggleButtonGroup
          color="standard"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{ border: "0.4px solid c6cfd0" }}
        >
          <ToggleButton
            value="Details"
            sx={{
              fontSize: "10px",
              padding: "1.6px 3.2px",
              textTransform: "capitalize",
              letterSpacing: "0.4px",
            }}
          >
            Details
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <Formate>
        <Name>Description:</Name>
        <div style={{ position: "relative" }}>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Content>
          <EditBtn>
            <Edit style={{ color: "gray", fontSize: 12, cursor: "pointer" }} />
          </EditBtn>
        </div>
      </Formate>
    </div>
  )
}

export default HeadView
