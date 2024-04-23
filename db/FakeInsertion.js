'use server'
import db from '@/lib/prisma'
import { Slug } from '@/lib/slug'
import { faker } from '@faker-js/faker'
import { fakerAR } from '@faker-js/faker'
const providerBranch = async (id, branchCount) => {
  for (let i = 0; i < branchCount; i++) {
    const image = {
      providerid: id, // Ensure this matches your database field name
      image: faker.image.avatar(),
      lat: faker.location.latitude({ max: 10, min: -10, precision: 5 }),
      lon: faker.location.longitude({ max: 10, min: -10, precision: 5 }),
      userid: 'khalidnadish'
    }
    await db.providerBranch.create({ data: image })
  }
  return
}
const serviceProvierGnerate = async (id, serviceid) => {
  const numberOfImages = faker.number.int({ min: 2, max: 10 })
  for (let i = 0; i < numberOfImages; i++) {
    const image = {
      providerid: id, // Ensure this matches your database field name
      userid: 'khalidnadish',
      // service: '',
      serviceid: faker.helpers.arrayElement(serviceid, { min: 2, max: 10 }),
      like: faker.number.int({ max: 100 }),
      dislike: faker.number.int({ max: 100 })
    }
    await db.providerService.create({ data: image })
  }
  return
}
const sliderImage = async id => {
  const numberOfImages = faker.number.int({ min: 2, max: 10 })
  for (let i = 0; i < numberOfImages; i++) {
    const image = {
      image: faker.image.avatar(),
      providerid: id, // Ensure this matches your database field name
      type: 'slider',
      userid: 'khalidnadish'
    }
    await db.image.create({ data: image })
  }
  return
}

const serveicGnerate = async id => {
  const numberOfImages = faker.number.int({ min: 2, max: 10 })
  for (let i = 0; i < numberOfImages; i++) {
    const service = {
      logo: faker.image.avatar(),
      providerid: id, // Ensure this matches your database field name
      service: fakerAR.helpers.arrayElement(['برمجة', 'كهرباء', 'ميكانيكا']),
      detail: fakerAR.lorem.paragraph({ min: 3, max: 7 }),
      userid: 'khalidnadish'
    }
    await db.providerService.create({ data: service })
  }
  return
}

const commentGnerate = async (id, user) => {
  const service = await db.providerService.findMany({
    where: { providerid: id }
  })
  console.log('🚀 ~ commentGnerate ~ service:', service)

  const numberOfImages = faker.number.int({ min: 2, max: 10 })
  for (let i = 0; i < numberOfImages; i++) {
    const service = {
      providerid: id,
      comment: fakerAR.lorem.sentence({ min: 3, max: 5 }),
      serviceid: fakerAR.helpers.arrayElement([
        'برامج الولاء والمكافآت',
        'خدمات التوصيل والاستلام',
        'ضمانات ممتدة وخطط صيانة',
        'خدمات التنظيف والتجميل',
        'خدمات فحص ما قبل الشراء',
        'خدمات المساعدة على الطريق',
        'خدمات الصيانة الدورية للمركبات التجارية'
      ]),
      isShow: faker.helpers.arrayElement([true, false]),
      isOpen: faker.helpers.arrayElement([true, false]),

      userid: faker.helpers.arrayElement(user)
    }
    await db.comment.create({ data: service })
  }
  return
}

const dataSchema = async (counter, citits, service, cars) => {
  const typeOfType = ['c', 'w', 'h']
  let provideName = fakerAR.name.fullName()

  let providerSlug = Slug(provideName)
  const provider = {
    providerName: provideName,
    slug: providerSlug,
    coverImage: fakerAR.image.avatar(),
    logo: fakerAR.image.avatar(),
    carType: faker.helpers.arrayElements(cars, { min: 5, max: 20 }),

    starCount: faker.number.int({ max: 100 }), // 42
    commentCount: faker.number.int({ max: 100 }), // 42,
    likeCount: faker.number.int({ max: 100 }), // 42,
    disLikeCount: faker.number.int({ max: 100 }), // 42,
    branchCount: faker.number.int({ min: 1, max: 10 }), // 42,
    service: faker.helpers.arrayElements(service, { min: 2, max: 5 }),

    description: fakerAR.lorem.paragraph({ min: 3, max: 7 }),
    heroSlogon: fakerAR.lorem.paragraph({ min: 1, max: 1 }),
    detail: fakerAR.lorem.paragraph({ min: 5, max: 30 }),

    type: faker.helpers.arrayElements(typeOfType, { min: 1, max: 1 })[0],
    city: faker.helpers.arrayElements(citits, { min: 1, max: 1 })[0],
    dist: faker.helpers.arrayElements(['الشرفية', 'المكرونة'], {
      min: 1,
      max: 1
    })[0],
    userid: 'khalidnadish'
  }

  return provider
}

export const newProviderData = async (length, citits, service, cars) => {
  const provider = []

  // Create an array of promises for each iteration
  const promises = Array.from({ length: length }).map(async (_, index) => {
    const counter = index + 1
    // use the schema to create a new data
    const newData = await dataSchema(counter, citits, service, cars)
    provider.push(newData)
  })

  // Wait for all promises to resolve
  await Promise.all(promises)

  return provider
}

export const createBlock = async (
  count,
  citits,
  service,
  cars,
  users,
  extraService
) => {
  const providers = await newProviderData(count, citits, service, cars)
  providers?.map(async pro => {
    const rec = await db.provider.create({ data: pro })
    await sliderImage(rec.id)
    await providerBranch(rec.id, rec.branchCount)
    await commentGnerate(rec.id, users)
    await serviceProvierGnerate(rec.id, extraService)
    // await serveicGnerate(rec.id)
  })
}

export const deleteBlock = async () => {
  try {
    await Promise.all([
      db.provider.deleteMany(),
      db.image.deleteMany(),
      db.providerBranch.deleteMany(),
      db.providerService.deleteMany(),
      // db.service.deleteMany(),
      db.comment.deleteMany()
    ])
    console.log('Deletion successful')
  } catch (error) {
    console.error('Error deleting records:', error)
  }
}

export const getAllCitis = async () => {
  const cities = await db.city.findMany()
  const cityNames = cities.map(city => city.city)
  return cityNames
}

export const getservice = async () => {
  const service = await db.service.findMany({ where: { type: 'service' } })
  const serviceNames = service.map(el => el.service)
  return serviceNames
}

export const getExtraservice = async () => {
  const service = await db.service.findMany({
    where: { type: 'subservice' }
  })
  const serviceNames = service.map(el => el.id)
  return serviceNames
}

export const getcars = async () => {
  const car = await db.car.findMany({})
  const cars = car.map(el => el.name)
  return cars
}
export const getusers = async () => {
  const user = await db.user.findMany({})
  const users = user.map(el => el.email)
  return users
}

export const fakeUsers = async count => {
  const role = ['user', 'admin', 'provider']
  for (let i = 0; i < count; i++) {
    const image = {
      name: fakerAR.name.fullName(),
      mobile: faker.phone.number(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.number.int({ min: 10, max: 100 }).toString(), // 5
      isBlocked: faker.datatype.boolean(),
      role: faker.helpers.arrayElements(role, { min: 1, max: 1 })[0]
    }
    await db.user.create({ data: image })
  }
}
