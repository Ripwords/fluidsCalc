"use strict"

const path = require("path")
import { app, protocol, BrowserWindow, shell, clipboard, dialog, ipcMain } from "electron"
import { createProtocol } from "vue-cli-plugin-electron-builder/lib"
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer"
import { autoUpdater } from "electron-updater"
const isDevelopment = process.env.NODE_ENV !== "production"

protocol.registerSchemesAsPrivileged([{ scheme: "app", privileges: { secure: true, standard: true } }])

async function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		width: 1200,
		height: 750,
		frame: false,
		webPreferences: {
			// Use pluginOptions.nodeIntegration, leave this alone
			// See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
			nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
			contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
			enableRemoteModule: true,
			preload: path.join(__dirname, "preload.js"),
		},
	})

	win.setResizable(true)

	ipcMain.on("openGithub", (event, arg) => {
		if (arg === "open") {
			shell.openExternal("https://github.com/ripwords")
		}
	})

	ipcMain.on("copyMail", (event, arg) => {
		if (arg === "copy") {
			clipboard.writeText("teohjjteoh@gmail.com", "email")
			dialog.showMessageBox(win, {
				title: "Copied Successfully!",
				message: "Email has been copied to your clipboard.",
			})
		}
	})

	if (process.env.WEBPACK_DEV_SERVER_URL) {
		// Load the url of the dev server if in development mode
		await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
		// if (!process.env.IS_TEST) win.webContents.openDevTools()
	} else {
		createProtocol("app")
		// Load the index.html when not in development
		win.loadURL("app://./index.html")
	}
	win.webContents.openDevTools()
	ipcMain.on("quitApp", (event, arg) => {
		if (arg === "quit") {
			win.webContents.closeDevTools()
			app.quit()
			console.log("Exiting application")
		}
	})

	function sendStatusToWindow(text) {
		dialog.showMessageBox(win, {
			title: "Updater",
			message: text,
		})
	}
	autoUpdater.checkForUpdatesAndNotify()
	autoUpdater.on("checking-for-update", () => {
		sendStatusToWindow("Checking for update...")
	})
	autoUpdater.on("update-available", (info) => {
		sendStatusToWindow("Update available.")
	})
	autoUpdater.on("update-not-available", (info) => {
		sendStatusToWindow("Update not available.")
	})
	autoUpdater.on("error", (err) => {
		sendStatusToWindow("Error in auto-updater. " + err)
	})
	autoUpdater.on("download-progress", (progressObj) => {
		sendStatusToWindow(log_message)
	})
	autoUpdater.on("update-downloaded", (info) => {
		sendStatusToWindow("Update downloaded")
	})
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== "darwin") {
		app.quit()
	}
})

app.on("activate", () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on("ready", function() {
	autoUpdater.checkForUpdatesAndNotify()
})

app.on("ready", async () => {
	if (isDevelopment && !process.env.IS_TEST) {
		// Install Vue Devtools
		try {
			await installExtension(VUEJS3_DEVTOOLS)
		} catch (e) {
			console.error("Vue Devtools failed to install:", e.toString())
		}
	}
	createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
	if (process.platform === "win32") {
		process.on("message", (data) => {
			if (data === "graceful-exit") {
				app.quit()
			}
		})
	} else {
		process.on("SIGTERM", () => {
			app.quit()
		})
	}
}
