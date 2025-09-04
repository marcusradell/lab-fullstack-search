import { NavContainer } from "./nav-container";
import { NavContent } from "./nav-content";
import { NavLogo } from "./nav-logo";

export function TopNav() {
  return (
    <NavContainer>
      <NavContent>
        <NavLogo text="SEARCH" />
      </NavContent>
    </NavContainer>
  );
}
