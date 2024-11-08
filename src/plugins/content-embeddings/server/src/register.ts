import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  Object.values(strapi.contentTypes).forEach((contentType) => {
    console.log(contentType);
  })
};

export default register;
