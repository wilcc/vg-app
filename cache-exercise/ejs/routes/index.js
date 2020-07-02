const router = require('express').Router();

// import home controller
import Home from '../app/controllers/HomeController'

/* GET home page. */
router.get('/', Home.index);

export default router;
