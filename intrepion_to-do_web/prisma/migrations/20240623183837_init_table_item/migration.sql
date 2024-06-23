-- CreateTable
CREATE TABLE "Item" (
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
