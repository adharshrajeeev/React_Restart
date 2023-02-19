
function ClickHandler() {
  const clickHandlers=(event)=>{
    console.log("Button Clicked",event)
  }
  return (
    <div>
        <button onClick={clickHandlers}>Click</button>
    </div>
  )
}

export default ClickHandler