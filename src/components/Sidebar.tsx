import { AccountInfo, VersionInfo } from "../types/Info"
import { SidebarProps } from "../types/Params"
import { RiSettings4Fill } from "react-icons/ri"
import "./sidebar.scss"
import { useState } from "react"

export default function Sidebar({ onChoose, chosen, accounts, versions, onShowSwitcher }: SidebarProps) {
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
				{/* <div className="divider" /> */}
				{/* {accounts.map((account: AccountInfo) =>
					<div
						className={"element" + (chosen[0]?.id == account.id ? " active" : "")}
						data-descr={account.nickname}
						key={account.id}
						onClick={() => onChoose({ account })}
					>
						<img
							className="icon"
							src={account.icon || "/assets/test-icon.png"}
						/>
						<span className="title">{account.nickname}</span>
					</div>
				)} */}
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
				</div>
				<RiSettings4Fill className="icon" />
			</div>
		</div>
	)
}
