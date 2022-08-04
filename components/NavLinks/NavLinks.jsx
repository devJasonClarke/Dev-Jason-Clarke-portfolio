import styles from "./NavLinks.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const NavLinks = ({ delay }) => {
  const router = useRouter();
  const routes = useSelector((state) => state.links.routes);

  return (
    <ul className={styles["nav-links"]}>
      {routes.map((data, index) => {
        return (
          <motion.li
            key={index}
            initial={{ y: "20px", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.3, delay: index * delay }}
            className={
              router.asPath === `${data.route}`
                ? `${styles.active} ${styles["hover-link"]}`
                : `${styles["hover-link"]}`
            }
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
          >
            <Link href={data.route} area-label="Hover">
              <span>
                <span>
                  {data.name}
                  <span>{data.name}</span>
                </span>
              </span>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
