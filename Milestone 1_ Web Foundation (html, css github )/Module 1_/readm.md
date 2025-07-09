# 📚 HTML Complete Beginner Notes (Bangla) - GitHub README Style

> 🔰 এই নোটটি HTML শেখার একদম শুরু থেকে সবচেয়ে দরকারি বিষয়গুলোকে সহজ বাংলায় ব্যাখ্যা করে।
> এটি GitHub README আকারে তৈরি, যাতে তুমি তোমার প্রজেক্ট রেপোতে সহজেই ব্যবহার করতে পারো।

---

## 🧱 Structure:
```html
<tag> content </tag>
```
উদাহরণ:
```html
<p>This is a paragraph.</p>
```

---

## 📄 Paragraph:
```html
<p>This is a paragraph.</p>
```

## 🅱️ Bold:
```html
<b>This is bold</b> <!-- Non-semantic tag -->
```

## 🔒 Strong (Semantic):
```html
<strong>This is strong</strong>
```

---

## ✨ Semantic Tags:
Semantic মানে অর্থবহ, যা ব্রাউজার ও স্ক্রিন রিডার বুঝতে পারে:
- ✅ `<strong>`, `<em>`, `<header>`, `<footer>`, `<article>`
- ❌ `<b>`, `<i>`, `<div>`, `<span>`

---

## ➿ Inline Elements:
এক লাইনে বসে:
- `<strong>`, `<b>`, `<i>`, `<a>`, `<span>`, `<em>`

## 📏 Block Elements:
নতুন লাইনে শুরু হয়:
- `<p>`, `<h1>` - `<h6>`, `<div>`, `<section>`, `<article>`, `<footer>`

---

## 📋 HTML Lists

### 🔢 Ordered List:
```html
<ol>
  <li>HTML</li>
  <li>CSS</li>
</ol>
```

### 🔘 Unordered List:
```html
<ul>
  <li>Tea</li>
  <li>Coffee</li>
</ul>
```

---

## 🔖 HTML Attributes:
```html
<tag attribute="value">Content</tag>
```
উদাহরণ:
```html
<a href="https://example.com">Visit</a>
<img src="img.jpg" alt="Image" />
```

---

## 🔗 Anchor Tag:
```html
<a href="https://example.com" target="_blank">Visit</a>
<a href="file.pdf" download>Download PDF</a>
```

### 📌 Attribute Details:
- `href`: লিংকের গন্তব্য
- `target="_blank"`: নতুন ট্যাবে খুলবে
- `download`: ফাইল ডাউনলোড হবে

---

## 🖼️ Image Tag:
```html
<img src="img.jpg" alt="image" />
```
- `src`: ছবির লিংক
- `alt`: ব্যাকআপ টেক্সট (SEO + accessibility)

---

## 📥 HTML Form & Input Tags:
```html
<form>
  <input type="text" name="username" placeholder="Enter name" />
  <input type="email" name="email" placeholder="Enter email" />
  <input type="date" name="dob" />
  <input type="file" />
  <input type="submit" value="Submit" />
</form>
```

### ✅ Dropdown Example:
```html
<select name="drink">
  <option value="tea">Tea</option>
  <option value="coffee">Coffee</option>
</select>
```

### 📌 Input Types:
- `text`, `email`, `date`, `file`, `submit`, `password`, `checkbox`, `radio`

---

## 💬 HTML Comments:
```html
<!-- This is a comment -->
```

---

## 🛑 Self-closing / Void Tags:
- `<img />`
- `<input />`
- `<br />`
- `<hr />`
- `<meta />`
- `<link />`

এই ট্যাগগুলোর কোন closing tag থাকে না।

---

## ⚙️ HTML Boilerplate Code (VS Code Shortcut: `! + Tab`)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
    <link rel="icon" href="favicon.ico" />
  </head>
  <body>
    <nav>Navbar</nav>
    <main>Content</main>
    <footer>Footer</footer>
  </body>
</html>
```

---

## 💡 Extra Concepts:
- `<!DOCTYPE html>` → HTML5 ঘোষণা
- `lang="en"` → ভাষা নির্ধারণ
- `<meta name="viewport">` → মোবাইল রেসপন্সিভ ডিজাইন
- `<link rel="icon">` → ফ্যাভিকন

---

## 🔍 What is HTML?
> **HTML = HyperText Markup Language**

### শব্দের মানে:
- **Hyper** → লিংক বা রেফারেন্স
- **Text** → ডেটা বা ইনফরমেশন
- **Markup** → ট্যাগ দিয়ে চিহ্নিত করা
- **Language** → যোগাযোগের মাধ্যম (browser + user)

---

## 📎 GitHub Tips:
- `README.md` ফাইল সবসময় রেপোর প্রথম ইম্প্রেশন তৈরি করে
- Markdown ব্যবহার করে তুমি সুন্দরভাবে প্রজেক্ট ডকুমেন্ট করতে পারো
- এই নোটটি ক্লোন করে যেকোন HTML প্রজেক্টে যুক্ত করা যাবে

---

## 🧑‍💻 Author Info:

> এই README ফাইলটি তৈরি করেছেন একজন নতুন HTML শিখতে থাকা শিক্ষার্থী, যিনি Programming Hero-এর Complete Web Development Course অনুসরণ করছেন এবং GitHub-এ নিজের নোট সংরক্ষণ করছেন।

📌 যদি এই নোটটি উপকারে আসে, তাহলে ⭐ করে রেখো এবং ফলো করতে ভুলো না! 😊

---

🎯 শেখা হোক সহজ, প্রফেশনাল আর প্রজেক্ট ভিত্তিক!



first task = " imagine you want to create your first travel blog where you will share you recent travel adventures with your readers. Now, let's get creative ! " requirement 1. create a basic html page structure with doctype, html, head , meta, title and body tags the title will be 'my travel blog' add comments to the code to explain each section. for exaple 'this is the head section 2. create a heading tag that will have the text my travel blog format the text in your heading tag using italic create a div and insidet the div create a pargarph write about yourself your experience add a button having the text 'read more ' 4. create a span tag which will be outside the div. it will have the text ' what i bought' format the text in your span tag bold. create an order list of thing you bought from the place you visited create another span tag with the text 'my fevrouite food' and make it bold create an unorder lsit of your fevrite food you eat in the place 5. insert an image of your favourite food using the imag tag and add image and adjust height responsive full width add a youtube video randome and use it in website make all code in a single page and beautifull design with tailwind  and make it with all code tailwind css with cdn "