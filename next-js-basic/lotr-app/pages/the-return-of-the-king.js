import Link from "next/link";
import { volumes } from "libary/libary.js";
import Image from "next/image";
import pic from "../assets/the-return-of-the-king.png";


export default function TheReturnOfTheKing() {

    const king = volumes.find(({slug}) => slug === "the-return-of-the-king");

    return (<div>
        <h1>{king.title}</h1>
        <ul>
          <li>
            <Link href="/volumes">Volumes</Link>
         </li>
         <p>{king.description}</p>
         <ul>
          <li>{king.books[0].ordinal}</li>
          <li>{king.books[0].title}</li>
          <li>{king.books[1].ordinal}</li>
          <li>{king.books[1].title}</li>
         </ul>
         <div>
            <Image src={pic}
             height={230}
             width={140}
             alt="a picture of the book cover"/>
          </div>
          <br></br>
          <li>
            <Link href="/the-two-towers">Previous</Link>
         </li>
        </ul>
      </div>);
}