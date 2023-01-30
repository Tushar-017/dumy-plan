import React, { useState } from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Filter, FilterText } from "./SingleFilter.styled"
import { filterItems } from "../../Data/dummyData"

function SingleFilter({ title, defaultV }) {
  const [age, setAge] = useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <Filter>
      <FilterText>{title}:</FilterText>
      <FormControl sx={{ m: 1, minWidth: 115 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            height: "25px",
            backgroundColor: "#fff",
            fontSize: "13px",
            padding: 0,
          }}
        >
          <MenuItem
            value=""
            sx={{
              fontSize: "12px",
              paddingBlock: "2.5px",
              backgroundColor: "#fff",
            }}
          >
            <p>{defaultV}</p>
          </MenuItem>
          {filterItems.map(({ id, name }) => (
            <MenuItem
              value={name}
              key={id}
              sx={{
                fontSize: "12px",
                paddingBlock: "2.5px",
                backgroundColor: "#efefef",
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Filter>
  )
}

export default SingleFilter
