import { Component, helpers } from 'trinity-web'

import { footer, ul, li, a } from 'utils/dom'

export default class Footer extends Component {

    links = [
        {
            href: '/dashboard',
            title: 'Home'
        },
        {
            href: '/reports',
            title: 'Reports'
        },
        {
            href: '/support',
            title: 'Support'
        },
        {
            href: '/contact',
            title: 'Contact'
        }
    ]

    render = () => (
        footer(
            'Copyright © 2015 Material Admin',
            ul({ className: 'footer__menu' })(
                helpers.map(this.links, ({ href, title }) => (
                    li(
                        a({ href })(title)
                    )
                ))
            )
        )
    )

}