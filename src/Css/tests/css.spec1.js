import { m, TCss, TPropType } from '../module';

describe('CssProperty', () => {
    describe('toCss', () => {
        const input: TPropType = {
            hover: {
                color: 'red',
            },
            marginH: 5,
        };
        it('picks style props correctly', () => {
            expect(m.toCss(input)).toEqual({
                hover: {
                    color: 'red',
                },
                marginLeft: 5,
                marginRight: 5,
            });
        });
    });
    describe('pickProps', () => {
        it('picks style props correctly', () => {
            const props = {
                foo: 'bar',
                position: 'absolute',
            };
            expect(m.pickProps(props)).toEqual({ position: 'absolute' });
        });
    });
    describe('template', () => {
        it('picks style props correctly', () => {
            const props: TCss = {
                focus: {
                    color: 'red',
                },
                backgroundColor: 'green',
                margin: '1px',
            };
            expect(m.template(props)).toEqual(
                `:focus {
  color: red;
}
background-color: green;
margin: 1px;`
            );
        });
    });
});
