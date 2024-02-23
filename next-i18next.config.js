// next-i18next.config.js
const LocizeBackend = require('i18next-locize-backend/cjs');
const ChainedBackend = require('i18next-chained-backend').default;
const LocalStorageBackend = require('i18next-localstorage-backend').default;

const isBrowser = typeof window !== 'undefined';

module.exports = {
  // debug: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
  },
  backend: {
    backendOptions: [
      {
        expirationTime: 60 * 60 * 1000, // 1 hour
      },
      {
        projectId: '62ec4763-f873-4601-82aa-810b208ef34e',
        apiKey: '813aa19a-2e44-47b7-95c2-9c1100754261',
        version: 'latest',
      },
    ],
    backends: isBrowser ? [LocalStorageBackend, LocizeBackend] : [],
  },
  serializeConfig: false,
  use: isBrowser ? [ChainedBackend] : [],
  saveMissing: true,
};
