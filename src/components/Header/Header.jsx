import React from "react"

import { AppTitle, Info, MainHeader } from "./Header.styled"

function Header() {
  return (
    <MainHeader>
      <Info>
        <AppTitle>MetaInsights</AppTitle>
        {/* <ActiveUser>
          <Image src={User} alt="user" />
          <Welcome>Welcome Jon</Welcome>
        </ActiveUser> */}
      </Info>
    </MainHeader>
  )
}

export default Header
