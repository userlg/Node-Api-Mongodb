import app from './app'

import {startConnection} from './database';


startConnection();

let port = 8000;



app.listen(port), () => {
    console.log('Server running on port ' + port);
};