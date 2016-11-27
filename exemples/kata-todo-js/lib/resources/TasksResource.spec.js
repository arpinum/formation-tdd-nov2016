'use strict';

const should = require('chai').should();
const TasksResource = require('./TasksResource');
const MockResponse = require('../test/MockResponse');
const FakeRepository = require('../test/FakeRepository');

describe('Tasks resource', () => {
  
  let resource;
  let repository;
  let response;

  beforeEach(() => {
    repository = new FakeRepository();
    resource = new TasksResource(repository);
    response = new MockResponse();
  });

  context('on get', () => {
    it('should respond with all tasks', () => {
      let entity = repository.add({text: 'my task'});

      resource.get(null, response);

      response.jsonArg.should.deep.equal([{id: entity.id, text: 'my task'}]);
    });
  });

  context('on post', () => {
    it('should add a new task', () => {
      let request = {body: {text: 'my new task'}};

      resource.post(request, response);

      repository.all().should.have.lengthOf(1);
      repository.all()[0].text.should.equal('my new task');
      response.statusArg.should.equal(201);
      should.exist(response.jsonArg.id);
    });
  });
});
