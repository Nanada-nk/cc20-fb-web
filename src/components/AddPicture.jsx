import { PhotoIcon2 } from "../icons"

function AddPicture(props) {
  const { file, setFile } = props

  const hdlFileChange = e => {
    console.log(e.target)
    console.dir(e.target)
    console.dir(e.target.value)
    // console.dir(e.target.files) // กรณีรูปหลายไฟล์ multiple
    console.dir(e.target.files[0]) // กรณีรูปเดียว index 0
    setFile(e.target.files[0])
    console.log('createURL', URL.createObjectURL(e.target.files[0]))
  }

  const removePic = e => {
    e.stopPropagation()
    document.getElementById('input-file').value = ''
    setFile(null)
  }

  return (
    <div className="flex flex-col p-2 border rounded-lg">
      <div className="bg-slate-100 min-h-40 relative cursor-pointer hover:bg-slate-200"
        onClick={() => document.getElementById('input-file').click()}
      >
        <input type="file" className="hidden" id="input-file"
          // <input type="file" className="hidden" id="input-file" multiple // เลือกรูปได้หลายไฟล์ฺ
          onChange={hdlFileChange}
        />
        {file &&
          <>
            <img src={URL.createObjectURL(file)} alt="post-image" className="h-full block mx-auto" />
            <button className="btn btn-sm btn-circle hover:bg-gray-500 absolute top-1 right-1 opacity-60"
              onClick={removePic}
            >X</button>
          </>
        }

        {
          !file &&
          <PhotoIcon2 className="w-10 absolute top-15 right-1/2 translate-x-1/2 opacity-40" />

        }
      </div>
    </div>
  )
}
export default AddPicture