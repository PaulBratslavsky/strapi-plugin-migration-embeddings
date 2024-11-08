import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({

  async queryEmbeddings(ctx) {
    // do something

    return {}
  },

  async deleteEmbedding(ctx) {
    // do something else
  },

  async createEmbedding(ctx) {
    // do something else
  },

  async getEmbeddings(ctx) {
    // do something
  },

  async getEmbedding(ctx) {
    // do something
  },
  

});

export default controller;
