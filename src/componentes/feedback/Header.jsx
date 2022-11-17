import propsTypes from 'prop-types'
const Header =({bgColor,c})=>{



    return(
        <header style={{
            backgroundColor:bgColor,
            coor:c
        }}>
            <h1>Encabezado</h1>
        </header>
    )
}

//valores por defecto de props
Header.defaultProps={
    bgColor:'#e5b23c',
    color:'#fff'
}
//validaciones de props
Header.propsTypes={
    bgColor: propsTypes.string,
    color: propsTypes.string
}

export default Header;