import { useState } from "react";
import AppForm from "./components/AppForm";
import AppResult from "./components/AppResult";

function App() {
    const [result, setResult] = useState(null);
    const [studentId, setStudentId] = useState("");
    const [dob, setDob] = useState("");
    const [loading,setLoading]=useState("");

    function requestResult() {
        setLoading("Đang tải...")
        const dobWithoutSlashes = dob.charAt(0)+dob.charAt(1)+dob.charAt(3)+dob.charAt(4)+dob.charAt(6)+dob.charAt(7)+dob.charAt(8)+dob.charAt(9)

        const URL=process.env.REACT_APP_BACKEND+`/query/${studentId}/${dobWithoutSlashes}`;

        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            setResult(data)
        })
    }

    return (<>{(!result) ? <AppForm setStudentId={setStudentId} setDob={setDob} requestResult={requestResult} loading={loading}/>
        : <AppResult result={result}/>}</>);
}

export default App;
