import Settings from './Settings.jsx'
import Stats from './StaTs.jsx'
import Links from './Links.jsx'

function Menu() {
  const vitals = "Unknown";
  const oxygen = "???";
  const profit = "???";

  return (
    < >
      <div className='menu'>
          <Settings /> 
          <Stats vitals={ vitals } oxygen={ oxygen } profit={ profit } /> 
          <Links /> 
      </div>
    </>
  )

}

export default Menu