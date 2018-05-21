import * as fastify from 'fastify';
import * as next from 'next';

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
export const server = fastify();

app.prepare()
  .then(() => {
    server.get('/*', (req, res) => {
      return handle(req.req, res.res);
    });

    server.listen(PORT, (err: Error) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  });
