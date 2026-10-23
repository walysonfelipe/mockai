import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { MOCKUPS, mockupLayout, screenLayout } from '../shared/model.js';
import { validateComposition } from '../shared/media.js';
const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-8, `${a} != ${b}`);
const bundle = readFileSync(new URL('../content/simulator.js', import.meta.url), 'utf8');
const catalogStart = bundle.indexOf('const MOCKUPS = Object.freeze(') + 'const MOCKUPS = Object.freeze('.length;
const bundledProfiles = JSON.parse(bundle.slice(catalogStart, bundle.indexOf('].map', catalogStart) + 1));
for (const profile of MOCKUPS.filter(p => p.id.startsWith('mockup-laptops-'))) {
  test(`${profile.label}: opening, iframe resolution, rotation and capture agree`, () => {
    const bounds = profile.mockup.screenBounds;
    assert.deepEqual(bundledProfiles.find(p => p.id === profile.id).mockup, profile.mockup);
    assert.ok(bounds.left >= 0 && bounds.top >= 0);
    assert.ok(bounds.left + bounds.width <= profile.mockup.frameWidth);
    assert.ok(bounds.top + bounds.height <= profile.mockup.frameHeight);
    for (const scale of [0.5, 1, 1.25]) for (const rotated of [false, true]) {
      const device = { profileId: profile.id, width: profile.width * scale, height: profile.height * scale, rotated };
      const layout = mockupLayout(device);
      const chrome = screenLayout(device, 'fullscreen');
      close(chrome.width, (rotated ? profile.height : profile.width) * scale);
      close(chrome.height, (rotated ? profile.width : profile.height) * scale);
      close(layout.screenWidth, chrome.width * layout.screenScaleX);
      close(layout.screenHeight, chrome.height * layout.screenScaleY);
      close(layout.left, (rotated ? profile.mockup.frameHeight - bounds.top - bounds.height : bounds.left) * scale);
      close(layout.top, (rotated ? bounds.left : bounds.top) * scale);
      const nums = layout.captureMaskTransform.match(/[-+]?(?:\d*\.?\d+)(?:e[-+]?\d+)?/gi).map(Number);
      const matrix = rotated ? nums : [nums[0], 0, 0, nums[1], 0, 0];
      const points = [[0, 0], [profile.width, 0], [0, profile.height], [profile.width, profile.height]].map(([x, y]) => [matrix[0] * x + matrix[2] * y + matrix[4], matrix[1] * x + matrix[3] * y + matrix[5]]);
      close(Math.min(...points.map(p => p[0])), 0);
      close(Math.min(...points.map(p => p[1])), 0);
      close(Math.max(...points.map(p => p[0])), layout.screenWidth);
      close(Math.max(...points.map(p => p[1])), layout.screenHeight);
      validateComposition({ width: layout.width, height: layout.height, frame: layout.image, screen: { x: layout.left, y: layout.top, width: layout.screenWidth, height: layout.screenHeight }, imageWidth: layout.imageWidth, imageHeight: layout.imageHeight, rotated, mask: layout.mask, matrix });
    }
  });
}
