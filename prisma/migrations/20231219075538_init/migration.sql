/*
  Warnings:

  - The primary key for the `auser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `auser` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.

*/
-- AlterTable
ALTER TABLE `auser` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `lastname` VARCHAR(255) NOT NULL,
    MODIFY `StudentID` VARCHAR(255) NOT NULL,
    MODIFY `Gender` VARCHAR(255) NOT NULL,
    MODIFY `Kurso` VARCHAR(255) NOT NULL,
    MODIFY `username` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `auth` VARCHAR(255) NULL,
    MODIFY `campus` VARCHAR(255) NULL,
    MODIFY `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `last_login` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `collection_mgr` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `code` VARCHAR(255) NOT NULL,
    `campus` VARCHAR(255) NULL,
    `description` VARCHAR(500) NULL,
    `glink` VARCHAR(255) NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `community_mgr` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `code` VARCHAR(100) NOT NULL,
    `campus` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `glink` VARCHAR(255) NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `filestorage` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `filename` VARCHAR(255) NOT NULL,
    `data` BLOB NOT NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `metadata` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(755) NOT NULL,
    `author` VARCHAR(555) NOT NULL,
    `taon` VARCHAR(255) NOT NULL,
    `call_number` VARCHAR(255) NULL,
    `barcode` VARCHAR(255) NOT NULL,
    `abstract` TEXT NULL,
    `kurso` VARCHAR(300) NOT NULL,
    `filename` VARCHAR(255) NULL,
    `subjek` VARCHAR(255) NOT NULL,
    `curator` VARCHAR(255) NULL,
    `updateby` TIMESTAMP(0) NULL,
    `col` VARCHAR(255) NULL,
    `com` VARCHAR(255) NULL,
    `campus` VARCHAR(255) NULL,
    `raw_data` TEXT NOT NULL,
    `record_status` VARCHAR(255) NULL,
    `glink` VARCHAR(255) NULL,
    `glinkP` VARCHAR(255) NULL,
    `glinkView` VARCHAR(255) NULL,
    `embargo` VARCHAR(20) NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `my_request` (
    `rid` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `m_barcode` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expiration` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `campus` VARCHAR(255) NULL,

    PRIMARY KEY (`rid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mydocuments` (
    `id_doc` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `metadata_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `a_right` VARCHAR(255) NOT NULL,
    `campus` VARCHAR(255) NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expiration` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_doc`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistics_login` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `campus` VARCHAR(255) NOT NULL,
    `u_name` VARCHAR(255) NOT NULL,
    `U_group` VARCHAR(255) NULL,
    `gender` VARCHAR(255) NULL,
    `auth` VARCHAR(255) NULL,
    `bulan` VARCHAR(255) NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistics_m` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `bk_ID` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `author` VARCHAR(255) NULL,
    `username` VARCHAR(255) NULL,
    `campus` VARCHAR(255) NULL,
    `u_name` VARCHAR(255) NULL,
    `U_group` VARCHAR(255) NULL,
    `gender` VARCHAR(255) NULL,
    `auth` VARCHAR(255) NULL,
    `bulan` VARCHAR(255) NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistics_mold` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `bk_ID` VARCHAR(255) NOT NULL,
    `u_name` VARCHAR(255) NOT NULL,
    `campus` VARCHAR(255) NULL,
    `U_group` VARCHAR(255) NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcommunity_mgr` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent` VARCHAR(255) NOT NULL,
    `sibling` VARCHAR(255) NULL,
    `name` VARCHAR(255) NOT NULL,
    `code` VARCHAR(255) NOT NULL,
    `campus` VARCHAR(255) NULL,
    `description` VARCHAR(500) NULL,
    `glink` VARCHAR(255) NULL,
    `reg_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
