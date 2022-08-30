import { useState } from "react";
import "../css/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search({ search }) {
    const [searchText, setSearchText] = useState("");
    const [text, setText] = useState("");
    const [finalText, setFinalText] = useState("");

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text);
    };

    const handleEnterKeyPressed = (e) => {
        if (e.key === "Enter") {
            const regex = /[^a-z]/g;
            const whiteSpaces = /(^[\s\t]+|[\s\t]+([\s\t]|$))/g;
            setText(search(searchText.replace(regex, " ")));
            setFinalText(text.replace(whiteSpaces, " ").trim());
            console.log(`new text is:`, finalText);
        }
    };

    return (
        <div>
            <div className="searchbox">
                <input
                    className="input"
                    onChange={handleInput}
                    onKeyPress={handleEnterKeyPressed}
                    type="text"
                    value={searchText}
                    placeholder="Search..."
                ></input>
                <i>
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="grey" />
                </i>
            </div>
        </div>
    );
}
