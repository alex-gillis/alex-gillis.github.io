function Button(props) {
  return (
    < >
        <p id={ props.info.id }>
            <button className="settings" onClick={ props.info.function } id={ props.info.clickable }>{ props.info.name }</button>
        </p>
    </>
  )

}

export default Button