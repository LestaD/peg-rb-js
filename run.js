#!/usr/bin/env node

const { readFileSync } = require('fs')
const babel = require('babel-core')
const pegjs = require('pegjs')

const code = readFileSync('./example.js.rb').toString()
const parserCode = readFileSync('./rbjs.pegjs').toString()

const parser = pegjs.generate(parserCode)

const ast = parser.parse(code)

console.log(ast)

// const result = babel.transformFromAst({
//   type: 'File',
//   program: ast,
//   comments: [],
//   tokens: []
// })

const result = babel.transformFromAst(ast)
console.log(result)
