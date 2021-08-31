import React from 'react'

import Developer from '../components/cards/Developer'

const cards = [
    <Developer />
]

export default function Landing() {
    return (
       <div className="page-viewer-container">
           <div className="page-viewer" >
                <div className="page-viewer-cards">
                    {cards}
                </div>
           </div>
       </div>
    )
}
