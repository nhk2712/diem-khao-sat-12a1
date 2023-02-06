import { useState } from "react";
import './App.css';

import AppNotSubmitted from "./components/AppNotSubmitted/AppNotSubmitted";
import AppLoading from "./components/AppLoading/AppLoading";
import AppResult from "./components/AppResult/AppResult";
import Header from "./components/Header/Header";
import TechnicalSupport from "./components/TechnicalSupport/TechnicalSupport";

function App() {
    const SAMPLE_DATA = {
        _id:"090305",
        name:"Nguyễn Hoàng Khánh",
        dob:"27/12/2005",
        clazz:"12A1",
        van:8,
        toan:9.6,
        ngoai_ngu:7.8,
        ly:8.5,
        hoa:7.25,
        sinh:7,
        su:"",
        dia:"",
        gdcd:""
    };
    const [result, setResult] = useState(SAMPLE_DATA);
    const [studentId, setStudentId] = useState("");
    const [dob, setDob] = useState("");
    const [loading, setLoading] = useState(false);

    function requestResult() {
        setLoading(true)
        const dobWithoutSlashes = dob.charAt(0) + dob.charAt(1) + dob.charAt(3) + dob.charAt(4) + dob.charAt(6) + dob.charAt(7) + dob.charAt(8) + dob.charAt(9)

        const URL = process.env.REACT_APP_BACKEND + `/query/${studentId}/${dobWithoutSlashes}`;

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setResult(data)
                setLoading(false)
            })
    }

    return (<>
        <div className="App">
            <Header />
            <AppLoading loading={loading} />
            {(!result) ? <AppNotSubmitted setStudentId={setStudentId} setDob={setDob} requestResult={requestResult}/>
                : <AppResult result={result}/>}
            <TechnicalSupport />
        </div>
    </>);
}

export default App;
