import * as ReactDOM from "react-dom";
import * as React from "react";

import { AddFeedModal } from "./component/modal/add-feed-modal";
import { ConfigModal } from "./component/modal/config-modal";
import { CustomComponent } from "./component/custom-component";
import { SwitchButton } from "./component/button/switch-button";
import { Sidebar } from "./component/sidebar";
import { AlertList } from "./component/alert/alert-list";
import { ArticleList } from "./component/article/article-list";
import { Loading } from "./component/loading";
import { Content } from "./component/content";
import { Theme } from "./component/theme";
import { Header } from "./component/header";

import { ComponentsRefs } from "./components-refs";
import { FeedStorage } from "./storage";

export class App extends CustomComponent<{}, {}>{

    constructor() {
        super();

        FeedStorage.storedContent = FeedStorage.load();

        ComponentsRefs.main = this;

    }

    render() {
        return (
            <div>
                <Theme />
                <Header />
                <Sidebar />
                <ArticleList /><Content />
                <AlertList />
                <footer>
                    <a href="#">
                        <i className="fa fa-question-circle"></i> About
                    </a>
                    <a href="https://github.com/Xstoudi/rss-feed">
                        <i className="fa fa-github"></i> Fork me
                    </a>
                    <a href="https://github.com/Xstoudi/rss-feed/issues">
                        <i className="fa fa-exclamation-triangle"></i> Any issue ?
                    </a>
                </footer>
                <Loading />
                <AddFeedModal />
                <ConfigModal />
                <SwitchButton />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root")) as App;
