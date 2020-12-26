import './CardList.css'
import { Card } from '../card/Card'

const CardList = (props) => {
  //props.children is whatever is passed in between the parent component's brackets. it's different than just props
  console.log(props)
  // always learn to separate concerns in components. the more it's separated, the less you have to repeat code.
  // https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15098114#overview
  return (
    <div className='CardList'>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  )
}

export default CardList
