import { Label } from './Label';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
};

const Template: Story<any> = (args) => <Label {...args} />;

export const Default = Template.bind({});
