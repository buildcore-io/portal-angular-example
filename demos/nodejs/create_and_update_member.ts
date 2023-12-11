import { Build5, https } from '@build-5/client';
import { Dataset, Network } from '@build-5/interfaces';
import { environment } from 'src/environments/environment';
import { address } from './utils/secret';
import { walletSign } from './utils/utils';

async function main() {
  const origin = Build5.TEST;
  let response = await https(origin)
    .dataset(Dataset.MEMBER)
    .create({
      address: address.bech32,
      signature: '',
      body: {
        address: address.bech32,
      },
    });

  const uid = response.uid;

  const apiOrigin = Build5.TEST;
  const member = await https(apiOrigin).project(environment.build5Token).dataset(Dataset.MEMBER).id(uid).get();
  console.log('Member created: ', member?.uid);
  const name = Math.random().toString().split('.')[1];

  console.log(uid, address);
  const signature = await walletSign(uid, address);
  response = await https(origin).project(environment.build5Token)
    .dataset(Dataset.MEMBER)
    .update({
      address: address.bech32,
      signature: signature.signature,
      publicKey: {
        hex: signature.publicKey,
        network: Network.RMS,
      },
      body: {
        name: name + '_fun',
      },
    });

  console.log('Member updated: ', response);
}

main();
