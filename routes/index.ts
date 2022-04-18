import { Router } from 'express';

import Task from '../models/models'

let router = Router();


router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

router.post('/tasks', async (req, res) => {
    const {title,description} = (req.body);
    
    let task = new Task({title, description});

    await task.save()


    res.json(task);
});


router.get('/tasks/:id',  async  (req, res) => {
    try {
        let task = await Task.findById(req.params.id);

        if (!task) {return res.status(404).json({"message":"Asset not found"}) }
        else {
            return res.json(task);
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }


    
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        let task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {return res.status(404).json({"message":"Asset not found"}) }
        else {
            console.log('Task Deleted')
            return res.json(task);
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }

});

router.put('/tasks/:id',  async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    });

    res.json(updatedTask);
});


export default router;