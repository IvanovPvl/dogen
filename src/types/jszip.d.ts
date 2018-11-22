type ZipResult = String | Uint8Array | ArrayBuffer | Buffer | Blob;
type GenerateOptions = {type: string};

declare class JSZip {
  constructor(content: any);
  generate(options: GenerateOptions): ZipResult;
}

declare namespace JSZip {}

export = JSZip;
