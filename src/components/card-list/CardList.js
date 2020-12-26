import './CardList.css'
import { Card } from '../card/Card'

const CardList = (props) => {
  //props.children is whatever is passed in between the parent component's brackets. it's different than just props
  console.log(props)
  // always learn to separate concerns in components
  return (
    <div className='CardList'>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  )
}

export default CardList
