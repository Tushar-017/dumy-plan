import { Person } from "@mui/icons-material"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import React from "react"
import { DetailsData } from "../../Data/dummyData"
import { Data, DetailView, Item, Title } from "./DataDetails.styled"

const {
  DataSource,
  Catalog,
  Schema,
  DataOwner,
  tags,
  frequentUsers,
  AccessedTimes,
  Domain,
  Sla,
  Records,
  Size,
  CreatedAt,
  UpdatedAt,
} = DetailsData

const DataDetails = ({ isOpen }) => {
  return (
    <DetailView show={isOpen}>
      <div>
        <Title>Details</Title>
        <Data>
          <Item>Data Source: {DataSource}</Item>
          <Item>Catalog: {Catalog}</Item>
          <Item>Schema: {Schema}</Item>
          <Item>Data Owner: {DataOwner}</Item>
          <Item>
            Frequent Users:{" "}
            {frequentUsers.map(({ id }) => (
              <Person key={id} style={{ fontSize: 18 }} />
            ))}
          </Item>
          <Item>
            Tags:
            {tags.map(({ name, id }) => (
              <Stack
                key={id}
                direction="row"
                spacing={1}
                sx={{ padding: "2px" }}
              >
                <Chip
                  label={name}
                  sx={{
                    fontSize: "11px",
                    height: "20px",
                  }}
                />
              </Stack>
            ))}
          </Item>
          <Item>Accessed in the last 1 month: {AccessedTimes} times</Item>
          <Item>Domain: {Domain}</Item>
          <Item>SLA: {Sla}</Item>
        </Data>
      </div>
      <div>
        <Title>Metrics</Title>
        <Data>
          <Item>Records:{Records}</Item>
          <Item>Size: {Size}</Item>
          <Item>Created at: {CreatedAt}</Item>
          <Item>Updated at: {UpdatedAt}</Item>
        </Data>
      </div>
    </DetailView>
  )
}

export default DataDetails
