const app = require('./app');

// const port = process.env.PORT 

app.listen(process.env.PORT , () => {
  console.log(`Server is running at port ${process.env.PORT }`);
});
module.exports = app;