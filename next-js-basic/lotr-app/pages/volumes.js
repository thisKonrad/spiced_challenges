import Link from "next/link";
import { introduction } from "libary/libary.js";


export default function Volumes() {
    return (
      <div>
        <h1>The Lord Of The Rings</h1>
        <article>
            <p>{introduction}</p>
        </article>
        <h2>All Volumes:</h2>
        <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
        <ul>
            <li>
            <Link href="/the-fellowship-of-the-ring">Volumes The Fellowship Of The Ring</Link>
            </li>
            <li>
            <Link href="/the-two-towers">Volumes The Two Towers</Link>
            </li>
            <li>
            <Link href="/the-return-of-the-king">Volumes The Return Of The King</Link>
            </li>
        </ul>
      </ul>
      </div>);
}
  