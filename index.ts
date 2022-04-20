import app from './app'

import {startConnection} from './database';

// This method allow the database connection
startConnection();

let port = 8000;



app.listen(port), () => {
    console.log('Server running on port ' + port);
};