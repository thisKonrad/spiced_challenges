import Link from "next/link";
import { volumes } from "libary/libary.js";
import Image from "next/image";
import pic from "../assets/the-two-towers.png";


export default function TheTwoTowers() {

    const towers = volumes.find(({slug}) => slug === "the-two-towers");

    return (<div>
        <h1>{towers.title}</h1>
        <ul>
          <li>
            <Link href="/volumes">Volumes</Link>
         </li>
         <p>{towers.description}</p>
         <ul>
          <li>{towers.books[0].ordinal}</li>
          <li>{towers.books[0].title}</li>
          <li>{towers.books[1].ordinal}</li>
          <li>{towers.books[1].title}</li>
         </ul>
         <div>
            <Image src={pic}
             height={230}
             width={140}
             alt="a picture of the book cover"/>
          </div>
          <br></br>
          <li>
            <Link href="/the-return-of-the-king">Next</Link>
         </li>
         <li>
            <Link href="/the-fellowship-of-the-ring">Previous</Link>
         </li>
        </ul>
      </div>);
}