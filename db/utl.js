"use server"
import db from "@/lib/prisma";
import { DBgenerateFakeImage, DbgenerateFakeDatas } from "./fake";
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
      console.log(image.image)
      await db.image.create({ data: image })
    }
  return
}

export const  createBlock= async ()=>{
    const providers= await  DbgenerateFakeDatas(50)
    console.log(providers)
    providers?.map(async (pro)=>{
      const rec=await db.provider.create({data:pro})
      await DBgenerateFakeImage1(rec.id)
      await DBgenerateFakeservice(rec.id)
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
      console.log(service.image)
      await db.service.create({ data: service })
    }
  return
}
 


export const deleteBlock = async () => {
  console.log("starting delete block")
  try {
    await Promise.all([
      db.provider.deleteMany(),
      db.image.deleteMany(),
      db.service.deleteMany()
    ]);
    console.log("Deletion successful");
  } catch (error) {
    console.error("Error deleting records:", error);
  }
}