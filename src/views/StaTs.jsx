function Stats(props) {

  return (
    < >
    <div className='menu__stats'>
        <h4>Character Statistics</h4>
        <p className='hud'>
            <p className='hud__health'>Vital Signs: <span id='health'>{ props.status.vitals }</span></p>
            <p className="hud__oxygen">Oxygen Levels: <span id="oxygen">{ props.status.oxygen }%</span></p>
            <p className="hud__profit">Profits: <span id="profit">{ props.status.profit }</span> creds</p>
        </p>
    </div>
    </>
  )

}

export default Stats