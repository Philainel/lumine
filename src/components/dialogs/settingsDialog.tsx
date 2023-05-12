import { ChangeEvent } from "react";
import { SettingsModalProps } from "../../types/Params";
import { useLanguage, languages, LanguageList, translate } from "../../types/localization";
import Dialog from "../Dialog";
import "./settingsDialog.scss"

export default function SettingsDialog({ isShown, onClose }: SettingsModalProps) {
	let [language, setLanguage] = useLanguage()
	function onLangChange(e: ChangeEvent<HTMLSelectElement>) {
		setLanguage(e.target.value as keyof LanguageList)
	}
	return (
		<Dialog
			title={translate("dialog.settings")}
			onClose={onClose}
			isShown={isShown}
			disableClickOutsideContent={true}
		>
			<div className="settings-dialog-wrapper">
				<div className="content">
					<select name="lang" id="lang" value={language} onChange={onLangChange}>
						{Object.entries(languages).map(([k, v]) => ({ value: k, name: k})).map(l => <option value={l.value}>{l.name}</option>)}
					</select>
				</div>
				<div className="buttons">
					<button onClick={onClose}>{translate("dialog.settings.button.cancel")}</button>
					<button onClick={onClose}>{translate("dialog.settings.button.submit")}</button>
				</div>
			</div>
		</Dialog>
	)
}
