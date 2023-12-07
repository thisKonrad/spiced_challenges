import Link from "next/link";
import { volumes } from "libary/libary.js";
import Image from "next/image";
import pic from "../assets/the-fellowship-of-the-ring.png";


export default function TheFellowshipOfTheRing() {

  const fellows = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring");

    return (<div>
        <h1>{fellows.title}</h1>
        <ul>
          <li>
            <Link href="/volumes">Volumes</Link>
         </li>
         <p>{fellows.description}</p>
         <ul>
          <li>{fellows.books[0].ordinal}</li>
          <li>{fellows.books[0].title}</li>
          <li>{fellows.books[1].ordinal}</li>
          <li>{fellows.books[1].title}</li>
         </ul>
          <div>
            <Image src={pic}
             height={230}
             width={140}
             alt="a picture of the book cover"/>
          </div>
          <br></br>
          <li>
            <Link href="/the-two-towers">Next</Link>
         </li>
         </ul>
    </div>);
}
