import 'dotenv/config'

// import {} from '@solana/spl-name-service'
import { getKeypairFromEnvironment } from '@solana-developers/helpers'
import {
	PublicKey,
	Connection,
	clusterApiUrl,
	LAMPORTS_PER_SOL,
} from '@solana/web3.js'

const { publicKey } = getKeypairFromEnvironment('MAIN_SECRET_KEY')

const accountAddress = new PublicKey(publicKey.toBase58())
// const accountAddress = new PublicKey('toly.sol')
const connection = new Connection(clusterApiUrl('devnet'))
const balance = await connection.getBalance(accountAddress)

const solBalance = balance / LAMPORTS_PER_SOL

console.log(
	`The balance of the account at ${accountAddress} is ${solBalance} sol`
)
console.log(`✅ Finished!`)
