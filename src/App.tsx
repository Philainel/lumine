import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Window from "./components/Window";
import { AccountInfo, VersionInfo } from "./types/Info";
import { SidebarPropsOnChooseArgs } from "./types/Params";
import { invoke } from "@tauri-apps/api";
import AccountSwitcher from "./components/dialogs/accountSwitcher";
import SettingsDialog from "./components/dialogs/settingsDialog";

function App() {
	let [account, setAccount] = useState<AccountInfo | undefined>(undefined)
	let [version, setVersion] = useState<VersionInfo | undefined>(undefined)
	let [switcherShown, setSwitcherShown] = useState<boolean>(false)
	let [settingsShown, setSettingsShown] = useState<boolean>(false)

	let versions: VersionInfo[] = [
		{ name: "Fabric 1.19.2", id: 0 },
		{ name: "Fabric 1.19", id: 1 },
		{ name: "1.19.2", id: 2 },
		{ name: "Snapshot 22w50a", id: 3 },
		// { name: "Snapshot 22w51a", id: 4 },
		// { name: "Snapshot 22w52a", id: 5 },
		// { name: "Snapshot 22w53a", id: 6 },
		// { name: "Snapshot 22w54a", id: 7 },
		// { name: "Snapshot 23w01a", id: 8 },
		// { name: "Snapshot 23w02a", id: 9 },
		// { name: "Snapshot 23w03a", id: 10 },
		// { name: "Snapshot 23w04a", id: 11 },
		// { name: "Snapshot 23w05a", id: 12 },
	]
	let accounts: AccountInfo[] = [
		{ nickname: "Philainel", type: "microsoft", id: 0, },
		{ nickname: "_Terris_", type: "offline", id: 1, },
	]

	useEffect(() => {
		invoke("get_data").then(console.log)
		setAccount(accounts[0])
	}, [])

	function OnChooseSidebar({ version, account }: SidebarPropsOnChooseArgs) {
		account && setAccount(account)
		version && setVersion(version)
		console.log(`Chosen ${account?.nickname} and ${version?.name}`)
	}

	return (
		<div className="app">
			<Sidebar
				onChoose={OnChooseSidebar}
				chosen={[account, version]}
				accounts={accounts}
				versions={versions}
				onShowSwitcher={() => setSwitcherShown(true)}
				switcherShown={switcherShown}
				settingsShown={settingsShown}
				onShowSettings={() => setSettingsShown(true)}
			/>
			<Window version={version} account={account} />
			<AccountSwitcher
				isShown={switcherShown}
				onSubmit={(account?: AccountInfo) => {
					if (account) setAccount(account)
					setSwitcherShown(false)
				}}
				accounts={accounts}
			/>
			<SettingsDialog 
				isShown={settingsShown}
				onClose={() => {
					setSettingsShown(false)
				}}
			/>
		</div>
	);
}

export default App;
