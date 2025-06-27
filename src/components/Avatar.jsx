import DefaultImg from '../assets/default-avatar.png'
import { DropdownArrow } from '../icons'
function Avatar(props) {
  const { imgSrc, menu,bottom,right, ...resProps } = props
  return (
    <div className="avatar items-center cursor-pointer">
      <div {...resProps}>

        <img src={imgSrc ? imgSrc : DefaultImg} alt="avatar" />
      </div>
      {menu && 
        <DropdownArrow className="absolute top-6 left-6 w-5 bg-blue-50 rounded-full" style={{bottom: bottom, right: right}} />
      }
    </div>
  )
}
export default Avatar