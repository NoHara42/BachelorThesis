/*
  Warnings:

  - A unique constraint covering the columns `[surname,authorX,authorY]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Made the column `surname` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Made the column `authorX` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Made the column `authorY` on table `Author` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Author_works_author_authorX_authorY_key";

-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "surname" SET NOT NULL,
ALTER COLUMN "authorX" SET NOT NULL,
ALTER COLUMN "authorY" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Author_surname_authorX_authorY_key" ON "Author"("surname", "authorX", "authorY");
