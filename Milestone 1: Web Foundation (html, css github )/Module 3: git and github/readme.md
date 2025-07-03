## Version Control System ?
It's like a version Control system (aka VCS) as a kind of database. It lets you save a snapshot of the complete project at any point in time.
স্টেপ ১ঃ নিজের কম্পিউটারে একটি প্রজেক্ট ফোল্ডার করে ফেল।
স্টেপ ২ঃ Vs Code দিয়ে এই ফোল্ডার ওপেন করে ফেল।খেয়াল রেখ ফাইল পাথ যেন ঠিক থাকে।
স্টেপ ৩ঃ এবার টারমিনাল খুলে গিটহাবের সাথে দড়ি লাগিয়েই দাও। দড়ি লাগানোর কমান্ড কি? বল তো?
git init
git add . [ add এর পর স্পেস দিয়ে dot দিতে ভুলিও না ]
git commit -m " Meaningful Message "
git branch -M main
git remote add origin https://github.com/example/example.git
git push origin main

# GitHub Advance 
Private  gitHub Repo... 

git checkout main  ---for going to main branch 
git checkout -b ---for making new branch
