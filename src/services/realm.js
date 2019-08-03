import Realm from 'realm';

import AnimalSchema from '../schemas/AnimalSchema';

export default function getRealm() {
  return Realm.open({
    schema: [
      AnimalSchema
    ]
  })
}