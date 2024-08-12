const Header = () => {
    const headerStyle =  {
        display : "flex",
        justifyContent : "space-between",
        backgroundColor: "gray",
        padding: '20px',

    }

    const titleStyle = {
        color : "black"
    }

    const ulStyle = {
        display : "flex",
    }

    const liStyle = {
        fontWeight : "bold",
        listStyleType : "none",
        padding : "20px"
    }
        
  
    return(
        <header style={headerStyle}>
            <h1 style={titleStyle}>First System</h1>
            <ul style={ulStyle}>
                <li style = {liStyle}>HOME</li>
                <li style = {liStyle}>HOME</li>
            </ul>
        </header>
    ) 

}
export default Header;