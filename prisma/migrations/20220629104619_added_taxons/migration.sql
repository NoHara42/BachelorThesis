-- CreateTable
CREATE TABLE "Taxon" (
    "occId" TEXT NOT NULL,
    "term" TEXT,
    "scientificName" TEXT,

    CONSTRAINT "Taxon_pkey" PRIMARY KEY ("occId")
);
