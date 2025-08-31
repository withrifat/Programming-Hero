# JavaScript Array Methods

## map()
- সবসময় **নতুন array return করে**।
- Original array কে modify করে না।
- যখন তোমার দরকার হয় array কে **transform** করার (মানে পরিবর্তন করে নতুন array বানানো)।

---

## forEach()
- কিছু **return করে না**।
- চাইলে original array কে modify করতে পারো।
- মূলত side effects এর জন্য ব্যবহার হয়, যেমন:
  - console.log
  - API calls
- এখানে return value দরকার হয় না।

---

## filter()
- **Condition মিললে** যেসব value true হয় সেগুলো সব নিয়ে **একটা নতুন array return করে**।
- উদাহরণ: even number filter করা।

---

## find()
- **Condition মিললে শুধু প্রথম element return করে**।
- filter এর মতো array return করে না, শুধু একটা value দেয়।

---

## reduce()
- একটা array কে নিয়ে কাজ করে শেষে **একটা single value** বানায়।
- accumulator ব্যবহার করে সব element একসাথে কমিয়ে আনে।
- Example ব্যবহার:
  - sum বের করা
  - product বের করা
  - max/min বের করা
  - array কে object এ রূপান্তর করা
