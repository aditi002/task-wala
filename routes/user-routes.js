const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
const { verifyUser } = require('../middlewares/auth');

// Register user
router.post('/register', UserController.register);

// Login user
router.post('/login', UserController.login);

// Get user profile
router.get('/profile', verifyUser, UserController.getUserProfile);

// Update user profile
router.put('/profile/:userId', verifyUser, UserController.updateUserProfile);

// Update user profile picture
router.put('/profile/picture', verifyUser, UserController.updateUserProfilePicture);

module.exports = router;
