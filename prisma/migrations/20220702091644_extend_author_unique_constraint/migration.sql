/*
  Warnings:

  - You are about to drop the column `authorX` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the column `authorY` on the `Work` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[works,author,authorX,authorY]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Author_works_author_key";

-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "authorX" TEXT,
ADD COLUMN     "authorY" TEXT;

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "authorX",
DROP COLUMN "authorY";

-- CreateIndex
CREATE UNIQUE INDEX "Author_works_author_authorX_authorY_key" ON "Author"("works", "author", "authorX", "authorY");
