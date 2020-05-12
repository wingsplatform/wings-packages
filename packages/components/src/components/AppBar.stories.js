import React from 'react';
import { boolean, select } from '@storybook/addon-knobs/react';
import faker from 'faker';
import styled from 'styled-components';
import { AppBar } from '@wingscms/components';

const props = ({ position = AppBar.Position.TOP } = {}) => ({
  position: select('position', AppBar.Position, position),
  open: boolean('open', true),
});

const ExampleContent = styled.div`
  padding: 100px 20px;
  max-width: 700px;
  margin: 0 auto;
`;

export default () => <AppBar {...props()} />;

export const withContent = () => {
  faker.seed(1);
  return (
    <>
      <AppBar {...props()} />
      <ExampleContent>{faker.lorem.paragraphs(50)}</ExampleContent>
    </>
  );
};