import { AccountInfo, VersionInfo } from "./Info";

export type WindowProps = { version?: VersionInfo, account?: AccountInfo }
export type SidebarProps = { onChoose: (data: SidebarPropsOnChooseArgs) => any, chosen: [AccountInfo?, VersionInfo?] }
export type SidebarPropsOnChooseArgs = {version?: VersionInfo, account?: AccountInfo}
