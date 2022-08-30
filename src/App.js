import { useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import Content from "./components/Content";
import "./css/app.css";

function App() {
    const [state, setState] = useState({
        results: [],
    });

    const [background, setBackground] = useState(false);

    const search = async (text) => {
        const results = await axios.get(
            `https://api.bing.microsoft.com/v7.0/custom/search?q=${text}&customconfig=1033fd74-0fc6-4cd0-8937-62c5808a9913&mkt=en-US`,
            {
                headers: {
                    "Ocp-Apim-Subscription-Key":
                        "eb3a3a21994646daaa03832aee088cc6",
                },
            }
        );
        console.log(`text`, text);
        setBackground(true);
        setState((prevState) => {
            return { ...prevState, results: results };
        });
    };

    return (
        <>
            <div className="container-top">
                <button>test</button>
                <Header search={search} />
                {background === false ? (
                    <img
                        className="bgimg"
                        src="/images/bgimg.png"
                        width={1500}
                        alt="background img"
                    />
                ) : (
                    <Content results={state.results} />
                )}
            </div>
        </>
    );
}

export default App;
