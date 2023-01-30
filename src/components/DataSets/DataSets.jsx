import React from "react"
import CardSet from "../CardsSet/CardSet"
import { Block, Envelop, Title } from "./DataSets.styled"

const DataSets = () => {
  return (
    <Block>
      <Title>Datasets</Title>
      <Envelop>
        <CardSet title="All Datasets (1800)" />
        <CardSet title="Recently Modified/Added Datasets (1200)" />
        <CardSet title="Frequently Accessed Datasets (250)" />
        <CardSet title="Troublesome Datasets (45)" />
      </Envelop>
    </Block>
  )
}

export default DataSets
