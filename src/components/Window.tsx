import { invoke } from "@tauri-apps/api";
import { WindowProps } from "../types/Params";
import "./window.scss";
import { useEffect, useState } from "react";
import { WindowStates } from "../types/States";

export default function Window({ version, account }: WindowProps) {
	let [state, setState] = useState<WindowStates>("waiting")
	function titleByState(state: WindowStates) {
		switch(state) {
			default:
			case "waiting": return "Play"
			case "loading": return "Loading..."

		}
	}
	useEffect(() => {
		console.log(state)
	}, [state])
	let main = <div className="main">
		<div className="buttons">

			<button className="play"
				// onClick={() => {invoke("run_game", {accountId: `${account?.id}`, versionId: `${version?.id}`})}}
				onClick={async () => {
					setState("loading")
					setTimeout(setState, 7 * 1000, "waiting")
					console.log(JSON.parse(await invoke("get_data")))
				}}
			>
				<div className="title">{titleByState(state)}</div>
				<div className="comment">
					in <img className="icon" src={version?.icon || "/assets/test-icon.png"}/>{version?.name} as <img className="icon" src={account?.icon || "/assets/test-icon.png"}/>
					{account?.nickname}
				</div>
			</button>
		</div>
	</div>
	let noAccount = <div className="pick">Pick or add new account on the sidebar.</div>
	let noVersion = <div className="pick">Pick or add new version on the sidebar.</div>
	return (
		<div className="window">
			{
				!!account ? !!version ? main : noVersion : noAccount
			}
		</div>
	)
}
