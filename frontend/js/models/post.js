angular
  .module('IhateAngular')
  .factory('Post', Post);

Post.$inject = ['$resource', 'API'];
function Post($resource, API) {
  var url = 'http://localhost:3000'

  return $resource(
    url +'/posts/:id',
    {id: '@id'},
    { 
      'get':       { method: 'GET' },
      'patch':     { method: 'PATCH' },
      'save':      { method: 'POST' },
      'query':     { method: 'GET', isArray: true},
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' }
    }
  );
}