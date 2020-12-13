const express = require('express');
const imageControllers = require('../controllers/imageController');
const authControllers = require('../controllers/authControllers');
const helperFunctions = require('../utilis/helperFunctions');

const router = express.Router();

// route to fetch all images
router.route('/').get(imageControllers.getImages);
// route to search all images
router.route('/search/:searchSentence').get(imageControllers.searchImages);

// route to update an image to add tag
router.route('/:id').patch(imageControllers.updateImage);

// A middle ware to check if the user is logged in
router.use(authControllers.isLoggedIn);

// route to create an image
router
  .route('/')
  .post(helperFunctions.uploadImage, imageControllers.createImage);

// route to delete an image
router.route('/:id').delete(imageControllers.deleteImage);

module.exports = router;
