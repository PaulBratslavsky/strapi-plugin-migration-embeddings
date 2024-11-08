"use strict";

import contentApi from './content-api';
import admin from './admin';

export default [
  ...contentApi,
  ...admin
] 
