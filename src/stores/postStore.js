import { create } from "zustand"
import { createPost, getAllPosts } from "../api/postApi"


const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null, // for edit
  loading: false,
  // creating: false, เปลี่ยนชื่อ loading ได้
  createPost: async (body, token, user) => {
    set({ loading: true })
    const resp = await createPost(body, token)
    console.log('resp', resp.data)
    // getAllPost
    set({ loading: false })
    return resp
  },
  getAllPosts : async (token) => {
    await new Promise(rs=>setTimeout(rs,2000))
    const resp = await getAllPosts(token)
    set({posts: resp.data.posts})

    return resp
  }
}))

export default usePostStore