import Link from "next/link";
import navStyle from '../styles/Nav.module.css';

export default function Nav() {
  return <div>
      <nav className={navStyle.nav}>
          <ul>
              <li>
                <Link href="/">
                    <a>Blog</a>
                </Link>                      
              </li>
              <li>
                  <Link href="/posts"> 
                    <a>Movie </a>
                  </Link>
              </li>
          </ul>
      </nav>
  </div>;
}
