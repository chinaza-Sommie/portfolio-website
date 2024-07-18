import Image from "next/image";
import Style from "./styles.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // #111A24 and yellow #F8EE00
    <main className={` ${Style.navbar_container} py-5 flex items-center justify-between`}>
        <Link href={'/'}><div>Logo</div></Link>
        <ol className={Style.navigations}>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contact</li>
            <Link href={'/'}><div>CV</div></Link>
        </ol>
    </main>
  );
}
