import { useState } from "react"
import unlocalised from "../lang/unlocalised"
import english from "../lang/english"
import russian from "../lang/russian"
import { useSettingsProperty } from "../settings"

export type Language = { [key: string]: string }
export type LanguageList = {
	"unlocalised": Language,
	"english": Language,
	"russian": Language
}
export const languages: LanguageList = {
	unlocalised,
	english,
	russian
}
// let [lang, setLang] = useSettingsProperty("language")
let language: keyof LanguageList = "english"
function changeLanguage(newlang: keyof LanguageList) {
	language = newlang
}
export function useLanguage(): [
	keyof LanguageList,
	React.Dispatch<React.SetStateAction<keyof LanguageList>>
] {
	let [_language, _setLanguage] = useState(language)
	return [
		language,
		(newl) => {
			changeLanguage(newl.valueOf() as keyof LanguageList)
			// setLang(newl)
			_setLanguage(language)
		}
	]
}
export function translate(key: string, lang?: keyof LanguageList): string {
	return languages[lang || language][key]
		|| languages.english[key]
		|| languages.unlocalised[key]
}
