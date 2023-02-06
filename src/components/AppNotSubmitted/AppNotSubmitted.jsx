import "./AppNotSubmitted.css";

function AppNotSubmitted({setStudentId,setDob,requestResult}) {
    return (<>
        <div className="AppContainer">
            <div className="subHeaderTitle">Nhập thông tin thí sinh:</div>

            <table style={{ marginBottom: "20px" }}><tbody>
                <tr>
                    <td className="formLabel">Số báo danh:</td>
                    <td><input type="text" className="inputText" placeholder="123456" onChange={(e)=>{setStudentId(e.target.value)}}/></td>
                </tr>
                <tr style={{ height: "20px" }}></tr>
                <tr>
                    <td className="formLabel">Ngày sinh:</td>
                    <td><input type="text" className="inputText" placeholder="23/01/2005"  onChange={(e)=>{setDob(e.target.value)}}/></td>
                </tr>
            </tbody></table>
            <div className="buttonArea">
                <button className="mainButton" onClick={()=>{requestResult();window.blur()}}>Tra cứu</button>
            </div>
        </div>

        <div className="instruction">
            <b>Hướng dẫn</b>
            <ul>
                <li>Nhập {"<Số báo danh>"} đủ 6 chữ số, kể cả số 0.</li>
                <li>Nhập {"<Ngày sinh>"} theo định dạng:</li>
            </ul>
            {"[Ngày]/[Tháng]/[Năm]"}<br/>
            Trong đó:<br/>
            - Có đủ dấu gạch chéo.<br/>
            - {"[Năm]"} đủ 4 chữ số.<br/>
            - {"[Ngày] và [Tháng]"} nếu nhỏ hơn 10 thì nhập thêm số 0 ở trước.
        </div>
    </>)
}

export default AppNotSubmitted;