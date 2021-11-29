import AppBar from "../AppBar/AppBar";
import { navItems } from "../Navigation/Navigation.stories";

const Stories = {
  title: "AppBar",
  component: AppBar,
};

export default Stories;

const Template = (args) => <AppBar {...args} />;
export const Default = Template.bind({});
Default.args = {
  logoImg:
    "https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1638194607~hmac=08766c1f2a8a5278b7c9e2556ce716cc",
  navItems,
};
