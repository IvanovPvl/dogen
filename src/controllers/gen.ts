import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
import { Context } from 'koa';
import * as JSZip from 'jszip';
import * as Docxtemplater from 'docxtemplater';

import { server, env } from '../config';

const readFile = util.promisify(fs.readFile);

export async function create(ctx: Context) {
  const content = await readFile(path.join(templatesDir(), ctx.params.templateId), 'binary');
  const zip = new JSZip(content);
  const doc = new Docxtemplater();

  doc.loadZip(zip);
  doc.setData(ctx.request.body);

  const docRenderAsync = () => new Promise(resolve => resolve(doc.render()));
  await docRenderAsync();

  const generateAsync = () => new Promise(resolve => resolve(doc.getZip().generate({type: 'nodebuffer'})));
  const buf = await generateAsync();
  ctx.body = buf;
}

const templatesDir = () => env.isTest ?
  path.join(server.root, 'src', 'test', 'fake') :
  path.join(server.root, 'templates');
