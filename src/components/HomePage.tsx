import styled from "@emotion/styled"
import i18n, { t } from "../lang/i18n"
import { useState } from "react"
import { setCurrentStep } from "./store"

export const HomePage = () => {
  const [isShowProposal, showProposal] = useState(false)

  const onClick = (lang: string) => {
    localStorage.setItem("lang", lang)
    i18n.changeLanguage(lang)
    showProposal(true)
    setTimeout(() => {
      setCurrentStep(1)
    }, 2000)
  }

  return (
    <Wrap>
      {isShowProposal ? (
        <Proposal>{t("proposal")}</Proposal>
      ) : (
        <>
          <Button onClick={() => onClick("ru")}>RUS</Button>
          <Button onClick={() => onClick("kz")}>KAZ</Button>
        </>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Button = styled.div`
  padding: 32px 80px;
  background-color: #003acf;
  box-shadow: 0px 8px 32px rgba(3, 6, 23, 0.32),
    inset 0px 4px 48px 16px rgba(18, 101, 185, 0.32);
  border-radius: 21.67px;
  font-family: "SF Pro";
  font-size: 48px;
  line-height: 48px;
  color: #fff;
  margin: 0 90px;
  backdrop-filter: blur(24px);
`

const Proposal = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 74vw;
  height: 55vh;
  background: rgba(0, 58, 207, 0.56);
  box-shadow: 0px 16px 64px rgba(3, 6, 23, 0.64),
    inset 0px 4px 64px 16px rgba(18, 101, 185, 0.32);
  backdrop-filter: blur(24px);
  border-radius: 22px;
  font-family: "SF Pro";
  font-size: 4vmax;
  line-height: 5vmax;
  color: #ffffff;
  padding: 0 9vw;
`
