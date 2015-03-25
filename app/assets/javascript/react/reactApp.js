'use strict'
require('./component/tutorial1')();
require('./component/tutorial2')();

if (module.hot) {
  module.hot.accept();
}