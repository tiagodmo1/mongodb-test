var express = require('express'),
router = express.Router(),
userCtrl = require('./user-controller');

module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer'),
upload = multer( { dest: module.exports.UPLOAD_PATH }),
imageCtrl = require('./image-controller');

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.delete('/users/:id', userCtrl.deleteUser);
router.put('/users/:id', userCtrl.updateUser);

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;