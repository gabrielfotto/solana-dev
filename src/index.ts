import 'dotenv/config'

import { Keypair } from '@solana/web3.js'
import {
	getKeypairFromEnvironment,
	getKeypairFromFile,
} from '@solana-developers/helpers'

// const keypair = Keypair.generate()

const mainKeypair = getKeypairFromEnvironment('MAIN_SECRET_KEY')
const secondaryKeypair = getKeypairFromEnvironment('SECONDARY_SECRET_KEY')

console.log('mainKeypair\t', mainKeypair.publicKey.toBase58())
console.log('secondaryKeypair', secondaryKeypair.publicKey.toBase58())
console.log()
