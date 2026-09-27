import {defineConfig} from 'sanity'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'California Dreamn',

  projectId: 'your-project-id',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },
})
