import { API_KEY, Build5, https } from '@build-5/client';
import { Dataset, Network, Transaction } from '@build-5/interfaces';
import { skip } from 'rxjs';
import { address } from './utils/secret';
import { walletSign } from './utils/utils';

async function main() {
  const origin = Build5.TEST;
  const network = Network.RMS;
  let response: Transaction;
  const userSign = await walletSign(address.bech32, address);
  try {
    response = await https(origin)
      .dataset(Dataset.NFT)
      .order({
        address: address.bech32,
        signature: userSign.signature,
        publicKey: {
          hex: userSign.publicKey,
          network: network,
        },
        // Use SOONAVERSE TEST - wen.soonaverse.com
        projectApiKey: API_KEY[origin],
        body: {
          nft: '0x54e7a11724c1917469c8ca7e9936aa351a75b900',
          collection: '0x9549c221ef9e229b5491758c3c3e987931830ddb',
        },
      });
  } catch (e) {
    console.log(e);
    return;
  }

  // Get Order ID
  console.log('Order created, waiting for funds!');
  console.log('Sent: ', (response.payload.amount || 0) / 1000 / 1000, ' ', network, ' to: ', response.payload.targetAddress);
  const orderId = response.uid;

  // Monitor transactions processing.
  const tran = https(origin).dataset(Dataset.TRANSACTION).id(orderId).getLive();
  tran.pipe(skip(1)).subscribe((obj) => {
    // TODO: Need helper library to listen to Transactions updates.
    // See example:  https://github.com/soonaverse/app/blob/ae2490c39baed79c06997d97c6fddc436eb69f03/src/app/components/nft/components/nft-checkout/nft-checkout.component.ts#L161
    console.log('new update: ', obj);
  });
}

main();
