import React from "react";
import CardHolder from "./CardHolder";

export default function Content({ results }) {
    let data = [];
    if (results.data.webPages) {
        data = results.data.webPages.value;
        // console.log(`results`, results);
        console.log("working");
    } else {
        console.log("not working");
    }
    return (
        <>
            <div className="content">
                <ol className="content-container">
                    {data.map((item, index) => (
                        <CardHolder key={index} results={item} />
                    ))}
                </ol>
            </div>
        </>
    );
}
