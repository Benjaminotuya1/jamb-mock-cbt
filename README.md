# 🎓 JAMB Mock CBT Portal

A professional, mobile-responsive Computer Based Test (CBT) platform designed to help students prepare for the JAMB UTME exams.

## 🚀 Overview
This portal allows up to 200 registered students to take a timed mock exam. It mimics the official JAMB interface, providing a realistic testing environment to improve students' speed and accuracy.

## ✨ Key Features
* **Secure Login:** Unique Username (JAMB001-200) and 4-digit PIN system to prevent unauthorized access.
* **Dynamic Shuffling:** Automatically shuffles and selects 60 questions for English and 40 for other subjects from a larger question bank.
* **Multi-Subject Support:** Students can choose their 3 elective subjects alongside the compulsory Use of English.
* **Live Timer:** A 120-minute countdown that automatically submits the exam when time expires.
* **Google Sheets Integration:** Scores and student data are automatically synced to a private Google Sheet for easy grading.
* **Mobile-First Design:** Fully optimized for smartphones, tablets, and laptops.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend/Database:** Google Apps Script (Web Apps) & Google Sheets
* **Hosting:** GitHub Pages

## 📝 How to Use
1.  **Access:** Open the portal via the live link provided. https://benjaminotuya1.github.io/jamb-mock-cbt/
2.  **Login:** Enter your Full Name, assigned Username (e.g., JAMB045), and the unique 4-digit PIN found on your physical slip.
3.  **Selection:** Choose your three elective subjects.
4.  **Testing:** Answer all questions before the 120-minute timer runs out.
5.  **Submission:** Click 'Submit' or wait for the auto-submit to send your scores to the master database.

## 📊 Project Structure
* `index.html`: The core engine, UI, and logic of the CBT.
* `questions.js`: The question database containing thousands of past questions across 17 subjects.
* `JAMB Slips.xlsx`: Template for printing student access codes.
