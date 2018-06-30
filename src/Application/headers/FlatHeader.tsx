import * as React from 'react';
import { Header } from '../../Header';
import { Button } from '../../Button';
import { FlexSplit } from '../../Base';
import { H6 } from '../../Typography';
import { Menu, Light } from '../../Icon/icons';
import * as m from '../model/';
export type DocPropType = {
    app: m.MBaseModel,
    page: m.MBaseModel,
    handleOpenNav?: any,
};
export const FlatHeader: React.SFC<DocPropType> = (props) => {
    const { app, page, handleOpenNav } = props;
    return (
        <Header>
            <Button icon={Menu} onPress={handleOpenNav} color="inherit" lgMinSetting={{ visibility: 'none' }} />
            <H6 color="inherit" > {app.title}{page.title ? ` - ${page.title}` : ''} </H6>
            <FlexSplit />
            <Button icon={Light} color="inherit" />
        </Header>
    );
};
