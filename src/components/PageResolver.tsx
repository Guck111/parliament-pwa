import { useStore } from "effector-react"
import { CounterPage } from "./CounterPage"
import { HomePage } from "./HomePage"
import { PageLayout } from "./PageLayout"
import { QuizPage } from "./QuizPage"
import { ResultPage } from "./ResultPage"
import { $store } from "./store"

const getCurrentPage = (currentStep: number): JSX.Element => {
  switch (currentStep) {
    case 0:
      return <HomePage />
    case 1:
    case 2:
    case 3:
      return <QuizPage />
    case 4:
      return <CounterPage />
    case 5:
      return <ResultPage />
    default:
      return <QuizPage />
  }
}
export const PageResolver = () => {
  const { currentStep } = useStore($store)

  return <PageLayout>{getCurrentPage(currentStep)}</PageLayout>
}
