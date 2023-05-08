export type VersionInfo = {
	name: string,
	isExcluded?: boolean,
	homepath?: string,
	icon?: string,
	id: number
}
export type AccountInfo = {
	nickname: string,
	type: "offline" | "microsoft" | "mojang",
	token?: string,
	icon?: string,
	id: number
}
