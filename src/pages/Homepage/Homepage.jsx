import React from "react"
import styled from "styled-components"

import DataSets from "../../components/DataSets/DataSets"
import SearchBar from "../../components/SearchBar/SearchBar"
import SingleFilter from "../../components/SingleFilter/SingleFilter"

import {
  BtnText,
  FilterContainer,
  FilterDiv,
  SearchButton,
} from "./Homepage.styled"

import { KeyboardArrowRight } from "@mui/icons-material"
import { Filter } from "../../Data/dummyData"

const Homepage = () => {
  return (
    <>
      <SearchBar />
      <FilterDiv>
        <FilterContainer>
          {Filter.map(({ id, FilterName, DefaultV }) => (
            <SingleFilter key={id} title={FilterName} defaultV={DefaultV} />
          ))}
        </FilterContainer>
        <SearchButton>
          <BtnText>Search</BtnText>
          <KeyboardArrowRight style={{ fontSize: 18, cursor: "pointer" }} />
        </SearchButton>
      </FilterDiv>
      <DataSets />
    </>
  )
}

export default Homepage
