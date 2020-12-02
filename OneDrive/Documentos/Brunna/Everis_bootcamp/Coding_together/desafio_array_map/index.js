// Função .map() retorna um novo array com a mesma quantidade de elementos do array inicial // 

const pets = [
    {
        type: 'dog',
        name: 'Rafiq',
        age: 3,
        weight: 3
    },
    {
        type: 'cat',
        name: 'Nabil',
        age: 5,
        weight: 2.5
    },
    {
        type: 'bird',
        name: 'Sabah',
        age: 2,
        weight: 0.05
    },
    {
        type: 'fish',
        name: 'Haifa',
        age: 4,
        weight: 0.01
    }
]

const mapPets = pets.map((pet) => {
    return pet.name 
    // caso queira todas as infos é só mudar para return pets
})

console.log(mapPets)

// Quero descobrir como cancatenar duas ou mais informações, por exemplo:
// pet.type + pet.name + pet.age + pet.weight 