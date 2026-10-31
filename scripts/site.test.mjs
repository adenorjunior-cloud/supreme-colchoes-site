import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getSiteUrl, whatsappLink } from '../lib/site.ts';
import { serializeJsonLd } from '../lib/json-ld.ts';
import { stores } from '../lib/stores.ts';
test('WhatsApp uses each confirmed store contact and encodes messages', () => {
  assert.equal(stores.length, 2);
  assert.match(whatsappLink(stores[0].whatsapp, 'Olá & projeto'), /^https:\/\/wa.me\/5571981354567\?text=Ol%C3%A1%20%26%20projeto$/);
  assert.match(whatsappLink(stores[1].whatsapp), /wa.me\/5571993218905/);
  assert.throws(() => whatsappLink('invalid'));
});
test('production URL is optional and rejects credentials and paths', () => {
  assert.equal(getSiteUrl(''), undefined);
  assert.equal(getSiteUrl('https://example.com'), 'https://example.com');
  for (const url of ['http://example.com', 'https://example.com/path', 'https://user:pass@example.com', 'https://example.com?x=1']) assert.throws(() => getSiteUrl(url));
});
test('JSON-LD preserves data without allowing script injection', () => {
  const value = { text: '</script><script>alert(1)</script>&\u2028\u2029' };
  const encoded = serializeJsonLd(value);
  assert.equal(encoded.includes('<'), false);
  assert.equal(encoded.includes('&'), false);
  assert.deepEqual(JSON.parse(encoded), value);
});
