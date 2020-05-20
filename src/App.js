import React from 'react'
import { Header, Footer, Hero } from './components'
import './index.scss'

function App() {
    const nav_header = [
        { id: 1, name: 'About', url: '/about' },
        {
            id: 2,
            name: 'Help',
            url: '/help',
            subnav: [
                { id: 4, name: 'User Guide', url: '/help/guide' },
                { id: 5, name: 'Contact Support', url: '/help/support' },
            ],
        },
        { id: 3, name: 'Features', url: '/features' },
    ]
    const nav_footer = [
        { id: 1, name: 'About Us', url: '/about' },
        { id: 2, name: 'Privacy Policy', url: '/privacy' },
    ]
    const slider_cards = [
        {
            id: 1,
            name: 'First Feature',
            content:
                'Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.',
        },
        {
            id: 2,
            name: 'Second Feature',
            content:
                'Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.',
        },
        {
            id: 3,
            name: 'Third Feature',
            content:
                "The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother's bed, and ate her up.",
        },
        {
            id: 4,
            name: 'Fourth Feature',
            content:
                'Little Red Cap had run after the flowers. After she had gathered so many that she could not carry any more, she remembered her grandmother.',
        },
    ]

    return (
        <div>
            <Header nav={nav_header} />
            <main>
                <Hero slider_cards={slider_cards} />
            </main>
            <Footer nav={nav_footer} />
        </div>
    )
}

export default App
