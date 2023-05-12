import { AccountInfo, VersionInfo } from "../types/Info"
import { SidebarProps } from "../types/Params"
import { RiSettings4Fill, RiArrowUpSFill, RiAddCircleFill } from "react-icons/ri"
import { translate } from "../types/localization"
import "./sidebar.scss"

export default function Sidebar({ onChoose, chosen, versions, onShowSwitcher, switcherShown, onShowSettings, settingsShown }: SidebarProps) {
	let account = chosen[0]
	return (
		<div className="sidebar">
			<div className="title">Lumine Launcher</div>
			<div className="list">
				{versions.map((version: VersionInfo) =>
					<div
						className={"element" + (chosen[1]?.id == version.id ? " active" : "")}
						key={version.id}
						onClick={() => onChoose({ version })}
					>
						<img
							className="icon"
							src={version.icon || "/assets/test-icon.png"}
						/>
						<span className="title">{version.name}</span>
					</div>
				)}
				{!!versions.length && <span className="or">─────── {translate("common.or")} ───────</span>}
				<div
					className="element add"
					onClick={() => { }}
				>
					<div className="icon">
						<RiAddCircleFill />
					</div>
					<span className="title">{translate("sidebar.add.version")}</span>
					{/* <span className="title">Install new version</span> */}
				</div>
			</div>
			<div className="bottom">
				<div className="account"
					onClick={onShowSwitcher}
				>
					<img
						className="icon"
						src={account?.icon || "/assets/test-icon.png"}
					/>
					<div className="text">
						<span className="name">{account?.nickname}</span>
						<span className="type">{account?.type}</span>
					</div>
					<div className={"arrow" + (switcherShown ? " active" : "")}>
						<RiArrowUpSFill />
					</div>
				</div>
				<div
					className={"settings" + (settingsShown ? " active" : "")}
					onClick={() => onShowSettings()}
				>
					<RiSettings4Fill />
				</div>
			</div>
		</div>
	)
}
