// import { faker   } from "@faker-js/faker/locale/ar"
'use server'
import { fakerAR } from '@faker-js/faker'
import { faker } from '@faker-js/faker'
import db from '@/lib/prisma'

 

const DBgenerateFakeData = (counter, type) => {
  const typeOfType = ['c', 'm', 'h']
  const cities = ['جدة', 'الرياض', 'جيزان', 'الدمام']
  return {
    providerName: fakerAR.name.fullName(),
    image: fakerAR.image.avatar(),
    logo: fakerAR.image.avatar(),
    counter: counter,
    carType: [
      faker.vehicle.manufacturer(),
      faker.vehicle.manufacturer(),
      faker.vehicle.manufacturer(),
      faker.vehicle.manufacturer(),
      faker.vehicle.manufacturer()
    ].map(type => type.toLowerCase()),
    starCount: faker.number.int({ max: 100 }), // 42
    commentCount: faker.number.int({ max: 100 }), // 42,
    service: [
      fakerAR.helpers.arrayElement(['برمجة', 'كهرباء', 'ميكانيكا']),
      faker.helpers.arrayElement(['برمجة', 'كهرباء', 'ميكانيكا']),
      faker.helpers.arrayElement(['برمجة', 'كهرباء', 'ميكانيكا'])
    ],
    facility: [
      fakerAR.helpers.arrayElement(['برمجة', 'كهرباء', 'ميكانيكا']),
      faker.helpers.arrayElement(['برمجة', 'كهرباء', 'ميكانيكا']),
      faker.helpers.arrayElement(['برمجة', 'كهرباء', 'ميكانيكا'])
    ],
    description: fakerAR.lorem.paragraph({ min:3, max: 7 }),
    heroSlogon: fakerAR.lorem.paragraph({ min:1, max: 1 }),
    slug:"not yet",
    detail: fakerAR.lorem.paragraph({ min: 5, max: 30 }),
    type: faker.helpers.fromRegExp(/[whc]/),
    city: faker.helpers.arrayElements(['جدة', 'الرياض', 'جيزان', 'الدمام'], {
      min: 1,
      max: 1
    })[0],
    dist: faker.helpers.arrayElements(['الشرفية', 'المكرونة'], {
      min: 1,
      max: 1
    })[0]
  }
}

export const DBgenerateFakeImage = async () => {
  const providers = await db.provider.findMany()


  for (const provider of providers) {
    const numberOfImages = faker.number.int({ min: 2, max: 10 })

    for (let i = 0; i < numberOfImages; i++) {
      const image = {
        image: fakerAR.image.avatar(),
        providerid: provider.id, // Ensure this matches your database field name
        type: 'slider'
      }
      await db.image.create({ data: image })
    }
  }

  return
}

export const DbgenerateFakeDatas = length => {
  const users = []
  let counter = 0
  Array.from({ length: length }).forEach(() => {
    counter++
    users.push(DBgenerateFakeData(counter))
  })
   DBgenerateFakeImage();
  return users
}
