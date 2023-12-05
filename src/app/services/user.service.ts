import { Injectable } from '@angular/core';
import { Member } from '@build-5/interfaces';
import detectEthereumProvider from '@metamask/detect-provider';
import { environment } from 'src/environments/environment';
import { EventLogService } from './event.service';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private memberService: MemberService,
    private log: EventLogService,
  ) {
    // none.
  }

  public async signWithMetamask(params: any = {}): Promise<any | undefined | false> {
    this.log.add('Metamask signing initialized!');

    const provider: any = await detectEthereumProvider();
    if (provider) {
      try {
        try {
          if (!(await provider._metamask.isUnlocked())) {
            console.log(`You must unlock your MetaMask first!`, '');
            return undefined;
          }

          // Make sure account is always selected.
          await provider.request({
            method: 'eth_requestAccounts',
            params: [{ eth_accounts: {} }],
          });
        } catch (e) {
          console.log(`You must enable access to read your account address.`, '');
          return undefined;
        }

        if (!provider.selectedAddress) {
          console.log(`Please make sure you select address in MetaMask!`, '');
          return undefined;
        }

        const member: Member | undefined = await this.memberService.createIfNotExists(provider.selectedAddress);
        if (!member) {
          console.log(`Unable to get nonce to authenticate!`, '');
          return undefined;
        }

        const signature: string = await provider.request({
          method: 'personal_sign',
          params: [`0x${this.toHex(member.nonce!)}`, provider.selectedAddress],
        });

        return {
          address: provider.selectedAddress,
          signature: signature,
          projectApiKey: environment.build5Token,
          body: params,
        };
      } catch (e) {
        return undefined;
      }
    } else {
      return false;
    }
  }

  public toHex(stringToConvert: string) {
    return stringToConvert
      .split('')
      .map((c) => {
        return c.charCodeAt(0).toString(16).padStart(2, '0');
      })
      .join('');
  }
}
