import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        provincies: state[0].provincies,
        baseProvincePrice: state[0].baseProvincePrice
    }
}

function Provincies(props) {
    return (
        <div>
            <h4>Provincies</h4>
            <p>Legionaries Needed: {props.baseProvincePrice}</p>
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
                        <button>conquer</button>
                    </div>
                    )
            }
        </div>
    )
}


export default connect(mapStateToProps)(Provincies)