"use server"
import db from "@/lib/prisma";
import { DBgenerateFakeImage, DbgenerateFakeDatas } from "./fakeSchema";
import { faker } from '@faker-js/faker'
import { fakerAR } from '@faker-js/faker'


const DBgenerateFakeImage1 = async (id) => {
    const numberOfImages = faker.number.int({ min: 2, max: 10 })
    for (let i = 0; i < numberOfImages; i++) {
      const image = {
        image: faker.image.avatar(),
        providerid: id, // Ensure this matches your database field name
        type: 'slider'
      }
      await db.image.create({ data: image })
    }
  return
}

export const  createBlock= async ()=>{
    const providers= await  DbgenerateFakeDatas(50)
    providers?.map(async (pro)=>{
      const rec=await db.provider.create({data:pro})
      await DBgenerateFakeImage1(rec.id)
      await DBgenerateFakeservice(rec.id)
      await DBgenerateComments(rec.id)
    })
    
  }
  


const DBgenerateFakeservice = async (id) => {
    const numberOfImages = faker.number.int({ min: 2, max: 10 })
    for (let i = 0; i < numberOfImages; i++) {
      const service = {
        image: faker.image.avatar(),
        providerid: id, // Ensure this matches your database field name
        service:  fakerAR.helpers.arrayElement(['برمجة', 'كهرباء', 'ميكانيكا']),
        detail:  fakerAR.lorem.paragraph({ min:3, max: 7 }),
      }
      await db.service.create({ data: service })
    }
  return
}
 


const DBgenerateComments = async (id) => {
  const numberOfImages = faker.number.int({ min: 2, max: 10 })
  for (let i = 0; i < numberOfImages; i++) {
    const service = {
      providerid: id,
      // comment:fakerAR.lorem.paragraph({ min:3, max: 7 }),
      comment:fakerAR.lorem.sentence({ min: 3, max: 5 }) ,
      commentType: fakerAR.helpers.arrayElement([
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
      user:fakerAR.person.firstName() ,
      username: fakerAR.person.firstName() ,
      avatar:  faker.image.avatar(),// Ensure this matches your database field name
    }
    await db.comment.create({ data: service })
  }
return
}


 







export const deleteBlock = async () => {
  try {
    await Promise.all([
      db.provider.deleteMany(),
      db.image.deleteMany(),
      db.service.deleteMany(),
      db.comment.deleteMany()
    ]);
    console.log("Deletion successful");
  } catch (error) {
    console.error("Error deleting records:", error);
  }
}