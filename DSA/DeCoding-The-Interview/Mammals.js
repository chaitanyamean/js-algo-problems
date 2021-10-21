let animals = [
    {
    type: 'Dog',
    mammal: true,
    },
    {
    type: 'Snake',
    mammal: false,
    },
    {
    type: 'Cheetah',
    mammal: true,
    },
    ]

    let onlyMammalsArr = animals.filter((item) => item.mammal == true)
    console.log(onlyMammalsArr)