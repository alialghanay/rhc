import React from "react";
import Header from "./header/header";
import Main from "./main/main";
import Reload from "./reload/reload";

function App(props) {
    return(
        <div id="contianer">
            {/* <Reload /> */}
            <Header />
            <Main />
        </div>
    )
}

export default App;