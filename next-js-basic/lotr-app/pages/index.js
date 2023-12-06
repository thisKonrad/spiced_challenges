import Link from "next/link";


export default function HomePage() {
  return (
    <div>
      <h1>The Lord Of The Rings App</h1>
      <ul>
        <li>
          <Link href="/volumes">Volumes</Link>
       </li>
      </ul>
    </div>
  );
}



/* 
export default function HomePage() {
  return (
    <div>
      <h1>The Lord Of The Rings</h1>
      <ul>
      <li>
        <Link href="/"></Link>
      </li>
      <li>
        <Link href="/volumes">Volumes</Link>
      </li>
      <li>
        <Link href="/volumes/the-fellowship-of-the-ring">Volumes The Fellowship Of The Ring</Link>
      </li>
      <li>
        <Link href="/volumes/the-two-towers">Volumes The Two Towers</Link>
      </li>
      <li>
        <Link href="/volumes/the-return-of-the-king">Volumes The Return Of The King</Link>
      </li>
    </ul>
    </div>
  );
}
 */

