import { compose } from 'ipem-shared'
import { withRouter } from './withRouter'
import { withStore } from './withStore'

export const withProviders = compose(withRouter, withStore)
