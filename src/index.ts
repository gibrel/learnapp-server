import Fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import routes from './routes/index'

const server = Fastify().withTypeProvider<TypeBoxTypeProvider>();

server.register(routes)

server.listen({ port: 3000 });