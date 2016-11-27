'use strict';

class TaskResource {

  constructor(repository) {
    this._repository = repository;
  }

  get(request, response) {
    let entity = this._repository.first({id: request.params.id});
    if (!entity) {
      response.status(404).end();
    } else {
      response.json(entity);
    }
  }

  delete(request, response) {
    this._repository.delete({id: request.params.id});
    response.status(200).end();
  }
}

module.exports = TaskResource;
