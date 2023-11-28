import "../styles.css";

export default function Button({children}) {
    return <>
    <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile">
            {children}
    </button>
    </>
}