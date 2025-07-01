import swaggerDocs from './docs/swagger';
import { initServer } from './app';
import { PORT } from './utils/constants';
import { connectDB } from './db/mongodb';

async function init() {
  const { app } = await initServer();
  await connectDB();

  app.get('/', (req, res) => {
    res.send('Hello world...');
  });

  app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT, '......');
  });
  swaggerDocs(app);
}

init();
