import { Build5, https } from '@build-5/client';
import { Dataset, Network, ProjectCreateResponse, Space } from '@build-5/interfaces';
import { environment } from 'src/environments/environment';
import { address } from './utils/secret';
import { walletSign } from './utils/utils';

async function main() {
  const origin = Build5.TEST;
  let responseProject: ProjectCreateResponse;
  let userSign = await walletSign(address.bech32, address);
  try {
    responseProject = await https(origin).project(environment.build5Token)
      .dataset(Dataset.PROJECT)
      .create(<any>{
        address: address.bech32,
        signature: userSign.signature,
        publicKey: {
          hex: userSign.publicKey,
          network: Network.RMS,
        },
        body: {
          name: 'TanKRURK',
          config: {
            billing: 'volume_based',
          },
        },
      });
  } catch (e) {
    console.log(e);
    return;
  }

  console.log('Project created id: ', responseProject.project.uid, ', API Key: ', responseProject.token);
  const projectAPIKey = responseProject.token;

  // Create project under the space
  userSign = await walletSign(address.bech32, address);
  let responseSpace: Space;
  try {
    responseSpace = await https(origin).project(environment.build5Token)
      .dataset(Dataset.SPACE)
      .create({
        address: address.bech32,
        signature: userSign.signature,
        publicKey: {
          hex: userSign.publicKey,
          network: Network.RMS,
        },
        body: {
          name: 'TanKRURK_SPACE',
        },
      });
  } catch (e) {
    console.log(e);
    return;
  }

  console.log(responseSpace);
}

main();
