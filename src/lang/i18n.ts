import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import ru from "./ru.json"
import kz from "./kz.json"

export const langs = ["ru", "kz"]

const resources = {
  ru: {
    translation: ru,
  },
  kz: {
    translation: kz,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || langs[0],
  interpolation: {
    escapeValue: false,
  },
})

export const t = (key: string, options?: any) => i18n.t(key, options)
/*eslint-disable */
export default i18n
/*eslint-enable */
