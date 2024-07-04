import Image from "next/image";
import styles from "./NavBar.module.css";

export interface NavBarProps {
  prop?: string;
}

export function NavBar({ prop = "default value" }: NavBarProps) {
  return (
    <nav>
      <Image
        width={50}
        height={50}
        alt="logo"
        id="logo"
        src="/assets/images/logo.svg"
      />
      <ul className="desktop-navigation">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>New</a>
        </li>
        <li>
          <a>Popular</a>
        </li>
        <li>
          <a>Trending</a>
        </li>
        <li>
          <a>Categories</a>
        </li>
      </ul>
      <Image
        alt="menu"
        src="/assets/images/icon-menu.svg"
        className="sidebar-toggle hamburger"
        width={50}
        height={50}
      />
    </nav>
  );
}
