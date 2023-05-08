import { AccountInfo, VersionInfo } from "../types/Info"
import { SidebarProps } from "../types/Params"
import { RiSettings4Fill } from "react-icons/ri"
import "./sidebar.scss"

export default function Sidebar({ onChoose, chosen }: SidebarProps) {
	let versions: VersionInfo[] = [
		{ name: "Fabric 1.19.2", id: 0 },
		{ name: "Fabric 1.19", id: 1 },
		{ name: "1.19.2", id: 2 },
		{ name: "Snapshot 22w50a", id: 3 },
	]
	let accounts: AccountInfo[] = [
		{ nickname: "Philainel", type: "offline", id: 0, },
		{ nickname: "_Terris_", type: "offline", id: 1, },
	]
	return (
		<div className="sidebar">
			<div className="list">
				{versions.map((version: VersionInfo) =>
					<div
						className={"element" + (chosen[1]?.id == version.id ? " active" : "")}
						data-descr={version.name}
						key={version.id}
					>
						<img
							className="icon"
							src={version.icon || "/assets/test-icon.png"}
							onClick={() => onChoose({ version })}
						/>
						<span className="title">{version.name}</span>
					</div>
				)}
				<div className="divider" />
				{accounts.map((account: AccountInfo) =>
					<div
						className={"element" + (chosen[0]?.id == account.id ? " active" : "")}
						data-descr={account.nickname}
						key={account.id}
					>
						<img
							className="icon"
							src={account.icon || "/assets/test-icon.png"}
							onClick={() => onChoose({ account })}
						/>
						<span className="title">{account.nickname}</span>
					</div>
				)}
			</div>
			{/* <div className="bottom">
				<div className="element"><RiSettings4Fill className="icon" /></div>
			</div> */}
		</div>
	)
}
