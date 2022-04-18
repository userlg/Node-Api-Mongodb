import { Router } from 'express';

let router = Router();


router.get('/tasks',(req, res) => {
    res.send('<h1> See all the task </h1>');
});

router.post('/tasks',(req, res) => {
    res.send('<h1> Tasks Recieved </h1>');
});

router.get('/tasks/:id',(req, res) => {
    res.send('<h1> Getting a task </h1>');
});

router.delete('/tasks/:id',(req, res) => {
    res.send('<h1> Delete a task </h1>');
});

router.put('/tasks/:id',(req, res) => {
    res.send('<h1> Update a task </h1>');
});


export default router;