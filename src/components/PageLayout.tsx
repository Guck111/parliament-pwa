import styled from "@emotion/styled"
import { FC } from "react"
import main_bg from "../assets/img/main_bg.png"

export const PageLayout: FC = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(3, 8, 26, 0.63) 12.1%,
      rgba(3, 8, 26, 0.063) 30.34%
    ),
    url(${main_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
