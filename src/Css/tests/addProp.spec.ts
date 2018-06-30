import M from '../';
export type IconSvgProp = {
    size1: 'inherit' | 'small' | 'medium' | 'large' | 'xlarge',
};
export type IconSvgPropF = {
    rotate1: number,
};
const m = M.addProps<IconSvgProp, IconSvgPropF>({
    size1: {
        inherit: {
            mkstyle: { width: 20 },
            // iconSize: 'inherit',
        },
        small: {
            squareSize: 'small',
            selector: [{
                name: '& > svg',
                value: {
                    squareSize: 'small',
                },
            }],
            // backgroundSizeT: 'small',
        },
        medium: {
            squareSize: 'medium',
            selector: [{
                name: '& > svg',
                value: {
                    squareSize: 'medium',
                },
            }],
            // backgroundSizeTheme: 'medium',
        },
        large: {
            squareSize: 'large',
            selector: [{
                name: '& > svg',
                value: {
                    squareSize: 'large',
                },
            }],
            // backgroundSizeTheme: 'large',
        },
        xlarge: {
            squareSize: 'xlarge',
            selector: [{
                name: '& > svg',
                value: {
                    squareSize: 'xlarge',
                },
            }],
            // backgroundSizeTheme: 'xlarge',
        },
    },
}, {
        rotate1: (a: number) => ({
           mkstyle: { transform: `rotate(${a}deg)`},
        }),
    }
);
describe('build custmer css with property and selector', () => {
    it('css property with string', () => {
        expect(m.toRCss({
            color: 'main', size1: 'medium', rotate1: 70, selector: [{
                name: 'svg',
                value: {
                    color: 'main',
                    rotate1: 20,
                    size1: 'inherit',
                    mkstyle: {
                        marginLeft: 1,
                    },
                },
            }],
        })).toEqual({
            color: '#009688', height: 24, width: 24, transform: 'rotate(70deg)', selector: [{
                name: 'svg',
                value: {
                    color: '#009688',
                    marginLeft: 1,
                    width: 20,
                    transform: 'rotate(20deg)',
                },
            }],
        });
    });
});
