import { AccountInfo, VersionInfo } from "./Info";

export type WindowProps = { version?: VersionInfo, account?: AccountInfo }
export type SidebarProps = { 
	onChoose: (data: SidebarPropsOnChooseArgs) => any,
	chosen: [AccountInfo?, VersionInfo?],
	accounts: AccountInfo[],
	versions: VersionInfo[],
	onShowSwitcher: () => any,
	switcherShown?: boolean
	onShowSettings: () => any,
	settingsShown?: boolean
}
export type SidebarPropsOnChooseArgs = {version?: VersionInfo, account?: AccountInfo}

export type DialogProps =  {
	title: string,
	children: JSX.Element | string | JSX.Element[]
	onClose: () => any
	isShown: boolean,
	disableClickOutsideContent?: boolean
}
export type AccountSwitcherProps = {
	isShown: boolean
	onSubmit: (account?: AccountInfo) => any
	accounts: AccountInfo[]
}
export type SettingsModalProps = {
	isShown: boolean
	onClose: () => any
}

