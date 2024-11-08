export default [
{
  method: 'POST',
  path: '/embeddings/create-embedding',
  handler: 'controller.createEmbedding',
  config: {
    policies: [
      {
        name: 'admin::hasPermissions',
        config: { actions: ['plugin::content-embeddings.create'] }
      },
    ]
  },
},
{
  method: 'DELETE',
  path: '/embeddings/delete-embedding/:id',
  handler: 'controller.deleteEmbedding',
  config: {
    policies: [
      {
        name: 'admin::hasPermissions',
        config: { actions: ['plugin::content-embeddings.delete'] }
      },
    ]
  },
},
{
  method: 'GET',
  path: '/embeddings/embeddings-query',
  handler: 'controller.queryEmbeddings',
  config: {
    policies: [
      {
        name: 'admin::hasPermissions',
        config: { actions: ['plugin::content-embeddings.chat'] }
      },
    ]
  },
},
{
  method: 'GET',
  path: '/embeddings/find/:id',
  handler: 'controller.getEmbedding',
  config: {
    policies: [
      {
        name: 'admin::hasPermissions',
        config: { actions: ['plugin::content-embeddings.read'] }
      },
    ]
  },
},
{
  method: 'GET',
  path: '/embeddings/find',
  handler: 'controller.getEmbeddings',
  config: {
    policies: [
      {
        name: 'admin::hasPermissions',
        config: { actions: ['plugin::content-embeddings.read'] }
      },
    ]
  },
},]