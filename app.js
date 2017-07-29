const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

// catch all 404 errors and forward to error handler
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

module.exports = app;