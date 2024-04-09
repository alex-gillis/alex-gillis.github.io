function Settings() {

  return (
    < >
    <div className='menu__settings'>
        <p>
            <h4>Game Settings</h4>
            <p id="save">
                <button className="settings" id='unclickable'>Save Game</button>
            </p>
            <p id="load">
                <button className="settings" id='unclickable'>Load Game</button>
            </p>
            <p id='new'>
                <button className="settings" >New Game</button>
            </p>
            <p id='delete'>
                <button className="settings" >Delete Save</button>
            </p>
            <p className='feedback' id='feedback'></p>
        </p>
    </div>
    </>
  )

}

export default Settings