import {connect } from 'mongoose';

export const startConnection = async () => {
    try {
        const db = await connect('mongodb://localhost:27017/taskdb');
        console.log(db.connection.name);
    }
    catch (err) {
        console.error(err);
    }
}