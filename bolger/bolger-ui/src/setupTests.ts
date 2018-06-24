import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';          // use raf to pollyfill requestAnimationFrame

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
