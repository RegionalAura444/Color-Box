const Box = ({colorValue, hexValue, isDarkText}) => {
    return(
        <section
         className="colorRectangle" 
         style={{ backgroundColor: colorValue,
                  color: isDarkText ? '#000' : '#fff'
         }}>
            <p>{colorValue ? colorValue : 'Color'}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}


export default Box