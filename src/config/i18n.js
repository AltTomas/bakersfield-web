import i18next from 'i18next';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

i18next.init({
  lng: 'es',
  initImmediate: false
});

i18next.addResources('es', 'Commons', {
  name: 'Bakers',
  fullName: 'Gorras Bakers'
});

i18next.addResources('es', 'Footer', {
  followUs: 'Seguinos en:',
  stores: 'Locales:'
});

requireAll(require.context('..', true, /i18n[\w]*\.js$/));
