/**
 * JavaScript Date Functions - Complete Notes
 * ------------------------------------------
 * 
 * `Date` অবজেক্ট JavaScript এ তারিখ এবং সময় পরিচালনার জন্য ব্যবহৃত হয়।
 * 
 * Date অবজেক্ট তৈরি করার জন্য `new Date()` ব্যবহার করা হয়।
 * 
 * বিভিন্ন মেথড দিয়ে তুমি তারিখ থেকে বছর, মাস, দিন, ঘন্টা, মিনিট, সেকেন্ড ইত্যাদি পেতে পারো বা সেট করতে পারো।
 * 
 * 
 * Date অবজেক্ট তৈরি:
 * ------------------
 * new Date()               --> বর্তমান সময়ের Date অবজেক্ট তৈরি করে
 * new Date(milliseconds)   --> 1970-01-01 থেকে milliseconds পরের সময় তৈরি করে
 * new Date(dateString)     --> স্ট্রিং থেকে Date তৈরি করে (যেমন: "2023-08-10")
 * new Date(year, month, day, hours, minutes, seconds, milliseconds)
 *                         --> নির্দিষ্ট তারিখ এবং সময় দিয়ে Date তৈরি করে
 *                         --> লক্ষ্য: মাস ০ থেকে শুরু (0 = জানুয়ারি)
 * 
 * 
 * সাধারণ প্রায়োগিক মেথডগুলো:
 * -------------------------
 * 1. getFullYear()          - বছর ফেরত দেয় (e.g. 2023)
 * 2. getMonth()             - মাস ফেরত দেয় (0-11; 0=জানুয়ারি)
 * 3. getDate()              - মাসের দিন (1-31)
 * 4. getDay()               - সপ্তাহের দিন (0-6; 0=রবিবার)
 * 5. getHours()             - ঘন্টা (0-23)
 * 6. getMinutes()           - মিনিট (0-59)
 * 7. getSeconds()           - সেকেন্ড (0-59)
 * 8. getMilliseconds()      - মিলিসেকেন্ড (0-999)
 * 9. getTime()              - 1970-01-01 থেকে মিলিসেকেন্ডে সময় ফেরত দেয়
 * 
 * 
 * সেট করার মেথড:
 * ----------------
 * setFullYear(year)
 * setMonth(month)
 * setDate(day)
 * setHours(hour)
 * setMinutes(minute)
 * setSeconds(second)
 * setMilliseconds(ms)
 * 
 * 
 * বিশেষ ফাংশন:
 * -------------
 * Date.now()               - বর্তমান টাইমস্ট্যাম্প (মিলিসেকেন্ড)
 * Date.parse(dateString)   - তারিখ স্ট্রিং থেকে মিলিসেকেন্ডে রূপান্তর
 * Date.UTC(year, month, day, hours, minutes, seconds, ms)
 *                         - UTC টাইমস্ট্যাম্প তৈরি করে
 * 
 * 
 * উদাহরণ:
 */

// বর্তমান সময়ের Date অবজেক্ট তৈরি
const now = new Date();
console.log("Current Date and Time:", now);

// নির্দিষ্ট তারিখ দিয়ে Date তৈরি
const birthday = new Date(1995, 11, 17); // 17 Dec 1995 (মাস 11 = ডিসেম্বর)
console.log("Birthday:", birthday);

// getFullYear()
console.log("Year:", now.getFullYear());

// getMonth()
console.log("Month (0-based):", now.getMonth());

// getDate()
console.log("Date (day of month):", now.getDate());

// getDay()
console.log("Day of Week (0=Sunday):", now.getDay());

// getHours()
console.log("Hours:", now.getHours());

// getMinutes()
console.log("Minutes:", now.getMinutes());

// getSeconds()
console.log("Seconds:", now.getSeconds());

// getTime()
console.log("Milliseconds since 1970-01-01:", now.getTime());

// সেট করা - setFullYear
now.setFullYear(2024);
console.log("Modified Year:", now.getFullYear());

// Date.now()
const timestamp = Date.now();
console.log("Timestamp now (ms):", timestamp);

// Date.parse()
const msFromString = Date.parse("2023-08-10");
console.log("Milliseconds from date string:", msFromString);

// Date.UTC()
const utcTime = Date.UTC(2023, 7, 10, 0, 0, 0);
console.log("UTC time (ms):", utcTime);

/**
 * অতিরিক্ত টিপস:
 * ----------------
 * - মাসের জন্য 0-11 ব্যবহার করতে হবে, তাই ডিসেম্বর = 11।
 * - getDay() সপ্তাহের দিন 0 (রবিবার) থেকে 6 (শনিবার) পর্যন্ত।
 * - Date.parse() সব ব্রাউজারে সমানভাবে কাজ নাও করতে পারে, তাই নির্দিষ্ট ফরম্যাটে date string পাঠানো উচিত।
 * - Date অবজেক্ট থেকে string পেতে toString(), toLocaleDateString(), toISOString() মেথড ব্যবহার করা হয়।
 * 
 * উদাহরণ:
 */
console.log("Date to String:", now.toString());
console.log("Date to Locale Date String:", now.toLocaleDateString());
console.log("Date to ISO String:", now.toISOString());
