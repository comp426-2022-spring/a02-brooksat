import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs'
import {createRequire} from 'module'

const require = createRequire(import.meta.url)



let args = require('minimist')(process.argv.slice(2))

let number = args['number'] || 1



var coin_flips = coinFlips(number)
console.log(coin_flips)

var count_flips = countFlips(coin_flips)
console.log(count_flips)
//console.log(coinFlips(args))