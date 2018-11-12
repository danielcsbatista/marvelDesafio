/**
 * Setup
 * This is the bootstrap code that is run before any tests, utils, mocks.
 */
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

//
// Configs
//
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const { document } = new JSDOM('').window;
global.document = document;
global.requestAnimationFrame = function request(callback) {
  setTimeout(callback, 0);
};

//
// Enzymes
//
enzyme.configure({ adapter: new Adapter() });
global.enzyme = enzyme;
global.shallow = enzyme.shallow;
global.render = enzyme.render;
global.mount = enzyme.mount;

enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

//
// Renderer
//
global.renderer = renderer;
