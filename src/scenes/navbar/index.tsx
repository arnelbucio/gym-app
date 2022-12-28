import Logo from "../../assets/Logo.png";
import { SelectedPage } from "../../shared/types";
import Link from "./Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className="flex-between fixed top-0 z-30 w-full py-6">
      <div className="flex-between mx-auto w-5/6">
        <div className="flex-between w-full gap-16">
          {/* Logo */}
          <img src={Logo} alt="logo" />

          {/* Menu Links */}
          <div className="flex-between w-full">
            <div className="flex-between gap-8 text-sm">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="flex-between gap-8">
              <p>Sign In</p>
              <button>Become a member</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
