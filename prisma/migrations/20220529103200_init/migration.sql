/*
  Warnings:

  - The primary key for the `Occurrence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Occurrence` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Occurrence" DROP CONSTRAINT "Occurrence_pkey",
ADD COLUMN     "Column1" TEXT,
ADD COLUMN     "Row1" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ALTER COLUMN "OccId" DROP NOT NULL,
ALTER COLUMN "Term" DROP NOT NULL,
ALTER COLUMN "Scientific_Name" DROP NOT NULL,
ALTER COLUMN "File" DROP NOT NULL,
ALTER COLUMN "FrameId" DROP NOT NULL,
ALTER COLUMN "Sentence" DROP NOT NULL,
ADD CONSTRAINT "Occurrence_pkey" PRIMARY KEY ("id");
