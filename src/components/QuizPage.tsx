import styled from "@emotion/styled"
import _1_1 from "../assets/img/1_1.png"
import _1_2 from "../assets/img/1_2.png"
import _2_1 from "../assets/img/2_1.png"
import _2_2 from "../assets/img/2_2.png"
import _3_1 from "../assets/img/3_1.png"
import _3_2 from "../assets/img/3_2.png"

import backIcon from "../assets/img/keyboard-backspace.svg"
import homeIcon from "../assets/img/home.svg"
import { useStore } from "effector-react"
import { $store, removeAnswer, setAnswer, setCurrentStep } from "./store"
import { t } from "i18next"
import { useState } from "react"

const getContent = (step: number) => {
  switch (step) {
    case 1:
      return { bg: [_1_1, _1_2], title: t("st_1") }
    case 2:
      return { bg: [_2_1, _2_2], title: t("st_2") }
    case 3:
      return { bg: [_3_1, _3_2], title: t("st_3") }
    default:
      return { bg: ["", ""], title: "" }
  }
}

export const QuizPage = () => {
  const { currentStep } = useStore($store)
  const [activeImg, setActiveImg] = useState<null | number>(null)

  const onClick = (answer: number) => {
    if (activeImg === null) {
      setAnswer(answer)
      setActiveImg(answer)
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
        setActiveImg(null)
      }, 1000)
    }
  }

  const { bg, title } = getContent(currentStep)

  const backButtonClick = () => {
    setCurrentStep(currentStep - 1)
    removeAnswer()
  }
  const homeButtonClick = () => setCurrentStep(0)

  return (
    <>
      <Header>
        <Button onClick={backButtonClick} icon={backIcon} />
        <Title>{title}</Title>
        <Button onClick={homeButtonClick} icon={homeIcon} />
      </Header>
      <PicturesWrap>
        <Picture
          onClick={() => onClick(0)}
          bg={bg[0]}
          isActive={activeImg === 0}
        />
        <Picture
          onClick={() => onClick(1)}
          bg={bg[1]}
          isActive={activeImg === 1}
        />
      </PicturesWrap>
    </>
  )
}

const PicturesWrap = styled.div`
  display: flex;
  height: 100%;
  background-color: #002179;
`

const Picture = styled.div<{ bg: string; isActive: boolean }>`
  height: 100%;
  width: 50%;
  flex-shrink: 0;
  background-image: linear-gradient(
      180deg,
      rgba(3, 8, 26, 0.63) 12.1%,
      rgba(3, 8, 26, 0.063) 30.34%
    ),
    ${({ bg }) => `url(${bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ isActive }) =>
    isActive &&
    `
			opacity: 0.5;
			filter: grayscale(1);
	`};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: absolute;
  width: 90%;
  left: 50%;
  top: 48px;
  transform: translateX(-50%);
  background: rgb(1 21 72 / 72%);
  box-shadow: 0px 8px 32px rgba(3, 6, 23, 0.32),
    inset 0px 4px 48px 16px rgba(18, 101, 185, 0.32);
  backdrop-filter: blur(24px);
  border-radius: 22px;
  z-index: 1;
`
const Button = styled.div`
  width: 56px;
  height: 56px;
  background: #051a56;
  border-radius: 16px;
  background-image: ${({ icon }: { icon: string }) => `url(${icon})`};
  background-position: center;
  background-repeat: no-repeat;
`

const Title = styled.div`
  font-family: "SF Pro";
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
`
