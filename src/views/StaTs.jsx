import '../styles/Module.css'

function Stats() {

  return (
    < >
    <div className='menu__stats'>
        <h4>Character Statistics</h4>
        <p className='hud'>
            <p className='hud__health'>Vital Signs: <span id='health'>Unknown</span></p>
            <p className="hud__oxygen">Oxygen Levels: <span id="oxygen">???%</span></p>
            <p className="hud__profit">Profits: <span id="profit">???</span> creds</p>
        </p>
    </div>
    </>
  )

}

export default Stats