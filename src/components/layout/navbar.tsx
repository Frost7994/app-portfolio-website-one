// components
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="shadow bg-white">
      <Section className="flex-row justify-between items-center">
        {/* logo */}
        <p className="font-medium">Sellmore</p>

        {/* nav */}
        <ul className="flex items-center">
          <li>
            <Button variant="ghost">Product</Button>
          </li>
          <li>
            <Button variant="ghost">Features</Button>
          </li>
          <li>
            <Button variant="ghost">About</Button>
          </li>
          <li>
            <Button variant="ghost">Pricing</Button>
          </li>
        </ul>

        {/* auth */}
        <div className="flex items-center gap-1">
          <Button variant="ghost">Login</Button>
          <Button>Get started</Button>
        </div>
      </Section>
    </nav>
  );
};

export default Navbar;
