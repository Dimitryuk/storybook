import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Toggle from "../Toggle/Toggle";

export default function AppBar({ navItems, logoImg }) {
  return (
    <div>
      <div>
        <Logo imageUrl={logoImg} />
      </div>

      <div>
        <Toggle />
        <Navigation items={navItems} />
      </div>
    </div>
  );
}
