# 📸 আপনার Photo Add করার নির্দেশনা

আপনার professional photo টা About Me section এ add করার জন্য এই steps follow করুন:

## Step 1: Photo Save করুন

1. আপনার photo টা (যেটা আপনি পাঠিয়েছেন) save করুন
2. Photo টা এই folder এ রাখুন: `c:\Web prompt guide\Portfolio\assets\`
3. Photo এর নাম দিন: `profile.jpg`

**Important**: File name টা exactly `profile.jpg` হতে হবে

## Step 2: HTML File Edit করুন

1. `index.html` file টা open করুন (VS Code বা যেকোন text editor দিয়ে)

2. **Line 83-88** খুঁজুন, যেখানে এই code আছে:

```html
<div class="profile-placeholder">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="80" r="35" fill="#D4AF37" opacity="0.3"/>
        <circle cx="100" cy="140" r="50" fill="#D4AF37" opacity="0.3"/>
    </svg>
</div>
```

3. এই পুরো code টা **delete** করুন

4. এর জায়গায় এই code টা paste করুন:

```html
<img src="./assets/profile.jpg" alt="Jamil Sarker Hamim" class="profile-image">
```

5. File টা **Save** করুন (Ctrl + S)

## Step 3: CSS Add করুন (Optional - Better Look)

`styles.css` file এ গিয়ে `.profile-placeholder` এর নিচে এই CSS টা add করুন:

```css
.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
}
```

## ✅ Done!

এখন browser এ `index.html` open করলে আপনার photo দেখতে পাবেন!

---

## 🚨 যদি Photo না দেখায়:

1. **File name check করুন**: 
   - Exactly `profile.jpg` আছে কিনা
   - Small letters এ লেখা আছে কিনা

2. **File location check করুন**:
   - Photo টা `assets` folder এ আছে কিনা
   - Path: `c:\Web prompt guide\Portfolio\assets\profile.jpg`

3. **Browser cache clear করুন**:
   - Ctrl + Shift + R চাপুন browser এ

4. **Photo format check করুন**:
   - যদি photo `.png` format এ হয়, তাহলে HTML এ লিখুন: `profile.png`
   - যদি photo `.jpeg` format এ হয়, তাহলে HTML এ লিখুন: `profile.jpeg`

---

## 💡 Quick Copy-Paste

**HTML Code (Line 83-88 replace করুন):**
```html
<img src="./assets/profile.jpg" alt="Jamil Sarker Hamim" class="profile-image">
```

**CSS Code (styles.css এ add করুন):**
```css
.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
}
```

---

আর কোন সমস্যা হলে আমাকে জানান! 😊
