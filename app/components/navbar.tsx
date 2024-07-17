import Image from "next/image";
import Style from "./styles.module.css"

export default function Navbar() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // #111A24 and yellow #F8EE00
    <main className={` ${Style.navbar_container} p-5 flex items-center justify-between`}>
        <div>Logo</div>
        <ol className={Style.navigations}>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contact</li>
            <div>CV</div>
        </ol>
    </main>
  );
}
