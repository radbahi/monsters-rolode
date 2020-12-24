import './CardList.css'

const CardList = (props) => {
  //props.children is whatever is passed in between the parent component's brackets. it's different than just props
  console.log(props)

  return <div className='CardList'>{props.children}</div>
}

export default CardList
