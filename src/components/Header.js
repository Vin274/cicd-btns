import "../css/header.css";
import { headerBtns, headerBannerA, headerBannerB } from "../data/headerBtns";
import Search from "./Search";

export default function Header({ search }) {
    return (
        <>
            <div className="header">
                <div className="header-top">
                    {headerBtns.map((item, index) => {
                        return (
                            <button className="h-b-t" index={index}>
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
                                <button className="h-b-l" index={index}>
                                    <img
                                        className="front-icon"
                                        src={item.icon}
                                        width={10}
                                    />
                                    {item.name}
                                    <img
                                        className="back-icon"
                                        src={item.icons}
                                        width={10}
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
                            <button className="h-b-r" index={index}>
                                {item.name}
                                <img
                                    className="back-icon"
                                    src={item.icons}
                                    width={10}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
