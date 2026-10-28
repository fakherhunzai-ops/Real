import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const limits = { name:120, email:254, company:160, service:160, stage:160, budget:100, preferredTime:160, message:5000 };
export function validateEnquiry(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { error:'Please complete the form.' };
  if (!['enquiry','call'].includes(input.kind)) return { error:'Please choose a valid enquiry type.' };
  if (input.website) return { spam:true };
  const result = { kind: input.kind };
  for (const [key, max] of Object.entries(limits)) {
    if (input[key] != null && typeof input[key] !== 'string') return { error:`Please check the ${key} field.` };
    const value = (input[key] || '').trim();
    if (value.length > max) return { error:`The ${key} field is too long.` };
    result[key] = value;
  }
  if (!result.name) return { error:'Please enter your name.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email)) return { error:'Please enter a valid email address.' };
  if (result.message.length < 10) return { error:'Please tell us a little more in your message (at least 10 characters).' };
  return { value: result };
}
export async function saveEnquiry(directory, value) {
  await mkdir(directory, { recursive:true, mode:0o700 });
  const record = { ...value, receivedAt: new Date().toISOString() };
  await appendFile(path.join(directory, 'enquiries.jsonl'), JSON.stringify(record) + '\n', { encoding:'utf8', mode:0o600 });
  return record;
}
