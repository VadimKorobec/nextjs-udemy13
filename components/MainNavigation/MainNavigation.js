import Link from "next/link";

import Logo from "../Logo/Logo";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              
                <Logo />
              
            </Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
