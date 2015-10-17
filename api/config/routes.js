var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var postsController = require('../controllers/posts');

// http://127.0.0.1:3000/posts
router.route('/posts')

  //GET all posts
  .get(postsController.getAll)

  //POST a new posts
  .post(postsController.createPost);


router.route('/posts/:id')

  // GET return specific posts
  .get(postsController.getPost)

  // PATCH update existing posts
  .patch(postsController.updatePost)

  // DELETE remove specific posts from DB
  .delete(postsController.removePost);


module.exports = router