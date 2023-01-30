import React from "react"
import { Mic, Search } from "@mui/icons-material"
import { IconCenter, Input, SearchContainer } from "./SearchBar.styled"

function SearchBar() {
  return (
    <SearchContainer>
      <IconCenter>
        <label htmlFor="searching" style={{ height: "16px" }}>
          <Search style={{ color: "gray", fontSize: 16 }} />
        </label>
      </IconCenter>
      <Input id="searching" type="text" placeholder="Search Datasets" />
      <IconCenter>
        <Mic style={{ color: "gray", fontSize: 16, cursor: "pointer" }} />
      </IconCenter>
    </SearchContainer>
  )
}

export default SearchBar
