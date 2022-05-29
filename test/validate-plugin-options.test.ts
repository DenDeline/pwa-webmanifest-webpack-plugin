import { ValidationError } from 'schema-utils'

import PwaWebmanifestPlugin from '../src'

describe('validate options', () => {
  it('should successfully validate', () => {
    let error: ValidationError | undefined
    try {
      // eslint-disable-next-line no-new
      new PwaWebmanifestPlugin({ name: '' })
    } catch (errorFromPlugin) {
      if (!(errorFromPlugin instanceof ValidationError)) {
        throw errorFromPlugin
      }
      error = errorFromPlugin
    } finally {
      expect(error).toBeUndefined()
    }
  })
})
