'use strict'

const fs = require('fs')
const path = require('path')
const log = require('electron-log')
const download = require('./download')

module.exports.path = function () {
  log.info(__dirname);
  const paths = [
    // packed
    path.resolve(path.join(__dirname, '..', '..', 'bin', 'go-ipfs', 'go-ipfs', 'ipfs')),
    path.resolve(path.join(__dirname, '..', '..', 'bin', 'go-ipfs', 'go-ipfs', 'ipfs.exe')),
    // unpacked
    path.resolve(path.join(__dirname, '..', 'go-ipfs', 'go-ipfs', 'ipfs')),
    path.resolve(path.join(__dirname, '..', 'go-ipfs', 'go-ipfs', 'ipfs.exe')),
  ]

  for (const bin of paths) {
    if (fs.existsSync(bin)) {
      return bin
    }
  }

  throw new Error('go-ipfs binary not found, it may not be installed or an error may have occurred during installation')
}

module.exports.download = download
