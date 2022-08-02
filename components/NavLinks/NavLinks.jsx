import styles from "./NavLinks.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const NavLinks = () => {
  const router = useRouter();
  const [routes] = useState([
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Blog", route: "/blog" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Contact", route: "/contact" },
  ]);

  return (
    <ul className={styles["nav-links"]}>
      {routes.map((data, index) => {
        return (
          <li
            key={index}
            className={
              router.asPath  === `${data.route}`
                ? `${styles.active} ${styles["hover-link"]}`
                : `${styles["hover-link"]}`
            }
          >
            <Link href={data.route} area-label="Hover">
              <span>
                {console.log(data.route)}
                {console.log(router.pathname)}
                <span>
                  {data.name}
                  <span>{data.name}</span>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
