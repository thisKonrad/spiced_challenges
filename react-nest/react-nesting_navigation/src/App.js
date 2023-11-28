import "./styles.css";
import Header from "../src/components/Header.js";
import Logo from "../src/components/Logo.js";
import Navigation from "../src/components/Navigation.js";
import Link from "../src/components/Link.js";
import Button from "../src/components/Button.js";
import Avatar from "../src/components/Avatar.js";


export default function App() {
    
  return <>
   <Header>
    <Logo/>
    <Navigation>
      <Link href="#hometown">Home</Link >
      <Link href="#spacedrip">About</Link >
      <Link href="#superturn">Something</Link >
    </Navigation>
    <Button>
      <Avatar/>
    </Button>
  </Header>
    <main>content goes here…</main>
  </>
 
}

{/* <header className="header">
<a href="#">
  <img className="round-image" src={logo} alt="logo" />
</a>
<nav>
  <a className="navigation__link" href="#home">
    Home
  </a>
  <a className="navigation__link" href="#about">
    About
  </a>
  <a className="navigation__link" href="#impressum">
    Impressum
  </a>
</nav>
<button
  type="button"
  onClick={() => console.log("I could toggle a profile!")}
  aria-label="toggle profile"
>
  <img className="round-image" src={avatar} alt="avatar" />
</button>
</header>
<main>content goes here…</main> */}