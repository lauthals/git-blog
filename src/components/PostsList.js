import { getPostsListJson } from '../helpers/getPostsListJson'
import render from '../helpers/render'

export default function PostsList() {
  getPostsListJson().then(response => {
    const posts = response.reverse()
      .map((item, index) => {
        const itemLink = `/#!/posts/${item.githubLink}`
        const itemTitle = item.title
        const itemDate = item.date
        return `
        <li>
          <a href=${itemLink}>
            ${itemTitle} / ${itemDate}
          </a>
        </li>
      `
      })
      .join('')

    const html = `
      <ul>
        ${posts}
      </ul>
    `

    render('#content', html)
  })
}
