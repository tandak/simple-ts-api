/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/posts';
import accountsController from '../controllers/accounts';
const router = express.Router();

router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);
router.post('/posts', controller.addPost);

router.get('/accounts/:id', accountsController.getAccount);
router.get('/accounts', accountsController.getAccounts);
router.delete('/accounts', accountsController.deleteAccount);
router.post('/accounts', accountsController.addAccount)

export = router;