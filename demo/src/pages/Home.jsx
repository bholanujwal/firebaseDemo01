import { NavLink } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <h1>This is landing page(Home page)</h1>

            <button onClick={<NavLink to={'/login'} />}>Login</button>
            <button onClick={<NavLink to={'/register'} />}>Register</button>

        </div>
    )
}

export default Home
