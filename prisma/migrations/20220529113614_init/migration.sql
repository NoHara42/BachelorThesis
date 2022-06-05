/*
  Warnings:

  - You are about to drop the column `Row` on the `Occurrence` table. All the data in the column will be lost.
  - The `Column` column on the `Occurrence` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Occurrence" DROP COLUMN "Row",
ADD COLUMN     "Spalte" INTEGER,
DROP COLUMN "Column",
ADD COLUMN     "Column" INTEGER;
