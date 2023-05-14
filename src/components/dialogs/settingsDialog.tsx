import { ChangeEvent, useState } from "react";
import { SettingsModalProps } from "../../types/Params";
import { useLanguage, languages, LanguageList, translate } from "../../types/localization";
import Dialog from "../Dialog";
import "./settingsDialog.scss"
import { Settings, defaultSettings, useSettingsOverrides, useSettingsProperty } from "../../settings";

export default function SettingsDialog({ isShown, onClose }: SettingsModalProps) {
	let [language, setLanguage] = useLanguage()
	let [settingsOverrides, setSettingsOverrides] = useSettingsOverrides()
	function onLangChange(e: ChangeEvent<HTMLSelectElement>) {
		temp.language = e.target.value as keyof LanguageList
		setLanguage(e.target.value as keyof LanguageList)
	}

	const temp: Partial<Settings> = { ...defaultSettings, ...settingsOverrides }
	let [nOnLaunch, setNOnLaunch] = useState(temp.launchNotify)

	function onCancel() {
		onClose()
	}
	function onSubmit() {
		if (temp.launchNotify != nOnLaunch) //
		onClose()
	}
	return (
		<Dialog
			title={translate("dialog.settings")}
			onClose={onCancel}
			isShown={isShown}
			disableClickOutsideContent={true}
		>
			<div className="settings-dialog-wrapper">
				<div className="content">
					<table>
						<tbody>
							<tr>
								<td>{translate("dialog.settings.lang")}: </td>
								<td>
									<select name="lang" id="lang" value={language} onChange={onLangChange}>
										{Object.entries(languages).map(([k, v]) => ({ value: k, name: k })).map(l => <option value={l.value}>{l.name}</option>)}
									</select>
								</td>
							</tr>
							<tr>
								<td>{translate("dialog.settings.n-on-launch")}: </td>
								<td>
									<input type="checkbox" checked={nOnLaunch} onChange={() => { setNOnLaunch(!nOnLaunch)}} />
								</td>
							</tr>
						</tbody>
					</table>

				</div>
				<div className="buttons">
					<button onClick={onCancel}>{translate("dialog.settings.button.cancel")}</button>
					<button onClick={onSubmit}>{translate("dialog.settings.button.submit")}</button>
				</div>
			</div>
		</Dialog>
	)
}
