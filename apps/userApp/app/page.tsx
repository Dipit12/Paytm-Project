import {PrismaClient} from '@prisma/client'

const client = new PrismaClient()
export default function Home() {
  return (
    <h1 className="text-red-300">
      Hello world!
    </h1>
  )
}