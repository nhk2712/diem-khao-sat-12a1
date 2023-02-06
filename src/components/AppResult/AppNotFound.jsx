function AppNotFound() {
    return (<><div className="AppContainer">
        <div className="subHeaderTitle">Rất tiếc...</div>
        <div style={{ marginBottom: "50px", fontSize: "22px", marginRight: "20px" }}>Không thể tìm thấy thí sinh mà bạn yêu cầu.</div>
        <div className="buttonArea">
            <button className="mainButton" onClick={() => { window.location.reload() }}>Làm lại</button>
        </div>
    </div></>)
}

export default AppNotFound;