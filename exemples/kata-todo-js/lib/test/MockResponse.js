'use strict';

class MockResponse {

  json(object) {
    this.jsonArg = object;
  }

  status(s) {
    this.statusArg = s;
    return this;
  }

  end() {
    this.endCalled = true;
    return this;
  }
}

module.exports = MockResponse;
