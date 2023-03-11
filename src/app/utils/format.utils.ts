import { Pipe, PipeTransform } from '@angular/core';
import { Network } from '@soonaverse/interfaces';

export const NETWORK_DETAIL = {
  [Network.IOTA]: {
    label: 'MIOTA',
    divideBy: 1000 * 1000,
  },
  [Network.ATOI]: {
    label: 'MATOI',
    divideBy: 1000 * 1000,
  },
  [Network.SMR]: {
    label: 'SMR',
    divideBy: 1000 * 1000,
  },
  [Network.RMS]: {
    label: 'RMS',
    divideBy: 1000 * 1000,
  },
};

@Pipe({ name: 'unitFormat' })
export class UnitFormatPipe implements PipeTransform {
  transform(
    value: number | null | undefined,
    network?: Network | null,
    removeZeroes = false,
    showUnit = true,
    defDecimals = 2,
  ): string {
    if (!network) {
      network = Network.IOTA;
    }

    if (!value) {
      value = 0;
    }

    value = value / NETWORK_DETAIL[network].divideBy;

    const parts = (removeZeroes ? value : value.toFixed(defDecimals)).toString().split('.');
    const formattedValue =
      parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts.length === 2 ? '.' + parts[1] : '');
    return formattedValue + (showUnit ? ` ${NETWORK_DETAIL[network].label}` : '');
  }
}
