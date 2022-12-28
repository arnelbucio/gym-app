import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import Link from "./Link";
import ActionButton from "../../shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <div className="flex-between fixed top-0 z-30 w-full py-6">
      <div className="flex-between mx-auto w-5/6">
        <div className="flex-between w-full gap-16">
          {/* Logo */}
          <img src={Logo} alt="logo" />

          {/* Menu Links */}
          {isAboveMediumScreens ? (
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
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
