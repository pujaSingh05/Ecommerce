import { FaSearch, FaShoppingBag, FaSign, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"


const user  = {_id: "ghg", role: "admin"}
const Header = () => {
  return (
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/search'}><FaSearch/></Link>
        <Link to={'/cart'}><FaShoppingBag/></Link>

        {
            user?._id? (
                <>
                <button>
                    <FaUser/>
                </button>
                <dialog open={true}>
                    <div>
                        {
                            user.role==="admin" && (
                                <Link to={'/admin/dashboard'}>Admin</Link>
                            )
                        }

                        <Link to={"/orders"}>Orders</Link>
                        <button> <FaSignOutAlt/></button>
                    </div>
                </dialog>
                </>
            ):(
                <Link to={'/login'}><FaSignInAlt/></Link>
            )
        }

      
    </nav>
  )
}

export default Header
