import React from 'react';

class Navbar extends React.Component {

    render() {

        return(
            <React.Fragment>
                <span style = { style.heading }>
                    <h2>Shopping Cart</h2>
                    <img style={ style.cartIcon} src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" />
                </span>
                
                
            </React.Fragment>
        )
    }
}

const style = {

    heading: {
        color: 'white',
        backgroundColor: '#808080',
        padding: '2px',
        paddingLeft: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    cartIcon : {
        height: 50,
        width: 50,
        marginRight: 40
    }
}

export default Navbar;