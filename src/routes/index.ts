import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { RequestUserType, requestUserSchema, responseUserSchema } from "../schemas/userSchema";
import * as UserController from "../controllers/usersController"


export default async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get(
    "/",
    (request, reply) => {
      reply.status(200).send({ hello: 'world' });
    }
  );

  fastify.get(
    "/users",
    (request, reply) => {
        reply.status(200).send(UserController.getAllUsers());
    }    
  )

  fastify.post(
    "/user",
    {
      schema: {
        body: requestUserSchema,
        response: {
          200: responseUserSchema,
        },
      },
    },
    async (request, reply) => {
      const user = <RequestUserType>request.body;
      const createdUsers = await UserController.createUser(user)
      reply.status(200).send(createdUsers[0]);
    }
  );
}