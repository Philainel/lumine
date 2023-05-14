import { useState } from "react"
import { LanguageList } from "../types/localization"

export type Settings = {
	language: keyof LanguageList,
	launchNotify: boolean
}

export const defaultSettings: Settings = {
	language: "english",
	launchNotify: true,
}

const overrides: Partial<Settings> = {

}

function updateOverrides(overs: Partial<Settings>) {
	(Object.keys(overs) as [keyof Settings]).map((k) => {
		if (overs[k] != undefined) overrides[k] = overs[k] as any
	})
}

function getSettingsProperty<K extends keyof Settings>(setting: K): Settings[K] {
	return overrides[setting] || defaultSettings[setting]
}

function setSettingsProperty<K extends keyof Settings>(setting: K, value: Settings[K]) {
	overrides[setting] = value
}

export function useSettingsProperty<K extends keyof Settings>(key: K): [
	Settings[K],
	React.Dispatch<React.SetStateAction<Settings[K]>>
] {
	let [setting, setSetting] = useState<Settings[K]>(getSettingsProperty(key))
	return [
		setting,
		(str) => {
			setSettingsProperty(key, str.valueOf() as Settings[K])
			setSetting(str)
		}
	]
}

export function useSettingsOverrides(): [
	Partial<Settings>,
	React.Dispatch<React.SetStateAction<Partial<Settings>>>
] {
	let [ _overrides, _setOverrides ] = useState<Partial<Settings>>(overrides)
	return [
		_overrides,
		(str) => {
			updateOverrides(str.valueOf() as Partial<Settings>)
			_setOverrides(str)
		}
	]
}
