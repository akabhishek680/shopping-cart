import React from 'react';

class Footer extends React.Component {

    calculateTotalAmount = () => this.props.calculateTotalAmount();

    render() {

        return(
            <React.Fragment>
                <div style = {style.footerBar}>
                    <h2 style = { style.totalAmount }>Total Amount: <img style={ style.rupeesIcon } src="https://cdn-icons-png.flaticon.com/512/25/25473.png" /> { this.calculateTotalAmount()} </h2> 
                </div>
            </React.Fragment>
        )
    }

}

const style = {

    footerBar: {
        backgroundColor: '#FFF68F',
        padding: 6,
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'fixed',
        width: '100vw',
        bottom: 0
    },

    rupeesIcon: {
        width: 20,
        height: 20
    },

    totalAmount: {
        paddingRight: 30
    }
}

export default Footer;