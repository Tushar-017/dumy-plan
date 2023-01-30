import { KeyboardArrowRight } from "@mui/icons-material"
import React from "react"
import CardsBlock from "../CardsBlock/CardsBlock"
import { BtnText, Envelop, More, Title } from "./CardSet.styled"

const CardSet = ({ title }) => {
  return (
    <div>
      <Envelop>
        <Title>{title}</Title>
        <More>
          <BtnText>All</BtnText>
          <KeyboardArrowRight
            sx={{ fontSize: 18, cursor: "pointer", color: "#818181" }}
          />
        </More>
      </Envelop>
      <CardsBlock />
    </div>
  )
}

export default CardSet
