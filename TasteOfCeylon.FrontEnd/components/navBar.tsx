"use client";

import styles from "./styles/navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="w-full bg-transparent">
      <div className={styles.navbar}>
        <div className={styles.brand_container}>
          <Image
            src="/toclogo.png" 
            alt="TOC Logo"
            width={100}
            height={100}
            quality={100}
            style={{ cursor: "pointer" }}
            onClick={() => handleNavigate("/")}
          />
          <Image
            onClick={() => setCollapsed(!collapsed)}
            className={styles.toggle}
            src="https://img.icons8.com/ios-glyphs/50/ffffff/menu--v3.png"
            alt="menu--v3"
            width={35}
            height={35}
          />
        </div>
        <ul className={styles.nav_container}>
          <li className={styles.nav} onClick={() => handleNavigate("/")}>
            Home
          </li>
          <li className={styles.nav} onClick={() => handleNavigate("/menu/")}>
            Menu
          </li>
          <li
            className={styles.nav} onClick={() => handleNavigate("/offers")}>
            Offers
          </li>
          <li
            className={styles.nav} onClick={() => handleNavigate("/services")}>
            Services
          </li>
          <li
            className={styles.nav} onClick={() => handleNavigate("/login")}>
              <button className="bg-[#39DB4A] font-semibold text-white px-8 py-3 rounded-full">
                Log In
              </button>
          </li>
          
        </ul>
        <ul
          className={`${styles.nav_container_responsive} ${
            collapsed ? styles.collapsed : styles.expanded
          }`}
        >
          <li className={styles.nav} onClick={() => handleNavigate("/")}>
            Home
          </li>
          <li className={styles.nav} onClick={() => handleNavigate("/menu/")}>
            Menu
          </li>
          <li
            className={styles.nav} onClick={() => handleNavigate("/offers")}>
            Offers
          </li>
          <li
            className={styles.nav} onClick={() => handleNavigate("/services")}>
            Services
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
