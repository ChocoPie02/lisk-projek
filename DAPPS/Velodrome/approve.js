import Web3 from "web3";
import usdtABI from "./usdt.js";
 

const approve = async (privatekey) => {
    const web3 = new Web3('https://rpc.api.lisk.com')
    const account = web3.eth.accounts.privateKeyToAccount(privatekey)
    web3.eth.accounts.wallet.add(account)
    
    const contract = "0x05D032ac25d322df992303dCa074EE7392C117b9"
    const spender = '0x652e53C6a4FE39B6B30426d9c96376a105C89A95'
    const amount = '100000'

    const approve = new web3.eth.Contract(usdtABI, contract)
    const data = approve.methods.approve(spender, amount).encodeABI()

   try {
    const gasEstimate = await web3.eth.estimateGas({
        from: account.address,
        to: contract,
        data: data
    })


    const tx = {
        from: account.address,
        to: contract,
        data: data,
        nonce: await web3.eth.getTransactionCount(account.address),
        gas: gasEstimate,
        gasPrice: await web3.eth.getGasPrice(),
    }

    const receipt = await web3.eth.accounts.signTransaction(tx, privatekey)
    await web3.eth.sendSignedTransaction(receipt.rawTransaction)
    return true
   } catch (error) {
     return false
   }

}

export default approve