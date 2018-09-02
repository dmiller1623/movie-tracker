import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class LocalStorage {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, object) {
    this.store[key] = object;
  }

  clear() {
    this.store = {};
  }
}

global.localStorage = new LocalStorage();
