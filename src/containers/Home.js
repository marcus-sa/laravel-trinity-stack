import { Component } from 'trinity-web'

import { div } from 'utils/dom'

export default class Home extends Component {

    getInitialState = () => ({
        lol: 'test'
    })

    /*async componentDidMount({ store, state, context: { api } }) {

    }*/

    render({ state }) {
        return div('Hey there!')
    }

}