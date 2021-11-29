import Navigation from "./Navigation";
import { HiHome, HiBookOpen, HiCalendar } from "react-icons/hi";
export const navItems = [
  {
    text: "Главная",
    icon: <HiHome size="24" />,
  },
  {
    text: "Расписание",
    icon: <HiCalendar size="24" />,
  },
  {
    text: "Конспект",
    icon: <HiBookOpen size="24" />,
  },
];

const Stories = {
  title: "Navigation",
  component: Navigation,
};

export default Stories;
const Template = (args) => <Navigation {...args} />;
export const Default = Template.bind({});
Default.args = {
  items: navItems,
};
