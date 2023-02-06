import AppFound from "./AppFound";
import AppNotFound from "./AppNotFound";

function AppResult({ result }) {
    return (<>
        {(result._id) ? <AppFound result={result} /> : <AppNotFound />}
    </>)
}
//

export default AppResult;