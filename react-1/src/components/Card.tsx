import { type JSX } from 'react'

interface Props {
  id: number,
  title: string,
  description: string,
  name: string,
  email: string,

}

function Card({ id, title, description, name, email }: Props): JSX.Element {
  return (
    <div style={{
      border: "2px solid white"
    }}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}

export default Card
