'use strict'

const fs = require('fs')
const path = require('path')
const log = require('electron-log')

module.exports.path = function () {
  const paths = [
    path.resolve(path.join(__dirname, '..', 'node_modules', 'go-ipfs', 'go-ipfs', 'ipfs')),
    path.resolve(path.join(__dirname, '..', 'node_modules', 'go-ipfs', 'go-ipfs', 'ipfs.exe')),
    path.resolve(path.join(__dirname, '..', 'go-ipfs', 'ipfs')),
    path.resolve(path.join(__dirname, '..', 'go-ipfs', 'ipfs.exe'))
  ]

  log.info(paths)
  for (const bin of paths) {
    const path = bin.replace('app.asar', 'app.asar.unpacked')
    if (fs.existsSync(path)) {
      return path
    }
  }

  throw new Error('go-ipfs binary not found, it may not be installed or an error may have occurred during installation')
}
