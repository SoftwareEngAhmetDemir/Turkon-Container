import React from 'react'
import { ScriptProps } from 'next/script'
import Header from '../Header'
import Footer from '../Footer'
import Aside from '../Aside'
import Banner from '../Banner'

export const DefaultLayout = (props: any) => {
    return (
        <>
            <Header content={props.html.header} />
            <main>
                <Banner />
                <div className='container main-container'>
                    <div className='row'>
                        <div className="col-lg-9 col-12">
                            {/* include components */}
                            {props.children}
                        </div>
                        <div className="d-lg-block d-none col-3 border-2 border-start">
                            {/* include aside */}
                            {/* aside */}
                            <Aside content={props.html.aside} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer content={props.html.footer} />
        </>
    )
}