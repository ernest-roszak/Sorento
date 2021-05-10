import { Input } from './Input';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

const Template: Story<any> = (args) => <Input {...args} />;

export const Default = Template.bind({});
