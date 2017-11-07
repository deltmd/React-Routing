const people = [
  {
    name: 'Alan Turing',
    id: 1,
    image: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUzMTE2Njg3/alan-turing-9512017-1-402.jpg',
    description: '"Machines take me by surprise with great frequency."'
  },
  {
    name: 'G. H. Hardy',
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Ghhardy%4072.jpg',
    description: '"A mathematician, like a painter or poet, is a maker of patterns. If his patterns are more permanent than theirs, it is because they are made with ideas."'
  },
  {
    name: 'Sofia Kovalevskaya',
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sofja_Wassiljewna_Kowalewskaja_1.jpg/330px-Sofja_Wassiljewna_Kowalewskaja_1.jpg',
    description: '"It is impossible to be a mathematician without being a poet in soul."'
  }
]

export function getPeople() {
  return people;
}

export function getCharacter(id) {
  let person = people.filter(e => e.id === +id)
  return person[0]
}
