import Settings from './Settings.jsx'
import Stats from './StaTs.jsx'
import Links from './Links.jsx'

function Menu(props) {

  return (
    < >
      <div className='menu'>
          <Settings buttons={ props.buttons }/> 
          <Stats status={ props.statistics } /> 
          <Links /> 
      </div>
    </>
  )

}

export default Menu