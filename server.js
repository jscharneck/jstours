const app = require('./app');


const port = 3000;
app.listen(port, () => {
    console.log(`Server active on: http://localhost:${port}/api/v1/tours/`);
});
