import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs'

import {createRequire} from 'module'

const require = createRequire(import.meta.url)

const args = require('minimist')(process.argv.splice(2))

args['call']

var guess = flipACoin(args.call)

console.log(guess)