import React from "react"
import BasicCard from "../BasicCard/BasicCard"
import { Block } from "./CardsBlock.styled"

const CardsBlock = () => {
  return (
    <Block>
      <BasicCard title="mall.shop_tax__daily" />
      <BasicCard title="dbschema.table" />
      <BasicCard title="dbschema.table" />
    </Block>
  )
}

export default CardsBlock
