import {connect } from 'mongoose';

export const startConnection = async () => {
    try {
        const db = await connect('mongodb://mongo/taskdb');
        console.log("Connected-->" + db.connection.name);
    }
    catch (err) {
        console.error(err);
    }
}