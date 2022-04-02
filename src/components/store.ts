import { createEvent, createStore } from "effector"

type Store = {
	currentStep: number
	answers: number[]
}

const defaultStore: Store = {
	currentStep: 0,
	answers: []
}

export const setCurrentStep = createEvent<number>()
export const setAnswer = createEvent<number>()
export const removeAnswer = createEvent()

export const $store = createStore(defaultStore)
	.on(setCurrentStep, (store, currentStep) => ({
		...store,
		currentStep
	})).on(setAnswer, (store, answer) => ({
		...store,
		answers: [...store.answers, answer]
	}))
	.on(removeAnswer, (store) => ({
		...store,
		answers: [...store.answers].slice(0, store.answers.length - 1)
	}))