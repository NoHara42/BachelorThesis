/*
  Warnings:

  - You are about to drop the column `Column1` on the `Occurrence` table. All the data in the column will be lost.
  - You are about to drop the column `Row1` on the `Occurrence` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Occurrence" DROP COLUMN "Column1",
DROP COLUMN "Row1",
ADD COLUMN     "Column" TEXT,
ADD COLUMN     "Row" TEXT;
