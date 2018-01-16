import { Trinity } from 'trinity-web'
import ApiClient from 'trinity-plugin-api'
import Render from 'trinity-dom'

import { isNotAuthenticated, isAuthenticated } from './routeAuth'

import { Login, Dashboard, Register } from './containers'

const initialData = window.__data ? JSON.parse(window.__data) : {}
const initialStore = Object.assign(initialData, { data: {} })

const app = new Trinity('app', initialStore)

app.context('render', Render(require('./utils/dom')))
app.context('api', new ApiClient('http://localhost:1337/api', 'session._token'))

app.route('/', Login, isNotAuthenticated)
app.route('/register', Register, isNotAuthenticated)
app.route('/dashboard', Dashboard, isAuthenticated)

app.start()