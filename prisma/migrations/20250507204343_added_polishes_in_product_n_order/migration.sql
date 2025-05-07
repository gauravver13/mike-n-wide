/*
  Warnings:

  - Added the required column `color` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "discount" TEXT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "discountAmount" INTEGER;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "returns" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "discount" INTEGER NOT NULL,
ADD COLUMN     "material" TEXT,
ADD COLUMN     "size" TEXT NOT NULL;
