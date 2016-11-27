'use strict';

class TasksResource {

  constructor(repository) {
    this._repository = repository;
  }

  get(request, response) {
    response.json(this._repository.all());
  }

  post(request, response) {
    let entity = this._repository.add(request.body);
    response.status(201).json({id: entity.id});
  }
}

module.exports = TasksResource;
