import { Component, helpers } from 'trinity-web'

import { onClickOut } from 'utils/events'
import { header, div, a, li, small, i, ul, form, input, button, img } from 'utils/dom'

export default class Header extends Component {

    apps = [
        {
            icon: 'calendar',
            name: 'Calendar'
        },
        {
            icon: 'file-text',
            name: 'Files'
        },
        {
            icon: 'email',
            name: 'Mail'
        },
        {
            icon: 'trending-up',
            name: 'Analytics'
        },
        {
            icon: 'view-headline',
            name: 'News'
        },
        {
            icon: 'image',
            name: 'Gallery'
        }
     ]

    more = [
        {
            icon: 'fullscreen',
            desc: 'Toggle Fullscreen'
        },
        {
            icon: 'delete',
            desc: 'Clear Local Storage'
        },
        {
            icon: 'face',
            desc: 'Privacy Settings'
        },
        {
            icon: 'settings',
            desc: 'Other Settings'
        }
    ]

    user = [
        {
            icon: 'account',
            desc: 'View Profile',
            href: '#'
        },
        {
            icon: 'input-antenna',
            desc: 'Privacy Settings',
            href: '#'
        },
        {
            icon: 'settings',
            desc: 'Settings',
            href: '#'
        },
        {
            icon: 'time-restore',
            desc: 'Logout',
            href: '/logout'
        }
    ]

    openApps = (event) => {
        const app = document.querySelector('.top-menu__apps')

        app.classList.add('open')

        onClickOut(app, event).then(e => {
            app.classList.remove('open')
        })
    }

    openProfile = (event) => {
        const profile = document.querySelector('.top-menu__profile')

        profile.classList.add('open')

        onClickOut(profile, event).then(e => {
            profile.classList.remove('open')
        })
    }

    focusTopSearch = (event) => {
        const topSearch = document.querySelector('.top-search')
        const input = document.querySelector('.top-search__input')

        topSearch.classList.add('top-search--focused')

        onClickOut(input, event).then(e => {
            topSearch.classList.remove('top-search--focused')
        })
    }

    render = () => (
        header({ id: 'header' })(
            div({ className: 'logo' })(
                a({ href: '/dashboard', className: 'hidden-xs' })(
                    'Material',
                    small('admin extended dark')
                ),
                i({ className: 'logo__trigger zmdi zmdi-menu' })()
            ),
            ul({ className: 'top-menu' })(
                li({ className: 'top-menu__trigger hidden-lg hidden-md' })(
                    i({ className: 'zmdi zmdi-search' })()
                ),
                li({ className: 'top-menu__apps dropdown hidden-xs hidden-sm' })( //open
                    a({ onClick: this.openApps, href: '#' })(
                        i({ className: 'zmdi zmdi-apps' })()
                    ),
                    ul({ className: 'dropdown-menu pull-right' })(
                        helpers.map(this.apps, (app) => (
                            li(
                                a({ href: '#' })(
                                    i({ className: `zmdi zmdi-${app.icon}` })(),
                                    small(app.name)
                                )
                            )
                        ))
                    )
                ),
                li({ className: 'dropdown hidden-xs' })( //open
                    a(
                        i({ className: 'zmdi zmdi-more-vert' })()
                    ),
                    ul({ className: 'dropdown-menu dropdown-menu--icon pull-right' })(
                        helpers.map(this.more, ({ icon, desc, href }) => (
                            li(
                                a({ href })(
                                    i({ className: `zmdi zmdi-${icon}` })(),
                                    desc
                                )
                            )
                        ))
                    )
                ),
                li({ className: 'top-menu__alerts active' })(
                    a({ href: '#' })(
                        i({ className: 'zmdi zmdi-notification' })()
                    )
                ),
                li({ className: 'top-menu__profile dropdown' })(
                    a({ href: '#', onClick: this.openProfile })(
                        img({ src: 'http://bootstrapsale.com/projects/maed/v1/demo/img/profile-pics/1.jpg' })
                    ),
                    ul({ className: 'dropdown-menu pull-right dropdown-menu--icon' })(
                        helpers.map(this.user, ({ href, icon, desc }) => (
                            li(
                                a({ href })(
                                    i({ className: `zmdi zmdi-${icon}` })(),
                                    desc
                                )
                            )
                        ))
                    )
                )
            ),
            form({ className: 'top-search' })(
                input({
                    onClick: this.focusTopSearch,
                    className: 'top-search__input',
                    placeholder: 'Search for people, files & reports',
                    type: 'text'
                }),
                i({ className: 'zmdi zmdi-search top-search__reset' })()
            )
        )
    )

}