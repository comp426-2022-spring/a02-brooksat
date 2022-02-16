import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs'
import {createRequire} from 'module'

const require = createRequire(import.meta.url)



const args = require('minimist')(process.argv.slice(2))

args['number']

console.log(coinFlips(args.number))
//console.log(coinFlips(args))