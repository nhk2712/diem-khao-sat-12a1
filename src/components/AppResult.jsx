function AppResult({result}){
    return (<>
    <table>
        <tr>
            <td>Số báo danh</td>
            <td>{result._id}</td>
        </tr>
        <tr>
            <td>Họ và tên</td>
            <td>{result.name}</td>
        </tr>
        <tr>
            <td>Ngày sinh</td>
            <td>{result.dob}</td>
        </tr>
        <tr>
            <td>Lớp</td>
            <td>{result.clazz}</td>
        </tr>
        <tr>
            <td>Văn</td>
            <td>{result.van}</td>
        </tr>
        <tr>
            <td>Toán</td>
            <td>{result.toan}</td>
        </tr>
        <tr>
            <td>Ngoại ngữ</td>
            <td>{result.ngoai_ngu}</td>
        </tr>
        <tr>
            <td>Lý</td>
            <td>{result.ly}</td>
        </tr>
        <tr>
            <td>Hóa</td>
            <td>{result.hoa}</td>
        </tr>
        <tr>
            <td>Sinh</td>
            <td>{result.sinh}</td>
        </tr>
        <tr>
            <td>Sử</td>
            <td>{result.su}</td>
        </tr>
        <tr>
            <td>Địa</td>
            <td>{result.dia}</td>
        </tr>
        <tr>
            <td>GDCD</td>
            <td>{result.gdcd}</td>
        </tr>
    </table>
    </>)
}

export default AppResult;