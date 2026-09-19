import { BASE_URL } from '@/shared/constants'

const RouterLink = (props) => {
  const {
    to,
    children,
    ...rest
  } = props

  const path = `${BASE_URL}${to.replace(/^\//, '')}`

  const handleClick = (event) => {
    event.preventDefault()

    window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a href={path} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default RouterLink