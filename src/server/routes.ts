import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/chirpr', async (req, res) => {
    try{
        res.json(await db.chirpr.all());
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

router.get('/api/chirpr/:id', async (req, res) => {
    try{
        let id:any = req.params.id
        res.json((await db.chirpr.one(id)));

    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

export default router;