import Tiptap from "../Tiptap"
import { useState } from 'react'
import ShowPost from "./ShowPost";

const NewPost = () => {
  const [htmlContent, setHtmlContent] = useState('');

  const handleEditorContentSave = (html) => {
    // console.log(html);
    setHtmlContent(html)

  }
  return (
    <>
      <Tiptap onEditorContentSave={handleEditorContentSave} />
      <hr />
      <ShowPost content={htmlContent} />
    </>
  )
}

export default NewPost