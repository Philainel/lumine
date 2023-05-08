#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
mod data;
use data::get_data;
use data::run_game;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![run_game::run_game])
        .invoke_handler(tauri::generate_handler![get_data::get_data])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
