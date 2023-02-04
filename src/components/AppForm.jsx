function AppForm({ setStudentId, setDob, requestResult, loading }) {
    return (<>
        <div>
            <label>Số báo danh:</label>
            <input type="text" onChange={(e) => { setStudentId(e.target.value) }} />
            <br />
            <label>Ngày/tháng/năm sinh:</label>
            <input type="text" onChange={(e) => { setDob(e.target.value) }} />
            <br />
            <button onClick={requestResult}>Tra cứu</button>
            <div>{loading}</div>
        </div>
    </>)
}

export default AppForm;