import React from 'react'
import '../../../styles/Tarif.css'

const Tarif = () => {
  return (
    <div>
        <h1>Les tarifs</h1>
        <p>Les tarifs sont les suivants:</p>
        <ul>
            <li>1h de massage: 50€</li>
            <li>1h de soin: 60€</li>
            <li>1h de soin + 1h de massage: 100€</li>
        </ul>
        <p>Les tarifs sont dégressifs si vous prenez plusieurs séances.</p>
        <div className="tarif">
            <div>
                <h2>1 séance</h2>
                <p>1h de massage: 50€</p>
            </div>
            <div>
                <h2>3 séances</h2>
                <p>1h de massage: 135€</p>
            </div>
            <div>
                <h2>5 séances</h2>
                <p>1h de massage: 200€</p>
            </div>
        </div>
        <span>Les tarifs sont dégressifs si vous prenez plusieurs séances.</span>
        
    </div>
  )
}

export default Tarif
