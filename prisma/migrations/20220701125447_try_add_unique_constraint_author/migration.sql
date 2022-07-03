/*
  Warnings:

  - A unique constraint covering the columns `[works,author]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Author_works_author_key" ON "Author"("works", "author");
