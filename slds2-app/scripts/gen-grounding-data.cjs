// Generate an ES module snapshot of GTM_DATA from the prototype's script files.
const fs = require('fs');
const vm = require('vm');
const base = '/home/claude/repo/project';
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ['data.js', 'data2.js', 'icp-segments.js']) {
  vm.runInContext(fs.readFileSync(base + '/' + f, 'utf8'), ctx, { filename: f });
}
const data = ctx.window.GTM_DATA;
if (!data || !data.rows || !data.icp) throw new Error('GTM_DATA incomplete: ' + Object.keys(data || {}));
console.log('rows:', data.rows.length, '| icp:', data.icp.length, '| motions:', data.motions.length,
  '| keys:', Object.keys(data).join(','));
const out = '// Generated from project/data.js + data2.js + icp-segments.js — do not edit by hand.\n' +
  '// Regenerate with: node scripts (see repo root gen-grounding-data.js)\n' +
  'export const GTM_DATA = ' + JSON.stringify(data, null, 1) + ';\n';
fs.mkdirSync('/home/claude/repo/slds2-app/src/modules/data/grounding', { recursive: true });
fs.writeFileSync('/home/claude/repo/slds2-app/src/modules/data/grounding/grounding.js', out);
console.log('written', out.length, 'bytes');
