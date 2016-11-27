'use strict';

const _ = require('lodash');
const uuid = require('node-uuid');

class FakeRepository {

  constructor() {
    this._entities = [];
  }

  add(entity) {
    _.merge(entity, {id: uuid.v4()});
    this._entities.push(entity);
    return entity;
  }

  all() {
    return this._entities;
  }

  first(criteria) {
    return _.find(this._entities, criteria);
  }

  delete(criteria) {
    _.remove(this._entities, e => _.isMatch(e, criteria));
  }
}

module.exports = FakeRepository;
