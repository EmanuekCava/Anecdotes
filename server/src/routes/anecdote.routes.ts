import { Router } from "express";

import * as anecdotesCtrl from '../controller/anecdote.ctrl';

import createAnecdote from '../middleware/anecdote/anecdoteValidate';

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/anecdotes', anecdotesCtrl.anecdotes);
router.get('/myanecdotes', auth, anecdotesCtrl.myAnecdotes)
router.get('/useranecdotes/:id', auth, anecdotesCtrl.userAnecdotes)
router.get('/anecdotes/:id', anecdotesCtrl.anecdote)

router.post('/createanecdote', auth, createAnecdote, anecdotesCtrl.createAnecdote)

router.delete('/removeanecdote/:id', auth, anecdotesCtrl.removeAnecdote)

router.put('/updateanecdote/:id', auth, createAnecdote, anecdotesCtrl.updateAnecdote)

export default router;
