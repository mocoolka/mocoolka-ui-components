import * as React from 'react';
// import { FormattedMessage } from 'react-intl';
import {II18nUnit} from '../model/typeI18N';
// export const Message: React.SFC<{ i18n: II18nUnit }> = (props) => (<FormattedMessage { ...props.i18n } />);
export const Message: React.SFC<{ i18n: II18nUnit }> = (props) => <span>{props.i18n.defaultMessage}</span>;
export {II18nUnit};
