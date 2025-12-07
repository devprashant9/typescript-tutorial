import { useState, type JSX } from 'react'
import './App.css'
import Card from './components/Card';
import ApiCall from './components/ApiCall';

interface Props {
  id: number,
  title: string,
  description: string,
  name: string,
  email: string,

}

const cardData: Props[] = [
  {
    id: 1,
    title: "Visiting Card",
    description: "Best For Testimonials",
    name: "Prashant Kumar Jha",
    email: "kumarjha183@gmail.com",
  }
]

interface FormData {
  name: string,
  email: string,
  password: string,

}

function App(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: ""
  });

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }


  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={(e) => changeHandler(e)}
          autoComplete="current-password"
        />
        <button type="submit">Submit</button>
      </form>

      {
        cardData.map((cardItem) => (
          <Card
            key={cardItem.id}
            id={cardItem.id}
            description={cardItem.description}
            title={cardItem.title}
            name={cardItem.name}
            email={cardItem.email} />))
      }
      <ApiCall />

    </>
  )
}

export default App
