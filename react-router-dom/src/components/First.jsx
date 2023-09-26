import { useNavigate } from "react-router-dom";

const First = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h3>HOMEPAGE ROUTE</h3>
            <button onClick={() => navigate('/about')}>CHECK ABOUT</button>
        </div>
    )
}

export default First;