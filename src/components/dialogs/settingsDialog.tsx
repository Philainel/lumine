import { SettingsModalProps } from "../../types/Params";
import Dialog from "../Dialog";
import "./settingsDialog.scss"

export default function SettingsDialog({ isShown, onClose }: SettingsModalProps) {
	return (
		<Dialog
			title="Settings"
			onClose={onClose}
			isShown={isShown}
			disableClickOutsideContent={true}
		>
			<div className="settings-dialog-wrapper">
				<div className="content">
					There will be every setting you may change.
				</div>
				<div className="buttons">
					<button onClick={onClose}>Cancel</button>
					<button onClick={onClose}>Submit</button>
				</div>
			</div>
		</Dialog>
	)
}
