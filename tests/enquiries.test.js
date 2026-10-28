import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { saveEnquiry, validateEnquiry } from '../server/enquiries.js';

const valid = {kind:'enquiry', name:'Test User', email:'test@example.com', message:'I would like to discuss a workflow.'};
test('validates and trims an enquiry', () => { const result=validateEnquiry({...valid,name:'  Test User  '}); assert.equal(result.value.name,'Test User'); assert.equal(result.value.kind,'enquiry'); });
test('rejects invalid input and does not accept unknown fields', () => { assert.ok(validateEnquiry({...valid,email:'bad'}).error); assert.ok(validateEnquiry({...valid,message:'short'}).error); assert.ok(validateEnquiry({...valid,kind:'fake'}).error); assert.equal(validateEnquiry({...valid,unexpected:'ignore'}).value.unexpected,undefined); });
test('honeypot submissions are not accepted as enquiries', () => { assert.equal(validateEnquiry({...valid,website:'spam'}).spam,true); });
test('stores records as JSON lines', async () => { const dir=await mkdtemp(path.join(os.tmpdir(),'horizon-test-')); try { await saveEnquiry(dir,validateEnquiry(valid).value); const data=JSON.parse((await readFile(path.join(dir,'enquiries.jsonl'),'utf8')).trim()); assert.equal(data.email,valid.email); assert.ok(data.receivedAt); } finally { await rm(dir,{recursive:true,force:true}); } });

test('private data paths are never exposed through Vite or encoded URLs', async () => {
  const { isSensitivePath } = await import('../server/routes.js');
  const root='/srv/site', data='/srv/site/.data';
  assert.equal(isSensitivePath('/.data/enquiries.jsonl',root,data),true);
  assert.equal(isSensitivePath('/%2edata/enquiries.jsonl',root,data),true);
  assert.equal(isSensitivePath('/@fs/srv/site/.data/enquiries.jsonl',root,data),true);
  assert.equal(isSensitivePath('/services',root,data),false);
});
test('recognises real pages for the production fallback', async () => {
  const { isPage } = await import('../server/routes.js');
  assert.equal(isPage('/services/ai-agents'),true);
  assert.equal(isPage('/case-studies/connected-operations/'),true);
  assert.equal(isPage('/services/unknown'),false);
});
