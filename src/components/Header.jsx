import useUserStore from "../stores/userStore"
import { Link } from "react-router"
import { BellIcon, FakebookLogo, FriendIcon, HomeIcon, MarketIcon, MenuIcon, MsgIcon, PlayIcon, SearchIcon } from "../icons"
import Avatar from "./Avatar"


function Header() {
  const logout = useUserStore(state => state.logout)
  const user = useUserStore(state => state.user)
  return (
    <div className="flex justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10">
      {/* Search Bar */}
      <div className="flex-1 flex items-center gap-2 pe-2 cursor-pointer">
        <FakebookLogo className="w-10 max-md:w-15 duration-1000" />
        <label className="input rounded-full">
          <input placeholder="Search" />
          <SearchIcon className="w-5 opacity-60" />
        </label>
      </div>
      {/* Navigator */}
      <div className="flex-1 flex gap-2 justify-center">
        <Link to="/" className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900 ">
          <HomeIcon className="w-1/2" />
        </Link>
        <Link to="/" className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900 ">
          <PlayIcon className="w-1/2" />
        </Link>
        <Link to="/" className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900 ">
          <MarketIcon className="w-12" />
        </Link>
        <Link to="/friends" className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900 ">
          <FriendIcon className="w-12" />
        </Link>
      </div>
      {/* Right + Dropdown menu */}
      <div className="flex-1 flex gap-3 justify-end">
        <div className="avatar justify-center items-center cursor-pointer">
          <div className="w-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MenuIcon className="w-6" />
          </div>
        </div>
        <div className="avatar justify-center items-center cursor-pointer">
          <div className="w-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MsgIcon className="w-8" />
          </div>
        </div>
        <div className="avatar justify-center items-center cursor-pointer">
          <div className="w-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <BellIcon className="w-9" />
          </div>
        </div>
        <div className="dropdown dropdown-end pt-0.5">
          <div tabIndex={0} role="button" className="btn m-1 btn-circle">
            <Avatar menu bottom='-10' right='-10'
            imgSrc={user.profileImage}
            />
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><Link to="/profile">Profile</Link></li>
            <li><a onClick={logout}>Logout</a></li>
          </ul>
        </div>
        {/* <Avatar menu className="w-11" imgSrc="https://www.svgrepo.com/show/395984/cat-face.svg"/> */}
      </div>
    </div>
  )
}
export default Header