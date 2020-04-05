const router = require('express').Router();
const homeController = require('../controllers/homeController');

// Route path is -- /

router.get('/',homeController.home);
router.post('/upload_file',homeController.uploadFile);
router.get('/openFile/:id',homeController.openFile);

module.exports = router;