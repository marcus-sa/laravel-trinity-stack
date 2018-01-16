import { Component, createElement } from 'trinity-web'

import { Main } from '../components'
import { div } from 'utils/dom'

export default class Dashboard extends Component {

    getInitialState = () => ({
        lol: 'test'
    })

    /*async componentDidMount({ store, state, context: { api } }) {

    }*/

    render({ state }) {
        return createElement(Main, {
            children: (
                'Hello!'
            )
        })
    }

}