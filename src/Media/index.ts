import { extendBase, AllHTMLAttributes } from '../Base';
export {
    AllHTMLAttributes,
};

const moduleName = 'Media';
export const Media = extendBase({
    name: 'Media',
    moduleName,
    tagName: 'div',
});
export const Video = extendBase<{}, { }, {src: string}>({
    name: 'Video',
    moduleName,
    tagName: 'video',
    style: {
        width: 'full',
    },
});
export const Image = extendBase<{}, { }, {src: string}>({
    name: 'Image',
    moduleName,
    tagName: 'img',
    style: {
        mkstyle: {
           // position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            maxWidth: '100%',
        },
    },
});
