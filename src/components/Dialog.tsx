import { DialogProps } from "../types/Params"
import "./dialog.scss"

export default function Dialog({ isShown, onClose, title, children }: DialogProps) {
	return (
		<div
			className={"dialog" + (isShown ? "" : " hidden")}
			onClick={onClose}
		>
			<div
				className="content"
				onClick={(e) => { e.stopPropagation() }}
			>
				<h3>{title}</h3>
				{children}
			</div>
		</div>
	)
}
