import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()
app.use(cors(
  {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    exposeHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    maxAge: 600,
    credentials: true,
  }
))
const port = Number(process.env.PORT ?? 3000)
const host = process.env.HOST ?? '0.0.0.0'

app.get('/', (c) => {
  return c.text('Server check OK')
})

serve({
  fetch: app.fetch,
  port,
  hostname: host
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
