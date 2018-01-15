import { Component, helpers, createElement } from 'trinity-web'

import { FormGroup } from '../components'
import { required, maxLength, minLength } from 'utils/validation'
import { button, div, i, ul, a, li, span, form, input, label } from 'utils/dom'

export default class Login extends Component {

    getInitialState = () => ({
        dropdown: 'dropdown',
        loginBlock: 'login__block toggled',
        errors: {}
    })

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loginBlock: 'login__block' })
        }, 301)
    }

    hideDropdown = (e) => {
        if (this.state.dropdown) {
            this.setState({ dropdown: 'dropdown' })
        }
    }

    toggleDropdown = (e) => {
        e.preventDefault()

        this.setState({ dropdown: 'dropdown open' })
    }

    login = async (event) => {
        event.preventDefault()

        const data = helpers.form.getData(event.target)

        const errors = helpers.form.createValidator(data, {
            id: [required, minLength(6), maxLength(255)],
            password: [required, minLength(6), maxLength(255)]
        })

        if (Object.keys(errors).length) {
            this.setState({ errors })
        } else {
            try {
                const user = await this.context.api.post('login', { data })

                this.store.set({ user })
            } catch (errors) {
                this.setState({ errors })
            }
        }
    }

    render({ state: { errors, loginBlock, dropdown } }) {
        return (
            div({ className: 'login' })(
                div({ className: loginBlock })(
                    div({ className: 'login__block__header' })(
                        i({ className: 'zmdi zmdi-account-circle' })(),
                        span('Hi there! Please sign in'),

                        div({ className: 'actions login__block__actions' })(
                            div({ className: dropdown })(
                                a({ onMouseEnter: this.toggleDropdown })(
                                    i({ className: 'zmdi zmdi-more-vert' })()
                                ),

                                ul({ onMouseLeave: this.hideDropdown, className: 'dropdown-menu pull-right' })(
                                    li(
                                        a({ href: '/register' })(
                                            'Create an account'
                                        )
                                    ),
                                    li(
                                        a({ href: '/forgot-password' })(
                                            'Forgot password?'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    form({ onSubmit: this.login, className: 'login__block__body' })(
                        createElement(FormGroup, {
                            error: errors.id,
                            label: 'Username or Email Address',
                            name: 'id'
                        }, 'LFGI'),
                        createElement(FormGroup, {
                            error: errors.password,
                            label: 'Password',
                            name: 'password',
                            type: 'password'
                        }, 'LFGP'),
                        button({ type: 'submit', className: 'btn btn--light btn--icon m-t-15' })(
                            i({ className: 'zmdi zmdi-long-arrow-right' })()
                        )
                    )
                )
            )
        )
    }

}