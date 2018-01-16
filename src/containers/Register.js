import { Component, helpers, createElement } from 'trinity-web'

import { FormGroup } from '../components'
import { toggleDropdown } from 'utils/events'
import { button, div, i, ul, a, li, span, form, input, label } from 'utils/dom'
import { required, isEmail, minLength, maxLength, match } from 'utils/validation'

export default class Register extends Component {

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

    register = (event) => {
        event.preventDefault()

        const data = helpers.form.getData(event.target)

        const errors = helpers.form.createValidator(data, {
            username: [required, minLength(6), maxLength(16)],
            email: [required, maxLength(255), isEmail],
            password: [required, minLength(6), maxLength(255)],
            password_confirmation: [required, match('password')],
            tos: [required]
        })

        if (errors) {
            this.setState({ errors })
        }
    }

    render({ state: { errors, dropdown, loginBlock } }) {
        return (
            div({ className: 'login' })(
                div({ className: loginBlock })(
                    div({ className: 'login__block__header' })(
                        i({ className: 'zmdi zmdi-account-circle' })(),
                        span('Create an account'),

                        div({ className: 'actions login__block__actions' })(
                            div({ className: dropdown })(
                                a({ href: '#', onClick: toggleDropdown.bind(this) })(
                                    i({ className: 'zmdi zmdi-more-vert' })()
                                ),

                                ul({ className: 'dropdown-menu pull-right' })(
                                    li(
                                        a({ href: '/' })(
                                            'Already have an account?'
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
                    form({ onSubmit: this.register, className: 'login__block__body' })(
                        createElement(FormGroup, {
                            error: errors.username,
                            label: 'Username',
                            name: 'username',
                        }, 'RFGU'),
                        createElement(FormGroup, {
                            error: errors.email,
                            label: 'Email Address',
                            name: 'email',
                            type: 'email'
                        }, 'RFGE'),
                        createElement(FormGroup, {
                            error: errors.password,
                            label: 'Password',
                            name: 'password',
                            type: 'password',
                        }, 'RFGP'),
                        createElement(FormGroup, {
                            error: errors.password_confirmation,
                            label: 'Confirm Password',
                            name: 'password_confirmation',
                            type: 'password'
                        }, 'RFGPC'),
                        div({ className: 'input-centered' })(
                            div({ className: 'checkbox' })(
                                label(
                                    input({ type: 'checkbox', name: 'tos' }),
                                    i({ className: 'input-helper' })(),
                                    'Accept the license agreement'
                                )
                            )
                        ),
                        button({ type: 'submit', className: 'btn btn--light btn--icon m-t-15' })(
                            i({ className: 'zmdi zmdi-long-arrow-right' })()
                        )
                    )
                )
            )
        )
    }

}