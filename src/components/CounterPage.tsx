import styled from "@emotion/styled"
import _1 from "../assets/img/1.png"
import _2 from "../assets/img/2.png"
import _3 from "../assets/img/3.png"
import { t } from "../lang/i18n"
import { useEffect, useState } from "react"
import { setCurrentStep } from "./store"

const getBG = (number: number) => {
  switch (number) {
    case 1:
      return _1
    case 2:
      return _2
    case 3:
      return _3
    default:
      return ""
  }
}

export const CounterPage = () => {
  const [currentNumber, setCurrentNumber] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((currentNumber) => currentNumber + 1)
    }, 1000)
    if (currentNumber === 3) {
      clearInterval(interval)
      setTimeout(() => {
        setCurrentStep(5)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [currentNumber])

  return (
    <>
      <Number bg={getBG(currentNumber)} />
      <Title>{t("get_result")}</Title>
    </>
  )
}

const Number = styled.div`
  background-image: ${({ bg }: { bg: string }) => `url(${bg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 274px;
  height: 383px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "SF Pro";
  font-size: 48px;
  line-height: 64px;
  text-transform: uppercase;
  color: #ffffff;
  width: 100%;
  text-align: center;
`
