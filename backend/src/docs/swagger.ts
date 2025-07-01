import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { Express, Request, Response } from 'express';
import path from 'path';

const swaggerPath = path.resolve(__dirname, 'swagger.yaml');

const swaggerDocument = YAML.load(swaggerPath);

function swaggerDocs(app: Express) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  // Documentation in JSON format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocument);
  });
}
export default swaggerDocs;
