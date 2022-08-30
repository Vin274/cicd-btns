import "../css/cardHolder.css";

export default function CardHolder({ results }) {
    return (
        <>
            <div className="cardholder">
                <li className="cardholder-li">
                    <h2>
                        <a target="_blank" href={results.url}>
                            {" "}
                            {results.name}{" "}
                        </a>
                    </h2>
                    <div className="cardholder-content">
                        <div className="cardholer-image">
                            <img
                                src={results.openGraphImage.contentUrl}
                                alt={results.title}
                            />
                        </div>
                        <div className="cardholder-text">
                            <p className="cardholder-urls">
                                {results.displayUrl}
                            </p>
                            <p>{results.snippet}</p>
                        </div>
                    </div>
                </li>
            </div>
        </>
    );
}
