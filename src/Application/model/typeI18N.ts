export interface II18n {
    [key: string]: string;
}
export interface II18nFile {
    [name: string]: {
        messages: II18n;
        localeData: {};
    };
}
export interface II18nUnit {
    id: string;
    defaultMessage: string;
}
export interface II18nProp {
    name: string;
    title: II18nUnit;
    description?: II18nUnit;
    [name: string]: any;
}
export interface II18nNav extends II18nProp {
    items?: II18nNav[];
}
export interface II18nApplication extends II18nProp {
    orgName: string;
}
