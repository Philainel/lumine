import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Window from "./components/Window";
import { AccountInfo, VersionInfo } from "./types/Info";
import { SidebarPropsOnChooseArgs } from "./types/Params";
import { invoke } from "@tauri-apps/api";
import AccountSwitcher from "./components/dialogs/accountSwitcher";

function App() {
	let [account, setAccount] = useState<AccountInfo | undefined>(undefined)
	let [version, setVersion] = useState<VersionInfo | undefined>(undefined)

	let versions: VersionInfo[] = [
		{ name: "Fabric 1.19.2", id: 0 },
		{ name: "Fabric 1.19", id: 1 },
		{ name: "1.19.2", id: 2 },
		{ name: "Snapshot 22w50a", id: 3 },
	]
	let accounts: AccountInfo[] = [
		{ nickname: "Philainel", type: "microsoft", id: 0, },
		{ nickname: "_Terris_", type: "offline", id: 1, },
	]
	let [switcherShown, setSwitcherShown] = useState<boolean>(false)

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
			/>
			<Window version={version} account={account} />
			<AccountSwitcher
				isShown={switcherShown}
				onSubmit={(account?: AccountInfo) => {
					if(account) setAccount(account)
					setSwitcherShown(false)
				}}
				accounts={accounts}
			/>
		</div>
	);
}

export default App;
