/*
  Warnings:

  - You are about to drop the column `identifier_token` on the `verificationtoken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identifier]` on the table `VerificationToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identifier,token]` on the table `VerificationToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identifier` to the `VerificationToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `VerificationToken_identifier_token_key` ON `verificationtoken`;

-- AlterTable
ALTER TABLE `verificationtoken` DROP COLUMN `identifier_token`,
    ADD COLUMN `identifier` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `VerificationToken_identifier_key` ON `VerificationToken`(`identifier`);

-- CreateIndex
CREATE UNIQUE INDEX `VerificationToken_identifier_token_key` ON `VerificationToken`(`identifier`, `token`);
