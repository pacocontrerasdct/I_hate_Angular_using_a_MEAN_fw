var Post = require('../models/Post');


/////////////////////////////////////////
// SEEDs for BD
/////////////////////////////////////////
// var post2 = new Post({
//   title: 'Secondquote',
//   author: 'me 65',
//   url: 'http://google.com/',
//   points: 1,
// })
//     post2.save(function(err, quote) {
//       if (err) console.log(err);
//       console.log('post 65 Saved!');
//     })

// GET
function getAll(request, response) {
  Post.find(function(error, posts) {
    if(error) response.json({message: 'Paco Could not find any post'});

    response.json({posts: posts});
  }).select('-__v');
}

// POST
function createPost(request, response) {
  var post = new Post(request.body);

  post.save(function(error) {
    if(error) response.json({messsage: 'Could not create post b/c:' + error});
    response.json({post: post});
  });
}

// GET
function getPost(request, response) {
  var id = request.params.id;

  Post.findById({_id: id}, function(error, post) {
    if(error) response.json({message: 'Could not find post b/c:' + error});
    response.json({post: post});
  }).select('-__v');
}

function updatePost(request, response) {
  var id = request.params.id;

  Post.findById({_id: id}, function(error, post) {
    if(error) response.json({message: 'Could not find post b/c:' + error});
    if(request.body.title) post.title = request.body.title;
    if(request.body.author) post.start = request.body.author;
    if(request.body.url) post.end = request.body.url;

    post.points = post.points + 1;
    
    // if(request.body.points) post.points = request.body.points;   

    post.save(function(error) {
      if(error) response.json({messsage: 'Could not update post b/c:' + error});

      response.json({message: 'Paco Post successfully updated', post: post});
    });
  }).select('-__v');
}

function removePost(request, response) {
  var id = request.params.id;

  Post.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete post b/c:' + error});

    response.json({message: 'Post successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createPost: createPost,
  getPost: getPost,
  updatePost: updatePost,
  removePost: removePost
}