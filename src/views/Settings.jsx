import Button from "./Button"

function Settings(props) {

  return (
    < >
    <div className='menu__settings'>
        <p>
            <h4>Game Settings</h4>
                <Button info={ props.buttons.one }/>
            <p id="load">
                <Button info={ props.buttons.two }/>
            </p>
            <p id='new'>
                <Button info={ props.buttons.three }/>
            </p>
            <p id='delete'>
                <Button info={ props.buttons.four }/>
            </p>
            <p className='feedback' id='feedback'></p>
        </p>
    </div>
    </>
  )

}

export default Settings