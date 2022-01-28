import colorNames from 'colornames';

const Inputfield = ({colorValue, setColorvalue,setHexValue,isDarkText, setIsDarkText}) => {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                required
                autoFocus
                className="colorInput"
                type='text'
                placeholder="Add Color Name"
                value={colorValue}
                onChange= {(e) => {
                    setColorvalue(e.target.value);
                    setHexValue(colorNames(e.target.value))
                    }}
            />
            <button type= 'button' onClick={() =>setIsDarkText(!isDarkText)}>
               Change Text Color
            </button>
        </form>
    )
}

export default Inputfield  