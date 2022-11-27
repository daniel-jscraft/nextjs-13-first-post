import Article from "./article"
import NewPostForm from "./newPostForm"

const api = 'https://jsonplaceholder.typicode.com/posts'

const loadDataFromServer = async ()=> {
    const response = await fetch(api, { cache: 'no-store' })
    return response.json()
}

export default async () => {
    const articles = await loadDataFromServer()
    return (<>
        <h1>My blog</h1>
        <NewPostForm api={api} />
        {articles.map( p => <Article key={p.id} {...p}/>)}
    </>)
}