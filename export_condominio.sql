-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: condominio
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access_token`
--

DROP TABLE IF EXISTS `access_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `access_token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access_token`
--

LOCK TABLES `access_token` WRITE;
/*!40000 ALTER TABLE `access_token` DISABLE KEYS */;
INSERT INTO `access_token` VALUES (1,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTU5NDc5NTEyMX0.z8Xq36YjEDa6A2ESmt4-QcURN62cv2bqAc-LnWVD2R8',NULL,'2020-07-15 12:08:41',NULL,NULL,NULL),(2,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYwNjkwOTU0NX0.ObhJwjh6vL_OrUDjERffmlXRW_n9FppqmdkT3W9qbz8',NULL,'2020-12-02 17:15:45',NULL,NULL,NULL),(3,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYwNjkyNTcxNn0.lPdPI9vfbR9Xq9t0ahrehMc57vrI9fAYuPgUUeI0qNI',NULL,'2020-12-02 21:45:16',NULL,NULL,NULL),(4,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYwNzAwMzAyMX0.Q69ghrOaEpU0I485631l2cfJpMhLlmvkEBeW-peBhh8',NULL,'2020-12-03 19:13:41',NULL,NULL,NULL),(5,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYwNzAwMzA0Nn0.yCbg18ZVgkLfnWgbtyHCnyOKBMe1NKUMCjJpCCHtdSU',NULL,'2020-12-03 19:14:06',NULL,NULL,NULL),(6,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYxNjQwNzIwNH0.X-DyFsljzLzu9qoeGQ8SCEDxFolH21ewiryLpqLC2eI',NULL,'2021-03-22 15:30:04',NULL,NULL,NULL),(7,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyMzI1MDY2Nn0.lgDsDm-j2KwxMLK51HPG0LtAHYGxaKfle0Rz-LCL4WY',NULL,'2021-06-09 20:27:46',NULL,NULL,NULL),(8,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyMzMyNDM4MX0.nw7xVxvxv_xmrqBNwd7fnGBrXCoetFwJOcgK1Y3DChM',NULL,'2021-06-10 16:56:21',NULL,NULL,NULL),(9,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyMzMyNzQ0NX0.duWpc_-Z8fFeyCI7kqoarMfv-7G0Xn-gW_hpz_qmfH8',NULL,'2021-06-10 17:47:25',NULL,NULL,NULL),(10,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyODY4OTYzN30.niiA3dwKCjSLEi7J754Ac-1Ipr1UIfVN632HOF55SG0',NULL,'2021-08-11 15:47:17',NULL,NULL,NULL),(11,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyODcwMDU4NX0.YW8MmN0rZZ-ebrmojZkGzVJobErZ43fp_m1Xjodj6Lo',NULL,'2021-08-11 18:49:45',NULL,NULL,NULL),(12,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyODcwMDYxNX0.Rj6sMxKf1DHyKCip5hcvj2d6wZAt9YOT3Y7b-y7cFcM',NULL,'2021-08-11 18:50:15',NULL,NULL,NULL),(13,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjI4NzAxNTQzfQ.P86KhconTvoV6CRssM5mRlkZutV3VaD_nvXFwIFsQIM',NULL,'2021-08-11 19:05:44',NULL,NULL,NULL),(14,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI4NzAzMjcwfQ.jJocNSmEns0a-HFw3mdRN1KJZsAU-B3qf41cgpR66Sc',NULL,'2021-08-11 19:34:30',NULL,NULL,NULL),(15,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyODgxMjc4MH0.kVBtnbkl6oxXe7qjkyvkBme9wTAUEWiwgg4CChWXNHw',NULL,'2021-08-13 01:59:40',NULL,NULL,NULL),(16,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyOTc5MDkxMH0.qhZc8i16VVVeQRljeDXCPeU5_V4cdxMN6_7ulUsDHdM',NULL,'2021-08-24 09:41:50',NULL,NULL,NULL),(17,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjI5NzkxODQzfQ.NTivPgKRqCufRbG_g2zxoIQ8fMi_aJnSFAFe-IunKKM',NULL,'2021-08-24 09:57:23',NULL,NULL,NULL),(18,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyOTgxMTM5M30.U8_tqCzp4og8iJOxnWqDCWiL0T3UxBPclCEaltJt61s',NULL,'2021-08-24 15:23:13',NULL,NULL,NULL),(19,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyOTgxMTQwOH0.hqUzNKwZc7jBekuoU01AhG66ymWkVi6qk0_2AhYjzZI',NULL,'2021-08-24 15:23:28',NULL,NULL,NULL),(20,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyOTgzMTE4M30.vB_Uo4sqfUDfgL5BzbQfXkG6oTlyoyERxIAHMgzF6cA',NULL,'2021-08-24 20:53:03',NULL,NULL,NULL),(21,49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTYyOTg5ODIxMX0.bwmIiSiTs-gwEfalu4O9k8_X8b2jGHNDIXrIwlfulvo',NULL,'2021-08-25 15:30:11',NULL,NULL,NULL);
/*!40000 ALTER TABLE `access_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `activity_id` int NOT NULL AUTO_INCREMENT,
  `activity_name` varchar(64) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  PRIMARY KEY (`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `first_name` varchar(32) DEFAULT NULL,
  `last_name` varchar(32) DEFAULT NULL,
  `company` varchar(32) DEFAULT NULL,
  `password` varchar(512) DEFAULT NULL,
  `address_1` varchar(128) DEFAULT NULL,
  `address_2` varchar(128) DEFAULT NULL,
  `postcode` varchar(10) DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `zone_id` int DEFAULT NULL,
  `city` varchar(128) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `address_type` int DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `phone_no` bigint DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  KEY `fk_customer_id_tbl_customer_customer_id` (`customer_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `fk_customer_id_tbl_customer_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,1,NULL,NULL,NULL,NULL,'dfgh','oiuy','111111',99,NULL,'lkjh','tamilnadu',1,NULL,NULL,NULL,NULL,NULL,'2020-07-15 13:47:41',NULL);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `answer_abuse_reason`
--

DROP TABLE IF EXISTS `answer_abuse_reason`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer_abuse_reason` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reason` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer_abuse_reason`
--

LOCK TABLES `answer_abuse_reason` WRITE;
/*!40000 ALTER TABLE `answer_abuse_reason` DISABLE KEYS */;
INSERT INTO `answer_abuse_reason` VALUES (1,'Inappropriate Content',1,NULL,'2020-04-20 16:09:07',NULL,'2020-04-20 16:09:07'),(2,'Illegal Content',1,NULL,'2020-04-20 16:09:07',NULL,'2020-04-20 16:09:07'),(3,'Wrong Content',1,NULL,'2020-04-20 16:09:35',NULL,'2020-04-20 16:09:35');
/*!40000 ALTER TABLE `answer_abuse_reason` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `answer_report_abuse`
--

DROP TABLE IF EXISTS `answer_report_abuse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer_report_abuse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `question_id` int DEFAULT NULL,
  `answer_id` int DEFAULT NULL,
  `reason_id` int DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_question_tbl_report_abuse` (`question_id`),
  KEY `fk_tbl_answer_tbl_report_abuse` (`answer_id`),
  KEY `fk_tbl_customer_tbl_report_abuse` (`customer_id`),
  CONSTRAINT `fk_tbl_answer_tbl_report_abuse` FOREIGN KEY (`answer_id`) REFERENCES `product_answer` (`answer_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_customer_tbl_report_abuse` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_question_tbl_report_abuse` FOREIGN KEY (`question_id`) REFERENCES `product_question` (`question_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer_report_abuse`
--

LOCK TABLES `answer_report_abuse` WRITE;
/*!40000 ALTER TABLE `answer_report_abuse` DISABLE KEYS */;
/*!40000 ALTER TABLE `answer_report_abuse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attribute`
--

DROP TABLE IF EXISTS `attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attribute` (
  `attribute_id` int NOT NULL AUTO_INCREMENT,
  `attribute_name` varchar(255) DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `group_id` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`attribute_id`),
  KEY `fk_tbl_attribute_group_Related_tbl_attribute` (`group_id`),
  CONSTRAINT `fk_tbl_attribute_group_Related_tbl_attribute` FOREIGN KEY (`group_id`) REFERENCES `attribute_group` (`group_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attribute`
--

LOCK TABLES `attribute` WRITE;
/*!40000 ALTER TABLE `attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attribute_group`
--

DROP TABLE IF EXISTS `attribute_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attribute_group` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `attribute_group_name` varchar(255) DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attribute_group`
--

LOCK TABLES `attribute_group` WRITE;
/*!40000 ALTER TABLE `attribute_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `attribute_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `audit_log`
--

DROP TABLE IF EXISTS `audit_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audit_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `request_url` varchar(255) DEFAULT NULL,
  `method` varchar(255) DEFAULT NULL,
  `object` text,
  `log_type` varchar(255) DEFAULT NULL,
  `description` text,
  `params` text,
  `browser_info` text,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_audit_log_user` (`user_id`),
  CONSTRAINT `fk_audit_log_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=213 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audit_log`
--

LOCK TABLES `audit_log` WRITE;
/*!40000 ALTER TABLE `audit_log` DISABLE KEYS */;
INSERT INTO `audit_log` VALUES (9,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 15:48:11','2021-08-11 15:48:11',NULL,NULL,'customer-group'),(10,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 15:52:22','2021-08-11 15:52:22',NULL,NULL,'customer-group'),(11,49,'Admin','/api/admin-vendor/add-vendor','POST',NULL,'response','Vendor has been created by Admin','{\"customerGroupId\":\"null\",\"firstName\":\"MARCO\",\"lastName\":\"ROSSI\",\"email\":\"marcorossi@gmai.com\",\"mobileNumber\":\"8373646473838\",\"password\":\"Caccarosa1!\",\"confirmPassword\":\"Caccarosa1!\",\"avatar\":\"\",\"companyName\":\"OVS\",\"companyLogo\":\"\",\"companyDescription\":\"\",\"companyAddress1\":\"Via Nazionale Appia 81\",\"companyAddress2\":\"\",\"companyCity\":\"curti\",\"companyCountryId\":\"105\",\"companyState\":\"caserta\",\"pincode\":\"81040\",\"companyWebsite\":\"\",\"mailStatus\":1,\"status\":\"1\",\"ApprovalFlag\":1,\"commission\":\"1\",\"customerId\":\"\",\"paymentInformation\":\"\",\"companyGstNumber\":\"\",\"companyCoverImage\":\"\"}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 18:21:32','2021-08-11 18:21:32',NULL,NULL,'admin-vendor'),(12,49,'Admin','/api/admin-vendor/Update-Vendor/3','PUT',NULL,'response','Vendor has been updated by Admin','{\"customerGroupId\":\"null\",\"firstName\":\"carlo\",\"lastName\":\"iodice\",\"mobileNumber\":\"343242424\",\"avatar\":\"\",\"companyName\":\"ZIO TOM\",\"companyLogo\":\"\",\"companyDescription\":\"\",\"companyAddress1\":\"\",\"companyAddress2\":\"\",\"companyCity\":\"\",\"companyCountryId\":\"105\",\"companyState\":\"\",\"pincode\":\"81040\",\"companyWebsite\":\"\",\"mailStatus\":1,\"status\":1,\"ApprovalFlag\":1,\"commission\":\"1\",\"customerId\":3,\"paymentInformation\":\"\",\"companyEmailId\":\"test@gmail.com\",\"companyCoverImage\":\"\",\"password\":\"\",\"confirmPassword\":\"\"}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 18:22:58','2021-08-11 18:22:58',NULL,NULL,'admin-vendor'),(13,49,'Admin','/api/admin-vendor/approve-vendor/2','PUT',NULL,'response','Vendor has been updated by Admin','{\"vendorId\":2,\"approvalFlag\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 18:23:01','2021-08-11 18:23:01',NULL,NULL,'admin-vendor'),(14,49,'Admin','/api/admin-vendor/approve-vendor/1','PUT',NULL,'response','Vendor has been updated by Admin','{\"vendorId\":1,\"approvalFlag\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 18:23:02','2021-08-11 18:23:02',NULL,NULL,'admin-vendor'),(15,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 18:38:56','2021-08-11 18:38:56',NULL,NULL,'customer-group'),(16,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 18:55:31','2021-08-11 18:55:31',NULL,NULL,'customer-group'),(17,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:05:18','2021-08-11 19:05:18',NULL,NULL,'customer-group'),(18,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=1','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:05:22','2021-08-11 19:05:22',NULL,NULL,'customer-group'),(19,49,'Admin','/api/customer/update-customer/3','PUT',NULL,'response','Customer has been updated by Admin','{\"customerGroupId\":\"1\",\"username\":\"carlo\",\"email\":\"cacca@gmail.com\",\"mobileNumber\":\"343242424\",\"password\":\"\",\"confirmPassword\":\"\",\"avatar\":\"\",\"newsletter\":\"\",\"mailStatus\":1,\"status\":1,\"customerId\":\"3\"}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:05:34','2021-08-11 19:05:34',NULL,NULL,'customer'),(20,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:05:34','2021-08-11 19:05:34',NULL,NULL,'customer-group'),(21,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:13:36','2021-08-11 19:13:36',NULL,NULL,'customer-group'),(22,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:36:22','2021-08-11 19:36:22',NULL,NULL,'admin-vendor-product'),(23,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:36:22','2021-08-11 19:36:22',NULL,NULL,'admin-vendor-product'),(24,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:36:22','2021-08-11 19:36:22',NULL,NULL,'admin-vendor-product'),(25,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:36:27','2021-08-11 19:36:27',NULL,NULL,'admin-vendor-product'),(26,49,'Admin','/api/admin-vendor-product/approve-product/558','PUT',NULL,'response','Vendor Product Aprroval has been updated by Admin','{\"productId\":558,\"approvalFlag\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:36:27','2021-08-11 19:36:27',NULL,NULL,'admin-vendor-product'),(27,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:36:27','2021-08-11 19:36:27',NULL,NULL,'admin-vendor-product'),(28,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:36:27','2021-08-11 19:36:27',NULL,NULL,'admin-vendor-product'),(29,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=&limit=&name=&status=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:36:50','2021-08-11 19:36:50',NULL,NULL,'admin-vendor-product'),(30,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:37:04','2021-08-11 19:37:04',NULL,NULL,'admin-vendor-product'),(31,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:37:04','2021-08-11 19:37:04',NULL,NULL,'admin-vendor-product'),(32,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:37:12','2021-08-11 19:37:12',NULL,NULL,'customer-group'),(33,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:37:49','2021-08-11 19:37:49',NULL,NULL,'customer-group'),(34,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=true&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:37:49','2021-08-11 19:37:49',NULL,NULL,'customer-group'),(35,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:37:50','2021-08-11 19:37:50',NULL,NULL,'customer-group'),(36,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:37:52','2021-08-11 19:37:52',NULL,NULL,'customer-group'),(37,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=true&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:37:53','2021-08-11 19:37:53',NULL,NULL,'customer-group'),(38,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:37:53','2021-08-11 19:37:53',NULL,NULL,'customer-group'),(39,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 19:38:52','2021-08-11 19:38:52',NULL,NULL,'customer-group'),(40,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=2&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:01:26','2021-08-11 20:01:26',NULL,NULL,'admin-vendor-product'),(41,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=2','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:01:26','2021-08-11 20:01:26',NULL,NULL,'admin-vendor-product'),(42,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:02:31','2021-08-11 20:02:31',NULL,NULL,'customer-group'),(43,49,'Admin','/api/admin-vendor/Update-Vendor/2','PUT',NULL,'response','Vendor has been updated by Admin','{\"customerGroupId\":\"null\",\"firstName\":\"MARCO\",\"lastName\":\"ROSSI\",\"mobileNumber\":\"8373646473838\",\"avatar\":\"\",\"companyName\":\"TOYS\",\"companyLogo\":\"\",\"companyDescription\":\"\",\"companyAddress1\":\"Via Nazionale Appia 81\",\"companyAddress2\":\"\",\"companyCity\":\"curti\",\"companyCountryId\":105,\"companyState\":\"caserta\",\"pincode\":81040,\"companyWebsite\":\"\",\"mailStatus\":1,\"status\":1,\"ApprovalFlag\":1,\"commission\":1,\"customerId\":2,\"paymentInformation\":\"\",\"companyEmailId\":\"test@gmail.com\",\"companyCoverImage\":\"\",\"password\":\"\",\"confirmPassword\":\"\"}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:10:33','2021-08-11 20:10:33',NULL,NULL,'admin-vendor'),(44,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:13:32','2021-08-11 20:13:32',NULL,NULL,'admin-vendor-product'),(45,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:13:32','2021-08-11 20:13:32',NULL,NULL,'admin-vendor-product'),(46,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:13:33','2021-08-11 20:13:33',NULL,NULL,'admin-vendor-product'),(47,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:18:17','2021-08-11 20:18:17',NULL,NULL,'admin-vendor-product'),(48,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:18:17','2021-08-11 20:18:17',NULL,NULL,'admin-vendor-product'),(49,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 20:18:17','2021-08-11 20:18:17',NULL,NULL,'admin-vendor-product'),(50,49,'Admin','/api/product/update-todayDeals/555','PUT',NULL,'response','Deals has been updated by Admin','{\"productId\":555,\"todayDeals\":0}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 23:25:35','2021-08-11 23:25:35',NULL,NULL,'product'),(51,49,'Admin','/api/product/update-todayDeals/540','PUT',NULL,'response','Deals has been updated by Admin','{\"productId\":540,\"todayDeals\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 23:25:38','2021-08-11 23:25:38',NULL,NULL,'product'),(52,49,'Admin','/api/product/update-todayDeals/542','PUT',NULL,'response','Deals has been updated by Admin','{\"productId\":542,\"todayDeals\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 23:50:40','2021-08-11 23:50:40',NULL,NULL,'product'),(53,49,'Admin','/api/product/update-todayDeals/547','PUT',NULL,'response','Deals has been updated by Admin','{\"productId\":547,\"todayDeals\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 23:50:41','2021-08-11 23:50:41',NULL,NULL,'product'),(54,49,'Admin','/api/product/update-todayDeals/550','PUT',NULL,'response','Deals has been updated by Admin','{\"productId\":550,\"todayDeals\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 23:50:42','2021-08-11 23:50:42',NULL,NULL,'product'),(55,49,'Admin','/api/product/update-todayDeals/552','PUT',NULL,'response','Deals has been updated by Admin','{\"productId\":552,\"todayDeals\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 23:50:43','2021-08-11 23:50:43',NULL,NULL,'product'),(56,49,'Admin','/api/product/update-todayDeals/538','PUT',NULL,'response','Deals has been updated by Admin','{\"productId\":538,\"todayDeals\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 23:50:46','2021-08-11 23:50:46',NULL,NULL,'product'),(57,49,'Admin','/api/product/update-todayDeals/541','PUT',NULL,'response','Deals has been updated by Admin','{\"productId\":541,\"todayDeals\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-11 23:50:48','2021-08-11 23:50:48',NULL,NULL,'product'),(58,49,'Admin','/api/role/create-role','POST',NULL,'response','Role has been created by Admin','{\"name\":\"dd\",\"status\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-12 16:18:12','2021-08-12 16:18:12',NULL,NULL,'role'),(59,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-13 01:59:52','2021-08-13 01:59:52',NULL,NULL,'customer-group'),(60,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-13 16:28:28','2021-08-13 16:28:28',NULL,NULL,'customer-group'),(61,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:08:28','2021-08-20 15:08:28',NULL,NULL,'customer-group'),(62,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:11:00','2021-08-20 15:11:00',NULL,NULL,'customer-group'),(63,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:12:06','2021-08-20 15:12:06',NULL,NULL,'customer-group'),(64,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:12:17','2021-08-20 15:12:17',NULL,NULL,'customer-group'),(65,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:12:29','2021-08-20 15:12:29',NULL,NULL,'customer-group'),(66,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:15:51','2021-08-20 15:15:51',NULL,NULL,'customer-group'),(67,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:16:21','2021-08-20 15:16:21',NULL,NULL,'customer-group'),(68,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:19:32','2021-08-20 15:19:32',NULL,NULL,'customer-group'),(69,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:20:07','2021-08-20 15:20:07',NULL,NULL,'customer-group'),(70,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:22:56','2021-08-20 15:22:56',NULL,NULL,'customer-group'),(71,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:26:10','2021-08-20 15:26:10',NULL,NULL,'customer-group'),(72,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:26:18','2021-08-20 15:26:18',NULL,NULL,'customer-group'),(73,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:27:19','2021-08-20 15:27:19',NULL,NULL,'customer-group'),(74,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:33:41','2021-08-20 15:33:41',NULL,NULL,'customer-group'),(75,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:34:43','2021-08-20 15:34:43',NULL,NULL,'customer-group'),(76,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 15:43:35','2021-08-20 15:43:35',NULL,NULL,'customer-group'),(77,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=1','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:21:54','2021-08-20 16:21:54',NULL,NULL,'customer-group'),(78,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:22:05','2021-08-20 16:22:05',NULL,NULL,'customer-group'),(79,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:22:30','2021-08-20 16:22:30',NULL,NULL,'customer-group'),(80,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:22:43','2021-08-20 16:22:43',NULL,NULL,'admin-vendor-product'),(81,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:22:43','2021-08-20 16:22:43',NULL,NULL,'admin-vendor-product'),(82,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:22:43','2021-08-20 16:22:43',NULL,NULL,'admin-vendor-product'),(83,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:23:24','2021-08-20 16:23:24',NULL,NULL,'customer-group'),(84,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:26:27','2021-08-20 16:26:27',NULL,NULL,'admin-vendor-product'),(85,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:26:27','2021-08-20 16:26:27',NULL,NULL,'admin-vendor-product'),(86,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:26:27','2021-08-20 16:26:27',NULL,NULL,'admin-vendor-product'),(87,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=5&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:26:34','2021-08-20 16:26:34',NULL,NULL,'admin-vendor-product'),(88,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=5','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:26:34','2021-08-20 16:26:34',NULL,NULL,'admin-vendor-product'),(89,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:26:36','2021-08-20 16:26:36',NULL,NULL,'admin-vendor-product'),(90,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:26:36','2021-08-20 16:26:36',NULL,NULL,'admin-vendor-product'),(91,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-20 16:26:36','2021-08-20 16:26:36',NULL,NULL,'admin-vendor-product'),(92,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:42:12','2021-08-24 09:42:12',NULL,NULL,'customer-group'),(93,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=1','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:42:14','2021-08-24 09:42:14',NULL,NULL,'customer-group'),(94,49,'Admin','/api/customer/add-customer','POST',NULL,'response','Customer has been created by Admin','{\"customerGroupId\":\"1\",\"username\":\"Carlo\",\"email\":\"casddas@gmail.com\",\"mobileNumber\":\"23242423\",\"password\":\"Caccarosa1!!\",\"confirmPassword\":\"Caccarosa1!!\",\"avatar\":\"\",\"newsletter\":\"\",\"mailStatus\":1,\"status\":\"1\"}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:43:24','2021-08-24 09:43:24',NULL,NULL,'customer'),(95,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:43:25','2021-08-24 09:43:25',NULL,NULL,'customer-group'),(96,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=1','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:43:31','2021-08-24 09:43:31',NULL,NULL,'customer-group'),(97,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:43:33','2021-08-24 09:43:33',NULL,NULL,'customer-group'),(98,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=1','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:43:34','2021-08-24 09:43:34',NULL,NULL,'customer-group'),(99,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:43:37','2021-08-24 09:43:37',NULL,NULL,'customer-group'),(100,49,'Admin','/api/admin-vendor/add-vendor','POST',NULL,'response','Vendor has been created by Admin','{\"customerGroupId\":\"null\",\"firstName\":\"Carlo\",\"lastName\":\"iodice\",\"email\":\"carloiodice9@gmail.com\",\"mobileNumber\":\"334242\",\"password\":\"Caccarosa1!!\",\"confirmPassword\":\"Caccarosa1!!\",\"avatar\":\"\",\"companyName\":\"cscdscs\",\"companyLogo\":\"\",\"companyDescription\":\"\",\"companyAddress1\":\"cdscdsc\",\"companyAddress2\":\"cdscds\",\"companyCity\":\"cdscs\",\"companyCountryId\":99,\"companyState\":\"kerala\",\"pincode\":\"3233\",\"companyWebsite\":\"\",\"mailStatus\":1,\"status\":\"1\",\"ApprovalFlag\":1,\"commission\":\"2\",\"customerId\":\"\",\"paymentInformation\":\"\",\"companyGstNumber\":\"312\",\"companyCoverImage\":\"\"}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:45:51','2021-08-24 09:45:51',NULL,NULL,'admin-vendor'),(101,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:07','2021-08-24 09:46:07',NULL,NULL,'admin-vendor-product'),(102,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:07','2021-08-24 09:46:07',NULL,NULL,'admin-vendor-product'),(103,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=5&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:12','2021-08-24 09:46:12',NULL,NULL,'admin-vendor-product'),(104,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=5','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:12','2021-08-24 09:46:12',NULL,NULL,'admin-vendor-product'),(105,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:18','2021-08-24 09:46:18',NULL,NULL,'admin-vendor-product'),(106,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:18','2021-08-24 09:46:18',NULL,NULL,'admin-vendor-product'),(107,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:18','2021-08-24 09:46:18',NULL,NULL,'admin-vendor-product'),(108,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=1&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:30','2021-08-24 09:46:30',NULL,NULL,'admin-vendor-product'),(109,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:30','2021-08-24 09:46:30',NULL,NULL,'admin-vendor-product'),(110,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 09:46:39','2021-08-24 09:46:39',NULL,NULL,'customer-group'),(111,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:08:24','2021-08-24 10:08:24',NULL,NULL,'customer-group'),(112,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=true&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:08:24','2021-08-24 10:08:24',NULL,NULL,'customer-group'),(113,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:08:24','2021-08-24 10:08:24',NULL,NULL,'customer-group'),(114,49,'Admin','/api/admin-vendor/approve-vendor/6','PUT',NULL,'response','Vendor has been updated by Admin','{\"vendorId\":6,\"approvalFlag\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:08:37','2021-08-24 10:08:37',NULL,NULL,'admin-vendor'),(115,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:08:43','2021-08-24 10:08:43',NULL,NULL,'admin-vendor-product'),(116,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:08:43','2021-08-24 10:08:43',NULL,NULL,'admin-vendor-product'),(117,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&keyword=&status=&count=','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:08:43','2021-08-24 10:08:43',NULL,NULL,'admin-vendor-product'),(118,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:41:05','2021-08-24 10:41:05',NULL,NULL,'customer-group'),(119,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:50:03','2021-08-24 10:50:03',NULL,NULL,'customer-group'),(120,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:50:12','2021-08-24 10:50:12',NULL,NULL,'customer-group'),(121,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:51:30','2021-08-24 10:51:30',NULL,NULL,'customer-group'),(122,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:54:11','2021-08-24 10:54:11',NULL,NULL,'customer-group'),(123,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:54:48','2021-08-24 10:54:48',NULL,NULL,'customer-group'),(124,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:54:52','2021-08-24 10:54:52',NULL,NULL,'customer-group'),(125,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 10:54:54','2021-08-24 10:54:54',NULL,NULL,'customer-group'),(126,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:01:43','2021-08-24 11:01:43',NULL,NULL,'customer-group'),(127,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:01:44','2021-08-24 11:01:44',NULL,NULL,'customer-group'),(128,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:01:46','2021-08-24 11:01:46',NULL,NULL,'customer-group'),(129,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:23:29','2021-08-24 11:23:29',NULL,NULL,'customer-group'),(130,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:23:32','2021-08-24 11:23:32',NULL,NULL,'customer-group'),(131,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:25:36','2021-08-24 11:25:37',NULL,NULL,'customer-group'),(132,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:25:42','2021-08-24 11:25:42',NULL,NULL,'customer-group'),(133,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:35:38','2021-08-24 11:35:38',NULL,NULL,'customer-group'),(134,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:40:26','2021-08-24 11:40:26',NULL,NULL,'customer-group'),(135,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:40:29','2021-08-24 11:40:29',NULL,NULL,'customer-group'),(136,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 11:40:56','2021-08-24 11:40:56',NULL,NULL,'customer-group'),(137,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 12:19:25','2021-08-24 12:19:25',NULL,NULL,'customer-group'),(138,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 16:17:47','2021-08-24 16:17:47',NULL,NULL,'customer-group'),(139,49,'Admin','/api/manufacturer/delete-manufacturer/96','DELETE',NULL,'response','Manufacturer has been deleted by Admin','{\"manufacturerId\":96}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\"}','2021-08-24 16:47:49','2021-08-24 16:47:49',NULL,NULL,'manufacturer'),(140,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-24 21:59:12','2021-08-24 21:59:12',NULL,NULL,'customer-group'),(141,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-24 22:08:42','2021-08-24 22:08:42',NULL,NULL,'customer-group'),(142,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:08:06','2021-08-25 11:08:06',NULL,NULL,'customer-group'),(143,49,'Admin','/api/role/delete-role/2','DELETE',NULL,'response','Role has been deleted by Admin','{\"groupId\":2}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:08:19','2021-08-25 11:08:19',NULL,NULL,'role'),(144,49,'Admin','/api/role/create-role','POST',NULL,'response','Role has been created by Admin','{\"name\":\"admin2\",\"status\":1}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:08:39','2021-08-25 11:08:39',NULL,NULL,'role'),(145,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:20:12','2021-08-25 11:20:12',NULL,NULL,'customer-group'),(146,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:20:15','2021-08-25 11:20:15',NULL,NULL,'customer-group'),(147,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=true&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:20:15','2021-08-25 11:20:15',NULL,NULL,'customer-group'),(148,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:20:20','2021-08-25 11:20:20',NULL,NULL,'customer-group'),(149,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=true&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:20:20','2021-08-25 11:20:20',NULL,NULL,'customer-group'),(150,49,'Admin','/api/customer-group/create-customer-group','POST',NULL,'response','Customer Group has been created by Admin','{\"name\":\"Gruppo1\",\"description\":\"gruppo acquisto 1\",\"colorcode\":\"#8f2f2f\",\"status\":\"1\"}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:20:49','2021-08-25 11:20:49',NULL,NULL,'customer-group'),(151,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:20:49','2021-08-25 11:20:49',NULL,NULL,'customer-group'),(152,49,'Admin','/api/customer-group/customergroup-list?limit=20&offset=&keyword=&count=true&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:20:49','2021-08-25 11:20:49',NULL,NULL,'customer-group'),(153,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:20:55','2021-08-25 11:20:55',NULL,NULL,'customer-group'),(154,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=1','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:21:00','2021-08-25 11:21:00',NULL,NULL,'customer-group'),(155,49,'Admin','/api/customer/update-customer/5','PUT',NULL,'response','Customer has been updated by Admin','{\"customerGroupId\":\"2\",\"username\":\"Carlo\",\"email\":\"carloiodice9@gmail.com\",\"mobileNumber\":\"334242\",\"password\":\"\",\"confirmPassword\":\"\",\"avatar\":\"\",\"newsletter\":\"\",\"mailStatus\":1,\"status\":1,\"customerId\":\"5\"}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:21:04','2021-08-25 11:21:04',NULL,NULL,'customer'),(156,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 11:21:04','2021-08-25 11:21:04',NULL,NULL,'customer-group'),(157,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:00:57','2021-08-25 20:00:57',NULL,NULL,'admin-vendor-product'),(158,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:00:57','2021-08-25 20:00:57',NULL,NULL,'admin-vendor-product'),(159,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:04:46','2021-08-25 20:04:46',NULL,NULL,'admin-vendor-product'),(160,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:04:46','2021-08-25 20:04:46',NULL,NULL,'admin-vendor-product'),(161,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:04:50','2021-08-25 20:04:50',NULL,NULL,'admin-vendor-product'),(162,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:04:50','2021-08-25 20:04:50',NULL,NULL,'admin-vendor-product'),(163,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:06:21','2021-08-25 20:06:21',NULL,NULL,'admin-vendor-product'),(164,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:06:21','2021-08-25 20:06:21',NULL,NULL,'admin-vendor-product'),(165,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:07:37','2021-08-25 20:07:37',NULL,NULL,'admin-vendor-product'),(166,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:07:37','2021-08-25 20:07:37',NULL,NULL,'admin-vendor-product'),(167,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:07:50','2021-08-25 20:07:50',NULL,NULL,'admin-vendor-product'),(168,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:07:50','2021-08-25 20:07:50',NULL,NULL,'admin-vendor-product'),(169,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:08:04','2021-08-25 20:08:05',NULL,NULL,'admin-vendor-product'),(170,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:08:05','2021-08-25 20:08:05',NULL,NULL,'admin-vendor-product'),(171,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:08:44','2021-08-25 20:08:44',NULL,NULL,'admin-vendor-product'),(172,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:08:44','2021-08-25 20:08:44',NULL,NULL,'admin-vendor-product'),(173,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:08:47','2021-08-25 20:08:47',NULL,NULL,'admin-vendor-product'),(174,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:08:47','2021-08-25 20:08:47',NULL,NULL,'admin-vendor-product'),(175,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:08:50','2021-08-25 20:08:50',NULL,NULL,'admin-vendor-product'),(176,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:08:50','2021-08-25 20:08:50',NULL,NULL,'admin-vendor-product'),(177,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:09:12','2021-08-25 20:09:12',NULL,NULL,'admin-vendor-product'),(178,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:09:12','2021-08-25 20:09:12',NULL,NULL,'admin-vendor-product'),(179,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:10:02','2021-08-25 20:10:02',NULL,NULL,'admin-vendor-product'),(180,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:10:02','2021-08-25 20:10:02',NULL,NULL,'admin-vendor-product'),(181,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:11:51','2021-08-25 20:11:51',NULL,NULL,'admin-vendor-product'),(182,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:11:51','2021-08-25 20:11:51',NULL,NULL,'admin-vendor-product'),(183,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:12:09','2021-08-25 20:12:09',NULL,NULL,'admin-vendor-product'),(184,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:12:09','2021-08-25 20:12:09',NULL,NULL,'admin-vendor-product'),(185,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:12:21','2021-08-25 20:12:21',NULL,NULL,'admin-vendor-product'),(186,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:12:21','2021-08-25 20:12:21',NULL,NULL,'admin-vendor-product'),(187,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:17:28','2021-08-25 20:17:28',NULL,NULL,'admin-vendor-product'),(188,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:17:28','2021-08-25 20:17:28',NULL,NULL,'admin-vendor-product'),(189,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:20:04','2021-08-25 20:20:04',NULL,NULL,'admin-vendor-product'),(190,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:20:04','2021-08-25 20:20:04',NULL,NULL,'admin-vendor-product'),(191,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:24:20','2021-08-25 20:24:20',NULL,NULL,'admin-vendor-product'),(192,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-25 20:24:20','2021-08-25 20:24:20',NULL,NULL,'admin-vendor-product'),(193,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 02:42:36','2021-08-26 02:42:36',NULL,NULL,'customer-group'),(194,49,'Admin','/api/customer-group/customergroup-list?limit=10&offset=&keyword=&count=&status=','GET',NULL,'response','Customer Group has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 02:43:32','2021-08-26 02:43:32',NULL,NULL,'customer-group'),(195,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 09:17:41','2021-08-26 09:17:41',NULL,NULL,'admin-vendor-product'),(196,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 09:17:41','2021-08-26 09:17:41',NULL,NULL,'admin-vendor-product'),(197,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 09:17:43','2021-08-26 09:17:43',NULL,NULL,'admin-vendor-product'),(198,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 09:17:43','2021-08-26 09:17:43',NULL,NULL,'admin-vendor-product'),(199,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 10:02:09','2021-08-26 10:02:09',NULL,NULL,'admin-vendor-product'),(200,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 10:02:09','2021-08-26 10:02:09',NULL,NULL,'admin-vendor-product'),(201,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 10:02:17','2021-08-26 10:02:17',NULL,NULL,'admin-vendor-product'),(202,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 10:02:17','2021-08-26 10:02:17',NULL,NULL,'admin-vendor-product'),(203,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 12:28:00','2021-08-26 12:28:00',NULL,NULL,'admin-vendor-product'),(204,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 12:28:00','2021-08-26 12:28:00',NULL,NULL,'admin-vendor-product'),(205,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 12:30:46','2021-08-26 12:30:46',NULL,NULL,'admin-vendor-product'),(206,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 12:30:46','2021-08-26 12:30:46',NULL,NULL,'admin-vendor-product'),(207,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 12:30:53','2021-08-26 12:30:53',NULL,NULL,'admin-vendor-product'),(208,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 12:30:53','2021-08-26 12:30:53',NULL,NULL,'admin-vendor-product'),(209,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 12:30:55','2021-08-26 12:30:55',NULL,NULL,'admin-vendor-product'),(210,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 12:30:56','2021-08-26 12:30:56',NULL,NULL,'admin-vendor-product'),(211,49,'Admin','/api/admin-vendor-product/vendor-product-list?status=&vendorId=6&count=1','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 16:02:56','2021-08-26 16:02:56',NULL,NULL,'admin-vendor-product'),(212,49,'Admin','/api/admin-vendor-product/vendor-product-list?offset=0&limit=20&count=&vendorId=6','GET',NULL,'response','Vendor Product has been read by Admin','{}','{\"ip\":\"::1\",\"browser\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36\"}','2021-08-26 16:02:56','2021-08-26 16:02:56',NULL,NULL,'admin-vendor-product');
/*!40000 ALTER TABLE `audit_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `banner_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `sort_order` varchar(255) DEFAULT NULL,
  `url` tinytext,
  `banner_group_id` int DEFAULT NULL,
  `container_name` varchar(255) DEFAULT NULL,
  `view_page_count` int DEFAULT '0',
  `banner_group_banner_group_id` int DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `content` text,
  `position` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`banner_id`),
  KEY `fk_BannerGroup_Banner` (`banner_group_id`),
  KEY `banner_id` (`banner_id`),
  CONSTRAINT `fk_BannerGroup_Banner` FOREIGN KEY (`banner_group_id`) REFERENCES `banner_group` (`banner_group_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (84,'Watch',NULL,NULL,NULL,NULL,0,0,'www.piccosoft','Img_1623324513607.png','banner/','',3,1,'2019-08-01 13:02:28','2021-06-10 16:58:33',NULL,NULL),(85,'shoppify',NULL,NULL,NULL,NULL,0,0,'www.piccosoft.com','Img_1623324489339.png','banner/','',2,1,'2019-08-01 13:03:28','2021-06-10 16:58:09',NULL,NULL),(86,'Summer sale',NULL,NULL,NULL,NULL,0,0,'www.piccosoft.com','Img_1623324414655.png','banner/','',1,1,'2019-08-01 13:04:26','2021-06-10 16:56:54',NULL,NULL);
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner_group`
--

DROP TABLE IF EXISTS `banner_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner_group` (
  `banner_group_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`banner_group_id`),
  KEY `banner_group_id` (`banner_group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner_group`
--

LOCK TABLES `banner_group` WRITE;
/*!40000 ALTER TABLE `banner_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `banner_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner_image`
--

DROP TABLE IF EXISTS `banner_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner_image` (
  `banner_image_id` int NOT NULL AUTO_INCREMENT,
  `banner_id` varchar(32) NOT NULL,
  `link` varchar(255) NOT NULL,
  `image` varchar(45) NOT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`banner_image_id`),
  KEY `banner_image_id` (`banner_image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner_image`
--

LOCK TABLES `banner_image` WRITE;
/*!40000 ALTER TABLE `banner_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `banner_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner_image_description`
--

DROP TABLE IF EXISTS `banner_image_description`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner_image_description` (
  `banner_image_description_id` int NOT NULL AUTO_INCREMENT,
  `banner_image_id` int DEFAULT NULL,
  `banner_id` int DEFAULT NULL,
  `title` varchar(4) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`banner_image_description_id`),
  KEY `fk_Banner_BannerImageDescription` (`banner_id`),
  KEY `fk_BannerImage_BannerImageDescription` (`banner_image_id`),
  KEY `banner_image_description_id` (`banner_image_description_id`),
  CONSTRAINT `fk_Banner_BannerImageDescription` FOREIGN KEY (`banner_id`) REFERENCES `banner` (`banner_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_BannerImage_BannerImageDescription` FOREIGN KEY (`banner_image_id`) REFERENCES `banner_image` (`banner_image_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner_image_description`
--

LOCK TABLES `banner_image_description` WRITE;
/*!40000 ALTER TABLE `banner_image_description` DISABLE KEYS */;
/*!40000 ALTER TABLE `banner_image_description` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `description` text,
  `image` text,
  `image_path` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `blog_slug` varchar(255) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_blog_category` (`category_id`),
  KEY `id` (`id`),
  CONSTRAINT `fk_blog_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_related`
--

DROP TABLE IF EXISTS `blog_related`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_related` (
  `related_id` int NOT NULL AUTO_INCREMENT,
  `blog_id` int DEFAULT NULL,
  `related_blog_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`related_id`),
  KEY `fk_tbl_blogRelated_tbl_blog_foreignKey` (`blog_id`),
  KEY `fk_tbl_related_blog_id_tbl_blog` (`related_blog_id`),
  CONSTRAINT `fk_tbl_blogRelated_tbl_blog_foreignKey` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_related_blog_id_tbl_blog` FOREIGN KEY (`related_blog_id`) REFERENCES `blog` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_related`
--

LOCK TABLES `blog_related` WRITE;
/*!40000 ALTER TABLE `blog_related` DISABLE KEYS */;
/*!40000 ALTER TABLE `blog_related` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `parent_int` int DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `is_active` varchar(11) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `category_slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (160,'NEGOZZI E RISTORANTI',NULL,NULL,0,1,'','','','1',NULL,NULL,'2021-08-11 19:23:27',NULL,'negozzi-e-ristoranti'),(161,'OFFERTE',NULL,NULL,0,1,'','','','1',NULL,NULL,'2021-08-11 19:38:19',NULL,'offerte'),(162,'EVENTI E NEWS',NULL,NULL,0,1,'','','','1',NULL,NULL,'2021-08-11 19:38:45',NULL,'eventi-e-news'),(163,'NEGOZZI',NULL,NULL,0,1,'','','','1',NULL,NULL,'2021-08-11 20:02:15',NULL,'negozzi'),(164,'RISTORANTI',NULL,NULL,0,1,'','','','1',NULL,NULL,'2021-08-11 20:02:27',NULL,'ristoranti');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_commission`
--

DROP TABLE IF EXISTS `category_commission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_commission` (
  `category_commission_id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `category_commission_value` int DEFAULT NULL,
  PRIMARY KEY (`category_commission_id`),
  KEY `fk_tbl_category_commission_tbl_category_foreignKey` (`category_id`),
  CONSTRAINT `fk_tbl_category_commission_tbl_category_foreignKey` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_commission`
--

LOCK TABLES `category_commission` WRITE;
/*!40000 ALTER TABLE `category_commission` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_commission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_description`
--

DROP TABLE IF EXISTS `category_description`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_description` (
  `category_id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `meta_description` varchar(65) DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `category_description_id` int NOT NULL AUTO_INCREMENT,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`category_description_id`),
  KEY `fk_Category_CategoryDescription` (`category_id`),
  KEY `category_description_id` (`category_description_id`),
  CONSTRAINT `fk_Category_CategoryDescription` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_description`
--

LOCK TABLES `category_description` WRITE;
/*!40000 ALTER TABLE `category_description` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_description` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_path`
--

DROP TABLE IF EXISTS `category_path`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_path` (
  `category_path_id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `path_id` int DEFAULT NULL,
  `level` int NOT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`category_path_id`),
  KEY `category_path_id` (`category_path_id`)
) ENGINE=InnoDB AUTO_INCREMENT=849 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_path`
--

LOCK TABLES `category_path` WRITE;
/*!40000 ALTER TABLE `category_path` DISABLE KEYS */;
INSERT INTO `category_path` VALUES (605,158,1,0,NULL,NULL,NULL,NULL),(606,158,158,1,NULL,NULL,NULL,NULL),(607,156,4,0,NULL,NULL,NULL,NULL),(608,156,155,1,NULL,NULL,NULL,NULL),(609,156,156,2,NULL,NULL,NULL,NULL),(610,155,4,0,NULL,NULL,NULL,NULL),(611,155,155,1,NULL,NULL,NULL,NULL),(612,154,92,0,NULL,NULL,NULL,NULL),(613,154,154,1,NULL,NULL,NULL,NULL),(614,152,92,0,NULL,NULL,NULL,NULL),(615,152,154,1,NULL,NULL,NULL,NULL),(616,152,152,2,NULL,NULL,NULL,NULL),(617,151,92,0,NULL,NULL,NULL,NULL),(618,151,154,1,NULL,NULL,NULL,NULL),(619,151,151,2,NULL,NULL,NULL,NULL),(620,148,6,0,NULL,NULL,NULL,NULL),(621,148,147,1,NULL,NULL,NULL,NULL),(622,148,148,2,NULL,NULL,NULL,NULL),(623,147,6,0,NULL,NULL,NULL,NULL),(624,147,147,1,NULL,NULL,NULL,NULL),(625,146,5,0,NULL,NULL,NULL,NULL),(626,146,144,1,NULL,NULL,NULL,NULL),(627,146,146,2,NULL,NULL,NULL,NULL),(631,144,5,0,NULL,NULL,NULL,NULL),(632,144,144,1,NULL,NULL,NULL,NULL),(633,145,5,0,NULL,NULL,NULL,NULL),(634,145,144,1,NULL,NULL,NULL,NULL),(635,145,145,2,NULL,NULL,NULL,NULL),(636,142,4,0,NULL,NULL,NULL,NULL),(637,142,141,1,NULL,NULL,NULL,NULL),(638,142,142,2,NULL,NULL,NULL,NULL),(639,141,4,0,NULL,NULL,NULL,NULL),(640,141,141,1,NULL,NULL,NULL,NULL),(644,140,3,0,NULL,NULL,NULL,NULL),(645,140,138,1,NULL,NULL,NULL,NULL),(646,140,140,2,NULL,NULL,NULL,NULL),(647,139,3,0,NULL,NULL,NULL,NULL),(648,139,138,1,NULL,NULL,NULL,NULL),(649,139,139,2,NULL,NULL,NULL,NULL),(650,138,3,0,NULL,NULL,NULL,NULL),(651,138,138,1,NULL,NULL,NULL,NULL),(652,137,135,1,NULL,NULL,NULL,NULL),(653,137,1,0,NULL,NULL,NULL,NULL),(654,137,137,2,NULL,NULL,NULL,NULL),(655,136,1,0,NULL,NULL,NULL,NULL),(656,136,135,1,NULL,NULL,NULL,NULL),(657,136,136,2,NULL,NULL,NULL,NULL),(658,135,1,0,NULL,NULL,NULL,NULL),(659,135,135,1,NULL,NULL,NULL,NULL),(660,100,92,0,NULL,NULL,NULL,NULL),(661,100,99,1,NULL,NULL,NULL,NULL),(662,100,100,2,NULL,NULL,NULL,NULL),(663,99,92,0,NULL,NULL,NULL,NULL),(664,99,99,1,NULL,NULL,NULL,NULL),(665,97,97,2,NULL,NULL,NULL,NULL),(666,97,96,1,NULL,NULL,NULL,NULL),(667,97,92,0,NULL,NULL,NULL,NULL),(668,96,92,0,NULL,NULL,NULL,NULL),(669,96,96,1,NULL,NULL,NULL,NULL),(670,94,92,0,NULL,NULL,NULL,NULL),(671,94,93,1,NULL,NULL,NULL,NULL),(672,94,94,2,NULL,NULL,NULL,NULL),(673,93,92,0,NULL,NULL,NULL,NULL),(674,93,93,1,NULL,NULL,NULL,NULL),(675,90,6,0,NULL,NULL,NULL,NULL),(676,90,27,1,NULL,NULL,NULL,NULL),(677,90,90,2,NULL,NULL,NULL,NULL),(678,89,6,0,NULL,NULL,NULL,NULL),(679,89,27,1,NULL,NULL,NULL,NULL),(680,89,89,2,NULL,NULL,NULL,NULL),(681,79,5,0,NULL,NULL,NULL,NULL),(682,79,23,1,NULL,NULL,NULL,NULL),(683,79,79,2,NULL,NULL,NULL,NULL),(684,78,5,0,NULL,NULL,NULL,NULL),(685,78,22,1,NULL,NULL,NULL,NULL),(686,78,78,2,NULL,NULL,NULL,NULL),(687,76,76,2,NULL,NULL,NULL,NULL),(688,76,22,1,NULL,NULL,NULL,NULL),(689,76,5,0,NULL,NULL,NULL,NULL),(690,73,5,0,NULL,NULL,NULL,NULL),(691,73,21,1,NULL,NULL,NULL,NULL),(692,73,73,2,NULL,NULL,NULL,NULL),(693,68,1,0,NULL,NULL,NULL,NULL),(694,68,11,1,NULL,NULL,NULL,NULL),(695,68,68,2,NULL,NULL,NULL,NULL),(696,64,1,0,NULL,NULL,NULL,NULL),(697,64,9,1,NULL,NULL,NULL,NULL),(698,64,64,2,NULL,NULL,NULL,NULL),(699,60,1,0,NULL,NULL,NULL,NULL),(700,60,60,2,NULL,NULL,NULL,NULL),(701,60,7,1,NULL,NULL,NULL,NULL),(702,53,3,0,NULL,NULL,NULL,NULL),(703,53,19,1,NULL,NULL,NULL,NULL),(704,53,53,2,NULL,NULL,NULL,NULL),(705,50,3,0,NULL,NULL,NULL,NULL),(706,50,17,1,NULL,NULL,NULL,NULL),(707,50,50,2,NULL,NULL,NULL,NULL),(708,48,3,0,NULL,NULL,NULL,NULL),(709,48,17,1,NULL,NULL,NULL,NULL),(710,48,48,2,NULL,NULL,NULL,NULL),(711,44,44,2,NULL,NULL,NULL,NULL),(712,44,16,1,NULL,NULL,NULL,NULL),(713,44,4,0,NULL,NULL,NULL,NULL),(714,35,4,0,NULL,NULL,NULL,NULL),(715,35,13,1,NULL,NULL,NULL,NULL),(716,35,35,2,NULL,NULL,NULL,NULL),(717,33,4,0,NULL,NULL,NULL,NULL),(718,33,13,1,NULL,NULL,NULL,NULL),(719,33,33,2,NULL,NULL,NULL,NULL),(720,27,6,0,NULL,NULL,NULL,NULL),(721,27,27,1,NULL,NULL,NULL,NULL),(722,25,6,0,NULL,NULL,NULL,NULL),(723,25,25,1,NULL,NULL,NULL,NULL),(724,24,6,0,NULL,NULL,NULL,NULL),(725,24,24,1,NULL,NULL,NULL,NULL),(726,23,5,0,NULL,NULL,NULL,NULL),(727,23,23,1,NULL,NULL,NULL,NULL),(728,22,5,0,NULL,NULL,NULL,NULL),(729,22,22,1,NULL,NULL,NULL,NULL),(730,21,5,0,NULL,NULL,NULL,NULL),(731,21,21,1,NULL,NULL,NULL,NULL),(732,19,3,0,NULL,NULL,NULL,NULL),(733,19,19,1,NULL,NULL,NULL,NULL),(734,18,18,1,NULL,NULL,NULL,NULL),(735,18,3,0,NULL,NULL,NULL,NULL),(736,16,4,0,NULL,NULL,NULL,NULL),(737,16,16,1,NULL,NULL,NULL,NULL),(738,14,4,0,NULL,NULL,NULL,NULL),(739,14,14,1,NULL,NULL,NULL,NULL),(740,13,4,0,NULL,NULL,NULL,NULL),(741,13,13,1,NULL,NULL,NULL,NULL),(742,11,1,0,NULL,NULL,NULL,NULL),(743,11,11,1,NULL,NULL,NULL,NULL),(744,9,1,0,NULL,NULL,NULL,NULL),(745,9,9,1,NULL,NULL,NULL,NULL),(746,7,7,1,NULL,NULL,NULL,NULL),(747,7,1,0,NULL,NULL,NULL,NULL),(748,4,4,0,NULL,NULL,NULL,NULL),(749,160,1,0,NULL,NULL,NULL,NULL),(750,160,158,1,NULL,NULL,NULL,NULL),(751,160,160,2,NULL,NULL,NULL,NULL),(752,157,4,0,NULL,NULL,NULL,NULL),(753,157,155,1,NULL,NULL,NULL,NULL),(754,157,157,2,NULL,NULL,NULL,NULL),(755,149,6,0,NULL,NULL,NULL,NULL),(756,149,147,1,NULL,NULL,NULL,NULL),(757,149,149,2,NULL,NULL,NULL,NULL),(758,143,143,2,NULL,NULL,NULL,NULL),(759,143,141,1,NULL,NULL,NULL,NULL),(760,143,4,0,NULL,NULL,NULL,NULL),(761,107,1,0,NULL,NULL,NULL,NULL),(762,107,7,1,NULL,NULL,NULL,NULL),(763,107,107,2,NULL,NULL,NULL,NULL),(764,106,6,0,NULL,NULL,NULL,NULL),(765,106,25,1,NULL,NULL,NULL,NULL),(766,106,106,2,NULL,NULL,NULL,NULL),(767,105,4,0,NULL,NULL,NULL,NULL),(768,105,14,1,NULL,NULL,NULL,NULL),(769,105,105,2,NULL,NULL,NULL,NULL),(770,104,104,2,NULL,NULL,NULL,NULL),(771,104,18,1,NULL,NULL,NULL,NULL),(772,104,3,0,NULL,NULL,NULL,NULL),(773,102,92,0,NULL,NULL,NULL,NULL),(774,102,96,1,NULL,NULL,NULL,NULL),(775,102,102,2,NULL,NULL,NULL,NULL),(776,101,92,0,NULL,NULL,NULL,NULL),(777,101,99,1,NULL,NULL,NULL,NULL),(778,101,101,2,NULL,NULL,NULL,NULL),(779,95,92,0,NULL,NULL,NULL,NULL),(780,95,93,1,NULL,NULL,NULL,NULL),(781,95,95,2,NULL,NULL,NULL,NULL),(782,86,86,2,NULL,NULL,NULL,NULL),(783,86,25,1,NULL,NULL,NULL,NULL),(784,86,6,0,NULL,NULL,NULL,NULL),(785,84,6,0,NULL,NULL,NULL,NULL),(786,84,24,1,NULL,NULL,NULL,NULL),(787,84,84,2,NULL,NULL,NULL,NULL),(788,83,6,0,NULL,NULL,NULL,NULL),(789,83,24,1,NULL,NULL,NULL,NULL),(790,83,83,2,NULL,NULL,NULL,NULL),(791,80,5,0,NULL,NULL,NULL,NULL),(792,80,23,1,NULL,NULL,NULL,NULL),(793,80,80,2,NULL,NULL,NULL,NULL),(794,74,21,1,NULL,NULL,NULL,NULL),(795,74,74,2,NULL,NULL,NULL,NULL),(796,74,5,0,NULL,NULL,NULL,NULL),(797,69,1,0,NULL,NULL,NULL,NULL),(798,69,11,1,NULL,NULL,NULL,NULL),(799,69,69,2,NULL,NULL,NULL,NULL),(800,65,1,0,NULL,NULL,NULL,NULL),(801,65,9,1,NULL,NULL,NULL,NULL),(802,65,65,2,NULL,NULL,NULL,NULL),(803,54,3,0,NULL,NULL,NULL,NULL),(804,54,19,1,NULL,NULL,NULL,NULL),(805,54,54,2,NULL,NULL,NULL,NULL),(806,52,3,0,NULL,NULL,NULL,NULL),(807,52,52,2,NULL,NULL,NULL,NULL),(808,52,18,1,NULL,NULL,NULL,NULL),(809,45,4,0,NULL,NULL,NULL,NULL),(810,45,16,1,NULL,NULL,NULL,NULL),(811,45,45,2,NULL,NULL,NULL,NULL),(812,38,4,0,NULL,NULL,NULL,NULL),(813,38,14,1,NULL,NULL,NULL,NULL),(814,38,38,2,NULL,NULL,NULL,NULL),(815,17,3,0,NULL,NULL,NULL,NULL),(816,17,17,1,NULL,NULL,NULL,NULL),(817,1,1,0,NULL,NULL,NULL,NULL),(818,134,134,2,NULL,NULL,NULL,NULL),(819,134,9,1,NULL,NULL,NULL,NULL),(820,134,1,0,NULL,NULL,NULL,NULL),(821,92,92,0,NULL,NULL,NULL,NULL),(822,36,4,0,NULL,NULL,NULL,NULL),(823,36,13,1,NULL,NULL,NULL,NULL),(824,36,36,2,NULL,NULL,NULL,NULL),(825,3,3,0,NULL,NULL,NULL,NULL),(826,5,5,0,NULL,NULL,NULL,NULL),(827,6,6,0,NULL,NULL,NULL,NULL),(834,159,1,0,NULL,NULL,NULL,NULL),(835,159,158,1,NULL,NULL,NULL,NULL),(836,159,159,2,NULL,NULL,NULL,NULL),(837,161,6,0,NULL,NULL,NULL,NULL),(838,161,25,1,NULL,NULL,NULL,NULL),(839,161,106,2,NULL,NULL,NULL,NULL),(840,161,161,3,NULL,NULL,NULL,NULL),(841,162,4,0,NULL,NULL,NULL,NULL),(842,162,155,1,NULL,NULL,NULL,NULL),(843,162,162,2,NULL,NULL,NULL,NULL),(844,160,160,0,NULL,NULL,NULL,NULL),(845,161,161,0,NULL,NULL,NULL,NULL),(846,162,162,0,NULL,NULL,NULL,NULL),(847,163,163,0,NULL,NULL,NULL,NULL),(848,164,164,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `category_path` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condominio_conto_corrente`
--

DROP TABLE IF EXISTS `condominio_conto_corrente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condominio_conto_corrente` (
  `id_conto_corrente` int NOT NULL AUTO_INCREMENT,
  `fornitore` int DEFAULT NULL,
  `cliente` int DEFAULT NULL,
  `tipo_spesa` int DEFAULT NULL,
  `pdf` blob,
  `num_fattura` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_fattura` date DEFAULT NULL,
  `data_movimento` date DEFAULT NULL,
  `anno_competenza` year DEFAULT NULL,
  `uscite` float DEFAULT NULL,
  `entrate` float DEFAULT NULL,
  `stato` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_conto_corrente`),
  KEY `fk_fornitore` (`fornitore`),
  KEY `fk_tipo_spesa` (`tipo_spesa`),
  KEY `fk_vendor` (`cliente`),
  CONSTRAINT `fk_fornitore` FOREIGN KEY (`fornitore`) REFERENCES `condominio_fornitore` (`id_fornitore`),
  CONSTRAINT `fk_tipo_spesa` FOREIGN KEY (`tipo_spesa`) REFERENCES `condominio_tipo_spesa` (`id_tipo_spesa`),
  CONSTRAINT `fk_vendor` FOREIGN KEY (`cliente`) REFERENCES `vendor` (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condominio_conto_corrente`
--

LOCK TABLES `condominio_conto_corrente` WRITE;
/*!40000 ALTER TABLE `condominio_conto_corrente` DISABLE KEYS */;
INSERT INTO `condominio_conto_corrente` VALUES (4,1,NULL,1,NULL,'EN-3045','2021-08-16','2021-08-03',2021,600,NULL,NULL,NULL,NULL,NULL,NULL),(5,NULL,2,NULL,NULL,'AC-44242','2021-08-09','2021-08-16',2021,NULL,200,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `condominio_conto_corrente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condominio_fornitore`
--

DROP TABLE IF EXISTS `condominio_fornitore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condominio_fornitore` (
  `id_fornitore` int NOT NULL AUTO_INCREMENT,
  `nome_compagnia` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `info_banca` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_fornitore`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condominio_fornitore`
--

LOCK TABLES `condominio_fornitore` WRITE;
/*!40000 ALTER TABLE `condominio_fornitore` DISABLE KEYS */;
INSERT INTO `condominio_fornitore` VALUES (1,'Enel s.p.a','enelenergia@info.it','IT52P0300203280516696633461',NULL,NULL,NULL,NULL),(2,'Pulito s.r.l','impresa@gmail.com','IT85I0300203280946743697178',NULL,NULL,'2021-08-13 01:31:30','2021-08-13 01:31:30'),(3,'Bartolli','sicurezza@azienda.it','IT31F0300203280381666334812',NULL,NULL,'2021-08-13 01:31:30','2021-08-13 01:31:30'),(4,'DMP impianti','assistenza@ascensore.it','IT31F0300203280381666334812',NULL,NULL,'2021-08-13 01:33:50','2021-08-24 23:37:17'),(5,'rangers','rangers@assistenza.it','IT31F0300203280381666334812',NULL,NULL,'2021-08-13 01:33:50','2021-08-13 01:33:50');
/*!40000 ALTER TABLE `condominio_fornitore` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condominio_fotovoltaico`
--

DROP TABLE IF EXISTS `condominio_fotovoltaico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condominio_fotovoltaico` (
  `id_fotovoltaico` int NOT NULL,
  `piano` int NOT NULL,
  `mq_catastali` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `millesimi` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_fotovoltaico`),
  KEY `fk_piano` (`piano`),
  CONSTRAINT `fk_piano` FOREIGN KEY (`piano`) REFERENCES `condominio_piano` (`id_piano`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condominio_fotovoltaico`
--

LOCK TABLES `condominio_fotovoltaico` WRITE;
/*!40000 ALTER TABLE `condominio_fotovoltaico` DISABLE KEYS */;
/*!40000 ALTER TABLE `condominio_fotovoltaico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condominio_generale`
--

DROP TABLE IF EXISTS `condominio_generale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condominio_generale` (
  `id_generale` int NOT NULL,
  `piano` int NOT NULL,
  `mq_catastali` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `millesimi` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_generale`),
  KEY `fk_piano_to_tbl_generale` (`piano`),
  CONSTRAINT `fk_piano_to_tbl_generale` FOREIGN KEY (`piano`) REFERENCES `condominio_piano` (`id_piano`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condominio_generale`
--

LOCK TABLES `condominio_generale` WRITE;
/*!40000 ALTER TABLE `condominio_generale` DISABLE KEYS */;
INSERT INTO `condominio_generale` VALUES (17,2,'45','0,46',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(18,2,'45','0,46',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(19,2,'30','0,31',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(20,2,'27','0,28',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(26,6,'6506','6,05',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(27,3,'885','44,18',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(28,3,'1133','56,56',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(29,3,'102','5,09',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(30,3,'1713','85,51',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(31,3,'176','8,79',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(32,3,'242','12,08',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(33,3,'475','23,71',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(34,3,'95','4,74',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(35,3,'77','3,84',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(36,3,'78','3,89',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(38,3,'70','3,49',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(47,4,'129','7,06',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(48,4,'129','7,06',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(49,4,'129','7,06',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(50,4,'125','6,84',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(51,4,'112','6,13',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(52,4,'126','6,89',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(53,4,'213','11,65',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(54,4,'142','7,77',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(55,4,'140','7,66',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(56,4,'102','5,58',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(57,4,'76','3,94',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(58,4,'107','5,55',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(59,4,'102','5,29',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(60,4,'106','5,80',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(61,4,'101','5,52',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(62,4,'90','4,92',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(63,4,'110','6,02',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(64,4,'173','9,46',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(65,4,'108','5,91',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(66,4,'79','4,32',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(67,4,'84','4,36',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(68,4,'108','5,60',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(69,4,'76','3,94',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(70,4,'82','4,49',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(71,4,'78','4,27',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(72,4,'69','3,77',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(73,4,'80','4,38',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(74,4,'216','11,81',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(75,4,'190','10,39',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(76,4,'111','6,07',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(77,4,'98','5,36',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(78,4,'110','6,02',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(79,4,'148','8,10',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(80,4,'219','11,98',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(81,4,'110','6,02',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(82,4,'98','5,36',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(83,4,'111','6,07',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(84,4,'201','10,99',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(85,4,'66','3,61',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(88,4,'77','4,21',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(89,4,'88','4,81',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(90,4,'71','3,88',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(91,4,'229','12,53',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(92,4,'129','7,06',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(94,5,'129','7,70',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(95,5,'124','7,40',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(96,5,'110','6,56',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(97,5,'66','3,94',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(98,5,'60','3,58',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(99,5,'193','11,52',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(100,5,'142','8,90',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(101,5,'140','8,35',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(102,5,'102','6,09',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(103,5,'77','4,10',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(104,5,'107','5,70',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(105,5,'102','5,43',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(106,5,'106','6,33',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(107,5,'101','6,03',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(108,5,'44','2,63',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(109,5,'45','2,69',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(110,5,'111','6,62',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(111,5,'160','9,55',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(112,5,'108','6,44',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(113,5,'79','4,71',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(114,5,'83','4,42',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(115,5,'111','5,91',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(116,5,'76','4,05',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(117,5,'81','4,83',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(118,5,'78','4,65',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(119,5,'69','4,12',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(120,5,'85','5,07',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(121,5,'207','12,35',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(122,5,'184','9,80',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(123,5,'111','6,62',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(124,5,'98','5,85',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(125,5,'110','6,56',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(126,5,'148','8,83',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(127,5,'218','13,01',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(128,5,'110','6,56',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(129,5,'98','5,85',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(130,5,'112','6,68',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(131,5,'201','11,99',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(132,5,'68','4,06',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(135,5,'77','4,59',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(136,5,'77','4,59',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(137,5,'67','4,00',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(138,5,'228','13,60',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(139,5,'258','15,40',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(140,5,'129','7,70',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(141,1,'3032','27,83',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(142,1,'1435','13,17',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(143,1,'3248','29,82',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(146,2,'3408','35,20',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21'),(147,2,'4230','43,69',NULL,'2021-08-13 02:26:21',NULL,'2021-08-13 02:26:21');
/*!40000 ALTER TABLE `condominio_generale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condominio_park122`
--

DROP TABLE IF EXISTS `condominio_park122`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condominio_park122` (
  `id_park122` int NOT NULL,
  `piano` int NOT NULL,
  `mq_catastali` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `millesimi` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_park122`),
  KEY `fk_piano_2` (`piano`),
  CONSTRAINT `fk_piano_2` FOREIGN KEY (`piano`) REFERENCES `condominio_piano` (`id_piano`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condominio_park122`
--

LOCK TABLES `condominio_park122` WRITE;
/*!40000 ALTER TABLE `condominio_park122` DISABLE KEYS */;
/*!40000 ALTER TABLE `condominio_park122` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condominio_park_pub`
--

DROP TABLE IF EXISTS `condominio_park_pub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condominio_park_pub` (
  `id_park_pub` int NOT NULL,
  `piano` int NOT NULL,
  `mq_catastali` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `millesimi` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_park_pub`),
  KEY `fk_piano_3` (`piano`),
  CONSTRAINT `fk_piano_3` FOREIGN KEY (`piano`) REFERENCES `condominio_piano` (`id_piano`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condominio_park_pub`
--

LOCK TABLES `condominio_park_pub` WRITE;
/*!40000 ALTER TABLE `condominio_park_pub` DISABLE KEYS */;
/*!40000 ALTER TABLE `condominio_park_pub` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condominio_piano`
--

DROP TABLE IF EXISTS `condominio_piano`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condominio_piano` (
  `id_piano` int NOT NULL AUTO_INCREMENT,
  `num_piano` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `ordinamento` int DEFAULT NULL,
  `stato` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_piano`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condominio_piano`
--

LOCK TABLES `condominio_piano` WRITE;
/*!40000 ALTER TABLE `condominio_piano` DISABLE KEYS */;
INSERT INTO `condominio_piano` VALUES (1,'S2',1,1,NULL,'2021-08-24 17:12:19',NULL,NULL),(2,'S1',1,1,NULL,'2021-08-24 17:12:27',NULL,NULL),(3,'T',3,1,NULL,'2021-08-24 17:12:46',NULL,NULL),(4,'1',6,1,NULL,'2021-08-24 17:12:59',NULL,'2021-08-24 17:48:32'),(5,'2',5,1,NULL,'2021-08-24 17:13:11',NULL,NULL),(6,'3',4,1,NULL,'2021-08-24 17:13:21',NULL,'2021-08-24 17:48:47');
/*!40000 ALTER TABLE `condominio_piano` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condominio_tipo_spesa`
--

DROP TABLE IF EXISTS `condominio_tipo_spesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condominio_tipo_spesa` (
  `id_tipo_spesa` int NOT NULL AUTO_INCREMENT,
  `tipo_spesa` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `causale` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_tipo_spesa`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condominio_tipo_spesa`
--

LOCK TABLES `condominio_tipo_spesa` WRITE;
/*!40000 ALTER TABLE `condominio_tipo_spesa` DISABLE KEYS */;
INSERT INTO `condominio_tipo_spesa` VALUES (1,'energia elettrica','sspagamento energia elettrisca',NULL,NULL,'2021-08-13 00:00:00','2021-08-25 01:11:27'),(2,'sicurezza',NULL,NULL,NULL,NULL,NULL),(3,'impresa di pulizie',NULL,NULL,NULL,NULL,NULL),(4,'ascensore',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `condominio_tipo_spesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `message` text,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `country_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `iso_code_2` varchar(2) NOT NULL,
  `iso_code_3` varchar(3) NOT NULL,
  `address_format` text,
  `postcode_required` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`country_id`),
  KEY `country_id` (`country_id`)
) ENGINE=MyISAM AUTO_INCREMENT=261 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Afghanistan','AF','AFG','',0,0),(2,'Albania','AL','ALB','',1,1),(3,'Algeria','DZ','DZA','',1,1),(4,'American Samoa','AS','ASM','',1,1),(5,'Andorra','AD','AND','',0,1),(6,'Angola','AO','AGO','',0,1),(7,'Anguilla','AI','AIA','',0,1),(8,'Antarctica','AQ','ATA','',0,1),(9,'Antigua and Barbuda','AG','ATG','',0,1),(10,'Argentina','AR','ARG','',0,1),(11,'Armenia','AM','ARM','',0,1),(12,'Aruba','AW','ABW','',0,1),(13,'Australia','AU','AUS','',1,0),(16,'Bahamas','BS','BHS','',0,1),(17,'Bahrain','BH','BHR','',0,1),(18,'Bangladesh','BD','BGD','',0,1),(19,'Barbados','BB','BRB','',0,1),(20,'Belarus','BY','BLR','',1,0),(22,'Belize','BZ','BLZ','',0,1),(23,'Benin','BJ','BEN','',1,0),(24,'Bermuda','BM','BMU','',0,1),(25,'Bhutan','BT','BTN','',0,1),(26,'Bolivia','BO','BOL','',0,1),(27,'Bosnia and Herzegovina','BA','BIH','',0,1),(28,'Botswana','BW','BWA','',0,1),(29,'Bouvet Island','BV','BVT','',0,1),(30,'Brazil','BR','BRA','',0,1),(31,'British Indian Ocean Territory','IO','IOT','',0,1),(32,'Brunei Darussalam','BN','BRN','',0,1),(33,'Bulgaria','BG','BGR','',0,1),(34,'Burkina Faso','BF','BFA','',0,1),(35,'Burundi','BI','BDI','',0,1),(36,'Cambodia','KH','KHM','',0,1),(37,'Cameroon','CM','CMR','',0,1),(38,'Canada','CA','CAN','',0,1),(39,'Cape Verde','CV','CPV','',0,1),(40,'Cayman Islands','KY','CYM','',0,1),(41,'Central African Republic','CF','CAF','',0,1),(42,'Chad','TD','TCD','',0,1),(43,'Chile','CL','CHL','',0,1),(44,'China','CN','CHN','',0,1),(45,'Christmas Island','CX','CXR','',0,1),(46,'Cocos (Keeling) Islands','CC','CCK','',0,1),(47,'Colombia','CO','COL','',0,1),(48,'Comoros','KM','COM','',0,1),(49,'Congo','CG','COG','',0,1),(50,'Cook Islands','CK','COK','',0,1),(51,'Costa Rica','CR','CRI','',0,1),(53,'Croatia','HR','HRV','',0,1),(54,'Cuba','CU','CUB','',0,1),(55,'Cyprus','CY','CYP','',0,1),(56,'Czech Republic','CZ','CZE','',0,1),(57,'Denmark','DK','DNK','',0,1),(58,'Djibouti','DJ','DJI','',0,1),(59,'Dominica','DM','DMA','',0,1),(60,'Dominican Republic','DO','DOM','',0,1),(61,'East Timor','TL','TLS','',0,1),(62,'Ecuador','EC','ECU','',0,1),(63,'Egypt','EG','EGY','',0,1),(64,'El Salvador','SV','SLV','',0,1),(65,'Equatorial Guinea','GQ','GNQ','',0,1),(66,'Eritrea','ER','ERI','',0,1),(67,'Estonia','EE','EST','',0,1),(68,'Ethiopia','ET','ETH','',0,1),(69,'Falkland Islands (Malvinas)','FK','FLK','',0,1),(70,'Faroe Islands','FO','FRO','',0,1),(71,'Fiji','FJ','FJI','',0,1),(72,'Finland','FI','FIN','',0,1),(74,'France, Metropolitan','FR','FRA','{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}',1,1),(75,'French Guiana','GF','GUF','',0,1),(76,'French Polynesia','PF','PYF','',0,1),(77,'French Southern Territories','TF','ATF','',0,1),(78,'Gabon','GA','GAB','',0,1),(79,'Gambia','GM','GMB','',0,1),(80,'Georgia','GE','GEO','',0,1),(81,'Germany','DE','DEU','{company}\r\n{firstname} {lastname}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}',1,1),(82,'Ghana','GH','GHA','',0,1),(83,'Gibraltar','GI','GIB','',0,1),(84,'Greece','GR','GRC','',0,1),(85,'Greenland','GL','GRL','',0,1),(86,'Grenada','GD','GRD','',0,1),(87,'Guadeloupe','GP','GLP','',0,1),(88,'Guam','GU','GUM','',0,1),(89,'Guatemala','GT','GTM','',0,1),(90,'Guinea','GN','GIN','',0,1),(91,'Guinea-Bissau','GW','GNB','',0,1),(92,'Guyana','GY','GUY','',0,1),(93,'Haiti','HT','HTI','',0,1),(94,'Heard and Mc Donald Islands','HM','HMD','',0,1),(95,'Honduras','HN','HND','',0,1),(96,'Hong Kong','HK','HKG','',0,1),(97,'Hungary','HU','HUN','',0,1),(98,'Iceland','IS','ISL','',0,1),(99,'India','IN','IND','',0,1),(100,'Indonesia','ID','IDN','',0,1),(101,'Iran (Islamic Republic of)','IR','IRN','',1,1),(102,'Iraq','IQ','IRQ','',0,1),(103,'Ireland','IE','IRL','',0,1),(104,'Israel','IL','ISR','',0,1),(105,'Italy','IT','ITA','',0,1),(106,'Jamaica','JM','JAM','',0,1),(107,'Japan','JP','JPN','',0,1),(108,'Jordan','JO','JOR','',0,1),(109,'Kazakhstan','KZ','KAZ','',0,1),(110,'Kenya','KE','KEN','',0,1),(111,'Kiribati','KI','KIR','',0,1),(112,'North Korea','KP','PRK','',0,1),(113,'South Korea','KR','KOR','',0,1),(114,'Kuwait','KW','KWT','',0,1),(115,'Kyrgyzstan','KG','KGZ','',0,1),(116,'Lao People\'s Democratic Republic','LA','LAO','',0,1),(117,'Latvia','LV','LVA','',0,1),(118,'Lebanon','LB','LBN','',0,1),(119,'Lesotho','LS','LSO','',0,1),(120,'Liberia','LR','LBR','',0,1),(121,'Libyan Arab Jamahiriya','LY','LBY','',0,1),(122,'Liechtenstein','LI','LIE','',0,1),(123,'Lithuania','LT','LTU','',0,1),(124,'Luxembourg','LU','LUX','',0,1),(125,'Macau','MO','MAC','',0,1),(126,'FYROM','MK','MKD','',0,1),(127,'Madagascar','MG','MDG','',0,1),(128,'Malawi','MW','MWI','',0,1),(129,'Malaysia','MY','MYS','',0,1),(130,'Maldives','MV','MDV','',0,1),(131,'Mali','ML','MLI','',0,1),(132,'Malta','MT','MLT','',0,1),(133,'Marshall Islands','MH','MHL','',0,1),(134,'Martinique','MQ','MTQ','',0,1),(135,'Mauritania','MR','MRT','',0,1),(136,'Mauritius','MU','MUS','',0,1),(137,'Mayotte','YT','MYT','',0,1),(138,'Mexico','MX','MEX','',0,1),(139,'Micronesia, Federated States of','FM','FSM','',0,1),(140,'Moldova, Republic of','MD','MDA','',0,1),(141,'Monaco','MC','MCO','',0,1),(142,'Mongolia','MN','MNG','',0,1),(143,'Montserrat','MS','MSR','',0,1),(144,'Morocco','MA','MAR','',0,1),(145,'Mozambique','MZ','MOZ','',0,1),(146,'Myanmar','MM','MMR','',0,1),(147,'Namibia','NA','NAM','',0,1),(148,'Nauru','NR','NRU','',0,1),(149,'Nepal','NP','NPL','',0,1),(150,'Netherlands','NL','NLD','',0,1),(151,'Netherlands Antilles','AN','ANT','',0,1),(152,'New Caledonia','NC','NCL','',0,1),(153,'New Zealand','NZ','NZL','',0,1),(154,'Nicaragua','NI','NIC','',0,1),(155,'Niger','NE','NER','',0,1),(156,'Nigeria','NG','NGA','',0,1),(157,'Niue','NU','NIU','',0,1),(158,'Norfolk Island','NF','NFK','',0,1),(159,'Northern Mariana Islands','MP','MNP','',0,1),(160,'Norway','NO','NOR','',0,1),(161,'Oman','OM','OMN','',0,1),(162,'Pakistan','PK','PAK','',0,1),(163,'Palau','PW','PLW','',0,1),(164,'Panama','PA','PAN','',0,1),(165,'Papua New Guinea','PG','PNG','',0,1),(166,'Paraguay','PY','PRY','',0,1),(167,'Peru','PE','PER','',0,1),(168,'Philippines','PH','PHL','',0,1),(169,'Pitcairn','PN','PCN','',0,1),(170,'Poland','PL','POL','',0,1),(171,'Portugal','PT','PRT','',0,1),(172,'Puerto Rico','PR','PRI','',0,1),(173,'Qatar','QA','QAT','',0,1),(174,'Reunion','RE','REU','',0,1),(175,'Romania','RO','ROM','',0,1),(176,'Russian Federation','RU','RUS','',0,1),(177,'Rwanda','RW','RWA','',0,1),(178,'Saint Kitts and Nevis','KN','KNA','',0,1),(179,'Saint Lucia','LC','LCA','',0,1),(180,'Saint Vincent and the Grenadines','VC','VCT','',0,1),(181,'Samoa','WS','WSM','',0,1),(182,'San Marino','SM','SMR','',0,1),(183,'Sao Tome and Principe','ST','STP','',0,1),(184,'Saudi Arabia','SA','SAU','',0,1),(185,'Senegal','SN','SEN','',0,1),(186,'Seychelles','SC','SYC','',0,1),(187,'Sierra Leone','SL','SLE','',0,1),(188,'Singapore','SG','SGP','',0,1),(189,'Slovak Republic','SK','SVK','{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{city} {postcode}\r\n{zone}\r\n{country}',0,1),(190,'Slovenia','SI','SVN','',0,1),(191,'Solomon Islands','SB','SLB','',0,1),(192,'Somalia','SO','SOM','',0,1),(193,'South Africa','ZA','ZAF','',0,1),(194,'South Georgia &amp; South Sandwich Islands','GS','SGS','',0,1),(195,'Spain','ES','ESP','',0,1),(196,'Sri Lanka','LK','LKA','',0,1),(197,'St. Helena','SH','SHN','',0,1),(198,'St. Pierre and Miquelon','PM','SPM','',0,1),(199,'Sudan','SD','SDN','',0,1),(200,'Suriname','SR','SUR','',0,1),(201,'Svalbard and Jan Mayen Islands','SJ','SJM','',0,1),(202,'Swaziland','SZ','SWZ','',0,1),(203,'Sweden','SE','SWE','{company}\r\n{firstname} {lastname}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}',1,1),(204,'Switzerland','CH','CHE','',0,1),(205,'Syrian Arab Republic','SY','SYR','',0,1),(206,'Taiwan','TW','TWN','',0,1),(207,'Tajikistan','TJ','TJK','',0,1),(208,'Tanzania, United Republic of','TZ','TZA','',0,1),(209,'Thailand','TH','THA','',0,1),(210,'Togo','TG','TGO','',0,1),(211,'Tokelau','TK','TKL','',0,1),(212,'Tonga','TO','TON','',0,1),(213,'Trinidad and Tobago','TT','TTO','',0,1),(214,'Tunisia','TN','TUN','',0,1),(215,'Turkey','TR','TUR','',0,1),(216,'Turkmenistan','TM','TKM','',0,1),(217,'Turks and Caicos Islands','TC','TCA','',0,1),(218,'Tuvalu','TV','TUV','',0,1),(219,'Uganda','UG','UGA','',0,1),(220,'Ukraine','UA','UKR','',0,1),(221,'United Arab Emirates','AE','ARE','',0,1),(222,'United Kingdom','GB','GBR','',1,1),(223,'United States','US','USA','{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{city}, {zone} {postcode}\r\n{country}',0,1),(224,'United States Minor Outlying Islands','UM','UMI','',0,1),(225,'Uruguay','UY','URY','',0,1),(226,'Uzbekistan','UZ','UZB','',0,1),(227,'Vanuatu','VU','VUT','',0,1),(228,'Vatican City State (Holy See)','VA','VAT','',0,1),(229,'Venezuela','VE','VEN','',0,1),(230,'Viet Nam','VN','VNM','',0,1),(231,'Virgin Islands (British)','VG','VGB','',0,1),(232,'Virgin Islands (U.S.)','VI','VIR','',0,1),(233,'Wallis and Futuna Islands','WF','WLF','',0,1),(234,'Western Sahara','EH','ESH','',0,1),(235,'Yemen','YE','YEM','',0,1),(237,'Democratic Republic of Congo','CD','COD','',0,1),(238,'Zambia','ZM','ZMB','',0,1),(239,'Zimbabwe','ZW','ZWE','',0,1),(242,'Montenegro','ME','MNE','',0,1),(243,'Serbia','RS','SRB','',0,1),(244,'Aaland Islands','AX','ALA','',0,1),(245,'Bonaire, Sint Eustatius and Saba','BQ','BES','',0,1),(246,'Curacao','CW','CUW','',0,1),(247,'Palestinian Territory, Occupied','PS','PSE','',0,1),(248,'South Sudan','SS','SSD','',0,1),(249,'St. Barthelemy','BL','BLM','',0,1),(250,'St. Martin (French part)','MF','MAF','',0,1),(251,'Canary Islands','IC','ICA','',0,1),(252,'Ascension Island (British)','AC','ASC','',0,1),(253,'Kosovo, Republic of','XK','UNK','',0,1),(254,'Isle of Man','IM','IMN','',0,1),(255,'Tristan da Cunha','TA','SHN','',0,1),(256,'Guernsey','GG','GGY','',0,1),(257,'Jersey','JE','JEY','',0,1),(258,'klkl','45','55',NULL,1,0),(260,'Europe','EU','EU2',NULL,1,1);
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon`
--

DROP TABLE IF EXISTS `coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon` (
  `vendor_coupon_id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int DEFAULT NULL,
  `coupon_name` varchar(255) DEFAULT NULL,
  `coupon_code` varchar(255) DEFAULT NULL,
  `coupon_type` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `minimum_purchase_amount` decimal(10,2) DEFAULT NULL,
  `maximum_purchase_amount` decimal(10,2) DEFAULT NULL,
  `coupon_conjunction` int DEFAULT '0',
  `coupon_applies_sales` int DEFAULT '0',
  `email_restrictions` varchar(255) DEFAULT NULL,
  `applicable_for` int DEFAULT NULL,
  `free_shipping` int DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `max_user_per_coupon` int DEFAULT NULL,
  `no_of_time_coupon_valid_user` int DEFAULT NULL,
  `all_qualifying_items_apply` int DEFAULT '0',
  `applied_cart_items_count` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`vendor_coupon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon_product_category`
--

DROP TABLE IF EXISTS `coupon_product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon_product_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vendor_coupon_id` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `reference_id` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_CouponProductCategory_tbl_Coupon_foreignKey` (`vendor_coupon_id`),
  CONSTRAINT `fk_tbl_CouponProductCategory_tbl_Coupon_foreignKey` FOREIGN KEY (`vendor_coupon_id`) REFERENCES `vendor_coupon` (`vendor_coupon_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon_product_category`
--

LOCK TABLES `coupon_product_category` WRITE;
/*!40000 ALTER TABLE `coupon_product_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon_product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon_usage`
--

DROP TABLE IF EXISTS `coupon_usage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon_usage` (
  `coupon_usage_id` int NOT NULL AUTO_INCREMENT,
  `coupon_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `order_id` int NOT NULL,
  `discount_amount` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`coupon_usage_id`),
  KEY `fk_tbl_coupon_usage_tbl_order_foreignKey` (`order_id`),
  KEY `fk_tbl_coupon_usage_tbl_vendor_coupon_foreignKey` (`coupon_id`),
  CONSTRAINT `fk_tbl_coupon_usage_tbl_coupon_foreignKey` FOREIGN KEY (`coupon_id`) REFERENCES `coupon` (`vendor_coupon_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_coupon_usage_tbl_order_foreignKey` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon_usage`
--

LOCK TABLES `coupon_usage` WRITE;
/*!40000 ALTER TABLE `coupon_usage` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon_usage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon_usage_product`
--

DROP TABLE IF EXISTS `coupon_usage_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon_usage_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `coupon_usage_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `order_product_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `discount_amount` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_coupon_usage_product_tbl_order_foreignKey` (`order_id`),
  KEY `fk_tbl_coupon_usage_product_tbl_coupon_usage` (`coupon_usage_id`),
  CONSTRAINT `fk_tbl_coupon_usage_product_tbl_coupon_usage` FOREIGN KEY (`coupon_usage_id`) REFERENCES `coupon_usage` (`coupon_usage_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_coupon_usage_product_tbl_order_foreignKey` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon_usage_product`
--

LOCK TABLES `coupon_usage_product` WRITE;
/*!40000 ALTER TABLE `coupon_usage_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon_usage_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currency` (
  `currency_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `code` varchar(32) DEFAULT NULL,
  `symbol_left` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `symbol_Right` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `decimal_place` decimal(5,0) DEFAULT NULL,
  `value` float(15,2) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`currency_id`),
  KEY `currency_id` (`currency_id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES (46,'Dollar','USD','$',NULL,NULL,73.00,1,'2019-02-17 22:18:16','2019-08-10 09:55:28',NULL,NULL),(57,'Rupees','INR','₹',NULL,NULL,1.00,1,'2019-03-20 01:57:14','2019-08-21 10:34:07',NULL,NULL),(65,'EURO','EU','1',NULL,NULL,66.00,1,'2019-08-20 08:56:57','2019-08-20 08:57:04',NULL,NULL);
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(512) DEFAULT NULL,
  `last_name` varchar(512) DEFAULT NULL,
  `username` varchar(512) NOT NULL,
  `email` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `city` varchar(128) DEFAULT NULL,
  `pincode` varchar(6) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `avatar_path` tinytext,
  `mail_status` int DEFAULT NULL,
  `delete_flag` int DEFAULT '0',
  `customer_group_id` int DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `newsletter` int DEFAULT NULL,
  `safe` int DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `zone_id` varchar(255) DEFAULT NULL,
  `local` varchar(255) DEFAULT NULL,
  `oauth_data` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `forget_password_key` varchar(255) DEFAULT NULL,
  `locked_on` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'demo',NULL,'demo@gmail.com','demo@gmail.com','$2b$10$/7MmJDnJ7FcYsOOAnIQwPeevZQPlP9TqjMm92ZC/kahsJFrnfMGs2','9876543870',NULL,NULL,NULL,NULL,NULL,NULL,1,0,1,'2020-12-03 20:33:14',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,'2020-07-15 12:10:43','2020-12-03 20:33:14',NULL,NULL),(2,'MARCO','ROSSI','marcorossi@gmai.com','marcorossi@gmai.com','$2b$10$etCzky0S1pAEuVFeynKW1OPdiZ8UQpFX5fGbdWl.ZOjjYfLFR.c9a','8373646473838',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,'2021-08-11 18:21:32','2021-08-11 20:10:33',NULL,NULL),(3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com','$2b$10$5iNyM5gN2fFXn6DV.U7aYu22qqE1RAWzlqyNV1PcPK/tlhM.yAUSW','343242424',NULL,NULL,NULL,NULL,NULL,NULL,1,0,1,'2021-08-24 09:57:23',NULL,NULL,'::1',NULL,NULL,NULL,1,NULL,NULL,'2021-08-11 18:22:07','2021-08-24 09:57:23',NULL,NULL),(4,'Carlo',NULL,'casddas@gmail.com','casddas@gmail.com','$2b$10$YreuHcn92iJVlOFT9fCyY.ounyBLj.OhpJppxIhu28yAQ/nlfn.Ra','23242423',NULL,NULL,NULL,NULL,NULL,NULL,1,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,'2021-08-24 09:43:24',NULL,NULL,NULL),(5,'Carlo','iodice','carloiodice9@gmail.com','carloiodice9@gmail.com','$2b$10$eawo8nnkAVyHqJmJ37Cyne4wxYjI0TtGV3JdSjX.ysOewTqj2HQHG','334242',NULL,NULL,NULL,NULL,NULL,NULL,1,0,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,'2021-08-24 09:45:51','2021-08-25 11:21:04',NULL,NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_activity`
--

DROP TABLE IF EXISTS `customer_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_activity` (
  `customer_activity_id` int NOT NULL AUTO_INCREMENT,
  `activity_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`customer_activity_id`),
  KEY `fk_tbl_customer_activity_tbl_customer` (`customer_id`),
  CONSTRAINT `fk_tbl_customer_activity_tbl_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_activity`
--

LOCK TABLES `customer_activity` WRITE;
/*!40000 ALTER TABLE `customer_activity` DISABLE KEYS */;
INSERT INTO `customer_activity` VALUES (1,1,1,NULL,NULL,NULL,'2020-07-15 13:42:20','2020-07-15 13:42:20','loggedIn'),(2,2,1,542,NULL,NULL,'2020-07-15 13:42:37','2020-07-15 13:42:37','productviewed'),(3,1,1,NULL,NULL,NULL,'2020-12-03 20:33:14','2020-12-03 20:33:14','loggedIn'),(4,2,1,542,NULL,NULL,'2020-12-03 20:33:25','2020-12-03 20:33:25','productviewed'),(5,2,1,542,NULL,NULL,'2020-12-03 20:33:48','2020-12-03 20:33:48','productviewed'),(6,2,1,542,NULL,NULL,'2020-12-03 20:34:01','2020-12-03 20:34:01','productviewed'),(7,2,1,555,NULL,NULL,'2020-12-03 20:34:57','2020-12-03 20:34:57','productviewed'),(8,2,1,554,NULL,NULL,'2020-12-03 20:35:22','2020-12-03 20:35:22','productviewed'),(9,1,3,NULL,NULL,NULL,'2021-08-11 19:05:43','2021-08-11 19:05:43','loggedIn'),(10,2,3,558,NULL,NULL,'2021-08-11 19:41:04','2021-08-11 19:41:04','productviewed'),(11,2,3,555,NULL,NULL,'2021-08-11 20:16:38','2021-08-11 20:16:38','productviewed'),(12,2,3,558,NULL,NULL,'2021-08-11 20:17:23','2021-08-11 20:17:23','productviewed'),(13,2,3,558,NULL,NULL,'2021-08-11 20:17:32','2021-08-11 20:17:32','productviewed'),(14,2,3,558,NULL,NULL,'2021-08-11 20:18:39','2021-08-11 20:18:39','productviewed'),(15,2,3,558,NULL,NULL,'2021-08-11 20:20:03','2021-08-11 20:20:03','productviewed'),(16,2,3,554,NULL,NULL,'2021-08-11 20:20:25','2021-08-11 20:20:25','productviewed'),(17,2,3,554,NULL,NULL,'2021-08-11 20:20:35','2021-08-11 20:20:35','productviewed'),(18,2,3,547,NULL,NULL,'2021-08-11 20:24:50','2021-08-11 20:24:50','productviewed'),(19,1,3,NULL,NULL,NULL,'2021-08-24 09:57:23','2021-08-24 09:57:23','loggedIn'),(20,2,3,558,NULL,NULL,'2021-08-24 16:13:05','2021-08-24 16:13:05','productviewed'),(21,2,3,550,NULL,NULL,'2021-08-24 16:13:10','2021-08-24 16:13:10','productviewed'),(22,2,3,552,NULL,NULL,'2021-08-24 16:13:13','2021-08-24 16:13:13','productviewed'),(23,2,3,547,NULL,NULL,'2021-08-24 16:13:17','2021-08-24 16:13:17','productviewed');
/*!40000 ALTER TABLE `customer_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_cart`
--

DROP TABLE IF EXISTS `customer_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `option_name` text,
  `option_value_name` varchar(11) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `tire_price` decimal(10,2) DEFAULT NULL,
  `product_option_value_id` varchar(255) DEFAULT NULL,
  `sku_name` varchar(255) DEFAULT NULL,
  `varient_name` varchar(255) DEFAULT NULL,
  `product_varient_option_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_customer_cart_tbl_product_foreignKey` (`product_id`),
  CONSTRAINT `fk_tbl_customer_cart_tbl_product_foreignKey` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_cart`
--

LOCK TABLES `customer_cart` WRITE;
/*!40000 ALTER TABLE `customer_cart` DISABLE KEYS */;
INSERT INTO `customer_cart` VALUES (1,3,558,'dcd',0,9303.00,0.00,NULL,NULL,NULL,'2021-08-11 20:20:01',NULL,'2021-08-11 20:20:20',0.00,NULL,'dscdc','',0);
/*!40000 ALTER TABLE `customer_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_document`
--

DROP TABLE IF EXISTS `customer_document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_document` (
  `customer_document_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `document_status` int DEFAULT '0',
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`customer_document_id`),
  KEY `fk_tbl_customerDocument_tbl_customer_foreignKey` (`customer_id`),
  CONSTRAINT `fk_tbl_customerDocument_tbl_customer_foreignKey` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_document`
--

LOCK TABLES `customer_document` WRITE;
/*!40000 ALTER TABLE `customer_document` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_document` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_group`
--

DROP TABLE IF EXISTS `customer_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `color_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_group`
--

LOCK TABLES `customer_group` WRITE;
/*!40000 ALTER TABLE `customer_group` DISABLE KEYS */;
INSERT INTO `customer_group` VALUES (1,'default','default',1,NULL,NULL,'2020-02-24 09:09:22','2020-04-18 07:23:31','#0000ff'),(2,'Gruppo1','gruppo acquisto 1',1,NULL,NULL,'2021-08-25 11:20:49',NULL,'#8f2f2f');
/*!40000 ALTER TABLE `customer_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_ip`
--

DROP TABLE IF EXISTS `customer_ip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_ip` (
  `customer_ip_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`customer_ip_id`),
  KEY `customer_ip_id` (`customer_ip_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_ip`
--

LOCK TABLES `customer_ip` WRITE;
/*!40000 ALTER TABLE `customer_ip` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_ip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_transaction`
--

DROP TABLE IF EXISTS `customer_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_transaction` (
  `customer_transaction_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `order_id` int NOT NULL,
  `description` text,
  `amount` decimal(15,4) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`customer_transaction_id`),
  KEY `fk_customer_transaction_order1` (`order_id`),
  KEY `fk_customer_transaction_customer1` (`customer_id`),
  KEY `customer_transaction_id` (`customer_transaction_id`),
  CONSTRAINT `fk_customer_transaction_customer1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_customer_transaction_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_transaction`
--

LOCK TABLES `customer_transaction` WRITE;
/*!40000 ALTER TABLE `customer_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_wishlist`
--

DROP TABLE IF EXISTS `customer_wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_wishlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_option_value_id` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `fk_wishlist_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_wishlist_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_wishlist`
--

LOCK TABLES `customer_wishlist` WRITE;
/*!40000 ALTER TABLE `customer_wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_wishlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_allocation`
--

DROP TABLE IF EXISTS `delivery_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_allocation` (
  `delivery_allocation_id` int NOT NULL AUTO_INCREMENT,
  `vendor_order_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `delivery_person_id` int DEFAULT NULL,
  `delivery_order_status_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`delivery_allocation_id`),
  KEY `FK_39e5842ba09b7ca3db20272b920` (`vendor_order_id`),
  KEY `FK_4eeb3b744eb7b40a361aaa84715` (`order_id`),
  KEY `FK_71863a43246b08e37ed2d27d5e8` (`delivery_person_id`),
  CONSTRAINT `FK_39e5842ba09b7ca3db20272b920` FOREIGN KEY (`vendor_order_id`) REFERENCES `vendor_orders` (`vendor_order_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_4eeb3b744eb7b40a361aaa84715` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_71863a43246b08e37ed2d27d5e8` FOREIGN KEY (`delivery_person_id`) REFERENCES `delivery_person` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_allocation`
--

LOCK TABLES `delivery_allocation` WRITE;
/*!40000 ALTER TABLE `delivery_allocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_location`
--

DROP TABLE IF EXISTS `delivery_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_location` (
  `delivery_location_id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int DEFAULT NULL,
  `zip_code` int DEFAULT NULL,
  `location_name` varchar(255) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`delivery_location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_location`
--

LOCK TABLES `delivery_location` WRITE;
/*!40000 ALTER TABLE `delivery_location` DISABLE KEYS */;
INSERT INTO `delivery_location` VALUES (24,0,798789,'~test~',NULL,NULL,'2020-03-05 06:04:11',NULL),(26,0,798789,'~test1~',NULL,NULL,'2020-03-05 06:20:13',NULL),(27,0,111111,'~chenai~',NULL,NULL,'2020-03-05 06:36:40','2020-03-05 06:45:51');
/*!40000 ALTER TABLE `delivery_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_location_to_location`
--

DROP TABLE IF EXISTS `delivery_location_to_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_location_to_location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `delivery_location_id` int NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `delivery_location_id` (`delivery_location_id`),
  CONSTRAINT `delivery_location_to_location_ibfk_1` FOREIGN KEY (`delivery_location_id`) REFERENCES `delivery_location` (`delivery_location_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_delivery_location_tbl_delivery_location_to_location` FOREIGN KEY (`delivery_location_id`) REFERENCES `delivery_location` (`delivery_location_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_location_to_location`
--

LOCK TABLES `delivery_location_to_location` WRITE;
/*!40000 ALTER TABLE `delivery_location_to_location` DISABLE KEYS */;
INSERT INTO `delivery_location_to_location` VALUES (21,24,'test',NULL,'2020-03-05 06:04:12',NULL,'2020-03-05 06:04:12'),(23,26,'test1',NULL,'2020-03-05 06:20:14',NULL,'2020-03-05 06:20:14'),(26,27,'chenai',NULL,'2020-03-05 06:45:53',NULL,'2020-03-05 06:45:53');
/*!40000 ALTER TABLE `delivery_location_to_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_person`
--

DROP TABLE IF EXISTS `delivery_person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_person` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `delete_flag` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `all_location` int DEFAULT '0',
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_person`
--

LOCK TABLES `delivery_person` WRITE;
/*!40000 ALTER TABLE `delivery_person` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_person_to_location`
--

DROP TABLE IF EXISTS `delivery_person_to_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_person_to_location` (
  `delivery_person_to_location_id` int NOT NULL AUTO_INCREMENT,
  `delivery_person_id` int DEFAULT NULL,
  `delivery_location_id` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`delivery_person_to_location_id`),
  KEY `fk_tbl_deliveryPersonToLocation_tbl_deliveryPerson_foreignKey` (`delivery_person_id`),
  KEY `fk_tbl_deliveryPersonToLocation_tbl_deliveryLocation_foreignKey` (`delivery_location_id`),
  CONSTRAINT `fk_tbl_deliveryPersonToLocation_tbl_deliveryLocation_foreignKey` FOREIGN KEY (`delivery_location_id`) REFERENCES `delivery_location` (`delivery_location_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_deliveryPersonToLocation_tbl_deliveryPerson_foreignKey` FOREIGN KEY (`delivery_person_id`) REFERENCES `delivery_person` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_person_to_location`
--

LOCK TABLES `delivery_person_to_location` WRITE;
/*!40000 ALTER TABLE `delivery_person_to_location` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_person_to_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_status`
--

DROP TABLE IF EXISTS `delivery_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_status` (
  `delivery_status_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `color_code` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `priority` int DEFAULT NULL,
  PRIMARY KEY (`delivery_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_status`
--

LOCK TABLES `delivery_status` WRITE;
/*!40000 ALTER TABLE `delivery_status` DISABLE KEYS */;
INSERT INTO `delivery_status` VALUES (1,'allocated','#45678',1,NULL,NULL,NULL,NULL,1),(2,'outfordelivery','#46576',1,NULL,NULL,NULL,NULL,1),(3,'doorclosed','#46667',1,NULL,NULL,NULL,NULL,1),(4,'delivered','#95049',1,NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `delivery_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_template`
--

DROP TABLE IF EXISTS `email_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `email_template` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shortname` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_template`
--

LOCK TABLES `email_template` WRITE;
/*!40000 ALTER TABLE `email_template` DISABLE KEYS */;
INSERT INTO `email_template` VALUES (1,'Register Content','Registration Successfully','Dear {name},<br/><br/> <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> Thank you for expressing your interest and registering with Spurtcommerce, the faster roadway for a smarter eCommerce drive.   </p>',1,'2019-08-03 12:46:18','2019-08-03 12:46:18',NULL,NULL),(2,'Forgot Password Content','Forgot Password','Dear {name},<br/><br/>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> Your new Password is :  {xxxxxx}  </p>',1,'2019-08-03 12:46:18','2019-08-03 12:46:18',NULL,NULL),(3,'Contact Content','ContactUs','Dear Admin,<br/><br/>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> You just received an enquiry from {name} and the details are here: <br> Details: <br> Email: {email}, <br> Phone Number : {phoneNumber}, <br> Message : {message}.  </p>',1,'2019-08-03 12:46:18','2019-08-03 12:46:18',NULL,NULL),(4,'Create Customer Content','User Login','Dear {name},<br/><br/>    We are glad to inform you that Spurtcommerce  has added you as Customer.Here are your User Credentials for logging into the Application <br>     <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;\'>  User ID : {username}</p>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;\'>  Password : {password}</p> <br/>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> You may login using the above Email Id and Password. </p>',1,'2019-08-03 12:46:18','2019-08-03 12:46:18',NULL,NULL),(5,'Customer Order Content','Details of your recent Order','Dear {name},        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#078e05;font-weight:400;text-align:left;font-size:16px;line-height:1.5rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> Order successfully placed.        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#000;font-weight:300;text-align:left;font-size:12px;line-height:1.2rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> You have successfully placed an order for customization services. Kindly find the following details on the placed order.    </tr></tbody></table></td></tr> ',1,'2019-08-03 12:46:18','2019-08-03 12:46:18',NULL,NULL),(6,'Admin Mail Content','Congratulations on your recent order','Dear {adminname},        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#078e05;font-weight:400;text-align:left;font-size:16px;line-height:1.5rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> A new order has been placed.         </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#000;font-weight:300;text-align:left;font-size:12px;line-height:1.2rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> The new order {orderId} from the Customer {name} has been successfully placed. Kindly find the following details on the placed order.    </tr> </tbody></table></td> </tr> ',1,'2019-08-03 12:46:18','2019-08-03 12:46:18',NULL,NULL),(7,'Create admin user Content','Login credential',' <p>Dear {name}, <br />&nbsp;</p><p>We are glad to inform you that Spurtcommerce has added you as admin User.Here are your User Credentials for logging into the Application</p><p>User ID : {username}</p><p>Password : {password}</p><p>&nbsp;</p><p>You may login using the above Email Id and Password.</p><p>&nbsp;</p>',1,'2019-08-03 12:46:18','2019-08-03 12:46:18',NULL,NULL),(8,'service Enquiry','User enquiry for service','<p>Dear Admin,<br />&nbsp;</p><p>Some one gave service enquiry for <u>{title}</u>,</p><p><i>Comments</i> : {comments}</p><b><i>User Details:</i></b><br>Name: {name},<br> Email: {email},<br>mobile: {mobile}<br><p>&nbsp;</p><p>&nbsp;</p>',1,'2019-08-03 12:57:30','2019-08-03 12:57:30',NULL,NULL),(9,'Oauth register mail','Oauth register mail','Dear {name},<br/><br/>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> Thankyou for showing your interest in SpurtCommerce, your temporary password for next time login is :  {xxxxxx} or you can login through Oauth </p>',1,'2019-08-08 00:00:00','2019-08-08 18:45:15',NULL,NULL),(10,'Oauth register mail','Oauth register mail','Dear {name},<br/><br/>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> Thankyou for showing your interest in SpurtCommerce, your temporary password for next time login is :  {xxxxxx} or you can login through Oauth. </p>',1,'2019-08-08 00:00:00','2019-08-08 18:45:17',NULL,NULL),(11,'vendor Registration','vendor Registration','Dear {name},<br/><br/> <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> Thank you for expressing your interest and registering with Spurtcommerce for selling your products.   </p>',1,'2019-10-23 16:51:58','2019-10-23 16:51:58',NULL,NULL),(12,'admin notification for vendor registration','admin notification for vendor registration','Dear Admin,<br/><br/> <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> {vendorName} registered with Spurtcommerce for selling their products, please approve that vendor in admin portal for allowing their further activity in spurtcommerce vendor portal.   </p>',1,'2019-10-23 16:51:58','2019-10-23 16:51:58',NULL,NULL),(13,'vendor creation','vendor creation','Dear {name},<br/><br/>    We are glad to inform you that Spurtcommerce  has added you as Vendor.Here are your User Credentials for logging into the Application <br>     <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;\'>  User ID : {username}</p>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;\'>  Password : {password}</p> <br/>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> You may login using the above Email Id and Password. </p>',1,'2019-10-29 15:54:55','2019-10-29 15:54:55',NULL,NULL),(14,'delivery person creation','you are created as delivery person','Dear {name},<br/><br/>    We are glad to inform you that Vendor {vendorname}  has added you as Delivery Person. You can login with your mobile number.',1,'2019-11-19 14:52:00','2019-11-19 14:52:00',NULL,NULL),(15,'vendor login Request','vendor login Request','Dear {name},<br/><br/>  {sitename}  approved you as a Vendor.Please click on the below link for login into vendor portal.<br />\r\n<p><a href=\"https://www.spurtcart.com\" target=\"_blank\">https://www.spurtcart.com</a></p><br />\r\n<p>If you have problems following the link, please copy and paste it into your browser to login into vendor portal.</p><br />\r\n',1,'2019-11-21 12:10:48','2019-11-21 12:10:48',NULL,NULL),(16,'product approval mail','product approval mail','Dear {name},<br/><br/>  {sitename}  approved your product - {productname}.Your product is ready for buying.Enjoy!<br />',1,'2019-11-29 07:06:02','2019-11-29 07:06:02',NULL,NULL),(17,'Email posting question','Email posting question','<p>Dear {name},<br />&nbsp;</p><p>Some one posted question for your product <u>{title}</u>,</p><p><i>Question</i> : {question}</p><b><i>User Name:</i></b><br>Name: {username}<p>&nbsp;</p><p>&nbsp;</p>',1,'2020-03-21 11:02:56','2020-03-21 11:02:56',NULL,NULL),(18,'Email posting answer','Email posting answer','<p>Dear {name},<br />&nbsp;</p><p>Some one posted answer for your product <u>{title}</u>,<br></p><p><i>Question</i> : {question}</p></p><p><i>Answer</i> : {answer}</p><br><b><i>User Name:</i></b><br>Name: {username}<p>&nbsp;</p><p>&nbsp;</p>',1,'2020-03-21 11:03:00','2020-03-21 11:03:00',NULL,NULL),(19,'Report Abuse','Report Abuse','<p>Dear {name},<br />&nbsp;</p><p>{username} posted Report Abuse for your product <u>{title}</u>,<br></p><p><i>Question</i> : {question}</p></p><p><i>Answer</i> : {answer}</p><br>',1,'2020-04-20 17:56:35','2020-04-20 17:56:35',NULL,NULL),(20,'updated cancel request status','Updation mail for your cancel order request','Dear {name},<br/><br/> <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> Your request for cancelling ordered product: {productname} is {status} by admin.   </p>',1,'2020-05-08 12:25:57','2020-05-08 12:25:57',NULL,NULL),(21,'order status change update',' Order Status change update','Hello {name},<br/><br/> <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> Here is a new update on your recent order on \'Spurt Cart\'.\r\nThe status of the product {title} in the order number {order} is -  \'{status}\' \r\nYou can view the complete details of your Order status, in the \'My Order History\' section of your Customer Account at Spurt Cart. </p>',1,'2020-05-19 16:15:58','2020-05-19 16:15:58',NULL,NULL),(22,'quotation request mail','quotation request mail','Dear {name},<br/><br/> <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> Here is a new Quotation for your product {title} from customer -{customername}. </p>',1,'2020-05-27 09:49:04','2020-05-27 09:49:04',NULL,NULL),(23,'Forgot password link','Forgot password link','Dear {name}, \r\n\r\n<p>click the below link.</p>\r\n\r\n<p>{link}.</p>\r\n\r\n<p> for reset your password </p>          \r\n<p>Regards,</p> \r\n  \r\n<p>The Spurt Commerce Team</p>',1,'2021-06-10 11:29:39','2021-06-10 11:29:39',NULL,NULL),(24,'Invoice mail','Invoice mail','Dear {name},<br/><br/> <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> Here is an invoice attachment for this purchased order - {orderPrefixId}.   </p>',1,'2021-06-10 11:30:18','2021-06-10 11:30:18',NULL,NULL);
/*!40000 ALTER TABLE `email_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `geo_zone`
--

DROP TABLE IF EXISTS `geo_zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `geo_zone` (
  `geo_zone_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`geo_zone_id`),
  KEY `geo_zone_id` (`geo_zone_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `geo_zone`
--

LOCK TABLES `geo_zone` WRITE;
/*!40000 ALTER TABLE `geo_zone` DISABLE KEYS */;
/*!40000 ALTER TABLE `geo_zone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `job_id` int NOT NULL AUTO_INCREMENT,
  `job_title` varchar(255) DEFAULT NULL,
  `job_description` text,
  `salary_type` varchar(255) DEFAULT NULL,
  `job_location` text,
  `contact_person_name` varchar(255) DEFAULT NULL,
  `contact_person_email` varchar(255) DEFAULT NULL,
  `contact_person_mobile` bigint DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`job_id`),
  KEY `job_id` (`job_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language` (
  `language_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `code` varchar(5) DEFAULT NULL,
  `image` text,
  `image_path` text,
  `locale` varchar(255) DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`language_id`),
  KEY `language_id` (`language_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` VALUES (57,'English','eng','Img_1557133081101.png','language/',NULL,1,1,'2019-05-06 03:58:01','2020-02-03 11:44:52',NULL,NULL),(59,'French','fr','Img_1557569207176.png','language/',NULL,1,1,'2019-05-11 05:06:47',NULL,NULL,NULL);
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_attempts`
--

DROP TABLE IF EXISTS `login_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_attempts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `ip_address` varchar(255) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_attempts`
--

LOCK TABLES `login_attempts` WRITE;
/*!40000 ALTER TABLE `login_attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_log`
--

DROP TABLE IF EXISTS `login_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `ip_address` varchar(255) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_log`
--

LOCK TABLES `login_log` WRITE;
/*!40000 ALTER TABLE `login_log` DISABLE KEYS */;
INSERT INTO `login_log` VALUES (1,1,'demo@gmail.com','demo','::1','2020-07-15 13:42:20',NULL,NULL,NULL),(2,1,'demo@gmail.com','demo','::1','2020-07-15 14:27:18',NULL,NULL,NULL),(3,1,'demo@gmail.com','demo','::1','2020-12-03 20:33:14',NULL,NULL,NULL),(4,3,'cacca@gmail.com','carlo','::1','2021-08-11 19:05:43',NULL,NULL,NULL),(5,3,'cacca@gmail.com','carlo','::1','2021-08-11 19:34:30',NULL,NULL,NULL),(6,3,'cacca@gmail.com','carlo','::1','2021-08-24 09:57:23',NULL,NULL,NULL);
/*!40000 ALTER TABLE `login_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturer` (
  `manufacturer_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`manufacturer_id`),
  KEY `manufacturer_id` (`manufacturer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (23,'lenovo','Img_1551441402650.jpeg','manufacturer/',2,0,NULL,NULL,'2019-03-01 05:56:42','2019-06-10 00:26:37'),(41,'DELL','Img_1552986470668.png','manufacturer/',2,0,NULL,NULL,'2019-03-19 04:07:50','2019-07-25 04:58:38'),(63,'SAMSUNG','Img_1557142453946.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:34:13','2019-05-06 06:35:38'),(65,'SONY','Img_1557142513992.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:35:13','2019-05-06 06:47:51'),(67,'TRESEMME','Img_1557142625878.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:37:05',NULL),(68,'AXE','Img_1557142652359.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:37:32',NULL),(69,'GUESS','Img_1557142692156.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:38:12','2019-05-13 04:58:09'),(70,'DOLBY','Img_1557820520619.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:38:28','2019-05-14 02:55:20'),(71,'CLASSMATE','Img_1557820597638.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:38:49','2019-05-14 02:57:12'),(72,'BOSS','Img_1557142753865.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:39:13','2019-06-06 00:23:07'),(73,'PHILIPS','Img_1557142776597.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:39:36',NULL),(74,'PARAGON','Img_1557142795787.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:39:55',NULL),(75,'BATA','Img_1557142813929.jpeg','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:40:13',NULL),(76,'ADDIDAS','Img_1557142832027.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:40:32',NULL),(77,'GODREJ','Img_1557142854831.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:40:54',NULL),(78,'APPLE','Img_1557142875329.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:41:15',NULL),(79,'RED MI','Img_1557142894352.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:41:34',NULL),(80,'OPPO','Img_1557142914475.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:41:54',NULL),(81,'MAYTAG','Img_1557568577085.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:42:12','2019-05-11 04:56:17'),(82,'RAMRAJ','Img_1557142957997.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:42:37',NULL),(83,'LEVIS','Img_1557142984015.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:43:04',NULL),(84,'PATHANJALI','Img_1557143005785.jpeg','manufacturer/',4,1,NULL,NULL,'2019-05-06 06:43:25',NULL),(87,'UDHAIYAM','Img_1557143066637.jpeg','manufacturer/',4,1,NULL,NULL,'2019-05-06 06:44:26',NULL),(88,'ACHI','Img_1557143084492.png','manufacturer/',4,1,NULL,NULL,'2019-05-06 06:44:44',NULL),(89,'BRITANIA','Img_1557143109064.png','manufacturer/',4,1,NULL,NULL,'2019-05-06 06:45:09',NULL),(90,'HAMAM','Img_1557143204374.png','manufacturer/',4,0,NULL,NULL,'2019-05-06 06:46:44','2019-05-11 00:13:27'),(91,'HATSUN','Img_1557143220906.jpeg','manufacturer/',4,1,NULL,NULL,'2019-05-06 06:47:00',NULL),(92,'AAVIN','Img_1557143239110.png','manufacturer/',4,0,NULL,NULL,'2019-05-06 06:47:19','2019-05-11 04:56:37'),(93,'HP','Img_1557143358764.png','manufacturer/',2,1,NULL,NULL,'2019-05-06 06:49:18','2019-08-27 12:52:46'),(94,'OTTO','Img_1557143401131.png','manufacturer/',2,0,NULL,NULL,'2019-05-06 06:50:01','2019-08-27 13:07:54'),(95,'MOTO','Img_1566910028285.','manufacturer/',2,0,NULL,NULL,'2019-05-06 07:05:11','2019-08-27 12:47:09');
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=281 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1546513939916,'CreateUserTable1546513939916'),(2,1546516990326,'CreateUserGroupTable1546516990326'),(3,1546521833384,'CreateUserRelationToUserGroupTable1546521833384'),(4,1546522725201,'CreateCategoryTable1546522725201'),(5,1546523068121,'CreateZoneToGeoZoneTable1546523068121'),(6,1546523201059,'CreateCustomerGroupTable1546523201059'),(7,1546523577052,'CreateCustomerIpTable1546523577052'),(8,1546523725119,'CreateGeoZoneTable1546523725119'),(9,1546523802480,'CreateBannerGroupTable1546523802480'),(10,1546524333028,'CreateCurrencyTable1546524333028'),(11,1546524561001,'CreateCustomerTable1546524561001'),(12,1546525248338,'CreateAddessTable1546525248338'),(13,1546525786783,'CreateBannerImageTable1546525786783'),(14,1546525833396,'CreateStockStatusTable1546525833396'),(15,1546526076621,'CreateBannerTable1546526076621'),(16,1546526936010,'CreateBannerImageDescriptionTable1546526936010'),(17,1546527306595,'CreateCustomerTransactionTable1546527306595'),(18,1546528787878,'CreateProductTable1546528787878'),(19,1546529746397,'CreateProductRelatedTable1546529746397'),(20,1546529906290,'CreateManufacturerTable1546529906290'),(21,1546530096773,'CreateProductTagTable1546530096773'),(22,1546578299514,'CreateLanguageTable1546578299514'),(23,1546578412979,'AddProductRelatedRelationToProductTable1546578412979'),(24,1546578790576,'CreateCategoryDescriptionTable1546578790576'),(25,1546579410193,'CreateProductImageTable1546579410193'),(26,1546579597970,'CreateEmailTemplateTable1546579597970'),(27,1546579614441,'CreateProductDescriptionTable1546579614441'),(28,1546579884423,'CreateProductToCategoryTable1546579884423'),(29,1546580085881,'CreateCountryTable1546580085881'),(30,1546580179314,'CreateProductDiscountTable1546580179314'),(31,1546580427531,'CreateProductRatingTable1546580427531'),(32,1546580612161,'CreateZoneTable1546580612161'),(33,1546580872313,'CreateOrderProductTable1546580872313'),(34,1546580970382,'CreateSettingsTable1546580970382'),(36,1546581429998,'CreateOrderTotalTable1546581429998'),(37,1546581683040,'CreatePageGroupTable1546581683040'),(38,1546581933917,'CreateOrderHistoryTable1546581933917'),(39,1546582132870,'CreateOrderStatusTable1546582132870'),(40,1546582513520,'CreatePageTable1546582513520'),(41,1546585163896,'AddProductImageRelationToProductTable1546585163896'),(42,1546585326281,'AddProductDiscountRelationToProductTable1546585326281'),(43,1546585460413,'AddProductRatingRelationToProductTable1546585460413'),(44,1546585572765,'AddPageRelationToPageGroupTable1546585572765'),(45,1546586351105,'CreateZoneCountryRelationToZoneGeoTable1546586351105'),(46,1546587376381,'CreateOrderTable1546587376381'),(47,1546590433005,'AddPoductToCategoryRelationToProductTable1546590433005'),(48,1546590872444,'AddPoductToCategoryRelationToCategoryTable1546590872444'),(49,1546592870823,'AddCustomerTransactionRelationToOrderTable1546592870823'),(50,1546593012207,'AddCustomerTransactionRelationToCustomerTable1546593012207'),(51,1546593289549,'AddOrderProductRelationToProductTable1546593289549'),(52,1546593359310,'AddOrderProductRelationToOrderTable1546593359310'),(53,1546593427323,'CreateCategoryRelationToCategoryDescriptionTable1546593427323'),(56,1546594100673,'CreatebannerRelationToBannerImageDescriptionTable1546594100673'),(57,1546594184432,'AddOrderHistoryRelationToOrderTable1546594184432'),(58,1546594262644,'AddOrderHistoryRelationToOrderStatusTable1546594262644'),(59,1546594411489,'CreateBannerImageRelationToBannerImageDescriptionTable1546594411489'),(60,1546594752832,'AddOrderRelationToCustomerTable1546594752832'),(61,1546594852304,'AddOrderRelationToCurrencyTable1546594852304'),(62,1546602183498,'CreateBannerGroupRelationToBannerTable1546602183498'),(63,1549968165253,'CreateOrderLogTable1549968165253'),(64,1549975268085,'CreateLoginLogTable1549975268085'),(65,1549977253184,'CreateCustomerWishlistTable1549977253184'),(66,1549978070935,'CreateAccessTokenTable1549978070935'),(67,1549978269406,'CreateContactTable1549978269406'),(68,1552371397992,'AddCustomerWishlistRelationToCustomerTable1552371397992'),(69,1552371852472,'AddCustomerWishlistRelationToProductTable1552371852472'),(70,1552376547486,'CreateProductViewLogTable1552376547486'),(71,1552886376079,'CreateCategoryPathTable1552886376079'),(78,1554980920462,'CreateProductSpecialTable1554980920462'),(79,1555504622184,'AddColumnInCustomer1555504622184'),(80,1555507207067,'AddColumnInOrder1555507207067'),(81,1557134963328,'AddColumnInProductRating1557134963328'),(82,1558003725620,'AddColumnInOrderLog1558003725620'),(83,1558005767816,'AddColumnInOrderProduct1558005767816'),(84,1560768471191,'CreateServiceTable1560768471191'),(85,1560768589500,'CreateServiceEnquiryTable1560768589500'),(86,1560768640645,'CreateServiceImageTable1560768640645'),(87,1560768709027,'CreateServiceCategoryTable1560768709027'),(88,1560768753723,'CreateServiceCategoryPathTable1560768753723'),(89,1560768793478,'CreateServiceToCategoryTable1560768793478'),(90,1560773355102,'AddRelationToServiceTable1560773355102'),(91,1560937885319,'AddRelationEnquiryToServiceTable1560937885319'),(92,1561108919611,'CreatePaypalOrderTable1561108919611'),(93,1561109413675,'CreatePaypalOrderTransactionTable1561109413675'),(94,1561786420039,'AddRelationWishlistToProductTable1561786420039'),(95,1561967809283,'AlterColumnTable1561967809283'),(96,1562234808237,'AddRelationProductionOptionToProductTable1562234808237'),(97,1562831060364,'AlterCurrencyTable1562831060364'),(98,1563174105812,'CreateBlogTable1563174105812'),(99,1563347331461,'CreateJobsTable1563347331461'),(100,1565087039728,'DropFKforOrderCustomer1565087039728'),(101,1565606134069,'AddColumnInOrderTable1565606134069'),(102,1565682493625,'AddColumnInUser1565682493625'),(103,1565781113424,'AltercolumnInUser1565781113424'),(104,1565852482174,'AlterLoginLogTable1565852482174'),(105,1565856125812,'AlterProductColumn1565856125812'),(106,1566206489111,'CreateIndexProductRelatedTable1566206489111'),(107,1566470391895,'AlterColumnInRating1566470391895'),(108,1566539130608,'AltercolumnInproductoption1566539130608'),(109,1568280714656,'AlterServiceColumn1568280714656'),(110,1569577082237,'AddColumnInProductTable1569577082237'),(111,1569838152744,'AddColumnInOrderLog1569838152744'),(112,1571735617882,'AddColumnInCustomerGroup1571735617882'),(113,1571736071528,'CreateCustomerActivityTable1571736071528'),(114,1571736086250,'CreateActivityTable1571736086250'),(115,1571738395880,'CreateVendorTable1571738395880'),(116,1571738416321,'CreateVendorProductTable1571738416321'),(117,1571738429508,'CreateVendorCategoryTable1571738429508'),(118,1571749863667,'CreateCategoryCommissionTable1571749863667'),(119,1571751199457,'CreateVendorGlobalSettingTable1571751199457'),(120,1573823878115,'CreateProductPriceLogTable1573823878115'),(121,1574085467312,'CreateDeliveryPersonTable1574085467312'),(122,1574401863885,'AddColumnInOrderStatus1574401863885'),(123,1574661760239,'PriceUpdateFileLog1574661760239'),(124,1574752546404,'AddColumnInProductPriceLog1574752546404'),(125,1576760717944,'CreateVendorOrdersTable1576760717944'),(126,1576763624639,'CreateVendorOrderProductsTable1576763624639'),(127,1577096247706,'CreateVendorOrderStatusTable1577096247706'),(128,1577168888697,'CreateDeliveryAllocationTable1577168888697'),(129,1577193139306,'CreateDeliveryStatusTable1577193139306'),(130,1577360407651,'CreateVendorOrderLogTable1577360407651'),(131,1578647288465,'CreateDeliveryLocationTable1578647288465'),(132,1578990577479,'AddTrackingColumnInOrderTable1578990577479'),(133,1578991869543,'CreateDeliveryPersonToLocationTable1578991869543'),(134,1579597454700,'AddColumnsInVendorOrders1579597454700'),(135,1579519310557,'CreateVendorOrderArchiveTable1579519310557'),(136,1580295727829,'CreateVendorOrderArchiveLogTable1580295727829'),(137,1579941746149,'AddColumnInVendorOrdersTable1579941746149'),(138,1580799162301,'CreateCustomerDocumentTable1580799162301'),(139,1581419924612,'CreatePaymentTable1581419924612'),(140,1581420780474,'CreatePaymentItemsTable1581420780474'),(141,1581421977783,'CreateVendorPaymentTable1581421977783'),(142,1581586440986,'AddColumnInVendorOrderArchive1581586440986'),(143,1581586476576,'AddColumnInVendorOrderArchiveLog1581586476576'),(144,1581600070078,'AddColumnInPriceUpdateFileLog1581600070078'),(145,1581672707891,'AddDeliveryLocationToLocation1581672707891'),(146,1581673408519,'AddColumnInVendorProduct1581673408519'),(147,1581674795492,'AddColumnInOrder1581674795492'),(148,1581675647556,'AddColumnInVendorTable1581675647556'),(149,1581676736347,'CreateRazorpayOrderTable1581676736347'),(150,1581677738757,'CreateRazorpayOrderTransactionTable1581677738757'),(151,1581678039045,'AddColumnInVendorOrderLog1581678039045'),(152,1581679252934,'AddServiceChargesColumnInProduct1581679252934'),(153,1581679936336,'AddColumnInDeliveryPerson1581679936336'),(154,1581680192125,'AddColumnInCategory1581680192125'),(155,1581948133661,'CreateVendorCouponTable1581948133661'),(156,1581949200628,'CreateVendorCouponProductCategoryTable1581949200628'),(157,1581399473295,'CreateTaxTable1581399473295'),(158,1582177223557,'AddColumnInOrderProductTable1582177223557'),(159,1582183277124,'CreateOrderProductLogTable1582183277124'),(160,1582207388417,'AddColumnInTaxColumnInProduct1582207388417'),(161,1582207440112,'AddColumnInOrderProductTable1582207440112'),(162,1582265041245,'CreateCustomerCartTable1582265041245'),(163,1582355542896,'AlterColumnModelInOrderProductLog1582355542896'),(164,1582355584324,'AlterColumnOrderProductPreIdInOrderProduct1582355584324'),(165,1582551346241,'AlterCustomerCartTable1582551346241'),(166,1582717005161,'CreateCouponUsageTable1582717005161'),(167,1582717076598,'CreateCouponUsageProduct1582717076598'),(168,1582805439146,'AlterColumnInVendorCoupon1582805439146'),(169,1582806345058,'AddLastLoginInDeliveryPerson1582806345058'),(170,1582888041707,'AlterColumnInProductPriceLog1582888041707'),(171,1582898256691,'AddColumnInOrderProduct1582898256691'),(172,1583411982211,'CreateBlogRelatedTable1583411982211'),(173,1583905968298,'AlterColumnInProductPriceLogTable1583905968298'),(174,1584004496240,'AddColumnInOrderTable1584004496240'),(175,1584011252176,'AddColumnInOrderProductTable1584011252176'),(176,1584083106363,'CreatePermissionModuleGroup1584083106363'),(177,1584083115669,'CreatePermissionModule1584083115669'),(178,1584098038843,'AddColumnInRoleAndUser1584098038843'),(179,1584619773432,'CreateTableProductQuestionTable1584619773432'),(180,1584619809783,'CreateTableProductAnswerTable1584619809783'),(181,1585290132090,'AddColumnInProductAnswer1585290132090'),(182,1585290188288,'CreateProductAnswerLikeAndDislike1585290188288'),(183,1585563990633,'AddColumnInAnswerTable1585563990633'),(184,1585822065789,'CreateVendorPaymentArchive1585822065789'),(185,1586159957544,'AddPaymentProcessInOrder1586159957544'),(186,1586945695954,'AddContraintInBlogRelated1586945695954'),(187,1587374669032,'CreateReportReason1587374669032'),(188,1587374782552,'CreateReportAbuseTable1587374782552'),(189,1587392215376,'DropFKforVendorOrder1587392215376'),(190,1587392215376,'DropFKforVendorOrder1587392215376'),(191,1587555771172,'AddColumnInVendorProduct1587555771172'),(192,1586347085190,'AddColumnInProductTable1586347085190'),(195,1587631326440,'AddColumnInEmailTemplate1587631326440'),(201,1587713370717,'CreateCoupon1587713370717'),(202,1587713409764,'CreateCouponProductCategory1587713409764'),(205,1587714569170,'DropConstraintCouponUsage1587714569170'),(206,1587714584471,'AddConstraintCouponUsage1587714584471'),(207,1588072269668,'CreateOrderCancelReason1588072269668'),(208,1588072397466,'AddColumnInOrderProduct1588072397466'),(209,1588751152380,'CreatePaymentArchive1588751152380'),(210,1588751245983,'CreatePaymentItemArchive1588751245983'),(213,1588824849920,'RemoveConstraintInVendorPayment1588824849920'),(214,1588825405897,'RemoveConstraintInVendorPaymentArchive1588825405897'),(215,1589003105075,'CreateProductTirePrices1589003105075'),(216,1589003393774,'AddColumnInProductTable1589003393774'),(217,1589193302717,'CreateStockLogtable1589193302717'),(218,1589193432006,'CreateProductStockAlertTable1589193432006'),(219,1589623032875,'AddColumnInOrderTable1589623032875'),(220,1589891907380,'AddConstraintInProductViewLog1589891907380'),(221,1590393542054,'AddColumnInVendorTable1590393542054'),(222,1590492340558,'CreateQuoteTable1590492340558'),(223,1590588151010,'AddColumnInCustomerCart1590588151010'),(224,1590740245605,'AddColumnInVendorPaymentArchive1590740245605'),(225,1590744858042,'RemoveConstraintInVendorPaymentArchive1590744858042'),(226,1591679473816,'AddContraintForRelatedProduct1591679473816'),(227,1594112639974,'AddColumnInProduct1594112639974'),(228,1597042164207,'AddColumnInSettingsTable1597042164207'),(229,1597908778448,'AddColumnInSettingTable1597908778448'),(230,1597918254147,'AddColumnInProduct1597918254147'),(231,1600520069506,'AddColumnInCustomerCart1600520069506'),(232,1600785627733,'CreateVendorInvoice1600785627733'),(233,1600785663549,'CreateVendorInvoiceItem1600785663549'),(234,1601550779013,'CreateVarientTable1601550779013'),(235,1601550886508,'CreateVarientValueTable1601550886508'),(236,1601702954997,'CreateSkuTable1601702954997'),(237,1601705360384,'CreateProductVarientTable1601705360384'),(238,1601705423047,'CreateProductVarientOptionTable1601705423047'),(239,1601705435996,'CreateProductVarientOptionDetailTable1601705435996'),(240,1601872052590,'AddColumnForSkuIdInProduct1601872052590'),(241,1601878661497,'CreateProductVarientOptionImage1601878661497'),(242,1602321897451,'AddColumnInVendorTable1602321897451'),(243,1602398285818,'CreatePageGroupTable1602398285818'),(244,1602405483061,'CreateContraintForPageGroup1602405483061'),(245,1603105123172,'AddSkuColumn1603105123172'),(246,1603107735535,'AddColumnInProduct1603107735535'),(247,1603687495819,'AddColumnInOrderProduct1603687495819'),(248,1603690775002,'AddColumnInSkuTable1603690775002'),(249,1603705858963,'AddColumnInOrderProduct1603705858963'),(250,1603707976533,'AddColumnInProductStockAlert1603707976533'),(251,1603708000934,'AddColumnStockLog1603708000934'),(252,1603710224439,'AddColumnInCustomerCart1603710224439'),(253,1604489633939,'AddColumnInVendorOrder1604489633939'),(254,1604489661088,'CreateSettlementTable1604489661088'),(255,1604489717068,'CreateSettlementItemTable1604489717068'),(256,1605506261235,'AddColumnInOrderTable1605506261235'),(257,1605507026632,'AddColumnInProductTable1605507026632'),(258,1605683473618,'AddColumnInPageTable1605683473618'),(259,1605690489407,'AlterColumnInVendor1605690489407'),(260,1606204705980,'AlterColumnInPageGroup1606204705980'),(261,1606228347336,'CreatePageGroupTable1606228347336'),(262,1601270366765,'CreateWidgetTable1601270366765'),(263,1601270946009,'CreateWidgetItemTable1601270946009'),(264,1601301669203,'CreateAttributeGroup1601301669203'),(265,1601357631903,'CreateAttributeTable1601357631903'),(266,1601365110925,'CreateProductAttribute1601365110925'),(267,1602071485447,'CreateSiteFilter1602071485447'),(268,1602071536592,'CreateSiteFilterCategory1602071536592'),(269,1602071563034,'CreateSiteFilterSection1602071563034'),(270,1602071583209,'CreateSiteFilterSectionItem1602071583209'),(271,1603262686439,'AddColumnInSiteFilterSection1603262686439'),(272,1620823474374,'CreateAuditLogTable1620823474374'),(273,1620828858835,'AddColumnInAuditLog1620828858835'),(274,1620978737265,'AddColumnInCustomerTable1620978737265'),(275,1620989353652,'CreateTableLoginAttempts1620989353652'),(276,1620989942663,'AddColumnInCustomerTable1620989942663'),(277,1621056856672,'AddColumnInLoginAttempts1621056856672'),(278,1621952242474,'AlterBannerTable1621952242474'),(279,1623221099845,'CreateStripeOrder1623221099845'),(280,1623221600927,'CreateStripeOrderTranscation1623221600927');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `currency_id` int DEFAULT NULL,
  `shipping_zone_id` int DEFAULT NULL,
  `payment_zone_id` int DEFAULT NULL,
  `shipping_country_id` int DEFAULT NULL,
  `payment_country_id` int DEFAULT NULL,
  `invoice_no` varchar(45) DEFAULT NULL,
  `invoice_prefix` varchar(26) DEFAULT NULL,
  `order_prefix_id` varchar(255) DEFAULT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `lastname` varchar(32) DEFAULT NULL,
  `email` varchar(96) DEFAULT NULL,
  `telephone` varchar(32) DEFAULT NULL,
  `fax` varchar(32) DEFAULT NULL,
  `shipping_firstname` varchar(32) DEFAULT NULL,
  `shipping_lastname` varchar(32) DEFAULT NULL,
  `shipping_company` varchar(32) DEFAULT NULL,
  `shipping_address_1` varchar(128) DEFAULT NULL,
  `shipping_address_2` varchar(128) DEFAULT NULL,
  `shipping_city` varchar(128) DEFAULT NULL,
  `shipping_postcode` varchar(10) DEFAULT NULL,
  `shipping_country` varchar(128) DEFAULT NULL,
  `shipping_zone` varchar(128) DEFAULT NULL,
  `shipping_address_format` text,
  `shipping_method` varchar(128) DEFAULT NULL,
  `payment_firstname` varchar(32) DEFAULT NULL,
  `payment_lastname` varchar(32) DEFAULT NULL,
  `payment_company` varchar(32) DEFAULT NULL,
  `payment_address_1` varchar(128) DEFAULT NULL,
  `payment_address_2` varchar(128) DEFAULT NULL,
  `payment_city` varchar(128) DEFAULT NULL,
  `payment_postcode` varchar(10) DEFAULT NULL,
  `payment_country` varchar(128) DEFAULT NULL,
  `payment_zone` varchar(128) DEFAULT NULL,
  `payment_address_format` text,
  `payment_method` varchar(128) DEFAULT NULL,
  `comment` text,
  `total` decimal(10,2) DEFAULT NULL,
  `reward` int DEFAULT NULL,
  `order_status_id` int DEFAULT NULL,
  `affiliate_id` int DEFAULT NULL,
  `commision` decimal(10,0) DEFAULT NULL,
  `currency_code` varchar(3) DEFAULT NULL,
  `currency_value` decimal(11,0) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `payment_flag` int DEFAULT NULL,
  `order_name` varchar(32) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `currency_symbol_left` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_symbol_right` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tracking_url` varchar(255) DEFAULT NULL,
  `tracking_no` varchar(255) DEFAULT NULL,
  `payment_status` int DEFAULT '0',
  `payment_type` varchar(45) DEFAULT NULL,
  `payment_details` varchar(255) DEFAULT NULL,
  `coupon_code` varchar(45) DEFAULT NULL,
  `discount_amount` decimal(10,2) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `payment_process` int DEFAULT '1',
  `back_orders` int DEFAULT '0',
  `customer_gst_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_order_customer1` (`customer_id`),
  KEY `fk_order_currency1` (`currency_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `fk_order_currency1` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`currency_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,1,NULL,NULL,NULL,99,NULL,'INV001','SPU','SPU-202012031',NULL,NULL,'demo@gmail.com','9876543870',NULL,'demo','','','dfgh','oiuy','lkjh','111111','India','tamilnadu','',NULL,'demo','','','dfgh','oiuy','lkjh','111111','India','tamilnadu','','2',NULL,798.00,NULL,1,NULL,NULL,'USD',NULL,NULL,NULL,NULL,1,NULL,NULL,'2020-12-03 20:37:24','2020-12-03 20:37:25','$',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,798.00,1,0,'');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_cancel_reason`
--

DROP TABLE IF EXISTS `order_cancel_reason`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_cancel_reason` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reason` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_cancel_reason`
--

LOCK TABLES `order_cancel_reason` WRITE;
/*!40000 ALTER TABLE `order_cancel_reason` DISABLE KEYS */;
INSERT INTO `order_cancel_reason` VALUES (1,'wrongly ordered',1,NULL,'2020-04-29 10:21:25',NULL,'2020-04-29 10:21:25'),(2,'found better than this product',1,NULL,'2020-04-29 10:21:25',NULL,'2020-04-29 10:21:25'),(3,'not in need',1,NULL,'2020-04-29 10:22:09',NULL,'2020-04-29 10:22:09');
/*!40000 ALTER TABLE `order_cancel_reason` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_history`
--

DROP TABLE IF EXISTS `order_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_history` (
  `order_history_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `order_status_id` int DEFAULT NULL,
  `notify` tinytext,
  `comment` text,
  `date_added` datetime DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`order_history_id`),
  KEY `fk_order_history_order1` (`order_id`),
  KEY `fk_order_history_order_status1` (`order_status_id`),
  KEY `order_history_id` (`order_history_id`),
  CONSTRAINT `fk_order_history_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_order_history_order_status1` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`order_status_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_history`
--

LOCK TABLES `order_history` WRITE;
/*!40000 ALTER TABLE `order_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_log`
--

DROP TABLE IF EXISTS `order_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_log` (
  `order_log_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `currency_id` int DEFAULT NULL,
  `shipping_zone_id` int DEFAULT NULL,
  `payment_zone_id` int DEFAULT NULL,
  `shipping_country_id` int DEFAULT NULL,
  `payment_country_id` int DEFAULT NULL,
  `invoice_no` varchar(45) DEFAULT NULL,
  `invoice_prefix` varchar(26) DEFAULT NULL,
  `order_prefix_id` varchar(255) DEFAULT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `lastname` varchar(32) DEFAULT NULL,
  `email` varchar(96) DEFAULT NULL,
  `telephone` varchar(32) DEFAULT NULL,
  `fax` varchar(32) DEFAULT NULL,
  `shipping_firstname` varchar(32) DEFAULT NULL,
  `shipping_lastname` varchar(32) DEFAULT NULL,
  `shipping_company` varchar(32) DEFAULT NULL,
  `shipping_address_1` varchar(128) DEFAULT NULL,
  `shipping_address_2` varchar(128) DEFAULT NULL,
  `shipping_city` varchar(128) DEFAULT NULL,
  `shipping_postcode` varchar(10) DEFAULT NULL,
  `shipping_country` varchar(128) DEFAULT NULL,
  `shipping_zone` varchar(128) DEFAULT NULL,
  `shipping_address_format` text,
  `shipping_method` varchar(128) DEFAULT NULL,
  `payment_firstname` varchar(32) DEFAULT NULL,
  `payment_lastname` varchar(32) DEFAULT NULL,
  `payment_company` varchar(32) DEFAULT NULL,
  `payment_address_1` varchar(128) DEFAULT NULL,
  `payment_address_2` varchar(128) DEFAULT NULL,
  `payment_city` varchar(128) DEFAULT NULL,
  `payment_postcode` varchar(10) DEFAULT NULL,
  `payment_country` varchar(128) DEFAULT NULL,
  `payment_zone` varchar(128) DEFAULT NULL,
  `payment_address_format` text,
  `payment_method` varchar(128) DEFAULT NULL,
  `comment` text,
  `total` decimal(15,2) DEFAULT NULL,
  `reward` int DEFAULT NULL,
  `order_status_id` int DEFAULT NULL,
  `affiliate_id` int DEFAULT NULL,
  `commision` decimal(10,0) DEFAULT NULL,
  `currency_code` varchar(3) DEFAULT NULL,
  `currency_value` decimal(11,0) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `payment_flag` int DEFAULT NULL,
  `order_name` varchar(32) DEFAULT NULL,
  `is_active` varchar(11) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `orderId` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`order_log_id`),
  KEY `fk_order_customer1` (`customer_id`),
  KEY `fk_order_currency1` (`currency_id`),
  KEY `order_log_id` (`order_log_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_log`
--

LOCK TABLES `order_log` WRITE;
/*!40000 ALTER TABLE `order_log` DISABLE KEYS */;
INSERT INTO `order_log` VALUES (1,1,NULL,NULL,NULL,99,NULL,NULL,'SPU',NULL,NULL,NULL,'demo@gmail.com','9876543870',NULL,'demo','','','dfgh','oiuy','lkjh','111111','India','tamilnadu','',NULL,'demo','','','dfgh','oiuy','lkjh','111111','India','tamilnadu','','2',NULL,NULL,NULL,1,NULL,NULL,'USD',NULL,NULL,NULL,NULL,'1',NULL,NULL,'2020-12-03 20:37:24',NULL,NULL,1),(2,0,NULL,NULL,NULL,99,NULL,NULL,'SPU',NULL,NULL,NULL,'piccouser@gmail.com','8888888888',NULL,'Picco','user','Picco user','Xavier street','','Mumai','222222','India','Mumbai','',NULL,'Picco','user','Picco user','Xavier street','','Mumai','222222','India','Mumbai','','2',NULL,NULL,NULL,1,NULL,NULL,'USD',NULL,NULL,NULL,NULL,'1',NULL,NULL,'2021-03-22 17:03:59',NULL,NULL,2);
/*!40000 ALTER TABLE `order_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `order_product_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `product_price` decimal(15,2) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `trace` decimal(15,4) DEFAULT NULL,
  `total` decimal(15,2) DEFAULT NULL,
  `tax` decimal(15,4) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `order_status_id` int DEFAULT NULL,
  `tracking_url` varchar(255) DEFAULT NULL,
  `tracking_no` varchar(255) DEFAULT NULL,
  `order_product_prefix_id` varchar(255) DEFAULT NULL,
  `base_price` decimal(10,2) DEFAULT NULL,
  `tax_type` int DEFAULT NULL,
  `tax_value` int DEFAULT NULL,
  `discount_amount` decimal(10,2) DEFAULT '0.00',
  `discounted_amount` decimal(10,2) DEFAULT NULL,
  `cancel_request` int DEFAULT '0',
  `cancel_request_status` int DEFAULT '0',
  `cancel_reason` text,
  `cancel_reason_description` text,
  `varient_name` varchar(255) DEFAULT NULL,
  `product_varient_option_id` int DEFAULT NULL,
  `sku_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_product_id`),
  KEY `fk_order_product_product1` (`product_id`),
  KEY `fk_order_product_order1` (`order_id`),
  KEY `order_product_id` (`order_product_id`),
  KEY `fk_tbl_order_status_tbl_order_product_foreignKey` (`order_status_id`),
  CONSTRAINT `fk_order_product_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_order_product_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_order_status_tbl_order_product_foreignKey` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`order_status_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (1,554,1,'Men Cargos',798.00,'Men Cargos',1,NULL,798.00,NULL,NULL,NULL,NULL,'2020-12-03 20:37:24',NULL,1,NULL,NULL,'SPU-2020120311',760.00,2,5,0.00,NULL,0,0,NULL,NULL,'',0,'MC002031');
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product_log`
--

DROP TABLE IF EXISTS `order_product_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product_log` (
  `order_product_log_id` int NOT NULL AUTO_INCREMENT,
  `order_product_id` int DEFAULT NULL,
  `product_id` int NOT NULL,
  `order_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `product_price` decimal(15,2) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `trace` decimal(15,4) DEFAULT NULL,
  `total` decimal(15,4) NOT NULL,
  `tax` decimal(15,4) DEFAULT NULL,
  `order_status_id` int DEFAULT NULL,
  `tracking_url` varchar(255) DEFAULT NULL,
  `tracking_no` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_product_log_id`),
  KEY `fk_tbl_orderProductLog_tbl_orderProduct_foreignKey` (`order_product_id`),
  KEY `fk_tbl_orderProductLog_tbl_product_foreignKey` (`product_id`),
  KEY `fk_tbl_orderProductLog_tbl_order_foreignKey` (`order_id`),
  KEY `fk_tbl_orderProductLog_tbl_orderStatus_foreignKey` (`order_status_id`),
  CONSTRAINT `fk_tbl_orderProductLog_tbl_order_foreignKey` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_orderProductLog_tbl_orderProduct_foreignKey` FOREIGN KEY (`order_product_id`) REFERENCES `order_product` (`order_product_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_orderProductLog_tbl_orderStatus_foreignKey` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`order_status_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_orderProductLog_tbl_product_foreignKey` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product_log`
--

LOCK TABLES `order_product_log` WRITE;
/*!40000 ALTER TABLE `order_product_log` DISABLE KEYS */;
INSERT INTO `order_product_log` VALUES (1,1,554,1,'Men Cargos',798.00,'Men Cargos',1,NULL,798.0000,NULL,1,NULL,NULL,NULL,NULL,NULL,'2020-12-03 20:37:24','2020-12-03 20:37:24');
/*!40000 ALTER TABLE `order_product_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `order_status_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `color_code` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `priority` int DEFAULT NULL,
  PRIMARY KEY (`order_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
INSERT INTO `order_status` VALUES (1,'order placed','#6798e3',1,NULL,NULL,'2019-02-19 04:04:03','2020-02-22 10:37:09',1),(2,'order accepted','#25a006',1,NULL,NULL,'2019-02-19 04:04:21','2020-02-22 10:40:26',2),(3,'packing in progress','#f71d1d',1,NULL,NULL,'2019-02-19 04:04:58','2020-02-22 10:42:10',3),(4,'shipped','#4c7499',1,NULL,NULL,'2019-07-30 13:25:44','2020-02-22 10:43:07',4),(5,'delivered','#501332',1,NULL,NULL,'2020-02-22 10:48:03',NULL,5);
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_total`
--

DROP TABLE IF EXISTS `order_total`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_total` (
  `order_total_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `code` varchar(32) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `value` decimal(15,2) DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`order_total_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_total`
--

LOCK TABLES `order_total` WRITE;
/*!40000 ALTER TABLE `order_total` DISABLE KEYS */;
INSERT INTO `order_total` VALUES (1,1,NULL,NULL,NULL,798.00,NULL,NULL,NULL,NULL,'2020-12-03 20:37:25',NULL),(2,2,NULL,NULL,NULL,6579.45,NULL,NULL,NULL,NULL,'2021-03-22 17:03:59',NULL);
/*!40000 ALTER TABLE `order_total` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page`
--

DROP TABLE IF EXISTS `page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page` (
  `page_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `intro` text,
  `full_text` text,
  `page_group_id` int DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` varchar(255) DEFAULT NULL,
  `meta_tag_keywords` varchar(255) DEFAULT NULL,
  `view_page_count` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `slug_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`page_id`),
  KEY `fk_page_page_group1` (`page_group_id`),
  KEY `page_id` (`page_id`),
  CONSTRAINT `fk_tbl_page_related_tbl_page_group_foreignKey` FOREIGN KEY (`page_group_id`) REFERENCES `page_group` (`group_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page`
--

LOCK TABLES `page` WRITE;
/*!40000 ALTER TABLE `page` DISABLE KEYS */;
INSERT INTO `page` VALUES (1,'Payments',NULL,'<p>Payments</p>\n',2,NULL,'Company Profile','If you continue to have trouble, check out this help file for more tips.','Company Profile',NULL,1,NULL,NULL,'2020-12-03 13:06:52','2021-05-24 05:31:30','company-profile'),(2,'RESOURCES',NULL,'<p>A Stock or Supply of Money, Materials, Staff, and Other assets that can be drawn on by a Person or Organization in order to Function Effectively.</p>\n',1,NULL,'Resources information','New Resources Page full of information @2020',' Resources Page full of information',NULL,1,NULL,NULL,'2020-12-03 13:08:39',NULL,'resources-information'),(3,'who we are',NULL,'<p><strong>piccocart.com&nbsp;is an Indian e-commerce company based in Chennai, India. Founded by Mr&nbsp;</strong><strong>Suresh Sekar, the company initially focused on software Development, before expanding into other product categories such as consumer electronics, fashion, and lifestyle products.</strong></p>\n',1,NULL,'About Us','About Us','The total cost of ownership for software created in this manner is reduced',NULL,1,NULL,NULL,'2020-12-03 13:09:59',NULL,'about-us'),(4,'PAGE INFO',NULL,'<p>Description of the page.</p>\n',2,NULL,'','','',NULL,0,NULL,NULL,'2020-12-03 13:10:37',NULL,'page-info'),(6,'san',NULL,'<p>pico</p>\n',3,NULL,'','','',NULL,0,NULL,NULL,'2021-05-14 13:15:37','2021-05-14 13:16:10','san'),(9,'newPages',NULL,'<p>new page created&nbsp;</p>\n',3,NULL,'newPages','newPages','newPages',NULL,0,NULL,NULL,'2021-05-24 04:39:20','2021-05-24 05:20:35','newpages-1'),(10,'About us',NULL,'<p>No.4, First Floor, 4, First Street, Kamaraj Colony, Jothi Nagar, Chitlapakkam, Chennai, Tamil Nadu 600064</p>\n',3,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:18:05',NULL,'about-us-1'),(11,'Careers',NULL,'<p>www.piccosoft.in/careers</p>\n',3,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:19:32',NULL,'careers'),(12,'Spurtcommerce stories',NULL,'<p>Spurtcommerce stories</p>\n',3,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:21:43',NULL,'spurtcommerce-stories'),(13,'Press',NULL,'<p>Press</p>\n',3,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:22:11',NULL,'press'),(14,'Spurtcommerce  Wholesale',NULL,'<p>Spurtcommerce &nbsp;Wholesale</p>\n',3,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:23:10',NULL,'spurtcommerce-wholesale'),(15,'Shipping',NULL,'<p>Shipping</p>\n',2,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:31:54',NULL,'shipping'),(16,'Cancellation and Returns',NULL,'<p>Cancellation &amp; Returns</p>\n',2,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:33:32',NULL,'cancellation-and-returns'),(17,'FAQ',NULL,'<p>FAQ</p>\n',2,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:35:05',NULL,'faq'),(18,'Report',NULL,'<p>Report</p>\n',2,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:48:51',NULL,'report'),(19,'Return policy',NULL,'<p>Return policy</p>\n',1,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:50:19',NULL,'return-policy'),(20,'Terms of use',NULL,'<p>Terms of use</p>\n',1,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:51:04','2021-05-24 05:58:57','terms-of-use'),(21,'Security',NULL,'<p>Security</p>\n',1,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:51:35',NULL,'security'),(22,'Privacy',NULL,'<p>Privacy</p>\n',1,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:52:01',NULL,'privacy'),(23,'Sitemap',NULL,'<p>Sitemap</p>\n',1,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:54:35','2021-05-24 05:58:47','sitemap'),(24,'EPR Compliance',NULL,'<p>EPR Compliance</p>\n',1,NULL,'','','',NULL,1,NULL,NULL,'2021-05-24 05:55:25','2021-05-24 05:58:39','epr-compliance'),(27,'Contact Us',NULL,'<p>Phone Number: 9135672390</p>\n',3,NULL,'','','',NULL,1,NULL,NULL,'2021-05-27 10:33:40','2021-05-27 10:35:54','contact-us');
/*!40000 ALTER TABLE `page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page_group`
--

DROP TABLE IF EXISTS `page_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_group` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page_group`
--

LOCK TABLES `page_group` WRITE;
/*!40000 ALTER TABLE `page_group` DISABLE KEYS */;
INSERT INTO `page_group` VALUES (1,'Policy',1,'2020-12-03 13:03:43','2021-05-24 05:59:09',NULL,NULL),(2,'Help',1,'2020-12-03 13:03:53','2021-05-22 13:17:58',NULL,NULL),(3,'About',1,'2020-12-03 13:59:44','2020-12-03 13:59:44',NULL,NULL),(4,'Customer Experience',0,'2020-12-04 15:53:10','2021-05-22 13:16:57',NULL,NULL),(5,'hgyu',0,'2021-05-14 12:51:47','2021-05-14 13:16:25',NULL,NULL);
/*!40000 ALTER TABLE `page_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `paid_date` datetime DEFAULT NULL,
  `payment_number` varchar(255) DEFAULT NULL,
  `payment_information` text,
  `payment_amount` decimal(10,2) DEFAULT NULL,
  `payment_commission_amount` decimal(10,2) DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `fk_tbl_payment_tbl_order_foreignKey` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_archive`
--

DROP TABLE IF EXISTS `payment_archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_archive` (
  `payment_archive_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `paid_date` datetime DEFAULT NULL,
  `payment_number` varchar(255) DEFAULT NULL,
  `payment_information` varchar(255) DEFAULT NULL,
  `payment_amount` decimal(10,2) DEFAULT NULL,
  `payment_commission_amount` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_archive_id`),
  KEY `fk_tbl_payment_archive_tbl_order_foreignKey` (`order_id`),
  CONSTRAINT `fk_tbl_payment_archive_tbl_order_foreignKey` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_archive`
--

LOCK TABLES `payment_archive` WRITE;
/*!40000 ALTER TABLE `payment_archive` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_items`
--

DROP TABLE IF EXISTS `payment_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_items` (
  `payment_item_id` int NOT NULL AUTO_INCREMENT,
  `payment_id` int DEFAULT NULL,
  `order_product_id` int NOT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_quantity` int DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`payment_item_id`),
  KEY `payment_id` (`payment_id`),
  KEY `order_product_id` (`order_product_id`),
  CONSTRAINT `fk_tbl_paymentItems_tbl_orderProduct_foreignKey` FOREIGN KEY (`order_product_id`) REFERENCES `order_product` (`order_product_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_paymentItems_tbl_payment_foreignKey` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`payment_id`) ON DELETE CASCADE,
  CONSTRAINT `payment_items_ibfk_1` FOREIGN KEY (`order_product_id`) REFERENCES `order_product` (`order_product_id`) ON DELETE CASCADE,
  CONSTRAINT `payment_items_ibfk_2` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`payment_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_items`
--

LOCK TABLES `payment_items` WRITE;
/*!40000 ALTER TABLE `payment_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_items_archive`
--

DROP TABLE IF EXISTS `payment_items_archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_items_archive` (
  `payment_item_archive_id` int NOT NULL AUTO_INCREMENT,
  `payment_archive_id` int DEFAULT NULL,
  `order_product_id` int DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_quantity` int DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_item_archive_id`),
  KEY `fk_tbl_paymentItemsArchive_tbl_payment_foreignKey` (`payment_archive_id`),
  KEY `fk_tbl_paymentItemsArchive_tbl_orderProduct_foreignKey` (`order_product_id`),
  CONSTRAINT `fk_tbl_paymentItemsArchive_tbl_orderProduct_foreignKey` FOREIGN KEY (`order_product_id`) REFERENCES `order_product` (`order_product_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_paymentItemsArchive_tbl_payment_foreignKey` FOREIGN KEY (`payment_archive_id`) REFERENCES `payment_archive` (`payment_archive_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_items_archive`
--

LOCK TABLES `payment_items_archive` WRITE;
/*!40000 ALTER TABLE `payment_items_archive` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_items_archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paypal_order`
--

DROP TABLE IF EXISTS `paypal_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paypal_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `paypal_ref_id` varchar(255) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paypal_order`
--

LOCK TABLES `paypal_order` WRITE;
/*!40000 ALTER TABLE `paypal_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `paypal_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paypal_order_transaction`
--

DROP TABLE IF EXISTS `paypal_order_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paypal_order_transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `paypal_order_id` int DEFAULT NULL,
  `payment_type` varchar(255) DEFAULT NULL,
  `payment_data` text,
  `payment_status` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paypal_order_transaction`
--

LOCK TABLES `paypal_order_transaction` WRITE;
/*!40000 ALTER TABLE `paypal_order_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `paypal_order_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission_module`
--

DROP TABLE IF EXISTS `permission_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission_module` (
  `module_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `slug_name` varchar(255) DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `module_group_id` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`module_id`),
  KEY `fk_tbl_permissionModule_tbl_permissionModuleGroup_foreignKey` (`module_group_id`),
  CONSTRAINT `fk_tbl_permissionModule_tbl_permissionModuleGroup_foreignKey` FOREIGN KEY (`module_group_id`) REFERENCES `permission_module_group` (`module_group_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_module`
--

LOCK TABLES `permission_module` WRITE;
/*!40000 ALTER TABLE `permission_module` DISABLE KEYS */;
INSERT INTO `permission_module` VALUES (1,'List Order','list-order',1,1,NULL,'2020-03-13 15:05:21',NULL,'2020-03-13 15:05:21'),(2,'Delete Order','delete-order',2,1,NULL,'2020-03-13 15:05:21',NULL,'2020-03-13 15:05:21'),(3,'View Order','view-order',3,1,NULL,'2020-03-13 15:05:21',NULL,'2020-03-13 15:05:21'),(4,'Export Order','export-order',4,1,NULL,'2020-03-13 15:05:21',NULL,'2020-03-13 15:05:21'),(5,'Create Product','create-product',5,2,NULL,'2020-03-13 15:13:05',NULL,'2020-03-13 15:13:05'),(6,'Edit Product','edit-product',6,2,NULL,'2020-03-13 15:13:05',NULL,'2020-03-13 15:13:05'),(7,'View Product','view-product',7,2,NULL,'2020-03-13 15:13:05',NULL,'2020-03-13 15:13:05'),(8,'Delete Product','delete-product',8,2,NULL,'2020-03-13 15:13:05',NULL,'2020-03-13 15:13:05'),(9,'Make Feature','make-feature',9,2,NULL,'2020-03-13 15:13:05',NULL,'2020-03-13 15:13:05'),(10,'Make Today Deal','make-today-deal',10,2,NULL,'2020-03-13 15:13:05',NULL,'2020-03-13 15:13:05'),(11,'Export Product','export-product',11,2,NULL,'2020-03-13 15:13:05',NULL,'2020-03-13 15:13:05'),(12,'Create Category','create-category',12,3,NULL,'2020-03-13 15:18:00',NULL,'2020-03-13 15:18:00'),(13,'Edit Category','edit-category',13,3,NULL,'2020-03-13 15:18:00',NULL,'2020-03-13 15:18:00'),(14,'Delete Category','delete-category',14,3,NULL,'2020-03-13 15:18:00',NULL,'2020-03-13 15:18:00'),(15,'Create Product Option','create-product-option',15,4,NULL,'2020-03-13 15:32:19',NULL,'2020-03-13 15:32:19'),(16,'Edit Product Option','edit-product-option',16,4,NULL,'2020-03-13 15:32:19',NULL,'2020-03-13 15:32:19'),(17,'Delete Product Option','delete-product-option',17,4,NULL,'2020-03-13 15:32:19',NULL,'2020-03-13 15:32:19'),(18,'Edit Rating Review','edit-rating-review',18,5,NULL,'2020-03-13 15:34:58',NULL,'2020-03-13 15:34:58'),(19,'Create Customer','create-customer',19,6,NULL,'2020-03-13 15:40:56',NULL,'2020-03-13 15:40:56'),(20,'Edit Customer','edit-customer',20,6,NULL,'2020-03-13 15:40:56',NULL,'2020-03-13 15:40:56'),(21,'Delete Customer','delete-customer',21,6,NULL,'2020-03-13 15:40:56',NULL,'2020-03-13 15:40:56'),(22,'Export Customer','export-customer',22,6,NULL,'2020-03-13 15:40:56',NULL,'2020-03-13 15:40:56'),(23,'Export All Customer','export-all-customer',23,6,NULL,'2020-03-13 15:40:56',NULL,'2020-03-13 15:40:56'),(24,'View Customer','view-customer',24,6,NULL,'2020-03-13 15:40:56',NULL,'2020-03-13 15:40:56'),(25,'Create Customer Group','create-customer-group',25,7,NULL,'2020-03-13 15:45:45',NULL,'2020-03-13 15:45:45'),(26,'Edit Customer Group','edit-customer-group',26,7,NULL,'2020-03-13 15:45:45',NULL,'2020-03-13 15:45:45'),(27,'Delete Customer Group','delete-customer-group',27,7,NULL,'2020-03-13 15:45:45',NULL,'2020-03-13 15:45:45'),(28,'Create Pages','create-pages',28,8,NULL,'2020-03-13 15:53:46',NULL,'2020-03-13 15:53:46'),(29,'Edit Pages','edit-pages',29,8,NULL,'2020-03-13 15:53:46',NULL,'2020-03-13 15:53:46'),(30,'Delete Pages','delete-pages',30,8,NULL,'2020-03-13 15:53:46',NULL,'2020-03-13 15:53:46'),(31,'Create Banners','create-banners',31,9,NULL,'2020-03-13 15:57:46',NULL,'2020-03-13 15:57:46'),(32,'Edit Banners','edit-banners',32,9,NULL,'2020-03-13 15:57:46',NULL,'2020-03-13 15:57:46'),(33,'Delete Banners','delete-banners',33,9,NULL,'2020-03-13 15:57:46',NULL,'2020-03-13 15:57:46'),(34,'Create Services','create-services',34,10,NULL,'2020-03-13 16:09:53',NULL,'2020-03-13 16:09:53'),(35,'Edit Services','edit-services',35,10,NULL,'2020-03-13 16:09:53',NULL,'2020-03-13 16:09:53'),(36,'Delete Services','delete-services',36,10,NULL,'2020-03-13 16:09:53',NULL,'2020-03-13 16:09:53'),(37,'Export Services','export-services',37,10,NULL,'2020-03-13 16:09:53',NULL,'2020-03-13 16:09:53'),(38,'Create Service Category','create-service-category',38,11,NULL,'2020-03-13 16:15:35',NULL,'2020-03-13 16:15:35'),(39,'Edit Service Category','edit-service-category',39,11,NULL,'2020-03-13 16:15:35',NULL,'2020-03-13 16:15:35'),(40,'Delete Service Category','delete-service-category',40,11,NULL,'2020-03-13 16:15:35',NULL,'2020-03-13 16:15:35'),(41,'Export Service Category','export-service-category',41,11,NULL,'2020-03-13 16:15:35',NULL,'2020-03-13 16:15:35'),(42,'List Enquiry','list-enquiry',42,12,NULL,'2020-03-13 16:31:21',NULL,'2020-03-13 16:31:21'),(43,'Delete Enquiry','delete-enquiry',43,12,NULL,'2020-03-13 16:31:21',NULL,'2020-03-13 16:31:21'),(44,'List Leads','list-leads',44,13,NULL,'2020-03-13 16:34:36',NULL,'2020-03-13 16:34:36'),(45,'Delete Leads','delete-leads',45,13,NULL,'2020-03-13 16:34:36',NULL,'2020-03-13 16:34:36'),(46,'Create Role','create-role',46,14,NULL,'2020-03-13 16:38:07',NULL,'2020-03-13 16:38:07'),(47,'Edit Role','edit-role',47,14,NULL,'2020-03-13 16:38:07',NULL,'2020-03-13 16:38:07'),(48,'Delete Role','delete-role',48,14,NULL,'2020-03-13 16:38:07',NULL,'2020-03-13 16:38:07'),(49,'Create User','create-user',49,15,NULL,'2020-03-13 16:41:12',NULL,'2020-03-13 16:41:12'),(50,'Edit User','edit-user',50,15,NULL,'2020-03-13 16:41:12',NULL,'2020-03-13 16:41:12'),(51,'Delete User','delete-user',51,15,NULL,'2020-03-13 16:41:12',NULL,'2020-03-13 16:41:12'),(52,'Edit General Settings','edit-general-settings',52,16,NULL,'2020-03-13 16:43:38',NULL,'2020-03-13 16:43:38'),(53,'Edit Personalize Product','edit-personalize-product',53,17,NULL,'2020-03-13 16:46:45',NULL,'2020-03-13 16:46:45'),(54,'Edit Personalize Order','edit-personalize-order',54,17,NULL,'2020-03-13 16:46:45',NULL,'2020-03-13 16:46:45'),(55,'Edit SEO Url','edit-seo-url',55,18,NULL,'2020-03-13 16:49:55',NULL,'2020-03-13 16:49:55'),(56,'Edit Social Url','edit-social-url',56,18,NULL,'2020-03-13 16:49:55',NULL,'2020-03-13 16:49:55'),(57,'List Country','list-country',57,27,NULL,'2020-03-13 16:55:10',NULL,'2020-03-13 16:55:10'),(58,'Create Country','create-country',58,27,NULL,'2020-03-13 16:55:10',NULL,'2020-03-13 16:55:10'),(59,'Edit Country','edit-country',59,27,NULL,'2020-03-13 16:55:10',NULL,'2020-03-13 16:55:10'),(60,'Delete Country','delete-country',60,27,NULL,'2020-03-13 16:55:10',NULL,'2020-03-13 16:55:10'),(61,'List Zone','list-zone',61,19,NULL,'2020-03-13 16:58:13',NULL,'2020-03-13 16:58:13'),(62,'Create Zone','create-zone',62,19,NULL,'2020-03-13 16:58:13',NULL,'2020-03-13 16:58:13'),(63,'Edit Zone','edit-zone',63,19,NULL,'2020-03-13 16:58:13',NULL,'2020-03-13 16:58:13'),(64,'Delete Zone','delete-zone',64,19,NULL,'2020-03-13 16:58:13',NULL,'2020-03-13 16:58:13'),(65,'List Language','list-language',65,28,NULL,'2020-03-13 16:59:35',NULL,'2020-03-13 16:59:35'),(66,'Create Language','create-language',66,28,NULL,'2020-03-13 16:59:35',NULL,'2020-03-13 16:59:35'),(67,'Edit Language','edit-language',67,28,NULL,'2020-03-13 16:59:35',NULL,'2020-03-13 16:59:35'),(68,'Delete Language','delete-language',68,28,NULL,'2020-03-13 16:59:35',NULL,'2020-03-13 16:59:35'),(69,'List Currency','list-currency',69,25,NULL,'2020-03-13 17:01:22',NULL,'2020-03-13 17:01:22'),(70,'Create Currency','create-currency',70,25,NULL,'2020-03-13 17:01:22',NULL,'2020-03-13 17:01:22'),(71,'Edit Currency','edit-currency',71,25,NULL,'2020-03-13 17:01:22',NULL,'2020-03-13 17:01:22'),(72,'Delete Currency','delete-currency',72,25,NULL,'2020-03-13 17:01:22',NULL,'2020-03-13 17:01:22'),(73,'List Tax','list-tax',73,26,NULL,'2020-03-13 17:03:17',NULL,'2020-03-13 17:03:17'),(74,'Create Tax','create-tax',74,26,NULL,'2020-03-13 17:03:17',NULL,'2020-03-13 17:03:17'),(75,'Edit Tax','edit-tax',75,26,NULL,'2020-03-13 17:03:17',NULL,'2020-03-13 17:03:17'),(76,'Delete Tax','delete-tax',76,26,NULL,'2020-03-13 17:03:17',NULL,'2020-03-13 17:03:17'),(77,'List Order Status','list-order-status',77,29,NULL,'2020-03-13 17:05:43',NULL,'2020-03-13 17:05:43'),(78,'Create Order Status','create-order-status',78,29,NULL,'2020-03-13 17:05:43',NULL,'2020-03-13 17:05:43'),(79,'Edit Order Status','edit-order-status',79,29,NULL,'2020-03-13 17:05:43',NULL,'2020-03-13 17:05:43'),(80,'Delete Order Status','delete-order-status',80,29,NULL,'2020-03-13 17:05:43',NULL,'2020-03-13 17:05:43'),(81,'List Stock Status','list-stock-status',81,30,NULL,'2020-03-13 17:07:48',NULL,'2020-03-13 17:07:48'),(82,'Create Stock Status','create-stock-status',82,30,NULL,'2020-03-13 17:07:48',NULL,'2020-03-13 17:07:48'),(83,'Edit Stock Status','edit-stock-status',83,30,NULL,'2020-03-13 17:07:48',NULL,'2020-03-13 17:07:48'),(84,'Delete Stock Status','delete-stock-status',84,30,NULL,'2020-03-13 17:07:48',NULL,'2020-03-13 17:07:48'),(85,'List Email Template','list-email-template',85,31,NULL,'2020-03-13 17:09:12',NULL,'2020-03-13 17:09:12'),(86,'Edit Email Template','edit-email-template',86,31,NULL,'2020-03-13 17:09:12',NULL,'2020-03-13 17:09:12'),(87,'Delete Email Template','delete-email-template',87,31,NULL,'2020-03-13 17:09:12',NULL,'2020-03-13 17:09:12'),(88,'Create Vendor','create-vendor',88,20,NULL,'2020-03-13 17:15:55',NULL,'2020-03-13 17:15:55'),(89,'Edit Vendor','edit-vendor',89,20,NULL,'2020-03-13 17:15:55',NULL,'2020-03-13 17:15:55'),(90,'Delete Vendor','delete-vendor',90,20,NULL,'2020-03-13 17:15:55',NULL,'2020-03-13 17:15:55'),(91,'Approve Vendor','approve-vendor',91,20,NULL,'2020-03-13 17:15:55',NULL,'2020-03-13 17:15:55'),(92,'View Vendor','view-vendor',92,20,NULL,'2020-03-13 17:15:55',NULL,'2020-03-13 17:15:55'),(93,'Export Vendor','export-vendor',93,20,NULL,'2020-03-13 17:15:55',NULL,'2020-03-13 17:15:55'),(94,'Export All Vendor','export-all-vendor',94,20,NULL,'2020-03-13 17:15:55',NULL,'2020-03-13 17:15:55'),(95,'Create Market Place Product','create-market-place-product',95,21,NULL,'2020-03-13 17:30:24',NULL,'2020-03-13 17:30:24'),(96,'Edit Market Place Product','edit-market-place-product',96,21,NULL,'2020-03-13 17:30:24',NULL,'2020-03-13 17:30:24'),(97,'Approve Market Place Product','approve-market-place-product',97,21,NULL,'2020-03-13 17:30:24',NULL,'2020-03-13 17:30:24'),(98,'Delete Market Place Product','delete-market-place-product',98,21,NULL,'2020-03-13 17:30:24',NULL,'2020-03-13 17:30:24'),(99,'Export Market Place Product','export-market-place-product',99,21,NULL,'2020-03-13 17:30:24',NULL,'2020-03-13 17:30:24'),(100,'Export All Market Place Product','export-all-market-place-product',100,21,NULL,'2020-03-13 17:30:24',NULL,'2020-03-13 17:30:24'),(101,'Assign Category','assign-category',101,22,NULL,'2020-03-13 17:35:27',NULL,'2020-03-13 17:35:27'),(102,'Set Commission','set-commission',102,22,NULL,'2020-03-13 17:35:27',NULL,'2020-03-13 17:35:27'),(103,'Set Vendor Commission','set-vendor-commission',103,22,NULL,'2020-03-13 17:35:27',NULL,'2020-03-13 17:35:27'),(104,'List Sales','list-sales',104,23,NULL,'2020-03-13 17:39:45',NULL,'2020-03-13 17:39:45'),(105,'List Payment','list-payment',105,24,NULL,'2020-03-13 17:42:25',NULL,'2020-03-13 17:42:25'),(106,'Export All Payment','export-all-payment',106,24,NULL,'2020-03-13 17:42:25',NULL,'2020-03-13 17:42:25'),(107,'List Product','list-product',107,2,NULL,'2020-03-18 17:33:05',NULL,'2020-03-18 17:33:05'),(108,'List Category','list-category',108,3,NULL,'2020-03-18 17:35:06',NULL,'2020-03-18 17:35:06'),(109,'List Product Option','list-product-option',109,4,NULL,'2020-03-18 17:37:32',NULL,'2020-03-18 17:37:32'),(110,'List Rating Review','list-rating-review',110,5,NULL,'2020-03-18 17:38:59',NULL,'2020-03-18 17:38:59'),(111,'List Customer','list-customer',111,6,NULL,'2020-03-18 17:42:40',NULL,'2020-03-18 17:42:40'),(112,'List Customer Group','list-customer-group',112,7,NULL,'2020-03-18 17:43:55',NULL,'2020-03-18 17:43:55'),(113,'List Pages','list-pages',113,8,NULL,'2020-03-18 17:45:01',NULL,'2020-03-18 17:45:01'),(114,'List Banners','list-banners',114,9,NULL,'2020-03-18 17:46:10',NULL,'2020-03-18 17:46:10'),(115,'List Services','list-services',115,10,NULL,'2020-03-18 17:47:18',NULL,'2020-03-18 17:47:18'),(116,'List Service Category','list-service-category',116,11,NULL,'2020-03-18 17:48:43',NULL,'2020-03-18 17:48:43'),(117,'List Role','list-role',117,14,NULL,'2020-03-18 17:50:24',NULL,'2020-03-18 17:50:24'),(118,'List User','list-user',118,15,NULL,'2020-03-18 17:51:27',NULL,'2020-03-18 17:51:27'),(119,'List Vendor','list-vendor',119,20,NULL,'2020-03-18 17:56:45',NULL,'2020-03-18 17:56:45'),(120,'List Market Place Product','list-market-place-product',120,21,NULL,'2020-03-18 17:58:42',NULL,'2020-03-18 17:58:42'),(121,'Update Order Status','update-order-status',5,1,NULL,'2020-03-19 11:04:25',NULL,'2020-03-19 11:04:25'),(122,'List Sales Payments','list-sales-payments',122,32,NULL,'2020-03-19 14:58:57',NULL,'2020-03-19 14:58:57'),(123,'Export All Sales Payments','export-all-sales-payments',123,32,NULL,'2020-03-19 15:01:01',NULL,'2020-03-19 15:01:01'),(124,'List Brands','list-brands',124,33,NULL,'2020-03-19 15:05:07',NULL,'2020-03-19 15:05:07'),(125,'Create Brands','create-brands',125,33,NULL,'2020-03-19 15:06:08',NULL,'2020-03-19 15:06:08'),(126,'Edit Brands','edit-brands',126,33,NULL,'2020-03-19 15:07:27',NULL,'2020-03-19 15:07:27'),(127,'Delete Brands','delete-brands',127,33,NULL,'2020-03-19 15:09:04',NULL,'2020-03-19 15:09:04'),(128,'Export Brands','export-brands',128,33,NULL,'2020-03-19 15:10:29',NULL,'2020-03-19 15:10:29'),(129,'List Coupon','list-coupon',129,34,NULL,'2020-03-19 15:15:57',NULL,'2020-03-19 15:15:57'),(130,'Create Coupon','create-coupon',130,34,NULL,'2020-03-19 15:17:10',NULL,'2020-03-19 15:17:10'),(131,'Edit Coupon','edit-coupon',131,34,NULL,'2020-03-19 15:17:58',NULL,'2020-03-19 15:17:58'),(132,'Delete Coupon','delete-coupon',132,34,NULL,'2020-03-19 15:19:15',NULL,'2020-03-19 15:19:15'),(133,'List Blogs','list-blogs',133,35,NULL,'2020-03-19 15:23:49',NULL,'2020-03-19 15:23:49'),(134,'Create Blogs','create-blogs',134,35,NULL,'2020-03-19 15:24:58',NULL,'2020-03-19 15:24:58'),(135,'Edit Blogs','edit-blogs',135,35,NULL,'2020-03-19 15:25:34',NULL,'2020-03-19 15:25:34'),(136,'Delete Blogs','delete-blogs',136,35,NULL,'2020-03-19 15:26:17',NULL,'2020-03-19 15:26:17');
/*!40000 ALTER TABLE `permission_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission_module_group`
--

DROP TABLE IF EXISTS `permission_module_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission_module_group` (
  `module_group_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `slug_name` varchar(255) DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`module_group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_module_group`
--

LOCK TABLES `permission_module_group` WRITE;
/*!40000 ALTER TABLE `permission_module_group` DISABLE KEYS */;
INSERT INTO `permission_module_group` VALUES (1,'Order','order',1,NULL,'2020-03-13 14:27:44',NULL,'2020-03-13 14:27:44'),(2,'Product','product',2,NULL,'2020-03-13 14:27:44',NULL,'2020-03-13 14:27:44'),(3,'Categories','categories',3,NULL,'2020-03-13 14:27:44',NULL,'2020-03-13 14:27:44'),(4,'Product Options','product-options',4,NULL,'2020-03-13 14:27:44',NULL,'2020-03-13 14:27:44'),(5,'Rating Review','rating-review',5,NULL,'2020-03-13 14:27:44',NULL,'2020-03-13 14:27:44'),(6,'Customer','customer',6,NULL,'2020-03-13 14:27:44',NULL,'2020-03-13 14:27:44'),(7,'Customer Group','customer-group',7,NULL,'2020-03-13 14:27:44',NULL,'2020-03-13 14:27:44'),(8,'Pages','pages',8,NULL,'2020-03-13 14:41:15',NULL,'2020-03-13 14:41:15'),(9,'Banners','banners',9,NULL,'2020-03-13 14:41:15',NULL,'2020-03-13 14:41:15'),(10,'Services','services',10,NULL,'2020-03-13 14:41:15',NULL,'2020-03-13 14:41:15'),(11,'Service Category','service-category',11,NULL,'2020-03-13 14:41:15',NULL,'2020-03-13 14:41:15'),(12,'Service Enquiry','service-enquiry',12,NULL,'2020-03-13 14:41:15',NULL,'2020-03-13 14:41:15'),(13,'Service Lead','service-lead',13,NULL,'2020-03-13 14:41:15',NULL,'2020-03-13 14:41:15'),(14,'Setting Role','setting-role',14,NULL,'2020-03-13 14:41:15',NULL,'2020-03-13 14:41:15'),(15,'Setting Users','setting-users',15,NULL,'2020-03-13 14:41:15',NULL,'2020-03-13 14:41:15'),(16,'Setting General Settings','setting-general-settings',16,NULL,'2020-03-13 14:41:15',NULL,'2020-03-13 14:41:15'),(17,'Setting Personalize','setting-personalize',17,NULL,'2020-03-13 14:46:15',NULL,'2020-03-13 14:46:15'),(18,'Setting Site Setting','setting-site-setting',18,NULL,'2020-03-13 14:46:15',NULL,'2020-03-13 14:46:15'),(19,'Setting Zone','setting-zone',19,NULL,'2020-03-13 14:46:15',NULL,'2020-03-13 14:46:15'),(20,'Market Place Vendor','market-place-vendor',20,NULL,'2020-03-13 14:58:31',NULL,'2020-03-13 14:58:31'),(21,'Market Place Product','market-place-product',21,NULL,'2020-03-13 14:58:31',NULL,'2020-03-13 14:58:31'),(22,'Market Place Setting','market-place-setting',22,NULL,'2020-03-13 14:58:31',NULL,'2020-03-13 14:58:31'),(23,'Market Place Sales','market-place-sales',23,NULL,'2020-03-13 14:58:31',NULL,'2020-03-13 14:58:31'),(24,'Market Place Payment','market-place-payment',24,NULL,'2020-03-13 14:58:31',NULL,'2020-03-13 14:58:31'),(25,'Setting Currency','setting-currency',25,NULL,'2020-03-16 16:23:09',NULL,'2020-03-16 16:23:09'),(26,'Settings Tax','settings-tax',26,NULL,'2020-03-16 16:23:09',NULL,'2020-03-16 16:23:09'),(27,'Settings Country','settings-country',27,NULL,'2020-03-16 16:30:25',NULL,'2020-03-16 16:30:25'),(28,'Settings Language','settings-language',28,NULL,'2020-03-16 16:30:25',NULL,'2020-03-16 16:30:25'),(29,'Settings Order Status','settings-order-status',29,NULL,'2020-03-16 16:36:38',NULL,'2020-03-16 16:36:38'),(30,'Settings Stock Status','settings-stock-status',30,NULL,'2020-03-16 16:36:38',NULL,'2020-03-16 16:36:38'),(31,'Settings Email Template','settings-email-template',31,NULL,'2020-03-16 16:38:10',NULL,'2020-03-16 16:38:10'),(32,'Payments','payments',32,NULL,'2020-03-19 14:53:40',NULL,'2020-03-19 14:53:40'),(33,'Brands','brands',33,NULL,'2020-03-19 15:03:15',NULL,'2020-03-19 15:03:15'),(34,'Coupon','coupon',34,NULL,'2020-03-19 15:11:48',NULL,'2020-03-19 15:11:48'),(35,'Blogs','blogs',35,NULL,'2020-03-19 15:22:04',NULL,'2020-03-19 15:22:04');
/*!40000 ALTER TABLE `permission_module_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plugins`
--

DROP TABLE IF EXISTS `plugins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plugins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `plugin_name` varchar(60) DEFAULT NULL,
  `plugin_avatar` varchar(255) DEFAULT NULL,
  `plugin_avatar_path` varchar(255) DEFAULT NULL,
  `plugin_type` varchar(60) DEFAULT NULL,
  `plugin_additional_info` text,
  `plugin_status` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plugins`
--

LOCK TABLES `plugins` WRITE;
/*!40000 ALTER TABLE `plugins` DISABLE KEYS */;
INSERT INTO `plugins` VALUES (1,'paypal','Img_1564650679795.png','logo/','payment','{\"merchantId\":\"\",\"defaultRoute\":\"/paypal\",\"processRoute\":\"/paypal-payment/process\",\"successRoute\":\"/paypal-payment/success\",\"cancelRoute\":\"/paypal-payment/cancel\",\"failureRoute\":\"/paypal-payment/failure\",\"isTest\":\"1\",\"clientId\":\"\",\"clientSecret\":\"\"}',1,NULL,NULL,'2020-06-08 13:02:11',NULL),(2,'CashOnDelivery','Img_1564659191615.jpeg','logo/','payment',NULL,1,NULL,NULL,NULL,NULL),(3,'gmail','Img_1564575462680.jpeg','logo/','oauth','{\"isTest\":\"1\",\"clientId\":\"\",\"defaultRoute\":\"/gmail-login\"}',1,NULL,NULL,'2019-08-15 05:48:37',NULL),(4,'facebook','Img_1564575414973.png','logo/','oauth','{\"isTest\":\"1\",\"AppId\":\"\",\"AppSecretKey\":\"\",\"defaultRoute\":\"/facebook-login\"}',1,NULL,NULL,'2019-08-15 06:06:51',NULL),(5,'razorpay','Img_1567002487693.png','logo/','payment','{\"defaultRoute\":\"/razorpay\",\"processRoute\":\"/razorpay-payment/process\",\"successRoute\":\"/razorpay-payment/success\",\"cancelRoute\":\"/razorpay-payment/cancel\",\"failureRoute\":\"/razorpay-payment/failure\",\"processAPIRoute\":\"/razorpay-payment/process-api\",\"successAPIRoute\":\"/razorpay-payment/success-api\",\"cancelAPIRoute\":\"/razorpay-payment/cancel-api\",\"failureAPIRoute\":\"/razorpay-payment/failure-api\",\"clientId\":\"\",\"clientSecret\":\"\",\"isTest\":\"1\"}',1,NULL,NULL,NULL,NULL),(6,'stripe','Img_1567002127693.png','logo/','payment','{\"defaultRoute\":\"/stripe\",\"processRoute\":\"/stripe-payment/process\",\"successRoute\":\"/stripe-payment/success\",\"cancelRoute\":\"/stripe-payment/cancel\",\"failureRoute\":\"/stripe-payment/failure\",\"isTest\":\"1\",\"clientId\":\"\",\"clientSecret\":\"\"}',1,NULL,NULL,'2020-02-05 12:54:09',NULL);
/*!40000 ALTER TABLE `plugins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price_update_file_log`
--

DROP TABLE IF EXISTS `price_update_file_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `price_update_file_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `vendor_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_vendor_tbl_price_update_file_log_foreignKey` (`vendor_id`),
  CONSTRAINT `fk_tbl_vendor_tbl_price_update_file_log_foreignKey` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price_update_file_log`
--

LOCK TABLES `price_update_file_log` WRITE;
/*!40000 ALTER TABLE `price_update_file_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `price_update_file_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `sku` varchar(64) DEFAULT NULL,
  `upc` varchar(12) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `stock_status_id` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` text,
  `manufacturer_id` int DEFAULT NULL,
  `shipping` tinyint DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `date_available` date DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `amount` float DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` varchar(255) DEFAULT NULL,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `subtract_stock` int DEFAULT NULL COMMENT '0->no 1->yes',
  `minimum_quantity` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `wishlist_status` int DEFAULT NULL,
  `delete_flag` int NOT NULL DEFAULT '0',
  `is_featured` int DEFAULT NULL,
  `rating` decimal(10,2) DEFAULT NULL,
  `condition` int DEFAULT NULL COMMENT '1->new 2->used',
  `today_deals` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `keywords` varchar(255) DEFAULT NULL,
  `price_update_file_log_id` int DEFAULT NULL,
  `product_slug` varchar(255) DEFAULT NULL,
  `service_charges` varchar(255) DEFAULT NULL,
  `tax_type` int DEFAULT NULL,
  `tax_value` int DEFAULT NULL,
  `order_product_prefix_id` int DEFAULT NULL,
  `height` decimal(15,2) DEFAULT NULL,
  `weight` decimal(15,2) DEFAULT NULL,
  `length` decimal(15,2) DEFAULT NULL,
  `width` decimal(15,2) DEFAULT NULL,
  `has_stock` int DEFAULT '0',
  `has_tire_price` int DEFAULT '0',
  `out_of_stock_threshold` int DEFAULT NULL,
  `notify_min_quantity_below` int DEFAULT NULL,
  `min_quantity_allowed_cart` int DEFAULT NULL,
  `max_quantity_allowed_cart` int DEFAULT NULL,
  `enable_back_orders` int DEFAULT NULL,
  `pincode_based_delivery` int DEFAULT '0',
  `sku_id` int DEFAULT NULL,
  `is_simplified` int DEFAULT NULL,
  `hsn` varchar(255) DEFAULT NULL,
  `attribute_keyword` text,
  PRIMARY KEY (`product_id`),
  KEY `product_id` (`product_id`),
  KEY `manufacturer_id` (`manufacturer_id`),
  KEY `condition` (`condition`),
  KEY `today_deals` (`today_deals`),
  KEY `is_featured` (`is_featured`),
  KEY `is_active` (`is_active`),
  KEY `fk_tbl_sku_tbl_product_foreignKey` (`sku_id`),
  CONSTRAINT `fk_tbl_sku_tbl_product_foreignKey` FOREIGN KEY (`sku_id`) REFERENCES `sku` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=559 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (538,'DRM9900U6','110092238393',150,1,NULL,NULL,81,1,5889.00,'2019-06-19',1,'OVS','<h1>Musical Mart MMBG-L-03Two PieceBongo Drum(Brown)</h1>\n\n<ul>\n	<li>A percussion instrument</li>\n	<li>Body Material: Basswood</li>\n	<li>Size: 11inch</li>\n</ul>\n',NULL,'Musical Mart MMBG-L-03Two PieceBongo Drum(Brown)',NULL,NULL,NULL,1,10,'India',0,0,1,NULL,1,1,1,NULL,NULL,'2019-06-19 05:49:51','2021-08-11 23:50:46',NULL,NULL,'musical-mart-mmbg-l-03two-piecebongo-drumbrown','{\"productCost\":5000,\"packingCost\":800,\"shippingCost\":89,\"tax\":0,\"others\":0}',2,1,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,1,1,NULL,NULL),(540,'ASS88901Gy','121099090649',100,1,NULL,NULL,81,1,89900.00,'2019-06-19',1,'ZIO TOM','<p>Grand Piano is amazing Piano with realistic effects. You will love to Play this Piano again and again.<br />\n<br />\nFeatures<br />\n-Very Easy to Learn and Play like a Real Piano.<br />\n-You can record and save your recordings.<br />\n-You have access to C3 &amp; C4 Octaves in the Free Version.<br />\n-You can navigate to different parts of the Piano by dragging the keys.<br />\n-You Can Upgrade to Full Version to Unlock all the Octaves.<br />\n-Fully Tested on All Android Phones,Fire Phone &amp; Kindle Fire Tablets (All).</p>\n',NULL,'Grand Piano',NULL,NULL,NULL,1,10,'India',0,0,0,NULL,1,1,1,NULL,NULL,'2019-06-19 06:01:40','2021-08-11 23:25:38',NULL,NULL,'grand-piano','{\"productCost\":89000,\"packingCost\":900,\"shippingCost\":0,\"tax\":0,\"others\":0}',2,1,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,2,1,NULL,NULL),(541,'AWE00UI6','121987983748',100,1,NULL,NULL,81,1,24000.00,'2019-06-19',1,'BRUSCONE','<h1>AMBITION Professional Black Drum Kit - 9 Pcs</h1>\n\n<ul>\n	<li>Good quality body with fantastic finishing &amp; hard gear-chain based pedal, solid long lasting global quality stands with white/milky skins fully professional</li>\n	<li>Very good looking, attractive, glossy or metallic</li>\n	<li>adjustable for beginners</li>\n	<li>Double/more coating good quality Plywooden body.</li>\n	<li>various attarctive colous &amp; Handy by cover bags</li>\n	<li>\n	<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n		<tbody>\n			<tr>\n				<td>Brand</td>\n				<td>AMBITION</td>\n			</tr>\n			<tr>\n				<td>Model</td>\n				<td>AD-Professional-9pcs Drumset-Black</td>\n			</tr>\n			<tr>\n				<td>Item model number</td>\n				<td>AD-Professional-9pcs Drumset-Black</td>\n			</tr>\n			<tr>\n				<td>Batteries Included</td>\n				<td>No</td>\n			</tr>\n			<tr>\n				<td>Batteries Required</td>\n				<td>No</td>\n			</tr>\n		</tbody>\n	</table>\n	</li>\n</ul>\n',NULL,'AMBITION Professional Black Drum Kit - 9 Pcs',NULL,NULL,NULL,1,10,'India',0,0,0,NULL,1,1,1,NULL,NULL,'2019-06-19 06:15:12','2021-08-11 23:50:48',NULL,NULL,'ambition-professional-black-drum-kit--9-pcs','{\"productCost\":24000,\"packingCost\":0,\"shippingCost\":0,\"tax\":0,\"others\":0}',2,1,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,3,1,NULL,NULL),(542,'BB002013','10822710021',100,1,NULL,NULL,70,1,360.00,'2019-06-19',1,'TOYS CENTER','<ul>\n	<li>Non-toxic and soft fabric good quality and washable</li>\n	<li>Soft and cuddly filling printed work</li>\n	<li>Soft toy school bag for kids, travelling bag, carry bag, picnic bag, teddy bag</li>\n	<li>Very attractive to make you have a good feeling all the time, gift this soft, smooth and cuddly teddy as a great gift to your loved one</li>\n	<li>Colour: Multicolour</li>\n</ul>\n',NULL,'DZert Soft Plush Fabric Multicolour Micky Printed School Bag for Baby Boys and Girls',NULL,NULL,230,1,10,'India',0,0,1,NULL,1,1,1,NULL,NULL,'2019-06-19 06:16:09','2021-08-11 23:50:40',NULL,NULL,'dzert-soft-plush-fabric-multicolour-micky-printed-school-bag-for-baby-boys-and-girls','{\"productCost\":360,\"packingCost\":0,\"shippingCost\":0,\"tax\":0,\"others\":0}',2,2,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,4,1,NULL,NULL),(547,'WL002017','12009387111',100,1,NULL,NULL,81,1,850.00,'2019-06-19',1,'CONAD','<ul>\n	<li>Proffered by Gojeeva, this white and golden colored sconce wall lamp can easily be used to lighten up your favorite room. Crafted from high quality aluminum, glass and brass material, this wall lamp is long lasting and energy efficient. This wall lamp produces the same amount of light as normal ones and features a look that is similar to traditional incandescent lights, but it also has a lightweight design and is more energy efficient. Use your choice of wall lamps to design a well lit residential or commercial space. Furthermore, it is available at a very low price. Additionally, this wall lamp comes with one cable connector and two screws.</li>\n</ul>\n',NULL,'Gojeeva Uplight Wall Lamp#JustHere',NULL,NULL,NULL,1,10,'India',0,0,0,NULL,1,1,1,NULL,NULL,'2019-06-19 08:13:25','2021-08-11 23:50:41',NULL,NULL,'gojeeva-uplight-wall-lampjusthere','{\"productCost\":850,\"packingCost\":0,\"shippingCost\":0,\"tax\":0,\"others\":0}',2,1,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,5,1,NULL,NULL),(550,'EH002021','19899922244',100,1,NULL,NULL,70,1,2100.00,'2019-06-20',1,'GRUPPO PICCIRILLO','<ul>\n	<li>Home Cinema System</li>\n	<li>2 Speakers</li>\n	<li>1 Subwoofers</li>\n	<li>MP3</li>\n</ul>\n',NULL,'KRISONS 2.1 Nexon 2.1 Home Cinema  (BLUETOOTH)',NULL,NULL,1870,1,10,'',0,0,0,NULL,1,1,1,NULL,NULL,'2019-06-20 01:43:55','2021-08-11 23:50:41','~ELECTRONICS~,~TVs & Speaker~,~Home Theaters~,~KRISONS 2.1 Nexon 2.1 Home Cinema  (BLUETOOTH)~',NULL,'krisons-21-nexon-21-home-cinema-bluetooth','{\"productCost\":2100,\"packingCost\":0,\"shippingCost\":0,\"tax\":0,\"others\":0}',2,1,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,6,1,NULL,NULL),(552,'ET002023','',100,1,NULL,NULL,70,1,14000.00,'2019-06-20',1,'JUISS','<ul>\n	<li>Resolution : HD Ready (1366x768p) | Refresh Rate: 60 hertz</li>\n	<li>Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console, 2 USB ports to connect hard drives and other USB devices</li>\n	<li>Sound: 20 W output | DTS-HD sound</li>\n	<li>Smart TV features : | PatchWall with Android TV and Set-Top Box Integration | Chromecast built-in | 700,000+ hrs of Content | Mi Remote with Google voice search | Content across 15 languages | Play Store, YouTube, Play Movies, Play Music | Hotstar, Voot, Sony LIV, Hungama, Zee5, Eros Now, Alt Balaji, Sun NXT, Hooq, TVF, Epic ON, Flickstree| Prime Video coming soon | Mi Remote controls TV, set-top box and smart home devices eg. Mi Air Purifier</li>\n	<li>Warranty Information: 1 year warranty on product and 1 year extra on Panel</li>\n	<li>For any Warranty related issues/clarifications, please directly call Xiaomi support on 18001036286 and provide product&#39;s model name as well as seller&#39;s details mentioned on the invoice</li>\n	<li>Easy returns: This product is eligible for replacement/refund within 10 days of delivery in case of any product defects, damage or features not matching the description provided</li>\n	<li>Additional Information : 14+ Content Partners ( Amazon Prime Video Coming soon)</li>\n</ul>\n',NULL,'Mi LED TV 4C PRO 80 cm (32) HD Ready Android TV (Black)',NULL,NULL,12200,1,10,'India',0,0,0,NULL,1,1,1,NULL,NULL,'2019-06-20 02:01:17','2021-08-11 23:50:43','~ELECTRONICS~,~TVs & Speaker~,~Television~,~Mi LED TV 4C PRO 80 cm (32) HD Ready Android TV (Black)~',NULL,'mi-led-tv-4c-pro-80-cm-32-hd-ready-android-tv-black','{\"productCost\":14000,\"packingCost\":0,\"shippingCost\":0,\"tax\":0,\"others\":0}',2,1,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,7,1,NULL,NULL),(554,'MC002031','176665558921',100,1,NULL,NULL,94,1,760.00,'2019-06-20',1,'Men Cargos','<ul>\n	<li>Care Instructions: Hand wash cold water, dry naturally, do not iron imprint directly, do not bleach.</li>\n	<li>Fit Type: Regular Fit</li>\n	<li>Material: 100% cotton</li>\n	<li>Fit type: regular fit</li>\n	<li>Care instructions: hand wash cold water, dry naturally, do not iron imprint directly, do not bleach</li>\n	<li>Closure type: belt</li>\n	<li>Solid cargo pant</li>\n</ul>\n',NULL,'Men Cargos',NULL,NULL,679,1,10,'U.K',0,0,0,NULL,1,0,1,NULL,NULL,'2019-06-20 02:28:45','2021-08-11 18:19:12','~MENS FASHION~,~Bottom Wear~,~Cargos~,~Men Cargos~',NULL,'men-cargos','{\"productCost\":760,\"packingCost\":0,\"shippingCost\":0,\"tax\":0,\"others\":0}',2,1,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,8,1,NULL,NULL),(555,'MC002034','109882765222',100,1,NULL,NULL,72,1,780.00,'2019-06-20',1,'BEEVEE Men\'s 100% Cotton Solid Khaki Fixed Waist Turn Ups and Detachable Cargo with Belt','<ul>\n	<li>Care Instructions: Normal Wash</li>\n	<li>Slim FIT. These premium Men&#39;s Casual Cotton Cargo Pants sit at the natural waist with a relaxed seat and thigh. These Stylish, Fashionable and Hi-quality cargo pants will keep you comfortable all day</li>\n	<li>MAXIMUM STORAGE. Equipped with (6) pockets for maximum storage capacity. (2) cargo flap pockets, (2) slash pockets, and (2) back pockets with flaps - great for storing cell phones, wallets, tools, and other items</li>\n	<li>PREMIUM CARGO STYLE. Made with premium materials for comfort, this classic cargo pant takes you from work and the outdoors, to everyday casual wear and are a perfect combination of trendy and comfort.</li>\n	<li>DURABLE MATERIALS. These Mens Cargo Pants are Constructed from 100% cotton Twill, these pants are built to last while maintaining breath-ability and comfort. Comes with Brass Zippers for Classy Look.</li>\n	<li>This is an Unique Design form the Amazon Bestselling Brand VERSATYL which is known for its Unique and Innovative products.</li>\n</ul>\n',NULL,'',NULL,NULL,560,1,10,'India',0,0,0,3.00,1,0,1,NULL,NULL,'2019-06-20 02:37:42','2021-08-11 23:25:35','~MENS FASHION~,~Bottom Wear~,~Cargos~,~BEEVEE Men\'s 100% Cotton Solid Khaki Fixed Waist Turn Ups and Detachable Cargo with Belt~',NULL,'beevee-mens-100-cotton-solid-khaki-fixed-waist-turn-ups-and-detachable-cargo-with-belt','{\"productCost\":780,\"packingCost\":0,\"shippingCost\":0,\"tax\":0,\"others\":0}',2,1,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,0,9,1,NULL,NULL),(558,'dscdc','1',100,1,NULL,NULL,91,0,9303.00,'2021-08-11',0,'dcd','<p>cdsc</p>\n',NULL,'dsc','<p>cdscds</p>\n','cdsc',NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,0,1,NULL,NULL,'2021-08-11 19:36:01','2021-08-11 19:36:28','~dcd~',NULL,'dcd','{\"productCost\":9303,\"packingCost\":0,\"shippingCost\":0,\"tax\":0,\"others\":0}',1,0,NULL,0.00,0.00,0.00,0.00,0,0,NULL,NULL,NULL,NULL,NULL,0,12,1,'',NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_answer`
--

DROP TABLE IF EXISTS `product_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_answer` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `question_id` int DEFAULT NULL,
  `answer` text,
  `type` int DEFAULT NULL,
  `reference_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `likes` int DEFAULT '0',
  `dislikes` int DEFAULT '0',
  `default_answer` int DEFAULT '0',
  PRIMARY KEY (`answer_id`),
  KEY `fk_tbl_tableProductAnswer_tbl_tableProductQuestion_foreignKey` (`question_id`),
  CONSTRAINT `fk_tbl_tableProductAnswer_tbl_tableProductQuestion_foreignKey` FOREIGN KEY (`question_id`) REFERENCES `product_question` (`question_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_answer`
--

LOCK TABLES `product_answer` WRITE;
/*!40000 ALTER TABLE `product_answer` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_answer_like_dislike`
--

DROP TABLE IF EXISTS `product_answer_like_dislike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_answer_like_dislike` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int DEFAULT NULL,
  `answer_id` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_ProductAnswer_tbl_ProductAnswerLike_foreignKey` (`answer_id`),
  KEY `fk_tbl_Customer_tbl_ProductAnswerLike_foreignKey` (`customer_id`),
  CONSTRAINT `fk_tbl_Customer_tbl_ProductAnswerLike_foreignKey` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_ProductAnswer_tbl_ProductAnswerLike_foreignKey` FOREIGN KEY (`answer_id`) REFERENCES `product_answer` (`answer_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_answer_like_dislike`
--

LOCK TABLES `product_answer_like_dislike` WRITE;
/*!40000 ALTER TABLE `product_answer_like_dislike` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_answer_like_dislike` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_attribute`
--

DROP TABLE IF EXISTS `product_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_attribute` (
  `id` int NOT NULL AUTO_INCREMENT,
  `attribute_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `text` text,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_product_Related_tbl_product_attribute` (`product_id`),
  KEY `fk_tbl_attribute_Related_tbl_product_attribute` (`attribute_id`),
  CONSTRAINT `fk_tbl_attribute_Related_tbl_product_attribute` FOREIGN KEY (`attribute_id`) REFERENCES `attribute` (`attribute_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_product_Related_tbl_product_attribute` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_attribute`
--

LOCK TABLES `product_attribute` WRITE;
/*!40000 ALTER TABLE `product_attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_description`
--

DROP TABLE IF EXISTS `product_description`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_description` (
  `product_description_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `meta_description` text,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_description_id`),
  KEY `product_description_id` (`product_description_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_description`
--

LOCK TABLES `product_description` WRITE;
/*!40000 ALTER TABLE `product_description` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_description` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_discount`
--

DROP TABLE IF EXISTS `product_discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_discount` (
  `product_discount_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `priority` int NOT NULL,
  `price` decimal(15,2) DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `sku_id` int DEFAULT NULL,
  PRIMARY KEY (`product_discount_id`),
  KEY `fk_product_discount_product1` (`product_id`),
  KEY `product_discount_id` (`product_discount_id`),
  KEY `priority` (`priority`),
  KEY `date_start` (`date_start`),
  KEY `date_end` (`date_end`),
  KEY `price` (`price`),
  CONSTRAINT `fk_product_discount_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_discount`
--

LOCK TABLES `product_discount` WRITE;
/*!40000 ALTER TABLE `product_discount` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_image` (
  `product_image_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `container_name` varchar(255) DEFAULT NULL,
  `default_image` int DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_image_id`),
  KEY `fk_product_image_product1` (`product_id`),
  KEY `product_image_id` (`product_image_id`),
  KEY `default_image` (`default_image`),
  CONSTRAINT `fk_product_image_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3540 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (3483,538,'Img_1560941359959.jpeg','Product/SportsBooksAndMore/MusicalInstruments/',1,NULL,NULL,NULL,NULL,'2019-06-19 05:49:51',NULL),(3487,540,'Img_1560942077645.png','Product/SportsBooksAndMore/MusicalInstruments/',1,NULL,NULL,NULL,NULL,'2019-06-19 06:01:40',NULL),(3488,540,'Img_1560942068218.png','Product/SportsBooksAndMore/MusicalInstruments/',0,NULL,NULL,NULL,NULL,'2019-06-19 06:01:40',NULL),(3491,542,'Img_1560942778648.jpeg','Product/BabyandKids/SchoolSupplies/',1,NULL,NULL,NULL,NULL,'2019-06-19 06:16:09',NULL),(3492,542,'Img_1560942923395.jpeg','Product/BabyandKids/SchoolSupplies/',0,NULL,NULL,NULL,NULL,'2019-06-19 06:16:09',NULL),(3493,542,'Img_1560942958770.jpeg','Product/BabyandKids/SchoolSupplies/',0,NULL,NULL,NULL,NULL,'2019-06-19 06:16:09',NULL),(3494,541,'Img_1560942881447.jpeg','Product/SportsBooksAndMore/MusicalInstruments/',1,NULL,NULL,NULL,NULL,'2019-06-19 06:16:12',NULL),(3495,541,'Img_1560942872336.jpeg','Product/SportsBooksAndMore/MusicalInstruments/',0,NULL,NULL,NULL,NULL,'2019-06-19 06:16:12',NULL),(3509,547,'Img_1560949940862.jpeg','Product/HomesAndFurniture/HomeLighting/',1,NULL,NULL,NULL,NULL,'2019-06-19 08:13:25',NULL),(3510,547,'Img_1560949967618.jpeg','Product/HomesAndFurniture/HomeLighting/',0,NULL,NULL,NULL,NULL,'2019-06-19 08:13:25',NULL),(3511,547,'Img_1560949998311.jpeg','Product/HomesAndFurniture/HomeLighting/',0,NULL,NULL,NULL,NULL,'2019-06-19 08:13:25',NULL),(3519,550,'Img_1561012885687.jpeg','Product/Electronics/TVsAndSpeaker/',0,NULL,NULL,NULL,NULL,'2019-06-20 01:43:55',NULL),(3520,550,'Img_1561012928975.jpeg','Product/Electronics/TVsAndSpeaker/',0,NULL,NULL,NULL,NULL,'2019-06-20 01:43:55',NULL),(3521,550,'Img_1561013011775.jpeg','Product/Electronics/TVsAndSpeaker/',1,NULL,NULL,NULL,NULL,'2019-06-20 01:43:55',NULL),(3525,552,'Img_1561013979887.jpeg','Product/Electronics/TVsAndSpeaker/',1,NULL,NULL,NULL,NULL,'2019-06-20 02:01:17',NULL),(3526,552,'Img_1561014035550.jpeg','Product/Electronics/TVsAndSpeaker/',0,NULL,NULL,NULL,NULL,'2019-06-20 02:01:17',NULL),(3527,552,'Img_1561014069848.jpeg','Product/Electronics/TVsAndSpeaker/',0,NULL,NULL,NULL,NULL,'2019-06-20 02:01:17',NULL),(3531,554,'Img_1561015626179.jpeg','Product/MensFashion/BottomWear/',1,NULL,NULL,NULL,NULL,'2019-06-20 02:28:45',NULL),(3532,554,'Img_1561015663360.jpeg','Product/MensFashion/BottomWear/',0,NULL,NULL,NULL,NULL,'2019-06-20 02:28:45',NULL),(3533,554,'Img_1561015719324.jpeg','Product/MensFashion/BottomWear/',0,NULL,NULL,NULL,NULL,'2019-06-20 02:28:45',NULL),(3534,555,'Img_1561016083454.jpeg','Product/MensFashion/BottomWear/',1,NULL,NULL,NULL,NULL,'2019-06-20 02:37:42',NULL),(3535,555,'Img_1561016190944.jpeg','Product/MensFashion/BottomWear/',0,NULL,NULL,NULL,NULL,'2019-06-20 02:37:42',NULL),(3536,555,'Img_1561016253369.jpeg','Product/MensFashion/BottomWear/',0,NULL,NULL,NULL,NULL,'2019-06-20 02:37:42',NULL),(3539,558,'Img_1628703350050.png','Ven0002/',1,NULL,NULL,NULL,NULL,'2021-08-11 19:36:01',NULL);
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_price_log`
--

DROP TABLE IF EXISTS `product_price_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_price_log` (
  `product_price_log_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `vendor_id` int NOT NULL,
  `sku` varchar(255) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `special_price` decimal(10,2) DEFAULT NULL,
  `special_start_date` date DEFAULT NULL,
  `special_end_date` date DEFAULT NULL,
  `discount_price` decimal(10,2) DEFAULT NULL,
  `discount_start_date` date DEFAULT NULL,
  `discount_end_date` date DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `price_update_file_log_id` int DEFAULT NULL,
  PRIMARY KEY (`product_price_log_id`),
  KEY `fk_tbl_product_price_log_tbl_product_foreignKey` (`product_id`),
  KEY `fk_tbl_product_price_log_tbl_vendor_foreignKey` (`vendor_id`),
  CONSTRAINT `fk_tbl_product_price_log_tbl_product_foreignKey` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_product_price_log_tbl_vendor_foreignKey` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_price_log`
--

LOCK TABLES `product_price_log` WRITE;
/*!40000 ALTER TABLE `product_price_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_price_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_question`
--

DROP TABLE IF EXISTS `product_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_question` (
  `question_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `question` text,
  `type` int DEFAULT NULL,
  `reference_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_id`),
  KEY `fk_tbl_tableProductQuestion_tbl_product_foreignKey` (`product_id`),
  CONSTRAINT `fk_tbl_tableProductQuestion_tbl_product_foreignKey` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_question`
--

LOCK TABLES `product_question` WRITE;
/*!40000 ALTER TABLE `product_question` DISABLE KEYS */;
INSERT INTO `product_question` VALUES (1,558,'K,KMKMHBGHVJK,',2,3,1,NULL,'2021-08-11 20:17:58',NULL,'2021-08-11 20:18:28');
/*!40000 ALTER TABLE `product_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_rating`
--

DROP TABLE IF EXISTS `product_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_rating` (
  `rating_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `order_product_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `first_name` varchar(512) DEFAULT NULL,
  `last_name` varchar(512) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `review` text,
  `image_path` text,
  `image` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`rating_id`),
  KEY `fk_product_rating_product1` (`product_id`),
  KEY `product_rating_Cons_order_product` (`order_product_id`),
  KEY `rating_id` (`rating_id`),
  CONSTRAINT `fk_product_rating_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_rating`
--

LOCK TABLES `product_rating` WRITE;
/*!40000 ALTER TABLE `product_rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_related`
--

DROP TABLE IF EXISTS `product_related`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_related` (
  `related_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `related_product_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`related_id`),
  KEY `fk_product_related_product1` (`product_id`),
  KEY `related_id` (`related_id`),
  KEY `fk_tbl_product_related_tbl_product_foreignKey` (`related_product_id`),
  CONSTRAINT `fk_product_related_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_product_related_tbl_product_foreignKey` FOREIGN KEY (`related_product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1398 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_related`
--

LOCK TABLES `product_related` WRITE;
/*!40000 ALTER TABLE `product_related` DISABLE KEYS */;
INSERT INTO `product_related` VALUES (1356,538,540,NULL,NULL,NULL,'2019-06-19 05:49:51',NULL),(1361,540,538,NULL,NULL,NULL,'2019-06-19 06:01:40',NULL),(1366,542,541,NULL,NULL,NULL,'2019-06-19 06:16:09',NULL),(1397,555,547,NULL,NULL,NULL,'2019-06-20 02:37:42',NULL);
/*!40000 ALTER TABLE `product_related` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_special`
--

DROP TABLE IF EXISTS `product_special`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_special` (
  `product_special_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `customer_group_id` int DEFAULT NULL,
  `priority` int DEFAULT NULL,
  `price` decimal(15,2) DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `sku_id` int DEFAULT NULL,
  PRIMARY KEY (`product_special_id`),
  KEY `product_special_ibfk_1` (`product_id`),
  KEY `product_special_id` (`product_special_id`),
  KEY `date_end` (`date_end`),
  KEY `start_end` (`date_end`),
  KEY `priority` (`priority`),
  KEY `price` (`price`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_special`
--

LOCK TABLES `product_special` WRITE;
/*!40000 ALTER TABLE `product_special` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_special` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_stock_alert`
--

DROP TABLE IF EXISTS `product_stock_alert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_stock_alert` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `mail_flag` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `sku_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_product_tbl_product_stock_alert_foreign_key` (`product_id`),
  CONSTRAINT `fk_tbl_product_tbl_product_stock_alert_foreign_key` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_stock_alert`
--

LOCK TABLES `product_stock_alert` WRITE;
/*!40000 ALTER TABLE `product_stock_alert` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_stock_alert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_tag`
--

DROP TABLE IF EXISTS `product_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_tag` (
  `product_tag_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `product_tagname` text,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_tag_id`),
  KEY `product_tag_id` (`product_tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_tag`
--

LOCK TABLES `product_tag` WRITE;
/*!40000 ALTER TABLE `product_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_tire_price`
--

DROP TABLE IF EXISTS `product_tire_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_tire_price` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `sku_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_product_tire_price_tbl_product_foreignKey` (`product_id`),
  CONSTRAINT `fk_tbl_product_tire_price_tbl_product_foreignKey` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_tire_price`
--

LOCK TABLES `product_tire_price` WRITE;
/*!40000 ALTER TABLE `product_tire_price` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_tire_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_to_category`
--

DROP TABLE IF EXISTS `product_to_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_to_category` (
  `product_to_category_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_to_category_id`),
  KEY `fk_product_to_category_product1` (`product_id`),
  KEY `fk_product_to_category_category1` (`category_id`),
  KEY `product_to_category_id` (`product_to_category_id`),
  CONSTRAINT `fk_product_to_category_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_product_to_category_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_to_category`
--

LOCK TABLES `product_to_category` WRITE;
/*!40000 ALTER TABLE `product_to_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_to_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_varient`
--

DROP TABLE IF EXISTS `product_varient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_varient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `varients_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_product_Related_tbl_product_varient` (`product_id`),
  KEY `fk_tbl_varients_Related_tbl_product_varient` (`varients_id`),
  CONSTRAINT `fk_tbl_product_Related_tbl_product_varient` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_varients_Related_tbl_product_varient` FOREIGN KEY (`varients_id`) REFERENCES `varients` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_varient`
--

LOCK TABLES `product_varient` WRITE;
/*!40000 ALTER TABLE `product_varient` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_varient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_varient_option`
--

DROP TABLE IF EXISTS `product_varient_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_varient_option` (
  `id` int NOT NULL AUTO_INCREMENT,
  `varient_name` varchar(255) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `sku_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_product_Related_tbl_product_varient_option` (`product_id`),
  KEY `fk_tbl_sku_Related_tbl_product_varient_option` (`sku_id`),
  CONSTRAINT `fk_tbl_product_Related_tbl_product_varient_option` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_sku_Related_tbl_product_varient_option` FOREIGN KEY (`sku_id`) REFERENCES `sku` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_varient_option`
--

LOCK TABLES `product_varient_option` WRITE;
/*!40000 ALTER TABLE `product_varient_option` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_varient_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_varient_option_details`
--

DROP TABLE IF EXISTS `product_varient_option_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_varient_option_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_varient_option_id` int DEFAULT NULL,
  `varients_value_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_var_val_Related_tbl_prdt_var_opt_dtl` (`varients_value_id`),
  KEY `fk_tbl_prdt_var_opt_Related_tbl_prdt_var_opt_det` (`product_varient_option_id`),
  CONSTRAINT `fk_tbl_prdt_var_opt_Related_tbl_prdt_var_opt_det` FOREIGN KEY (`product_varient_option_id`) REFERENCES `product_varient_option` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_var_val_Related_tbl_prdt_var_opt_dtl` FOREIGN KEY (`varients_value_id`) REFERENCES `varients_value` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_varient_option_details`
--

LOCK TABLES `product_varient_option_details` WRITE;
/*!40000 ALTER TABLE `product_varient_option_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_varient_option_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_varient_option_image`
--

DROP TABLE IF EXISTS `product_varient_option_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_varient_option_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_varient_option_id` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `container_name` varchar(255) DEFAULT NULL,
  `default_image` int DEFAULT '0',
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_prdt_var_opt_related_tbl_prdt_var_opt_img` (`product_varient_option_id`),
  CONSTRAINT `fk_tbl_prdt_var_opt_related_tbl_prdt_var_opt_img` FOREIGN KEY (`product_varient_option_id`) REFERENCES `product_varient_option` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_varient_option_image`
--

LOCK TABLES `product_varient_option_image` WRITE;
/*!40000 ALTER TABLE `product_varient_option_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_varient_option_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_view_log`
--

DROP TABLE IF EXISTS `product_view_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_view_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_view_log_Cons_product` (`product_id`),
  KEY `id` (`id`),
  CONSTRAINT `fk_tbl_product_view_log_tbl_product_foreignKey` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_view_log`
--

LOCK TABLES `product_view_log` WRITE;
/*!40000 ALTER TABLE `product_view_log` DISABLE KEYS */;
INSERT INTO `product_view_log` VALUES (1,542,1,'demo',NULL,'demo@gmail.com','demo@gmail.com',9876543870,NULL,NULL,NULL,NULL,'2020-07-15 13:42:37',NULL),(2,542,1,'demo',NULL,'demo@gmail.com','demo@gmail.com',9876543870,NULL,NULL,NULL,NULL,'2020-12-03 20:33:25',NULL),(3,542,1,'demo',NULL,'demo@gmail.com','demo@gmail.com',9876543870,NULL,NULL,NULL,NULL,'2020-12-03 20:33:48',NULL),(4,542,1,'demo',NULL,'demo@gmail.com','demo@gmail.com',9876543870,NULL,NULL,NULL,NULL,'2020-12-03 20:34:01',NULL),(5,555,1,'demo',NULL,'demo@gmail.com','demo@gmail.com',9876543870,NULL,NULL,NULL,NULL,'2020-12-03 20:34:57',NULL),(6,554,1,'demo',NULL,'demo@gmail.com','demo@gmail.com',9876543870,NULL,NULL,NULL,NULL,'2020-12-03 20:35:22',NULL),(7,558,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-11 19:41:04',NULL),(8,555,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-11 20:16:38',NULL),(9,558,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-11 20:17:23',NULL),(10,558,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-11 20:17:32',NULL),(11,558,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-11 20:18:39',NULL),(12,558,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-11 20:20:03',NULL),(13,554,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-11 20:20:25',NULL),(14,554,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-11 20:20:35',NULL),(15,547,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-11 20:24:50',NULL),(16,558,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-24 16:13:05',NULL),(17,550,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-24 16:13:10',NULL),(18,552,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-24 16:13:13',NULL),(19,547,3,'carlo','iodice','cacca@gmail.com','cacca@gmail.com',343242424,NULL,NULL,NULL,NULL,'2021-08-24 16:13:17',NULL);
/*!40000 ALTER TABLE `product_view_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotation`
--

DROP TABLE IF EXISTS `quotation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quotation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `quantity_unit` varchar(255) DEFAULT NULL,
  `order_value` varchar(255) DEFAULT NULL,
  `comments` text,
  `purpose` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_product_tbl_quotation_foreign` (`product_id`),
  KEY `fk_tbl_customer_tbl_quotation_foreign` (`customer_id`),
  CONSTRAINT `fk_tbl_customer_tbl_quotation_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_product_tbl_quotation_foreign` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotation`
--

LOCK TABLES `quotation` WRITE;
/*!40000 ALTER TABLE `quotation` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `razorpay_order`
--

DROP TABLE IF EXISTS `razorpay_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `razorpay_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `razorpay_ref_id` varchar(255) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `fk_tbl_razorpayOrder_tbl_order_foreignKey` (`order_id`),
  CONSTRAINT `fk_tbl_razorpayOrder_tbl_order_foreignKey` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `razorpay_order`
--

LOCK TABLES `razorpay_order` WRITE;
/*!40000 ALTER TABLE `razorpay_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `razorpay_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `razorpay_order_transaction`
--

DROP TABLE IF EXISTS `razorpay_order_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `razorpay_order_transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `razorpay_order_id` int DEFAULT NULL,
  `payment_type` varchar(255) DEFAULT NULL,
  `payment_data` text,
  `payment_status` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `fk_tbl_razorpayOrderTransaction_tbl_razorpayOrder_foreignKey` (`razorpay_order_id`),
  CONSTRAINT `fk_tbl_razorpayOrderTransaction_tbl_razorpayOrder_foreignKey` FOREIGN KEY (`razorpay_order_id`) REFERENCES `razorpay_order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `razorpay_order_transaction`
--

LOCK TABLES `razorpay_order_transaction` WRITE;
/*!40000 ALTER TABLE `razorpay_order_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `razorpay_order_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `mobile` bigint DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`service_id`),
  KEY `service_id` (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_category`
--

DROP TABLE IF EXISTS `service_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_category` (
  `service_category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `parent_int` int DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`service_category_id`),
  KEY `service_category_id` (`service_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_category`
--

LOCK TABLES `service_category` WRITE;
/*!40000 ALTER TABLE `service_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_category_path`
--

DROP TABLE IF EXISTS `service_category_path`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_category_path` (
  `service_category_path_id` int NOT NULL AUTO_INCREMENT,
  `service_category_id` int DEFAULT NULL,
  `path_id` int DEFAULT NULL,
  `level` int NOT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`service_category_path_id`),
  KEY `service_category_path_id` (`service_category_path_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_category_path`
--

LOCK TABLES `service_category_path` WRITE;
/*!40000 ALTER TABLE `service_category_path` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_category_path` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_enquiry`
--

DROP TABLE IF EXISTS `service_enquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_enquiry` (
  `enquiry_id` int NOT NULL AUTO_INCREMENT,
  `service_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `comments` text,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`enquiry_id`),
  KEY `fk_tbl_service_enquiry_tbl_service` (`service_id`),
  KEY `enquiry_id` (`enquiry_id`),
  CONSTRAINT `fk_tbl_service_enquiry_tbl_service` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_enquiry`
--

LOCK TABLES `service_enquiry` WRITE;
/*!40000 ALTER TABLE `service_enquiry` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_enquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_image`
--

DROP TABLE IF EXISTS `service_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_image` (
  `service_image_id` int NOT NULL AUTO_INCREMENT,
  `service_id` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `container_name` varchar(255) DEFAULT NULL,
  `default_image` int DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`service_image_id`),
  KEY `service_image_id` (`service_image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_image`
--

LOCK TABLES `service_image` WRITE;
/*!40000 ALTER TABLE `service_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_to_category`
--

DROP TABLE IF EXISTS `service_to_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_to_category` (
  `service_to_category_id` int NOT NULL AUTO_INCREMENT,
  `service_id` int NOT NULL,
  `service_category_id` int NOT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`service_to_category_id`),
  KEY `fk_tbl_service_to_category_tbl_service_category` (`service_category_id`),
  KEY `fk_tbl_service_to_category_tbl_service` (`service_id`),
  KEY `service_to_category_id` (`service_to_category_id`),
  CONSTRAINT `fk_tbl_service_to_category_tbl_service` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_service_to_category_tbl_service_category` FOREIGN KEY (`service_category_id`) REFERENCES `service_category` (`service_category_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_to_category`
--

LOCK TABLES `service_to_category` WRITE;
/*!40000 ALTER TABLE `service_to_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_to_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('aed9OKA5RNqZgEIjFZT_MwsEpzwjYyWj',1629991304,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('nSATfBEdWEtQgAFDj9KH8vdBtSEzF79z',1630060030,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `settings` (
  `settings_id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(250) DEFAULT NULL,
  `meta_tag_title` varchar(250) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keywords` varchar(250) DEFAULT NULL,
  `store_name` varchar(250) DEFAULT NULL,
  `store_owner` varchar(250) DEFAULT NULL,
  `store_address` text,
  `country_id` int DEFAULT NULL,
  `zone_id` varchar(255) DEFAULT NULL,
  `store_email` varchar(250) DEFAULT NULL,
  `store_telephone` varchar(50) DEFAULT NULL,
  `store_fax` varchar(30) DEFAULT NULL,
  `store_logo` varchar(250) DEFAULT NULL,
  `store_logo_path` varchar(255) DEFAULT NULL,
  `maintenance_mode` int DEFAULT NULL,
  `store_language_name` varchar(250) DEFAULT NULL,
  `store_currency_id` int DEFAULT NULL,
  `store_image` varchar(255) DEFAULT NULL,
  `store_image_path` text,
  `google` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `order_status` int NOT NULL DEFAULT '1',
  `invoice_prefix` varchar(255) DEFAULT NULL,
  `items_per_page` int DEFAULT NULL,
  `category_product_count` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `email_logo` varchar(255) DEFAULT NULL,
  `email_logo_path` varchar(255) DEFAULT NULL,
  `invoice_logo` varchar(255) DEFAULT NULL,
  `invoice_logo_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`settings_id`),
  KEY `fk_Country_Settings` (`country_id`),
  KEY `settings_id` (`settings_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (2,'www.spurt.com','Spurtcommerce','description','keyword','online shopping sites in india ','Admin','Chennai, India',9,'59','support@spurtcommerce.com','9840322505','1221','Img_1623253623483.png','storeLogo/',0,'English',46,'storeImage',NULL,'https://plus.google.com/106505712715559114904','https://www.facebook.com/spurtcommerce/','https://twitter.com/Spurtcommerce','https://www.instagram.com/spurt_commerce/',1,'SPU',20,1,1,'2019-02-13 06:00:00','2021-06-09 21:17:03',NULL,NULL,'EmailLogo_1623253623527.png','storeLogo/','InvoiceLogo_1607003182965.jpeg','storeLogo/');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settlement`
--

DROP TABLE IF EXISTS `settlement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `settlement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `no_of_orders` int DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `currency_symbol_left` varchar(255) DEFAULT NULL,
  `currency_symbol_right` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settlement`
--

LOCK TABLES `settlement` WRITE;
/*!40000 ALTER TABLE `settlement` DISABLE KEYS */;
/*!40000 ALTER TABLE `settlement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settlement_item`
--

DROP TABLE IF EXISTS `settlement_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `settlement_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vendor_order_id` int NOT NULL,
  `vendor_id` int NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `settlement_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `order_product_id` int DEFAULT NULL,
  `order_product_prefix_id` varchar(255) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `commission` int DEFAULT NULL,
  `commission_amount` decimal(10,2) DEFAULT NULL,
  `net_amount` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_settlement_constraint_tbl_settlement_item` (`settlement_id`),
  CONSTRAINT `fk_tbl_settlement_constraint_tbl_settlement_item` FOREIGN KEY (`settlement_id`) REFERENCES `settlement` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settlement_item`
--

LOCK TABLES `settlement_item` WRITE;
/*!40000 ALTER TABLE `settlement_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `settlement_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_filter`
--

DROP TABLE IF EXISTS `site_filter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_filter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filter_name` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_filter`
--

LOCK TABLES `site_filter` WRITE;
/*!40000 ALTER TABLE `site_filter` DISABLE KEYS */;
/*!40000 ALTER TABLE `site_filter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_filter_category`
--

DROP TABLE IF EXISTS `site_filter_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_filter_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `site_filter_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_filter_Related_tbl_site_filter_category` (`site_filter_id`),
  KEY `fk_tbl_category_Related_tbl_site_filter_category` (`category_id`),
  CONSTRAINT `fk_tbl_category_Related_tbl_site_filter_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_filter_Related_tbl_site_filter_category` FOREIGN KEY (`site_filter_id`) REFERENCES `site_filter` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_filter_category`
--

LOCK TABLES `site_filter_category` WRITE;
/*!40000 ALTER TABLE `site_filter_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `site_filter_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_filter_section`
--

DROP TABLE IF EXISTS `site_filter_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_filter_section` (
  `id` int NOT NULL AUTO_INCREMENT,
  `site_filter_id` int DEFAULT NULL,
  `section_name` varchar(255) DEFAULT NULL,
  `section_slug` varchar(255) DEFAULT NULL,
  `section_type` int DEFAULT NULL COMMENT '1-> varient 2-> attribute',
  `sequence` int DEFAULT NULL,
  `section_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_site_filter_Related_tbl_site_filter_section` (`site_filter_id`),
  CONSTRAINT `fk_tbl_site_filter_Related_tbl_site_filter_section` FOREIGN KEY (`site_filter_id`) REFERENCES `site_filter` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_filter_section`
--

LOCK TABLES `site_filter_section` WRITE;
/*!40000 ALTER TABLE `site_filter_section` DISABLE KEYS */;
/*!40000 ALTER TABLE `site_filter_section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_filter_section_item`
--

DROP TABLE IF EXISTS `site_filter_section_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_filter_section_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `site_filter_section_id` int DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_filter_section_Related_tbl_filter_section_item` (`site_filter_section_id`),
  CONSTRAINT `fk_tbl_filter_section_Related_tbl_filter_section_item` FOREIGN KEY (`site_filter_section_id`) REFERENCES `site_filter_section` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_filter_section_item`
--

LOCK TABLES `site_filter_section_item` WRITE;
/*!40000 ALTER TABLE `site_filter_section_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `site_filter_section_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sku`
--

DROP TABLE IF EXISTS `sku`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sku` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku_name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `out_of_stock_threshold` int DEFAULT NULL,
  `notify_min_quantity_below` int DEFAULT NULL,
  `min_quantity_allowed_cart` int DEFAULT NULL,
  `max_quantity_allowed_cart` int DEFAULT NULL,
  `enable_back_orders` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sku`
--

LOCK TABLES `sku` WRITE;
/*!40000 ALTER TABLE `sku` DISABLE KEYS */;
INSERT INTO `sku` VALUES (1,'DRM9900U6',5889.00,150,1,'2020-12-02 17:17:18','2020-12-02 17:17:18',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'ASS88901Gy',89900.00,100,1,'2020-12-02 17:17:18','2020-12-02 17:17:18',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'AWE00UI6',24000.00,100,1,'2020-12-02 17:17:18','2020-12-02 17:17:18',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'BB002013',360.00,100,1,'2020-12-02 17:17:18','2020-12-02 17:17:18',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'WL002017',850.00,100,1,'2020-12-02 17:17:19','2020-12-02 17:17:19',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'EH002021',2100.00,100,1,'2020-12-02 17:17:28','2020-12-02 17:17:28',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'ET002023',14000.00,100,1,'2020-12-02 17:17:28','2020-12-02 17:17:28',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'MC002031',760.00,100,1,'2020-12-02 17:17:28','2020-12-02 17:17:28',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'MC002034',780.00,100,1,'2020-12-02 17:17:28','2021-08-11 23:25:04',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'dscdc',9303.00,100,1,'2021-08-11 19:36:01','2021-08-11 19:36:01',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `sku` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_log`
--

DROP TABLE IF EXISTS `stock_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `sku_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_product_tbl_stock_log_foreign` (`product_id`),
  KEY `fk_tbl_order_tbl_stock_log_foreign` (`order_id`),
  CONSTRAINT `fk_tbl_order_tbl_stock_log_foreign` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_product_tbl_stock_log_foreign` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_log`
--

LOCK TABLES `stock_log` WRITE;
/*!40000 ALTER TABLE `stock_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_status`
--

DROP TABLE IF EXISTS `stock_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock_status` (
  `stock_status_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `slug_name` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`stock_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_status`
--

LOCK TABLES `stock_status` WRITE;
/*!40000 ALTER TABLE `stock_status` DISABLE KEYS */;
INSERT INTO `stock_status` VALUES (1,'In Stock',NULL,1,NULL,NULL,'2019-03-25 00:49:53','2020-04-18 06:54:45'),(2,'Out of stock',NULL,1,NULL,NULL,'2019-03-25 00:50:34','2020-04-18 06:55:11');
/*!40000 ALTER TABLE `stock_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stripe_order`
--

DROP TABLE IF EXISTS `stripe_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stripe_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `stripe_ref_id` varchar(255) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stripe_order`
--

LOCK TABLES `stripe_order` WRITE;
/*!40000 ALTER TABLE `stripe_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `stripe_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stripe_order_transaction`
--

DROP TABLE IF EXISTS `stripe_order_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stripe_order_transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stripe_order_id` int DEFAULT NULL,
  `payment_type` varchar(255) DEFAULT NULL,
  `payment_data` text,
  `payment_status` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stripe_order_transaction`
--

LOCK TABLES `stripe_order_transaction` WRITE;
/*!40000 ALTER TABLE `stripe_order_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `stripe_order_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_path`
--

DROP TABLE IF EXISTS `sub_path`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_path` (
  `sub_path_id` int NOT NULL AUTO_INCREMENT,
  `sub_id` int DEFAULT NULL,
  `path_id` int DEFAULT NULL,
  `level` int NOT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`sub_path_id`),
  KEY `sub_path_id` (`sub_path_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_path`
--

LOCK TABLES `sub_path` WRITE;
/*!40000 ALTER TABLE `sub_path` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_path` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tax`
--

DROP TABLE IF EXISTS `tax`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tax` (
  `tax_id` int NOT NULL AUTO_INCREMENT,
  `tax_name` varchar(255) DEFAULT NULL,
  `tax_percentage` int DEFAULT NULL,
  `tax_status` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`tax_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tax`
--

LOCK TABLES `tax` WRITE;
/*!40000 ALTER TABLE `tax` DISABLE KEYS */;
INSERT INTO `tax` VALUES (1,'GST',5,1,NULL,'2020-02-20 13:42:39',NULL,'2020-02-20 13:42:49'),(2,'Tax',10,1,NULL,'2020-04-20 09:34:44',NULL,NULL);
/*!40000 ALTER TABLE `tax` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_group`
--

DROP TABLE IF EXISTS `user_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_group` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `slug` varchar(64) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `permission` text,
  PRIMARY KEY (`group_id`),
  KEY `group_id` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_group`
--

LOCK TABLES `user_group` WRITE;
/*!40000 ALTER TABLE `user_group` DISABLE KEYS */;
INSERT INTO `user_group` VALUES (1,'Admin','optional',1,'2019-01-21 10:38:14','2019-05-14 01:24:32',NULL,NULL,NULL),(3,'admin2',NULL,1,'2021-08-25 11:08:39','2021-08-25 11:09:10',NULL,NULL,'{\"list-order\":true,\"delete-order\":true,\"view-order\":true,\"export-order\":true,\"create-product\":true,\"update-order-status\":true,\"edit-product\":true,\"view-product\":true,\"delete-product\":true,\"make-feature\":true,\"make-today-deal\":true,\"export-product\":true,\"create-category\":true,\"edit-category\":true,\"delete-category\":true,\"create-product-option\":true,\"edit-product-option\":true,\"delete-product-option\":true,\"edit-rating-review\":true,\"create-customer\":true,\"edit-customer\":true,\"delete-customer\":true,\"export-customer\":true,\"export-all-customer\":true,\"view-customer\":true,\"create-customer-group\":true,\"edit-customer-group\":true,\"delete-customer-group\":true,\"create-pages\":true,\"edit-pages\":true,\"delete-pages\":true,\"create-banners\":true,\"edit-banners\":true,\"delete-banners\":true,\"create-services\":true,\"edit-services\":true,\"delete-services\":true,\"export-services\":true,\"create-service-category\":true,\"edit-service-category\":true,\"delete-service-category\":true,\"export-service-category\":true,\"list-enquiry\":true,\"delete-enquiry\":true,\"list-leads\":true,\"delete-leads\":true,\"create-role\":true,\"edit-role\":true,\"delete-role\":true,\"create-user\":true,\"edit-user\":true,\"delete-user\":true,\"edit-general-settings\":true,\"edit-personalize-product\":true,\"edit-personalize-order\":true,\"edit-seo-url\":true,\"edit-social-url\":true,\"list-country\":true,\"create-country\":true,\"edit-country\":true,\"delete-country\":true,\"list-zone\":true,\"create-zone\":true,\"edit-zone\":true,\"delete-zone\":true,\"list-language\":true,\"create-language\":true,\"edit-language\":true,\"delete-language\":true,\"list-currency\":true,\"create-currency\":true,\"edit-currency\":true,\"delete-currency\":true,\"list-tax\":true,\"create-tax\":true,\"edit-tax\":true,\"delete-tax\":true,\"list-order-status\":true,\"create-order-status\":true,\"edit-order-status\":true,\"delete-order-status\":true,\"list-stock-status\":true,\"create-stock-status\":true,\"edit-stock-status\":true,\"delete-stock-status\":true,\"list-email-template\":true,\"edit-email-template\":true,\"delete-email-template\":true,\"create-vendor\":true,\"edit-vendor\":true,\"delete-vendor\":true,\"approve-vendor\":true,\"view-vendor\":true,\"export-vendor\":true,\"export-all-vendor\":true,\"create-market-place-product\":true,\"edit-market-place-product\":true,\"approve-market-place-product\":true,\"delete-market-place-product\":true,\"export-market-place-product\":true,\"export-all-market-place-product\":true,\"assign-category\":true,\"set-commission\":true,\"set-vendor-commission\":true,\"list-sales\":true,\"list-payment\":true,\"export-all-payment\":true,\"list-product\":true,\"list-category\":true,\"list-product-option\":true,\"list-rating-review\":true,\"list-customer\":true,\"list-customer-group\":true,\"list-pages\":true,\"list-banners\":true,\"list-services\":true,\"list-service-category\":true,\"list-role\":true,\"list-user\":true,\"list-vendor\":true,\"list-market-place-product\":true,\"list-sales-payments\":true,\"export-all-sales-payments\":true,\"list-brands\":true,\"create-brands\":true,\"edit-brands\":true,\"delete-brands\":true,\"export-brands\":true,\"list-coupon\":true,\"create-coupon\":true,\"edit-coupon\":true,\"delete-coupon\":true,\"list-blogs\":true,\"create-blogs\":true,\"edit-blogs\":true,\"delete-blogs\":true}');
/*!40000 ALTER TABLE `user_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_group_id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `avatar_path` varchar(255) DEFAULT NULL,
  `code` varchar(32) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `delete_flag` int DEFAULT '0',
  `permission` text,
  PRIMARY KEY (`user_id`),
  KEY `fk_users_usergroup` (`user_group_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `fk_users_usergroup` FOREIGN KEY (`user_group_id`) REFERENCES `user_group` (`group_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (49,1,'admin@spurtcart.com','$2b$10$/7MmJDnJ7FcYsOOAnIQwPeevZQPlP9TqjMm92ZC/kahsJFrnfMGs2','Admin',' ','admin@spurtcart.com','Img_1567002487693.jpg','user/',NULL,NULL,'India',1234567890,1,'2019-02-15 04:13:22','2020-02-28 05:17:06',NULL,NULL,0,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `varients`
--

DROP TABLE IF EXISTS `varients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `varients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(32) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `varients`
--

LOCK TABLES `varients` WRITE;
/*!40000 ALTER TABLE `varients` DISABLE KEYS */;
/*!40000 ALTER TABLE `varients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `varients_value`
--

DROP TABLE IF EXISTS `varients_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `varients_value` (
  `id` int NOT NULL AUTO_INCREMENT,
  `varients_id` int DEFAULT NULL,
  `value_name` varchar(255) DEFAULT NULL,
  `sort_order` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_varients_related_tbl_varients_value` (`varients_id`),
  CONSTRAINT `fk_tbl_varients_related_tbl_varients_value` FOREIGN KEY (`varients_id`) REFERENCES `varients` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `varients_value`
--

LOCK TABLES `varients_value` WRITE;
/*!40000 ALTER TABLE `varients_value` DISABLE KEYS */;
/*!40000 ALTER TABLE `varients_value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `vendor_id` int NOT NULL AUTO_INCREMENT,
  `vendor_prefix_id` varchar(255) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `commission` int DEFAULT NULL,
  `company_name` varchar(512) DEFAULT NULL,
  `company_location` varchar(255) DEFAULT NULL,
  `company_logo` varchar(255) DEFAULT NULL,
  `company_logo_path` varchar(255) DEFAULT NULL,
  `company_description` text,
  `payment_method` int DEFAULT NULL,
  `cheque_payee_name` varchar(255) DEFAULT NULL,
  `paypal_email_account` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `account_number` varchar(255) DEFAULT NULL,
  `account_name` varchar(255) DEFAULT NULL,
  `approval_flag` int DEFAULT NULL,
  `approved_by` int DEFAULT NULL,
  `approved_date` date DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `contact_person_name` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `company_address1` varchar(255) DEFAULT NULL,
  `company_address2` varchar(255) DEFAULT NULL,
  `company_city` varchar(255) DEFAULT NULL,
  `company_state` varchar(255) DEFAULT NULL,
  `company_country_id` int DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `company_mobile_number` bigint DEFAULT NULL,
  `company_email_id` varchar(255) DEFAULT NULL,
  `company_website` varchar(255) DEFAULT NULL,
  `company_gst_number` varchar(255) DEFAULT NULL,
  `company_pan_number` varchar(255) DEFAULT NULL,
  `payment_information` varchar(255) DEFAULT NULL,
  `vendor_slug_name` varchar(255) DEFAULT NULL,
  `company_cover_image` varchar(255) DEFAULT NULL,
  `company_cover_image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`vendor_id`),
  KEY `fk_tbl_vendor_tbl_customer_foreignKey` (`customer_id`),
  CONSTRAINT `fk_tbl_vendor_tbl_customer_foreignKey` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES (1,'Ven0001',2,1,'TOYS',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,1,49,'2021-08-11',NULL,NULL,'2021-08-11 18:21:32','2021-08-11 20:10:33',NULL,NULL,'Via Nazionale Appia 81','','curti','caserta',105,81040,NULL,'test@gmail.com','','',NULL,'','marco-1',NULL,NULL),(2,'Ven0002',3,1,'ZIO TOM',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,1,49,'2021-08-11',NULL,NULL,'2021-08-11 18:22:07','2021-08-11 18:23:01','carlo',NULL,'','','','',105,81040,NULL,'test@gmail.com','',NULL,NULL,'','carlo-1',NULL,NULL),(3,'Ven0003',3,1,'CONAD',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,1,49,'2021-08-11',NULL,NULL,'2021-08-11 18:21:32','2021-08-11 18:23:02',NULL,NULL,'Via Nazionale Appia 81','','curti','caserta',105,81040,NULL,NULL,'','',NULL,'','marco',NULL,NULL),(4,'Ven0004',3,1,'BRUSCONE',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,1,49,'2021-08-11',NULL,NULL,'2021-08-11 18:21:32','2021-08-11 18:23:02',NULL,NULL,'Via Nazionale Appia 81','','curti','caserta',105,81040,NULL,NULL,'','',NULL,'','marco',NULL,NULL),(5,'Ven0005',3,1,'OVS',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,1,49,'2021-08-11',NULL,NULL,'2021-08-11 18:21:32','2021-08-11 18:23:02',NULL,NULL,'Via Nazionale Appia 81','','curti','caserta',105,81040,NULL,NULL,'','',NULL,'','marco',NULL,NULL),(6,'Ven0006',5,2,'cscdscs',NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,1,49,'2021-08-24',NULL,NULL,'2021-08-24 09:45:51','2021-08-24 10:08:37',NULL,NULL,'cdscdsc','cdscds','cdscs','kerala',99,3233,NULL,NULL,'','312',NULL,'','carlo-NaN',NULL,NULL);
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_category`
--

DROP TABLE IF EXISTS `vendor_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_category` (
  `vendor_category_id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `vendor_category_commission` int DEFAULT NULL,
  PRIMARY KEY (`vendor_category_id`),
  KEY `fk_tbl_vendor_category_tbl_vendor_foreignKey` (`vendor_id`),
  KEY `fk_tbl_vendor_category_tbl_category_foreignKey` (`category_id`),
  CONSTRAINT `fk_tbl_vendor_category_tbl_category_foreignKey` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_vendor_category_tbl_vendor_foreignKey` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_category`
--

LOCK TABLES `vendor_category` WRITE;
/*!40000 ALTER TABLE `vendor_category` DISABLE KEYS */;
INSERT INTO `vendor_category` VALUES (2,2,164,0),(3,1,163,0),(4,3,163,0),(5,4,164,0),(6,5,163,0),(12,6,160,0);
/*!40000 ALTER TABLE `vendor_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_coupon`
--

DROP TABLE IF EXISTS `vendor_coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_coupon` (
  `vendor_coupon_id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int DEFAULT NULL,
  `coupon_name` varchar(255) DEFAULT NULL,
  `coupon_code` varchar(255) DEFAULT NULL,
  `coupon_type` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `minimum_purchase_amount` decimal(10,2) DEFAULT NULL,
  `maximum_purchase_amount` decimal(10,2) DEFAULT NULL,
  `coupon_conjunction` int DEFAULT '0',
  `coupon_applies_sales` int DEFAULT '0',
  `email_restrictions` varchar(255) DEFAULT NULL,
  `applicable_for` int DEFAULT NULL,
  `free_shipping` int DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `max_user_per_coupon` int DEFAULT NULL,
  `no_of_time_coupon_valid_user` int DEFAULT NULL,
  `all_qualifying_items_apply` int DEFAULT '0',
  `applied_cart_items_count` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`vendor_coupon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_coupon`
--

LOCK TABLES `vendor_coupon` WRITE;
/*!40000 ALTER TABLE `vendor_coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_coupon_product_category`
--

DROP TABLE IF EXISTS `vendor_coupon_product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_coupon_product_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vendor_coupon_id` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `reference_id` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_vendorCouponProductCategory_tbl_vendorCoupon_foreignKey` (`vendor_coupon_id`),
  CONSTRAINT `fk_tbl_vendorCouponProductCategory_tbl_vendorCoupon_foreignKey` FOREIGN KEY (`vendor_coupon_id`) REFERENCES `vendor_coupon` (`vendor_coupon_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_coupon_product_category`
--

LOCK TABLES `vendor_coupon_product_category` WRITE;
/*!40000 ALTER TABLE `vendor_coupon_product_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_coupon_product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_global_setting`
--

DROP TABLE IF EXISTS `vendor_global_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_global_setting` (
  `vendor_global_setting_id` int NOT NULL AUTO_INCREMENT,
  `default_commission` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`vendor_global_setting_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_global_setting`
--

LOCK TABLES `vendor_global_setting` WRITE;
/*!40000 ALTER TABLE `vendor_global_setting` DISABLE KEYS */;
INSERT INTO `vendor_global_setting` VALUES (1,10,NULL,NULL,'2019-11-05 18:48:33','2020-02-14 10:04:26');
/*!40000 ALTER TABLE `vendor_global_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_invoice`
--

DROP TABLE IF EXISTS `vendor_invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_invoice` (
  `vendor_invoice_id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `invoice_no` varchar(255) DEFAULT NULL,
  `invoice_prefix` varchar(255) DEFAULT NULL,
  `total` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `shipping_firstname` varchar(32) DEFAULT NULL,
  `shipping_lastname` varchar(32) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`vendor_invoice_id`),
  KEY `fk_tbl_vendor_tbl_vendor_invoice_foreignKey` (`vendor_id`),
  KEY `fk_tbl_order_tbl_vendor_invoice_foreignKey` (`order_id`),
  CONSTRAINT `fk_tbl_order_tbl_vendor_invoice_foreignKey` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_vendor_tbl_vendor_invoice_foreignKey` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_invoice`
--

LOCK TABLES `vendor_invoice` WRITE;
/*!40000 ALTER TABLE `vendor_invoice` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_invoice_item`
--

DROP TABLE IF EXISTS `vendor_invoice_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_invoice_item` (
  `vendor_invoice_item_id` int NOT NULL AUTO_INCREMENT,
  `vendor_invoice_id` int NOT NULL,
  `order_product_id` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`vendor_invoice_item_id`),
  KEY `fk_tbl_order_product_tbl_vendor_invoice_item_foreignKey` (`vendor_invoice_id`),
  CONSTRAINT `fk_tbl_order_product_tbl_vendor_invoice_item_foreignKey` FOREIGN KEY (`vendor_invoice_id`) REFERENCES `vendor_invoice` (`vendor_invoice_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_vendor_invoice_tbl_vendor_invoice_item_foreignKey` FOREIGN KEY (`vendor_invoice_id`) REFERENCES `vendor_invoice` (`vendor_invoice_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_invoice_item`
--

LOCK TABLES `vendor_invoice_item` WRITE;
/*!40000 ALTER TABLE `vendor_invoice_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_invoice_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_order_archive`
--

DROP TABLE IF EXISTS `vendor_order_archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_order_archive` (
  `vendor_order_archive_id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `sub_order_id` varchar(255) DEFAULT NULL,
  `sub_order_status_id` int DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `commission` int DEFAULT '0',
  `order_product_id` int NOT NULL,
  PRIMARY KEY (`vendor_order_archive_id`),
  KEY `FK_71cf32310715a162fbe0a1d3ab4` (`vendor_id`),
  KEY `FK_4eb695729b08afef5b7794c176f` (`order_id`),
  KEY `FK_54e8ab35b68535a3f1bca9e0003` (`sub_order_status_id`),
  CONSTRAINT `FK_4eb695729b08afef5b7794c176f` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_54e8ab35b68535a3f1bca9e0003` FOREIGN KEY (`sub_order_status_id`) REFERENCES `order_status` (`order_status_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_71cf32310715a162fbe0a1d3ab4` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_order_archive`
--

LOCK TABLES `vendor_order_archive` WRITE;
/*!40000 ALTER TABLE `vendor_order_archive` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_order_archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_order_archive_log`
--

DROP TABLE IF EXISTS `vendor_order_archive_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_order_archive_log` (
  `vendor_order_archive_log_id` int NOT NULL AUTO_INCREMENT,
  `vendor_order_archive_id` int DEFAULT NULL,
  `vendor_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `sub_order_id` varchar(255) DEFAULT NULL,
  `sub_order_status_id` int DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `commission` int DEFAULT '0',
  `order_product_id` int NOT NULL,
  PRIMARY KEY (`vendor_order_archive_log_id`),
  KEY `fk_tbl_vendorOrderArchiveLog_tbl_vendor_foreignKey` (`vendor_id`),
  KEY `fk_tbl_vendorOrderArchiveLog_tbl_order_foreignKey` (`order_id`),
  KEY `fk_tbl_vendorOrderArchiveLog_tbl_vendorOrderArchive_foreignKey` (`vendor_order_archive_id`),
  KEY `fk_tbl_vendorOrderArchiveLog_tbl_vendorOrderStatus_foreignKey` (`sub_order_status_id`),
  CONSTRAINT `fk_tbl_vendorOrderArchiveLog_tbl_order_foreignKey` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_vendorOrderArchiveLog_tbl_vendor_foreignKey` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_vendorOrderArchiveLog_tbl_vendorOrderArchive_foreignKey` FOREIGN KEY (`vendor_order_archive_id`) REFERENCES `vendor_order_archive` (`vendor_order_archive_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_vendorOrderArchiveLog_tbl_vendorOrderStatus_foreignKey` FOREIGN KEY (`sub_order_status_id`) REFERENCES `vendor_order_status` (`vendor_order_status_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_order_archive_log`
--

LOCK TABLES `vendor_order_archive_log` WRITE;
/*!40000 ALTER TABLE `vendor_order_archive_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_order_archive_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_order_products`
--

DROP TABLE IF EXISTS `vendor_order_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_order_products` (
  `vendor_order_product_id` int NOT NULL AUTO_INCREMENT,
  `vendor_order_id` int DEFAULT NULL,
  `order_product_id` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`vendor_order_product_id`),
  KEY `FK_ab5f080eb3449fd728a7eb912a9` (`vendor_order_id`),
  KEY `FK_5280eb05a7353ec3bb43ba6f716` (`order_product_id`),
  CONSTRAINT `FK_5280eb05a7353ec3bb43ba6f716` FOREIGN KEY (`order_product_id`) REFERENCES `order_product` (`order_product_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_ab5f080eb3449fd728a7eb912a9` FOREIGN KEY (`vendor_order_id`) REFERENCES `vendor_orders` (`vendor_order_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_order_products`
--

LOCK TABLES `vendor_order_products` WRITE;
/*!40000 ALTER TABLE `vendor_order_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_order_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_order_status`
--

DROP TABLE IF EXISTS `vendor_order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_order_status` (
  `vendor_order_status_id` int NOT NULL AUTO_INCREMENT,
  `order_status_name` varchar(255) DEFAULT NULL,
  `color_code` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`vendor_order_status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_order_status`
--

LOCK TABLES `vendor_order_status` WRITE;
/*!40000 ALTER TABLE `vendor_order_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_orders`
--

DROP TABLE IF EXISTS `vendor_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_orders` (
  `vendor_order_id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `sub_order_id` varchar(255) DEFAULT NULL,
  `sub_order_status_id` int DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `tracking_url` varchar(255) DEFAULT NULL,
  `tracking_no` varchar(255) DEFAULT NULL,
  `order_product_id` int DEFAULT NULL,
  `commission` int DEFAULT '0',
  `make_settlement` int DEFAULT '0',
  PRIMARY KEY (`vendor_order_id`),
  KEY `FK_278a24fad52a1cb864326bf8480` (`vendor_id`),
  KEY `FK_5044c3c237f11946768a05a6a50` (`order_id`),
  KEY `fk_tbl_order_product_tbl_vendor_order_foreignKey` (`order_product_id`),
  CONSTRAINT `FK_278a24fad52a1cb864326bf8480` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_5044c3c237f11946768a05a6a50` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_order_product_tbl_vendor_order_foreignKey` FOREIGN KEY (`order_product_id`) REFERENCES `order_product` (`order_product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_orders`
--

LOCK TABLES `vendor_orders` WRITE;
/*!40000 ALTER TABLE `vendor_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_orders_log`
--

DROP TABLE IF EXISTS `vendor_orders_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_orders_log` (
  `vendor_order_log_id` int NOT NULL AUTO_INCREMENT,
  `vendor_order_id` int NOT NULL,
  `vendor_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `sub_order_id` varchar(255) DEFAULT NULL,
  `sub_order_status_id` int DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `total` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`vendor_order_log_id`),
  KEY `FK_b3b2b536f916fbf32f30d763a8f` (`vendor_id`),
  KEY `FK_94015e6a9502a903b6e63268b56` (`order_id`),
  CONSTRAINT `FK_94015e6a9502a903b6e63268b56` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `FK_b3b2b536f916fbf32f30d763a8f` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_orders_log`
--

LOCK TABLES `vendor_orders_log` WRITE;
/*!40000 ALTER TABLE `vendor_orders_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_orders_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_payment`
--

DROP TABLE IF EXISTS `vendor_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_payment` (
  `vendor_payment_id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int NOT NULL,
  `vendor_order_id` int DEFAULT NULL,
  `payment_item_id` int NOT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `commission_amount` decimal(10,2) DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`vendor_payment_id`),
  KEY `payment_items_id` (`payment_item_id`),
  KEY `vendor_id` (`vendor_id`),
  KEY `vendor_order_id` (`vendor_order_id`),
  CONSTRAINT `fk_tbl_vendorPayment_tbl_vendor_foreignKey` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_vendorPayment_tbl_vendorOrders_foreignKey` FOREIGN KEY (`vendor_order_id`) REFERENCES `vendor_orders` (`vendor_order_id`) ON DELETE CASCADE,
  CONSTRAINT `vendor_payment_ibfk_1` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_payment`
--

LOCK TABLES `vendor_payment` WRITE;
/*!40000 ALTER TABLE `vendor_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_payment_archive`
--

DROP TABLE IF EXISTS `vendor_payment_archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_payment_archive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int DEFAULT NULL,
  `vendor_order_id` int DEFAULT NULL,
  `payment_item_id` int DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `commission_amount` decimal(10,2) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `vendor_order_archive` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_tbl_vendorPaymentArchive_tbl_vendor_foreignKey` (`vendor_id`),
  KEY `fk_tbl_vendorPaymentArchive_tbl_vendorOrders_foreignKey` (`vendor_order_id`),
  KEY `fk_tbl_vendorPaymentArchive_tbl_paymentItems_foreignKey` (`payment_item_id`),
  CONSTRAINT `fk_tbl_vendorPaymentArchive_tbl_vendor_foreignKey` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_payment_archive`
--

LOCK TABLES `vendor_payment_archive` WRITE;
/*!40000 ALTER TABLE `vendor_payment_archive` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_payment_archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_product`
--

DROP TABLE IF EXISTS `vendor_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_product` (
  `vendor_product_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `vendor_id` int DEFAULT NULL,
  `approval_flag` int DEFAULT NULL,
  `approved_by` int DEFAULT NULL,
  `approved_date` date DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `vendor_product_commission` int DEFAULT '0',
  `pincode_based_delivery` int DEFAULT '1',
  `quotation_available` int DEFAULT '0',
  PRIMARY KEY (`vendor_product_id`),
  KEY `fk_tbl_vendor_product_tbl_product_foreignKey` (`product_id`),
  KEY `fk_tbl_vendor_product_tbl_vendor_foreignKey` (`vendor_id`),
  CONSTRAINT `fk_tbl_vendor_product_tbl_product_foreignKey` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tbl_vendor_product_tbl_vendor_foreignKey` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_product`
--

LOCK TABLES `vendor_product` WRITE;
/*!40000 ALTER TABLE `vendor_product` DISABLE KEYS */;
INSERT INTO `vendor_product` VALUES (2,558,2,1,49,NULL,NULL,NULL,'2021-08-11 19:36:01','2021-08-11 20:18:23',0,0,1);
/*!40000 ALTER TABLE `vendor_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_sub`
--

DROP TABLE IF EXISTS `vendor_sub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_sub` (
  `vendor_sub_id` int NOT NULL AUTO_INCREMENT,
  `vendor` int NOT NULL,
  `sub` int NOT NULL,
  PRIMARY KEY (`vendor_sub_id`),
  KEY `fk_vendor_idx` (`vendor`),
  KEY `fk_sub_idx` (`sub`),
  CONSTRAINT `fk_sub_tbl_generale` FOREIGN KEY (`sub`) REFERENCES `condominio_generale` (`id_generale`),
  CONSTRAINT `fk_vendor_tbl_vendor` FOREIGN KEY (`vendor`) REFERENCES `vendor` (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_sub`
--

LOCK TABLES `vendor_sub` WRITE;
/*!40000 ALTER TABLE `vendor_sub` DISABLE KEYS */;
INSERT INTO `vendor_sub` VALUES (1,2,17);
/*!40000 ALTER TABLE `vendor_sub` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `widget`
--

DROP TABLE IF EXISTS `widget`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `widget` (
  `widget_id` int NOT NULL AUTO_INCREMENT,
  `widget_title` varchar(255) DEFAULT NULL,
  `widget_link_type` int DEFAULT NULL COMMENT '1-> category 2 -> product',
  `widget_description` text,
  `position` int DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `widget_slug_name` varchar(255) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`widget_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `widget`
--

LOCK TABLES `widget` WRITE;
/*!40000 ALTER TABLE `widget` DISABLE KEYS */;
INSERT INTO `widget` VALUES (1,'jhbb',2,'',1,'','','','jhbb',1,'2021-08-11 22:28:07','2021-08-11 22:30:17',NULL,NULL);
/*!40000 ALTER TABLE `widget` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `widget_item`
--

DROP TABLE IF EXISTS `widget_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `widget_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `widget_id` int DEFAULT NULL,
  `ref_id` int DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_widget_item_Related_tbl_widget` (`widget_id`),
  CONSTRAINT `fk_tbl_widget_item_Related_tbl_widget` FOREIGN KEY (`widget_id`) REFERENCES `widget` (`widget_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `widget_item`
--

LOCK TABLES `widget_item` WRITE;
/*!40000 ALTER TABLE `widget_item` DISABLE KEYS */;
INSERT INTO `widget_item` VALUES (5,1,558,'2021-08-11 22:30:17','2021-08-11 22:30:17',NULL,NULL),(6,1,554,'2021-08-11 22:30:17','2021-08-11 22:30:17',NULL,NULL);
/*!40000 ALTER TABLE `widget_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zone`
--

DROP TABLE IF EXISTS `zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zone` (
  `zone_id` int NOT NULL AUTO_INCREMENT,
  `country_id` int NOT NULL,
  `code` varchar(32) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`zone_id`),
  KEY `fk_Zone_Country` (`country_id`),
  KEY `user_id` (`zone_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zone`
--

LOCK TABLES `zone` WRITE;
/*!40000 ALTER TABLE `zone` DISABLE KEYS */;
INSERT INTO `zone` VALUES (58,45,'JAF','Jaffna',0,'2019-02-17 22:17:27','2019-05-13 04:02:06',NULL,NULL),(59,22,'MUM','Mumbai',1,'2019-02-17 22:17:49','2019-06-14 01:35:42',NULL,NULL),(63,22,'KL','kerala',1,'2019-02-18 23:46:22','2019-05-10 04:05:34',NULL,NULL),(66,22,'GOA','Goa',1,'2019-02-19 07:19:48','2019-03-12 09:11:16',NULL,NULL);
/*!40000 ALTER TABLE `zone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zone_to_geo_zone`
--

DROP TABLE IF EXISTS `zone_to_geo_zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zone_to_geo_zone` (
  `zone_to_geo_zone_id` int NOT NULL AUTO_INCREMENT,
  `country_id` int DEFAULT NULL,
  `zone_id` int DEFAULT NULL,
  `geo_zone_id` int DEFAULT NULL,
  `is_active` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  PRIMARY KEY (`zone_to_geo_zone_id`),
  KEY `fk_Zone_ZoneGeo` (`zone_id`),
  KEY `fk_Country_ZoneGeo` (`country_id`),
  KEY `zone_to_geo_zone_id` (`zone_to_geo_zone_id`),
  CONSTRAINT `fk_Zone_ZoneGeo` FOREIGN KEY (`zone_id`) REFERENCES `zone` (`zone_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zone_to_geo_zone`
--

LOCK TABLES `zone_to_geo_zone` WRITE;
/*!40000 ALTER TABLE `zone_to_geo_zone` DISABLE KEYS */;
/*!40000 ALTER TABLE `zone_to_geo_zone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-26 16:06:54
