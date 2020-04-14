import React from 'react'
import { connect } from 'react-redux'
import { conquerProvincy } from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        provincies: state[0].provincies,
        baseProvincePrice: state[0].baseProvincePrice,
        baseProvinceGold: state[0].baseProvinceGold
    }
}

const mapDispatchToProps = dispatch => {
    return {   
        manageConquerProvincy: (event) => {
            dispatch(conquerProvincy(event.target.value))   
        }
    }
}

function Provincies(props) {
    return (
        <div>
            <h4>Provincies</h4>
            <p>Legionaries Needed: {props.baseProvincePrice}</p>
            <p>Tribute per Province: {props.baseProvinceGold}</p>
            <h5>Roman Empire:</h5>
            {props.provincies
                .filter(prov => prov.possession === true)
                .map(prov => 
                    <div key={Math.random()}>
                        <p>{prov.provinceName}</p>
                    </div>
                    )
            }
            <h5>To Conquer:</h5>
            {props.provincies
                .filter(prov => prov.possession === false)
                .map(prov => 
                    <div key={Math.random()}>
                        <p>{prov.provinceName}</p>
                        <button onClick={props.manageConquerProvincy} value={prov.provinceName}>conquer</button>
                    </div>
                    )
            }
        </div>
    )
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps,
    null,
    {
        pure: false
    }
)(Provincies)