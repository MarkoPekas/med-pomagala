/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `Returns` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Returns_orderId_unique" ON "Returns"("orderId");