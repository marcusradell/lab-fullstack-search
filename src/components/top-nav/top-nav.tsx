import { NavContainer } from "./nav-container";
import { NavContent } from "./nav-content";
import { NavLogo } from "./nav-logo";
import { NavItems } from "./nav-items";
import { NavItem } from "./nav-item";

export function TopNav() {
  return (
    <NavContainer>
      <NavContent>
        <NavLogo text="SEARCH" />
        <NavItems>
          <NavItem text="Home" isActive={true} />
        </NavItems>
      </NavContent>
    </NavContainer>
  );
}
