import { Route, Routes } from "react-router-dom"

import CardView from "../CardView/CardView"
import Homepage from "../Homepage/Homepage"
import { Block } from "./Dashboard.styled"

function Dashboard() {
  return (
    <Block>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="cardView" element={<CardView />} />
          <Route path="jobs" element={<div></div>} />
          <Route path="bi" element={<div></div>} />
          <Route path="incident" element={<div></div>} />
        </Route>
        {/* <CardView /> */}
      </Routes>
    </Block>
  )
}

export default Dashboard
