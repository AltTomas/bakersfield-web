import { t } from 'i18next';

import { PRODUCTS, HOME, US } from 'constants/routes';

export const options = [
  { name: t('Navbar:home'), route: HOME, id: 0 },
  { name: t('Navbar:products'), route: PRODUCTS, id: 1 },
  { name: t('Navbar:us'), route: US, id: 2 }
];
