import { CloseIcon, CommentIcon, LikeIcon, ShareIcon, ThreeDotIcon } from "../icons"
import Avatar from "./Avatar"
import useUserStore from "../stores/userStore"
import usePostStore from "../stores/postStore"
import TimeAgo from "react-timeago"
import { toast } from "react-toastify"
import CommentContainer from "./commentContainer"

function PostItem({ post }) {
  // console.log('post', post)
  const user = useUserStore(state => state.user)
  const token = useUserStore(state => state.token)
  const getAllPosts = usePostStore(state => state.getAllPosts)
  const deletePost = usePostStore(state => state.deletePost)
  const setCurrentPost = usePostStore(state => state.setCurrentPost)
  const createLike = usePostStore(state => state.createLike)
  const unLike = usePostStore(state => state.unLike)

  const hdlShowEditModal = () => {
    setCurrentPost(post)
    document.getElementById('editform-modal').showModal()
  }

  const hdlDelete = async () => {
    try {
      const resp = await deletePost(post.id)
      toast.success(resp.data.message)

    } catch (err) {
      const errMsg = err.response?.data?.error || err.message
      toast(errMsg)
    }
  }

  const haveLike = () => post.likes.some(el => el.userId === user.id)
  const hdlLikeClick = async () => {
    if (haveLike()) {
      await unLike(post.id)
    } else {
      await createLike({ postId: post.id })
    }
  }


  return (
    <div className="card bg-base-100 shadow-xl ">
      <div className="card-body">
        <div className="flex justify-between ">

          <div className="flex gap-3">
            <Avatar className="w-11 rounded-full" imgSrc={post.user.profileImage} />
            <div className="flex flex-col">
              <p>{post.user.firstName} {post.user.lastName}</p>
              <p className="text-xs opacity-70">
                <TimeAgo date={post.createdAt} />
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center -mt-8">
            {
              post.userId === user.id && (

                <div className="dropdown">
                  <div tabIndex={0} role="button">
                    <div className="avatar items-center cursor-pointer">
                      <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                        <ThreeDotIcon className="w-6" />
                      </div>
                    </div>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={hdlShowEditModal}><a>Edit</a></li>
                    <li onClick={hdlDelete}><a>Delete</a></li>
                  </ul>
                </div>
              )}
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                <CloseIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
        <p>{post.message}</p>
        {/* {Math.random() > 0.5 && <img src={reactLogo} className="p-4 max-h-[200px] object-contain" />} */}
        {
          post.image &&
          <img src={post.image} className="p-4 max-h-[200px] object-contain" />
        }

        {/* Like,comment,amount */}
        <div className="flex justify-between items-center pe-4">
          <div className="avatar items-end gap-1 cursor-pointer">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
              <LikeIcon className="w-5" />
            </div>
            <p>{post.likes?.length} Likes</p>
          </div>
          <div className="flex">
            <p className="opacity-60">{post.comments?.length} comments</p>
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        {/* Like,comment,share button */}
        <div className="flex gap-3 justify-between">
          <div className={`flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-300
          ${haveLike() ? 'bg-blue-300' : ''} `} onClick={hdlLikeClick}>
            <LikeIcon className="w-5" />Like
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-300">
            <CommentIcon className="w-5" />Comment
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-300">
            <ShareIcon className="w-5" />Share
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        {/* Comment Container */}
        <CommentContainer postId={post.id} comments={post.comments} />
      </div>
    </div>
  )
}
export default PostItem