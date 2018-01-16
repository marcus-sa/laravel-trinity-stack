import { Component } from 'trinity-web'

import { aside, div, a, small, i, ul, form, input, button } from 'utils/dom'

export default class Navigation extends Component {

    render = () => (
        aside({ id: 'navigation' })(
            div({ className: 'navigation__header' })(
                i({ className: 'zmdi zmdi-long-arrow-left' })()
            ),
            div({ className: 'navigation_toggles' })(
                div({ className: 'navigation__menu c-overflow mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar' })(

                )
            )
        )
    )

}