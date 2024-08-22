import 'dotenv/config'

import { getKeypairFromEnvironment } from '@solana-developers/helpers'
import {
	PublicKey,
	Connection,
	clusterApiUrl,
	Transaction,
	SystemProgram,
	sendAndConfirmTransaction,
} from '@solana/web3.js'

const mainKeypair = getKeypairFromEnvironment('MAIN_SECRET_KEY')
const secondaryKeypair = getKeypairFromEnvironment('SECONDARY_SECRET_KEY')

const connection = new Connection(clusterApiUrl('devnet'))
const transaction = new Transaction()

const sender = new PublicKey(mainKeypair.publicKey.toBase58())
const recipient = new PublicKey(secondaryKeypair.publicKey.toBase58())

const LAMPORTS_TO_SEND = 1

const transferInstruction = SystemProgram.transfer({
	fromPubkey: sender,
	toPubkey: recipient,
	lamports: LAMPORTS_TO_SEND,
})

transaction.add(transferInstruction)

console.time('transaction')

const signature = await sendAndConfirmTransaction(connection, transaction, [
	mainKeypair,
])

console.timeEnd('transaction')

console.log(
	`💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${recipient}. `
)
console.log(`Transaction signature is ${signature}!`)
