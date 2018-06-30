export interface IProp {
    name: string;
    title?: string;
    description?: string;
}
export interface IElement extends IProp {
    element: any;
    type?: string;
    items?: string;
}
export interface IPage extends IProp {
    type?: string;
    layout?: string;
    items: IElement[];
}
export interface IApp extends IProp {
    type?: string;
    layout?: string;
    items: IPage[];
    orgName: string;
}
export interface IApplication extends IProp {
    orgName: string;
}

export interface ITreeProp extends IProp {
    items?: ITreeProp[];
}
