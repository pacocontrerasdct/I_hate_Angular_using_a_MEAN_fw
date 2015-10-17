angular.module('IhateAngular')
.controller('postsController', postsController);

postsController.$inject = ['$http'];

function postsController($http){
  var self = this;
  self.all = [];
  self.addPost = addPost;
  self.newPost = {};
  self.getPosts = getPosts;
  self.deletePost = deletePost;

  getPosts();
  function getPosts(){
    console.log('gettting posts')
    $http
      .get('http://localhost:3000/posts')
      .then(function(response){
        self.all = response.data.posts;
    });
  }

  function addPost(){
    $http
      .post('http://localhost:3000/posts', self.newPost)
      .then(function(response){
        getPosts();
    });
    self.newPost = {};
  }

  function deletePost(post){
    $http
      .delete("http://localhost:3000/posts/" + post._id)
      .then(function(response){
        var index = self.all.indexOf(post);
        self.all.splice(index, 1);
      });
  }

}