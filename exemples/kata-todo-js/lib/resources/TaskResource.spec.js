'use strict';

const TasksResource = require('./TaskResource');
const MockResponse = require('../test/MockResponse');
const FakeRepository = require('../test/FakeRepository');

describe('Task resource', () => {

  let resource;
  let repository;
  let response;

  beforeEach(() => {
    repository = new FakeRepository();
    resource = new TasksResource(repository);
    response = new MockResponse();
  });

  context('on get', () => {
    it('should respond with the specified task', () => {
      repository.add({text: 'my first task'});
      let entity = repository.add({text: 'my second task'});
      let request = {params: {id: entity.id}};

      resource.get(request, response);

      response.jsonArg.should.deep.equal({id: entity.id, text: 'my second task'});
    });

    it('should respond with a 404 if entity cannot be found', () => {
      let request = {params: {id: 'not found'}};

      resource.get(request, response);

      response.statusArg.should.equal(404);
      response.endCalled.should.be.true;
    });
  });

  context('on delete', () => {
    it('should delete the specified task', () => {
      let entity = repository.add({text: 'adios'});
      let request = {params: {id: entity.id}};

      resource.delete(request, response);

      response.statusArg.should.equal(200);
      response.endCalled.should.be.true;
      repository.all().should.be.empty;
    });
  });
});
