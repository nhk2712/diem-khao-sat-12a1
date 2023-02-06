import "./AppFound.css";

function AppFound({result}){
    function getPointColor(point){
        if (point>=8) return "pointGreen"
        if (point<3) return "pointRed"
        if (point<5) return "pointYellow"
        return ""
    }

    return (<>
    <div className="AppContainer">
        <div className="subHeaderTitle">Kết quả của thí sinh:</div>

        <table style={{marginBottom:"50px"}}><tbody>
            <tr>
                <td className="field label">Số báo danh:</td>
                <td className="field value">{result._id}</td>
            </tr>
            <tr className="spacer20"></tr>
            <tr>
                <td className="field label">Họ và tên:</td>
                <td className="field value">{result.name}</td>
            </tr>
            <tr className="spacer20"></tr>
            <tr>
                <td className="field label">Ngày sinh:</td>
                <td className="field value">{result.dob}</td>
            </tr>
            <tr className="spacer20"></tr>
            <tr>
                <td className="field label">Lớp:</td>
                <td className="field value">{result.clazz}</td>
            </tr>

            <tr className="spacer50"></tr>
            <tr><td colSpan={2} className="sectionHeader">Môn thi chung</td></tr>
            <tr className="spacer20"></tr>
            <tr>
                <td className="field label">Văn:</td>
                <td className="field value"><div className={getPointColor(result.van)}>{result.van}</div></td>
            </tr>
            <tr className="spacer20"></tr>
            <tr>
                <td className="field label">Toán:</td>
                <td className="field value"><div className={getPointColor(result.toan)}>{result.toan}</div></td>
            </tr>
            <tr className="spacer20"></tr>
            <tr>
                <td className="field label">Ngoại ngữ:</td>
                <td className="field value"><div className={getPointColor(result.ngoai_ngu)}>{result.ngoai_ngu}</div></td>
            </tr>

            <tr className="spacer50"></tr>
            <tr><td colSpan={2} className="sectionHeader">Môn thi tổ hợp: {(result.su==="") ? "KHTN" : "KHXH"}</td></tr>
            <tr className="spacer20"></tr>
            <tr>
                <td className="field label">{(result.su==="") ? "Vật lý" : "Lịch sử"}:</td>
                <td className="field value"><div className={getPointColor(result.ly + result.su)}>{result.ly + result.su}</div></td>
            </tr>
            <tr className="spacer20"></tr>
            <tr>
                <td className="field label">{(result.su==="") ? "Hóa học" : "Địa lý"}:</td>
                <td className="field value"><div className={getPointColor(result.hoa + result.dia)}>{result.hoa + result.dia}</div></td>
            </tr>
            <tr className="spacer20"></tr>
            <tr>
                <td className="field label">{(result.su==="") ? "Sinh học" : "GDCD"}:</td>
                <td className="field value"><div className={getPointColor(result.sinh + result.gdcd)}>{result.sinh + result.gdcd}</div></td>
            </tr>
        </tbody></table>
    </div>
    </>)
}

export default AppFound;