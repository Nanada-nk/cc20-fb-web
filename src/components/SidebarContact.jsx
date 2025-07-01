import { SearchIcon } from "../icons"
import Avatar from "./Avatar"
import MenuItem from "./MenuItem"

function SidebarContact() {
  return (
    <div className="fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2 bg-blue-200 max-xl:hidden">
      <div className="flex justify-between text-gray-500">
        <span>contact</span>
        <div className="flex gap-2">
          <SearchIcon />
          ...
        </div>
      </div>
      <MenuItem
        icon={Avatar}
        text="Nada Codecamp20"
        className="w-11 h11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/404689/deciduous-tree.svg'
      />
      <MenuItem
        icon={Avatar}
        text="Ham Codecamp20"
        className="w-11 h11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/407373/sandwich.svg'
      />
      <MenuItem
        icon={Avatar}
        text="Cake Codecamp20"
        className="w-11 h11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/407423/shortcake.svg'
      />
    </div>
  )
}
export default SidebarContact