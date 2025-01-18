import { useIntl } from 'react-intl';
import { Main, Box, Button } from '@strapi/design-system';
import { Layouts } from '@strapi/strapi/admin';
import { CreateEmbeddingsForm } from '../components/forms/CreateEmbeddingForm';
// import { PLUGIN_ID } from '../pluginId';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import BackLink from '../components/BackLink';

export default function CreateEmbeddings() {
  
  const { formatMessage } = useIntl();
    // const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [markdown, setMarkdown] = useState("Enter text here");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    // navigate("/plugins/" + PLUGIN_ID + "/");
  }

  return (
    <Main>
      <Layouts.Header
        title={formatMessage({
          id: 'CreateEmbeddings.header.title',
          defaultMessage: 'Create Embeddings',
        })}
        subtitle={formatMessage({
          id: 'CreateEmbeddings.header.subtitle',
          defaultMessage: 'Create embeddings for your content',
        })}
        primaryAction={
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Embeddings' : 'Create Embeddings'}
          </Button>
        }
        navigationAction={<BackLink />}
      />
      <Layouts.Content>
        <Box>
          <CreateEmbeddingsForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            input={input}
            setInput={setInput}
            markdown={markdown}
            handleMarkdownChange={setMarkdown}
          />
        </Box>
      </Layouts.Content>
    </Main>
  );
}
