import React from 'react'
import PageHeader from '../comp/all/PageHeader'
import Navbar from '../comp/all/Navbar'
import Profilechild from '../comp/compage/Profilechild'

export default function Profile() {
    return (
        <div> <div class="page-wrapper">
            <PageHeader />
            <div class="page-body-wrapper">
                <Navbar />
                <Profilechild/>
            </div>
        </div></div>
    )
}
