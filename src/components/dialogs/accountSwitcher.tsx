import { useEffect } from "react";
import { AccountInfo } from "../../types/Info";
import { AccountSwitcherProps } from "../../types/Params";
import Dialog from "../Dialog";
import "./accountSwitcher.scss"

export default function AccountSwitcher({ isShown, onSubmit, accounts }: AccountSwitcherProps) {
	return (
		<Dialog
			onClose={() => onSubmit()}
			isShown={isShown}
			title="Chose an account"
		>
			<div className="wrapper">
				{accounts.map((account: AccountInfo) =>
					<div
						className="account-switcher-element"
						key={account.id}
						onClick={() => onSubmit(account)}
					>

						<img
							className="icon"
							src={account.icon || "/assets/test-icon.png"}
						/>
						<div className="text">
							<span className="name">{account?.nickname}</span>
							<span className="type">{account?.type}</span>
						</div>
					</div>
					// 	<img
					// 	className="icon"
					// 	src={account?.icon || "/assets/test-icon.png"}
					// />
					// 
				)}
			</div>
		</Dialog>
	)
}
