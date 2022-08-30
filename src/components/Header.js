import "../css/header.css";
import { headerBtns, headerBannerA, headerBannerB } from "../data/headerBtns";
import Search from "./Search";

export default function Header({ search }) {
    const altIcon = null;
    return (
        <>
            <div className="header">
                <div className="header-top">
                    {headerBtns.map((item, index) => {
                        return (
                            <button className="h-b-t" key={index}>
                                {item.name}
                            </button>
                        );
                    })}
                </div>
                <div className="header-mid">
                    <img src="/images/bgpic.png" alt="text" width={1600} />
                </div>
                <div className="header-bottom">
                    {headerBannerA.map((item, index) => {
                        if (item.icon || item.icons) {
                            return (
                                <button className="h-b-l" key={index}>
                                    <img
                                        className="front-icon"
                                        src={item.icon}
                                        width={10}
                                        alt={altIcon}
                                    />
                                    {item.name}
                                    <img
                                        className="back-icon"
                                        src={item.icons}
                                        width={10}
                                        alt={altIcon}
                                    />
                                </button>
                            );
                        } else {
                            return null;
                        }
                    })}
                    <Search search={search} />
                    {headerBannerB.map((item, index) => {
                        return (
                            <button className="h-b-r" key={index}>
                                {item.name}
                                <img
                                    className="back-icon"
                                    src={item.icons}
                                    width={10}
                                    alt={altIcon}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
