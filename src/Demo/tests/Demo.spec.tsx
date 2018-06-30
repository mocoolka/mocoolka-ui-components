import * as React from 'react';
import  enzyme from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';
import {App,Demo} from '../../'
import { shallow as enzymeShallow , EnzymeSelector } from 'enzyme';
import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() });
function shallowRecursively(wrapper, selector, { context, ...other }) {
    if (wrapper.isEmptyRender() || typeof wrapper.getElement().type === 'string') {
        return wrapper;
    }

    let newContext = context;

    const instance = wrapper.root().instance();
    // The instance can be null with a stateless functional component and react >= 16.
    if (instance && instance.getChildContext) {
        newContext = {
            ...context,
            ...instance.getChildContext(),
        };
    }

    const nextWrapper = wrapper.shallow({ context: newContext, ...other });

    if (selector && wrapper.is(selector)) {
        return nextWrapper;
    }

    return shallowRecursively(nextWrapper, selector, { context: newContext });
}

export  function until(selector, options:any = {}) {
    return this.single('until', () => shallowRecursively(this, selector, options));
}

// Generate an enhanced shallow function.
export default function createShallow(options1: any = {}) {
    const { shallow = enzymeShallow, dive = false, untilSelector = false, ...other1 } = options1;

    const shallowWithContext = function shallowWithContext(
        node: any,
        options2: any = {},
    ) {
        const options = {
            ...other1,
            ...options2,
            context: {
                ...other1.context,
                ...options2.context,
            },
        };

        const wrapper = shallow(node, options);

        if (dive) {
            return wrapper.dive();
        }

        if (untilSelector) {
            return until.call(wrapper, untilSelector, options);
        }

        return wrapper;
    };

    return shallowWithContext;
}
describe('<AppBar />', () => {
    let shallow= createShallow({ dive: true });
    let classes;

/*     it('should render a Paper component', () => {
        const wrapper = shallow(<App title='test'><Demo js="aaa" githubLocation="mocoolka" raw="test"/></App>);
        expect(wrapper).toEqual('')
    }); */
    it('should render a Paper component', () => {
        const tree = renderer.create(
            <App.App title='test'><Demo.Demo js="aaa" githubLocation="mocoolka" raw="test"/></App.App>,
          ).toJSON();
          
          // expect(tree).toMatchSnapshot();
    });

});
