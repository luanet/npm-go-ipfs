'use strict'

const fs = require('fs')
const path = require('path')
const log = require('electron-log')
const download = require('./download')

module.exports.path = function () {
  const paths = [
    path.resolve(path.join(__dirname, '..', 'node_modules', 'go-ipfs', 'go-ipfs', 'ipfs')),
    path.resolve(path.join(__dirname, '..', 'node_modules', 'go-ipfs', 'go-ipfs', 'ipfs.exe')),
    path.resolve(path.join(__dirname, '..', 'go-ipfs', 'ipfs')),
    path.resolve(path.join(__dirname, '..', 'go-ipfs', 'ipfs.exe'))
  ]

  for (const bin of paths) {
    if (fs.existsSync(bin)) {
      return bin
    }
  }

  throw new Error('go-ipfs binary not found, it may not be installed or an error may have occurred during installation')
}

module.exports.download = download
