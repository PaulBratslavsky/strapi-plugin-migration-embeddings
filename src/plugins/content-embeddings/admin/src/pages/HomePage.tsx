import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { Layouts } from '@strapi/strapi/admin';
import { EmptyState } from '../components/EmptyState';

// import React, { useEffect, useState, useCallback } from "react";
// import { getTranslation } from '../utils/getTranslation';

export function HomePage() {
  const { formatMessage } = useIntl();
  return (
    <Main>
      <Layouts.Header
        title={formatMessage({
          id: 'CreateEmbeddings.header.title',
          defaultMessage: 'Welcome to the Content Embeddings plugin',
        })}
        subtitle={formatMessage({
          id: 'CreateEmbeddings.header.subtitle',
          defaultMessage: 'Create embeddings for your content',
        })}
      />
      <Layouts.Content>
        <EmptyState />
      </Layouts.Content>
    </Main>
  );
}
