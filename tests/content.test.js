import test from 'node:test';
import assert from 'node:assert/strict';
import { articles, practices, projects, serviceBySlug, services } from '../src/data.js';

test('all fifteen services belong to a practice and have working related services', () => {
  assert.equal(services.length,15);
  assert.equal(new Set(services.map(s=>s.slug)).size,15);
  assert.equal(practices.flatMap(p=>p.services).length,15);
  for (const service of services) {
    assert.ok(practices.find(p=>p.id===service.practice)?.services.includes(service.slug));
    assert.ok(service.headline && service.signature && service.visual);
    for (const slug of service.related) assert.ok(serviceBySlug(slug), `Missing related service ${slug}`);
  }
});
test('project concepts and journal entries have unique destinations and complete content', () => {
  assert.equal(projects.length,4);
  assert.equal(articles.length,7);
  assert.equal(new Set(projects.map(p=>p.slug)).size,projects.length);
  assert.equal(new Set(articles.map(a=>a.slug)).size,articles.length);
  for (const project of projects) assert.ok(serviceBySlug(project.service) && project.challenge && project.approach && project.outcome);
  for (const article of articles) assert.ok(article.sections?.length >= 3);
});
