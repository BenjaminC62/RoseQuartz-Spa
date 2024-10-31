import React from 'react'

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
    </div>
  )
}

export default Tarif
