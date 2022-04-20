import {connect } from 'mongoose';

export const startConnection = async () => {
    try {
        //Comment this line to work locally
        const db = await connect('mongodb://localhost/taskdb');
        //Decomment this line to work with containers
        //const db = await connect('mongodb://mongo/taskdb');

        console.log("\t Connected-->" + db.connection.name);
    }
    catch (err) {
        console.error(err);
    }
}