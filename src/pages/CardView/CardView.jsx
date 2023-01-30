import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import BottomView from "../../components/BottomView/BottomView"
import HeadView from "../../components/HeadView/HeadView"

const CardView = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <NavLink
        to="/"
        style={{
          fontSize: "14px",
          color: "#003cb5",
          textDecoration: "underline",
          paddingLeft: "2px",
          letterSpacing: "0.3",
        }}
      >
        Home
      </NavLink>
      <HeadView setIsOpen={setIsOpen} isOpen={isOpen} />
      <BottomView isOpen={isOpen} />
    </>
  )
}

export default CardView
