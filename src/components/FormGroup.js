import { Component } from 'trinity-web'

import { div, input, label as htmlLabel, i, span, fragment } from 'utils/dom'

export default class FormGroup extends Component {

    getInitialState = () => ({ value: null })

    updateValue = (e) => this.setState({ value: e.target.value })

    render({ state: { value }, props: { error, name, label, type = 'text' } }) {
        const isActive = !!value ? 'form-group--active' : ''
        const hasError = !!error ? 'has-error has-feedback' : ''

        return div({ className: `form-group ${hasError}` })(
            div({ className: `form-group form-group--float ${isActive}` })(
                input({
                    name,
                    type,
                    value,
                    className: 'form-control',
                    onKeyDown: this.clearValue,
                    onFocusOut: this.updateValue,
                }),
                htmlLabel(label),
                i({ className: 'form-group__bar' })()
            ),
            error && (
                span({ className: 'help-block' })(error)
            )
        )
    }

}