import React, { useEffect } from 'react'
import Navbar from '../comp/all/Navbar'
import Confirmorpendding from '../comp/pagecomp/Confirmorpendding'
import Autocreatedatabase from '../comp/all/Autocreatedatabase'
import { useParams } from 'react-router-dom'

export default function Confim() {

    return (
        <div><Navbar />
            <Confirmorpendding />
        </div>
    )
}
