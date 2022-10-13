import './SlashYear.css'
import line from '../../img/line.png'


const SlashYear = () => {
  const nowDate = new Date()
  const nextYear = (nowDate.getFullYear() + 1)
  return (
    <div className='SlashYear'>
      <img src={line} className='lines' alt=''/>
      <div className='SlashYear__year'>{nextYear}</div>
      <img src={line} className='lines' alt=''/>
    </div>
  )
}


export default SlashYear