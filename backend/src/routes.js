const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');

    //  Create Annotation
routes.post('/annotations', AnnotationController.create);

    //  Read Annotations
routes.get('/annotations', AnnotationController.read);

    //  Delete Annotation
routes.delete('/annotations/:id', AnnotationController.delete);

    //  Read Priorities
routes.get('/priorities', PriorityController.read);

    //  Update priority
routes.post('/priorities/:id', PriorityController.update);

    //  Update Content
routes.post('/contents/:id', ContentController.update);

module.exports = routes;