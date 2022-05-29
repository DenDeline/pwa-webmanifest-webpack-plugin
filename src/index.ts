import { validate } from 'schema-utils'
import type { Schema } from 'schema-utils/declarations/ValidationError'

import PluginOptionsSchema from './options/plugin-options.json'

export type Options = {
  name?: string
}

class PwaWebmanifestPlugin {
  options: Options

  static defaultOptions = {}

  constructor(options: Options = {}) {
    validate(PluginOptionsSchema as Schema, options, {
      baseDataPath: 'options',
    })

    this.options = Object.assign({}, options)
  }
}

export default PwaWebmanifestPlugin
