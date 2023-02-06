import "./AppLoading.css";

function AppLoading({ loading }) {
    return (<>
        <div className="loadingContainer" style={{ display: (loading) ? "unset" : "none" }}>
            <div className="loadingDark"></div>
            <div className="loadingDialogArea">
                <div className="loadingDialog">
                    <div className="loaderArea">
                        <div className="loader"></div>
                    </div>
                    <b className="loadingTitle">Đang tải...</b>
                    <div className="loadingSubtitle">Xin vui lòng đợi...</div>
                </div>
            </div>
        </div>

    </>);
}

export default AppLoading;