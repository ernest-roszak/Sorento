import { Title } from './Title';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Atoms/Title',
  component: Title,
};

const Template: Story<any> = (args) => <Title {...args}>This is simple title</Title>;

export const Default = Template.bind({});
