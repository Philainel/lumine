import { DialogProps } from "../types/Params"
import "./dialog.scss"

export default function Dialog({ isShown, onClose, title, children, disableClickOutsideContent }: DialogProps) {
	return (
		<div
			className={"dialog" + (isShown ? "" : " hidden")}
			onClick={(e) => {
				e.stopPropagation()
				!disableClickOutsideContent && onClose()
			}}
		>
			<div
				className="content"
				onClick={(e) => { e.stopPropagation() }}
			>
				<span className="title">{title}</span>
				{children}
			</div>
		</div>
	)
}
