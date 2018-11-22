import * as JSZip from 'jszip';

declare class Docxtemplater {
  constructor();
  loadZip(zip: JSZip): void;
  setData(data: any): Docxtemplater;
  getZip(): JSZip;
  render(): Docxtemplater;
}

declare namespace Docxtemplater {}

export = Docxtemplater;
