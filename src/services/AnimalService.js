import animais from '~/mock/lista_animais.json'

export default class AnimalService {

  findByid(idAnimal) {
    return new Promise((resolve, reject) => {
      const animal = animais.filter(animal => animal.id == idAnimal)
      if (animal !== null && animal.length === 1) {
        resolve(animal[0])
      } else {
        reject()
      }
    })
  }
}