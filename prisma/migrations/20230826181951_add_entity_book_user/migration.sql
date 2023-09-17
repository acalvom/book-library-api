/*
  Warnings:

  - You are about to drop the column `isRead` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "isRead";

-- CreateTable
CREATE TABLE "BookUser" (
    "bookIsbn" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "mark" INTEGER,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookUser_pkey" PRIMARY KEY ("bookIsbn","userEmail")
);

-- AddForeignKey
ALTER TABLE "BookUser" ADD CONSTRAINT "BookUser_bookIsbn_fkey" FOREIGN KEY ("bookIsbn") REFERENCES "Book"("isbn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookUser" ADD CONSTRAINT "BookUser_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
