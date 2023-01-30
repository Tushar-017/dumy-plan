import React from "react"
import { Link } from "react-router-dom"
import { cardData } from "../../Data/dummyData"
import { Card, CardTitle, Data, Text } from "./BasicCard.styled"

const BasicCard = ({ title }) => {
  return (
    <Link to="/cardView">
      <Card>
        <CardTitle>{title}</CardTitle>

        {cardData.map(
          ({ id, DataSource, Rows, Catalog, Updated, Type, quality }) => (
            <Data key={id}>
              <Text>Datasource : {DataSource}</Text>
              <Text>Rows : {Rows}</Text>
              <Text>Catalog : {Catalog}</Text>
              <Text>Updated : {Updated}</Text>
              <Text>Type : {Type}</Text>
              <Text>quality : {quality}</Text>
            </Data>
          )
        )}
      </Card>
    </Link>
  )
}

export default BasicCard
