'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const TasksResource = require('./resources/TasksResource');
const TaskResource = require('./resources/TaskResource');

class Server {

  constructor(dependencies) {
    this._dependencies = dependencies;
  }

  start() {
    let self = this;
    let application = express();
    application.use(bodyParser.json());

    configureRoutes(application);

    let server = application.listen(3000, () => {
      console.log('Server running on port', server.address().port);
    });

    function configureRoutes(application) {
      let tasksResource = new TasksResource(self._dependencies.taskRepository);
      application.get('/tasks', (...args) => tasksResource.get(...args));
      application.post('/tasks', (...args) => tasksResource.post(...args));

      let taskResource = new TaskResource(self._dependencies.taskRepository);
      application.get('/tasks/:id', (...args) => taskResource.get(...args));
      application.delete('/tasks/:id', (...args) => taskResource.delete(...args));
    }
  }
}

module.exports = Server;
