import { Server } from 'miragejs'

export const startMirage = () => {
  return new Server({
    routes() {
      this.namespace = '/api'

      /**
       * path - расположение элемента в иерархии в формате ltree (https://postgrespro.ru/docs/postgrespro/12/ltree)
       */
      this.get('/regions', () => [
        { id: 1, path: '1', name: 'Region A' },
        { id: 2, path: '2', name: 'Region B' },
        { id: 3, path: '1.3', name: 'Station 1' },
        { id: 4, path: '1.3.4', name: 'Section 1' },
        { id: 5, path: '1.3.5', name: 'Section 2' },
        { id: 6, path: '2.6', name: 'Station 10' },
      ])
    },
  })
}
