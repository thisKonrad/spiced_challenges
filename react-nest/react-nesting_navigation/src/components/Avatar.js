import "../styles.css";
import avatar from"../img/avatar.jpg"

export default function Avatar() {
    return <>
        <img className="round-image" src={avatar} alt="avatar" />
    </>
}

