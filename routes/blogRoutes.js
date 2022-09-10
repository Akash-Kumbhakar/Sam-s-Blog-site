const express = require('express');
const blogControlers = require('../controllers/blogControllers');



const router  = express.Router();

// blog routes
router.get('/', blogControlers.blog_index );

router.post('/', blogControlers.blog_create_post);

router.get('/create', blogControlers.blog_create_get);

router.get('/:id', blogControlers.blog_details);

router.delete('/:id', blogControlers.blog_delete);

module.exports = router;