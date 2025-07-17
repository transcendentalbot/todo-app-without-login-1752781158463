model Todo {
  id        Int      @id @default(autoincrement())
  title     String
  description String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}