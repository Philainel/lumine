use directories::ProjectDirs;
use std::fs;
use std::io;
use std::io::prelude::*;

#[tauri::command]
pub fn get_data() -> String {
	match read_data() {
		Ok(res) => res,
		Err(err) => err
	}
}
const DEFAULT_DATA: &str = "{}";
fn read_data() -> Result<String, String> {
	match ProjectDirs::from("me", "philainel", "Test Launcher") {
		Some(pathes) => {
			let path = pathes.data_dir();
			if !path.try_exists().expect("{\"error\":{\"code\":1, \"msg\":\"Path unreachable.\"}}") {
				fs::create_dir(path).expect("{\"error\":{\"code\":2, \"msg\":\"Cant create data directory.\"}}");
			}
			let data_buf = path.join("data.json");
			if !data_buf.try_exists().expect("{\"error\":{\"code\":3, \"msg\":\"Data file's path unreachable.\"}}") {
				//TODO: SET DEFAULT CONFIG
				let mut file = fs::File::create(data_buf.as_path()).expect("{\"error\":{\"code\":6, \"msg\":\"Can't create Data 'data/data.json' file\"}}");
				file.write_all(DEFAULT_DATA.as_bytes()).expect("{\"error\":{\"code\":7, \"msg\":\"Error writing default Data 'data/data.json' file.\"}}");
				// return Err("{\"error\":{\"code\":4, \"msg\":\"Not Implemented.\"}}".to_string());
			}
			let mut content = String::new();
			let mut data_bufreader = io::BufReader::new(
				fs::File::open(data_buf.as_path()).expect(
					"{\"error\":{\"code\":5, \"msg\":\"Can't open 'data/data.json'.\"}}"
				)
			);
			data_bufreader.read_to_string(&mut content).expect("{\"error\":{\"code\":6, \"msg\":\"Error while reading 'data/data.json' content.\"}}");
			Ok(content)
		},
		None => Err("{\"error\":{\"code\":0, \"msg\":\"No path available.\"}}".to_string())
	}
}
