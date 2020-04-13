import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        enhancements: state[0].enhancements
    }
}

function Enhancements(props) {
    return (
        <div>
            <h4>Enhancements</h4>
            {props.enhancements.map(enh =>
                <div key={Math.random()}>
                    <p>{enh.enhancementName}</p>
                    <p>Price: {enh.enhancementPrice}</p>
                    <p>Qty: {enh.enhancementQty}</p>
                    <button>Buy!</button>
                </div>
                
                )
            }
        </div>
    )
}

export default connect(mapStateToProps)(Enhancements)