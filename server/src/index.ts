import { PrismaClient } from '@prisma/client'

import express from 'express'

const prisma = new PrismaClient()
const app = express()
async function main() {
    
}
  
  main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())
  
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({"message":"hello from watchly!"})
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)



