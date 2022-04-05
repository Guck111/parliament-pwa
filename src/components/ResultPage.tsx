import styled from "@emotion/styled"
import { useStore } from "effector-react"
import { $store, setCurrentStep } from "./store"
import res_1 from "../assets/img/res_1.png"
import res_2 from "../assets/img/res_2.png"
import res_3 from "../assets/img/res_3.png"
import { t } from "i18next"
import { useEffect, useState } from "react"

import ru_res_1 from "../assets/video/ru/1.mp4"
import ru_res_2 from "../assets/video/ru/2.mp4"
import ru_res_3 from "../assets/video/ru/3.mp4"

import kz_res_1 from "../assets/video/kz/1.mp4"
import kz_res_2 from "../assets/video/kz/2.mp4"
import kz_res_3 from "../assets/video/kz/3.mp4"

import homeIcon from "../assets/img/home.svg"

const getResult = (answers: number[]) => {
  const result = answers.reduce((a, b) => a + b, 0)
  const lang = localStorage.getItem("lang") || "ru"
  const video_1 = lang === "ru" ? ru_res_1 : kz_res_1
  const video_2 = lang === "ru" ? ru_res_2 : kz_res_2
  const video_3 = lang === "ru" ? ru_res_3 : kz_res_3
  switch (result) {
    case 0:
      return { video: video_1, bg: res_1, title: t("res_1") }
    case 3:
      return { video: video_2, bg: res_2, title: t("res_2") }
    default:
      return { video: video_3, bg: res_3, title: t("res_3") }
  }
}

export const ResultPage = () => {
  const { answers } = useStore($store)
  const [showVideo, setShowVideo] = useState(false)
  const { video, bg, title } = getResult(answers)

  const homeButtonClick = () => setCurrentStep(0)

  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true)
    }, 2000)
  }, [])

  return (
    <Wrap bg={showVideo ? "" : bg}>
      {showVideo ? (
        <>
          <Video preload="auto" src={video} controls></Video>
          <Button onClick={homeButtonClick} icon={homeIcon} />
        </>
      ) : (
        <Title>
          {title}
          <Subtitle>&nbsp;&nbsp;—&nbsp;&nbsp;{t("way_to_success")}</Subtitle>
        </Title>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${({ bg }: { bg?: string }) =>
    `${bg ? `url(${bg}),` : ""} linear-gradient(45deg, #000, #000)`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

const Title = styled.div`
  position: absolute;
  width: 90%;
  height: 136px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 110px;
  background: rgba(0, 58, 207, 0.72);
  box-shadow: 0px 16px 64px rgba(3, 6, 23, 0.64),
    inset 0px 4px 64px 16px rgba(18, 101, 185, 0.32);
  backdrop-filter: blur(24px);
  border-radius: 22px;
  font-family: "SF Pro";
  font-size: 36px;
  line-height: 64px;
  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Subtitle = styled.span`
  text-transform: lowercase;
`

const Video = styled.video`
  height: 100%;
  width: 100%;
`

const Button = styled.div`
  width: 56px;
  height: 56px;
  background: #051a56;
  border-radius: 16px;
  background-image: ${({ icon }: { icon: string }) => `url(${icon})`};
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 36px;
  right: 36px;
`
