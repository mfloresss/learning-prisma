-- DropForeignKey
ALTER TABLE `Pet` DROP FOREIGN KEY `Pet_personId_fkey`;

-- AlterTable
ALTER TABLE `Pet` MODIFY `personId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Pet` ADD CONSTRAINT `Pet_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `Person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
