import type { Schema, Attribute } from '@strapi/strapi';

export interface TestYup extends Schema.Component {
  collectionName: 'components_test_yups';
  info: {
    displayName: 'yup';
  };
  attributes: {
    env: Attribute.Enumeration<['web', 'mobi', 'extension']>;
    en: Attribute.String;
    vi: Attribute.String;
    es: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.yup': TestYup;
    }
  }
}
