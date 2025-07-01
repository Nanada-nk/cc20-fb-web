import { create } from "zustand"
import { createComment, createLike, createPost, deletePost, getAllPosts, unLike, updatePost } from "../api/postApi"
import useUserStore from "./userStore"



const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null, // for edit
  loading: false,
  // creating: false, เปลี่ยนชื่อ loading ได้
  createPost: async (body, token, user) => {
    set({ loading: true })
    const resp = await createPost(body, token)
    console.log('resp', resp.data)
    console.log('resp.data.result', resp.data.result)
    // getAllPost
    // set({ loading: false })
    // get().getAllPosts() ทำแบบนี้ หรือแบบล่างก็ได้ แบบนี้จะช้าหน่อย แบบล่างจะเร็วกว่า
    set(state => ({
      loading: false,
      posts: [{ ...resp.data.result, user, likes: [], comments: [] }, ...state.posts]
    }))
    return resp
  },
  getAllPosts: async () => {
    // await new Promise(rs => setTimeout(rs, 2000))
    let token = useUserStore.getState().token
    const resp = await getAllPosts(token)
    // let tk = useUserStore.getState().token   // ดึงของจาก store โดยไม่ผ่าน ui ให้ผ่าน fn
    // const resp = await getAllPosts(tk)
    set({ posts: resp.data.posts })

    return resp
  },
  deletePost: async (id) => {
    const token = useUserStore.getState().token
    const resp = await deletePost(id, token)
    get().getAllPosts()
    return resp
  },
  setCurrentPost: (post) => set({ currentPost: post }),
  updatePost: async (id, body) => {
    const token = useUserStore.getState().token
    const resp = await updatePost(id, body, token)
    get().getAllPosts()
    return resp
  },
  createLike: async (body) => {
    const token = useUserStore.getState().token
    const resp = await createLike(body, token)
    get().getAllPosts()
    return resp
  },
  unLike: async (id) => {
    const token = useUserStore.getState().token
    const resp = await unLike(id, token)
    get().getAllPosts()
    return resp
  },
  createComment: async (body) => {
    const token = useUserStore.getState().token
    const resp = await createComment(body, token)
    get().getAllPosts()
    return resp
  }
}))

export default usePostStore