import React from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { TextInput } from '@strapi/design-system';

const StyledForm = styled.form`
 
  fieldset {
    border: none;
  }
`;

const StyledMDEditor = styled(MDEditor)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

interface CreateEmbeddingsFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  input: string;
  setInput: (input: string) => void;
  markdown: string;
  handleMarkdownChange: React.Dispatch<React.SetStateAction<string>>;
  height?: number;
  children?: React.ReactNode;
}

export function CreateEmbeddingsForm({
  onSubmit,
  isLoading,
  input,
  setInput,
  markdown,
  handleMarkdownChange,
  height,
  children,
}: CreateEmbeddingsFormProps) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <fieldset disabled={isLoading}>
        <TextInput
          placeholder="Title"
          label="Title"
          name="input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          value={input}
        />
        <div data-color-mode="light">
          <StyledMDEditor
            value={markdown}
            onChange={(value) => handleMarkdownChange(value ?? '')}
            height={height ?? 400}
          />
        </div>
        {children}
      </fieldset>
    </StyledForm>
  );
}
