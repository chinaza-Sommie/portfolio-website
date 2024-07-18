import Image from "next/image";
import Styles from "./styles.module.css"

export default function Landing() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // #111A24 and yellow #F8EE00
    <main className={`${Styles.intro_container} mt-20 mx-10 px-10`}>
      <div className={Styles.intro}>Hi, my name is</div>
      <div id={Styles.name}>Chinaza Chukwunweike</div>
      <div id={Styles.role}>Junior Software Engineer</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque at alias numquam aspernatur voluptate vitae magnam 
        repellendus et dolore perspiciatis, neque fugit odit! Aspernatur fugit non nostrum autem inventore recusandae.</p>
    </main>
  );
}
