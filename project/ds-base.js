// ds-base.js — load Salesforce Design System bundle + tokens for this project
(() => {
  const base = '_ds/salesforce-design-system-585a3e09-eac1-4843-bd7b-2e1aaa2637be';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src);
  document.head.appendChild(s);
})();
