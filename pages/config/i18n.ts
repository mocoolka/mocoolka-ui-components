/* tslint:disable */
import * as enLocaleData from 'react-intl/locale-data/en';
import * as zhLocaleData from 'react-intl/locale-data/zh';
/* tslint:enable */
import en from './translations/en';
import zh from './translations/zh';
export const i18n = {
    en: {
      messages: en,
      localeData: enLocaleData,
    },
    zh: {
      messages: zh,
      localeData: zhLocaleData,
    },

};
