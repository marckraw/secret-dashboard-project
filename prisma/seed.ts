import {prisma} from "../lib/db/prisma";

async function main() {
  try {
    await prisma.testProjectModel.createMany({
      data: [
        {
          id: 'price_1KrI4XLaAoc5YphrhlUg8SWo',
          projectName: 'Test Foundations plan Monthly'
        },
        {
          id: 'price_1KrI4iLaAoc5YphrgbJo5bcx',
          projectName: 'Test Foundations plan Annual'
        },
      ],
      skipDuplicates: true
    })
  } catch (e) {
    console.log(e)
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
