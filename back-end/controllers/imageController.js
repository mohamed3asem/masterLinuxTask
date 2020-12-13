const multer = require('multer');
const fs = require('fs');
const path = require('path');

const Image = require('../models/imageModel');
const catchAsync = require('../utilis/catchAsync');
const appError = require('../utilis/appError');
const helperFunctions = require('../utilis/helperFunctions');

exports.createImage = catchAsync(async (req, res) => {
  // const tags = req.body.tags.toLowerCase().split(' ') || '';
  const image = await Image.create({
    imageUrl: req.file.filename,
    creatorId: req.user._id,
  });

  res.status(201).json({
    message: 'image created successfully!',
    image,
  });
});

exports.getImages = catchAsync(async (req, res, next) => {
  const images = await Image.find().sort({ createdAt: -1 }).lean();
  const totalItems = await Image.countDocuments();
  res.status(200).json({
    totalItems,
    images,
  });
});

exports.deleteImage = catchAsync(async (req, res, next) => {
  if (!req.params.id) next(new appError('You must give an image Id', 404));

  const image = await Image.findById(req.params.id);
  if (!image) return next(new appError('No image found with that ID', 404));

  if (!image.creatorId.equals(req.user._id)) {
    return next(
      new appError('You do not have permission to perform this action', 403)
    );
  }

  helperFunctions.deleteImageFromFs(image.imageUrl);

  await image.remove();
  res.status(200).json({
    message: 'image deleted successfully!',
  });
});

exports.updateImage = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { tag } = req.body;

  if (!tag)
    return next(new appError('You must send tag to perform this action', 400));
  if (!id) return next(new appError('You must give an image Id', 400));

  let image = await Image.findById(id);
  if (!image) return next(new appError('No image found with that ID', 404));

  image.tags.push(tag.toLowerCase());
  image = await image.save();

  res.status(201).json({
    message: 'tag created successfully!',
    image,
  });
});

exports.searchImages = catchAsync(async (req, res, next) => {
  let { searchSentence } = req.params;

  if (!searchSentence)
    return next(new appError('You must give us a search value', 400));

  searchSentence = searchSentence.toLowerCase().split(' ');

  const images = await Image.find({ tags: { $in: searchSentence } }).lean();

  if (!images.length)
    return next(new appError('No images found with this seacrch', 404));

  res.status(200).json({
    message: 'Images found successfully!',
    images,
  });
});
