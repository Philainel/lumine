import { AccountInfo } from "../../types/Info";
import { AccountSwitcherProps } from "../../types/Params";
import Dialog from "../Dialog";
import { RiAddCircleFill } from "react-icons/ri"
import "./accountSwitcher.scss"
import { translate } from "../../types/localization";

export default function AccountSwitcher({ isShown, onSubmit, accounts }: AccountSwitcherProps) {
	return (
		<Dialog
			onClose={() => onSubmit()}
			isShown={isShown}
			// title="Chose an account"
			title={translate("dialog.account.chose")}
		>
			<div className="account-switcher-wrapper">
				{accounts.map((account: AccountInfo) =>
					<div
						className="element"
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
				)}
				{!!accounts.length && <span className="or">─────── {translate("common.or")} ───────</span>}
				<div
					className="element add"
					onClick={() => { }}
				>
					<div className="icon">
						<RiAddCircleFill />
					</div>
					<div className="text">
						<span className="name">{translate("dialog.account.add")}</span>
						{/* <span className="name">Add new account</span> */}
					</div>
				</div>
			</div>
		</Dialog>
	)
}
