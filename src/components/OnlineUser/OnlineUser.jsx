import React from "react"
import User from "../../assets/user1.png"
import { CurrentUser, Image, UserBlock, Welcome } from "./OnlineUser.styled"

function OnlineUser() {
  return (
    <UserBlock>
      {/* <h2>All users</h2> */}
      {/* <div className="error"></div> */}
      <CurrentUser>
        <Image src={User} alt="user" />
        <Welcome>Welcome Jon 👋</Welcome>
      </CurrentUser>
    </UserBlock>
  )
}

export default OnlineUser
