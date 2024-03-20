/*
  Warnings:

  - You are about to drop the column `image` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email_verified` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `account` DROP FOREIGN KEY `Account_user_id_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `image`,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `email_verified` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `account`;
