import { compose } from '@modules/vacation/shared'
import { withRouter } from './withRouter'
import { withStore } from './withStore'

export const withProviders = compose(withRouter, withStore)
