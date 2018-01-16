export function toggleDropdown(event) {
    event.preventDefault()

    const dropdown = document.querySelector('.dropdown-menu')

    this.setState({ dropdown: 'dropdown open' })

    onClickOut(dropdown, event).then(e => {
        this.setState({ dropdown: 'dropdown' })
    })
}

export function onClickOut(element, event) {
    return new Promise(resolve => {
        event.preventDefault()

        document.addEventListener('click', function(e) {
            if (!element.contains(e.target) && !event.target.isEqualNode(e.target)) {
                document.removeEventListener('click', this)

                return resolve(e)
            }
        })
    })
}