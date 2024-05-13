'use server'
import db from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { Slug } from '@/lib/slug'
import { faker } from '@faker-js/faker'
import { fakerAR } from '@faker-js/faker'
const providerBranch = async (id, branchCount) => {
  for (let i = 0; i < branchCount; i++) {
    const image = {
      providerid: id, // Ensure this matches your database field name
      image: faker.image.avatar(),
      lat: faker.location.latitude({ max: 10, min: -10, precision: 5 }),
      lan: faker.location.longitude({ max: 10, min: -10, precision: 5 }),
      branchName: fakerAR.name.fullName(),
      sat: '9:00 am To 12:00 pm',
      sun: '9:00 am To 12:00 pm',
      mon: '9:00 am To 12:00 pm',
      tue: '9:00 am To 12:00 pm',
      wed: '9:00 am To 12:00 pm',
      thu: '9:00 am To 12:00 pm',
      fri: '9:00 am To 12:00 pm',
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
      // serviceid: serviceid[i].id,
      // serviceName: serviceid[i].service,
      serviceid: faker.helpers.arrayElement(serviceid, { min: 2, max: 10 }),
      //   min: 2,
      //   max: 10
      // }),
      likeCounter: faker.number.int({ max: 100 }),
      dislikeCounter: faker.number.int({ max: 100 }),
      commentCounter: faker.number.int({ max: 100 })
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

// const serveicGnerate = async id => {
//   const numberOfImages = faker.number.int({ min: 2, max: 10 })
//   for (let i = 0; i < numberOfImages; i++) {
//     const service = {
//       logo: faker.image.avatar(),
//       providerid: id, // Ensure this matches your database field name
//       service: fakerAR.helpers.arrayElement(['برمجة', 'كهرباء', 'ميكانيكا']),
//       detail: fakerAR.lorem.paragraph({ min: 3, max: 7 }),
//       userid: 'khalidnadish'
//     }
//     await db.providerService.create({ data: service })
//   }
//   return
// }

const commentGnerate = async (id, user) => {
  const service = await db.providerService.findMany({
    where: { providerid: id }
  })

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

const dataSchema = async (counter, citits, service, Extraservice, cars) => {
  const typeOfType = ['c', 'w', 'h']
  let provideName = fakerAR.name.fullName()

  let providerSlug = Slug(provideName)
  const provider = {
    providerName: provideName,
    slug: providerSlug,
    coverImage: fakerAR.image.avatar(),
    email: faker.internet.exampleEmail({ firstName: 'Jeanne' }),
    mobile: faker.phone.number(),
    logo: fakerAR.image.avatar(),
    carType: faker.helpers.arrayElements(cars, { min: 5, max: 20 }),
    starCount: faker.number.int({ max: 100 }), // 42
    commentCount: faker.number.int({ max: 100 }), // 42,
    likeCount: faker.number.int({ max: 100 }), // 42,
    disLikeCount: faker.number.int({ max: 100 }), // 42,

    favCount: faker.number.int({ max: 100 }), // 42,
    shareCount: faker.number.int({ max: 100 }), // 42,

    branchCount: faker.number.int({ min: 1, max: 10 }), // 42,
    service: faker.helpers.arrayElements(service, { min: 2, max: 5 }),
    extarService: faker.helpers.arrayElements(Extraservice, { min: 2, max: 8 }),
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

export const newProviderData = async (
  length,
  citits,
  service,
  Extraservice,
  cars
) => {
  const provider = []

  // Create an array of promises for each iteration
  const promises = Array.from({ length: length }).map(async (_, index) => {
    const counter = index + 1
    // use the schema to create a new data
    const newData = await dataSchema(
      counter,
      citits,
      service,
      Extraservice,
      cars
    )
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
  const providers = await newProviderData(
    count,
    citits,
    service,
    extraService,
    cars
  )

  await genetaeUsers(count)
  providers?.map(async pro => {
    const rec = await db.provider.create({ data: pro })
    await generateProviderAsUser(pro, rec.id)
    await sliderImage(rec.id)
    await providerBranch(rec.id, rec.branchCount)
    await commentGnerate(rec.id, users)
    await serviceProvierGnerate(rec.id, extraService)
    await rateGnerate(rec.id)
    // await updaterServiceName()
    // await serveicGnerate(rec.id)
  })
}

export const updaterServiceName = async () => {
  const service = await db.providerService.findMany({})

  service.map(async updater => {
    const serviceName = await db.service.findFirst({
      where: { id: updater.serviceid }
    })
    await db.providerService.update({
      where: { id: updater.id },
      data: { serviceName: serviceName.service }
    })
  })

  return
}

export const getAllCitis = async () => {
  const cities = await db.city.findMany()
  const cityNames = cities.map(city => city.city)
  return cityNames
}

export const getservice = async () => {
  const service = await db.service.findMany({ where: { type: 'department' } })
  const serviceNames = service.map(el => el.id)
  return serviceNames
}

export const getExtraservice = async () => {
  const service = await db.service.findMany({
    where: { type: 'subservice' }
  })
  const serviceNames = service.map(el => el.id)
  return serviceNames
}

// export const getExtraservice = async () => {
//   const services = await db.service.findMany({
//     where: { type: 'subservice' }
//   })

//   const serviceInfo = services.map(({ id, service }) => ({ id, service }))
//   return serviceInfo
// }

export const getcars = async () => {
  const car = await db.car.findMany({})
  const cars = car.map(el => el.id)
  return cars
}
export const getusers = async () => {
  const user = await db.user.findMany({})
  const users = user.map(el => el.email)
  return users
}

export const deleteBlock = async () => {
  try {
    await Promise.all([
      db.provider.deleteMany(),
      db.image.deleteMany(),
      db.providerBranch.deleteMany(),
      db.providerService.deleteMany(),
      // db.service.deleteMany(),
      db.comment.deleteMany(),
      db.user.deleteMany(),
      db.userRating.deleteMany()
    ])
  } catch (error) {
    console.error('Error deleting records:', error)
  }
}

export const fakeMailing = async () => {
  const users = await getusers()

  for (let i = 0; i < 50; i++) {
    const service = {
      subject: fakerAR.lorem.sentence({ min: 1, max: 3 }),
      msg: fakerAR.lorem.sentence({ min: 3, max: 5 }),
      from: faker.helpers.arrayElement(users),
      to: faker.helpers.arrayElement(users)
    }
    await db.inbox.create({ data: service })
  }

  console.log(users)
}

const rateGnerate = async id => {
  const users = await db.user.findMany({})
  const userIds = users.map(user => user.id)
  const numberOfRate = faker.number.int({ min: 10, max: 100 })

  for (let i = 0; i < numberOfRate; i++) {
    const rate = {
      rate: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
      comment: fakerAR.lorem.sentence({ min: 3, max: 5 }),
      providerId: id,
      userId: faker.helpers.arrayElement(userIds)
    }

    await db.userRating.create({ data: rate })
  }

  return
}

const generateProviderAsUser = async (provider, id) => {
  const providerUser = await db.user.create({
    data: {
      name: provider.providerName,
      email: provider.email,
      image: provider.logo,
      password: bcrypt.hashSync('0000', 8),
      isVerified: true,
      VerifiedToken: '0000',
      role: 'provider',
      pageId: id
    }
  })

  return
}

export const genetaeUsers = async count => {
  for (let index = 0; index < count; index++) {
    await db.user.create({
      data: {
        name: fakerAR.name.fullName(),
        // mobile: faker.phone.number(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        password: bcrypt.hashSync('0000', 8),
        isVerified: true,
        role: 'user'
      }
    })
  }
  return
}
