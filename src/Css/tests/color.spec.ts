import M from '../';
const c = M;
describe('color property', () => {
    it('basic', () => {
        expect(c.toRCss({})).toEqual({});
        expect(c.toRCss({ mkstyle: {color: { name: 'red', level: 500, kind: 'PaletteColor' } }}))
            .toEqual({ color: '#f44336' });
        expect(c.toRCss({ mkstyle: {color: { name: 'first', level: 'normal', kind: 'Color' } }}))
            .toEqual({ color: '#009688' });
        expect(c.toRCss({
            focus: {
                hover: {
                    mkstyle: {color:
                        { name: 'red', level: 500, kind: 'PaletteColor' }},
                },
            },
        })).toEqual({
            focus: {
                hover: {
                    color: '#f44336',
                },
            },
        });
        expect(c.toRCss({
            focus: {
                hover: {
                    mkstyle: { color:
                        { name: 'first', level: 'normal', kind: 'Color' }},
                },
            },
        })).toEqual({
            focus: {
                hover: {
                    color: '#009688',
                },
            },
        });
    });
    it('bgAColor property', () => {
        expect(c.toRCss({
            bgAColor:'#fff'
        })).toEqual({"backgroundColor": "#fff", "color": "rgba(0, 0, 0, 0.87)"});
        expect(c.toRCss({
            bgAColor:'#000'
        })).toEqual({"backgroundColor": "#000", "color": "#fff"});
        expect(c.toRCss({
            bgAColor:'white'
        })).toEqual({"backgroundColor": "white", "color": "rgba(0, 0, 0, 0.87)"});
        expect(c.toRCss({
            bgAColor:'black'
        })).toEqual({"backgroundColor": "black", "color": "#fff"});
        expect(c.toRCss({
            bgColor:'alt'
        })).toEqual({"backgroundColor": "#fff", "color": "rgba(0, 0, 0, 0.87)"});
        expect(c.toRCss({
            bgColor:'main'
        })).toEqual({"backgroundColor": "#009688", "color": "#fff"});
        expect(c.toRCss({
            bgAColor: { name: 'light', level: 'full', kind: 'ColorCommon' }
        })).toEqual({"backgroundColor": "#fff", "color": "rgba(0, 0, 0, 0.87)"});
        expect(c.toRCss({
            bgAColor: { name: 'first', level: 'normal', kind: 'Color' },
        })).toEqual({"backgroundColor": "#009688", "color": "#fff"});
    })
});
