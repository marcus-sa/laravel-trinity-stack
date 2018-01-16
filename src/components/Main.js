import { Component, createElement } from 'trinity-web'

import Header from './Header'
import Notifications from './Notifications'
import Navigation from './Navigation'
import Footer from './Footer'

import { header, div, section, aside, fragment } from 'utils/dom'

export default class Main extends Component {

    render = ({ props: { children } }) => (
        fragment(
            createElement(Header),
            section({ id: 'main' })(
                createElement(Notifications),
                createElement(Navigation),
                section({ id: 'content' })(
                    children
                ),
                createElement(Footer)
            )
        )
    )

}