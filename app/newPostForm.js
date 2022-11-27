"use client"
import { useRouter } from 'next/navigation'

const addNewPost = (e, api, router)=> {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    let newPost = {}
    formData.forEach((value, property) => newPost[property] = value)
    fetch(api, {
        method: 'POST',
        body: JSON.stringify(newPost)
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        router.refresh()
    })
}

export default ({api}) => {
    const router = useRouter()
    return (
      <form onSubmit={e => addNewPost(e, api, router)}>
        <input type="text" placeholder="Title" name="title" />
        <br/>
        <textarea placeholder="body" name="body" />
        <br/>
        <input type="submit" value="ADD NEW POST" />
      </form>
    );
  }