import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Window from "./components/Window";
import { AccountInfo, VersionInfo } from "./types/Info";
import { SidebarPropsOnChooseArgs } from "./types/Params";
import { invoke } from "@tauri-apps/api";

function App() {
	let [account, setAccount] = useState<AccountInfo | undefined>(undefined)
	let [version, setversion] = useState<VersionInfo | undefined>(undefined)
	useEffect(() => {
		invoke("get_data").then(console.log)
	})
	function OnChooseSidebar({ version, account }: SidebarPropsOnChooseArgs) {
		account && setAccount(account)
		version && setversion(version)
		console.log(`Chosen ${account?.nickname} and ${version?.name}`)
	}
	return (
		<div className="app">
			<Sidebar onChoose={OnChooseSidebar} chosen={[account, version]} />
			<Window version={version} account={account} />
		</div>
	);
}

export default App;
