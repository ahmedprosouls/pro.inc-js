import { registerWebComponents } from './register'
import { parseprobot, injectprobotInWindow } from './window'

registerWebComponents()

const probot = parseprobot()

injectprobotInWindow(probot)

export default probot
