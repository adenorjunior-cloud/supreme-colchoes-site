import assert from 'node:assert/strict';
const base = process.env.BASE_URL || 'http://127.0.0.1:3100';
const response = await fetch(base);
assert.equal(response.status, 200);
assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
const html = await response.text();
assert.match(html, /lang="pt-BR"/);
assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
for (const anchor of ['conteudo','essencia','inspiracao','atendimento','lojas','duvidas']) assert.ok(html.includes(`id="${anchor}"`));
for (const phone of ['5571981354567','5571993218905']) assert.ok(html.includes(`https://wa.me/${phone}?text=`));
const json = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
assert.equal(json['@graph'].filter(item => item['@type'] === 'FurnitureStore').length, 2);
const faq = json['@graph'].find(item => item['@type'] === 'FAQPage');
assert.equal(faq.mainEntity.length, 4);
for (const question of faq.mainEntity) assert.ok(html.includes(question.name));
const robots = await (await fetch(`${base}/robots.txt`)).text();
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
if (process.env.SITE_URL) {
  assert.match(robots, /Allow: \//);
  assert.ok(sitemap.includes(process.env.SITE_URL));
  assert.ok(html.includes('rel="canonical"'));
} else {
  assert.match(html, /noindex/);
  assert.match(robots, /Disallow: \//);
  assert.ok(!sitemap.includes('<loc>'));
}
assert.equal((await fetch(`${base}/pagina-inexistente`)).status, 404);
console.log('Runtime OK: homepage, anchors, contacts, schema, FAQ, indexing and 404.');
