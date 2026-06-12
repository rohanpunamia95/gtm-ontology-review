/**
 * Single source of truth for app routes.
 * Consumed by router.js (matching, titles) and app (nav maps, nav items).
 */

export const routes = [
    {
        path: '/',
        component: 'page-grounding',
        title: 'Agent Grounding',
        navPage: 'grounding',
        navLabel: 'Agent Grounding',
    },
];
