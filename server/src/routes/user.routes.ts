import { Router } from 'express';

import * as userCtrl from "../controller/user.ctrl";

import userValidate from '../middleware/users/userValidate';
import loginValidate from '../middleware/users/loginValidate'
import updateValidate from '../middleware/users/updateValidate'

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/users', userCtrl.users)
router.get('/users/:id', auth, userCtrl.user)

router.post('/register', userValidate, userCtrl.register)
router.post('/login', loginValidate, userCtrl.login)

router.delete('/removeuser/:id', userCtrl.removeUser)

router.put('/updateuser/:id', auth, updateValidate, userCtrl.updateProfile)

export default router;
