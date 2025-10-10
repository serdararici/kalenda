# 🗓️ Kalenda

🌍 **README Languages:** [English](#kalenda-en) | [Türkçe](#kalenda-tr)

---
<a id="kalenda-en"></a>

# 🗓️ Kalenda (EN)

A modern meeting scheduling platform that enables users to manage their availability, share public booking links, and automatically synchronize scheduled meetings with **Google Calendar**. Built with **Next.js 14**, **TypeScript**, **Drizzle ORM**, and **NeonDB**, Kalenda provides a seamless experience for both hosts and guests — from creating custom events to confirming bookings — all within an elegant, responsive interface.

🌐 **Live Demo:** [kalenda-app.vercel.app](https://kalenda-app.vercel.app)

---

## 🚀 Özellikler

- 🔐 **Clerk ile Kimlik Doğrulama** – güvenli ve sorunsuz giriş/kayıt deneyimi  
- 📅 **Google Takvim Entegrasyonu** – planlanan toplantılar otomatik olarak senkronize edilir  
- ⏰ **Dinamik Müsaitlik Yönetimi** – kullanıcılar kendi uygun zaman aralıklarını tanımlayabilir  
- 🧾 **Genel Planlama Sayfası** – ziyaretçiler üye olmadan toplantı rezervasyonu yapabilir  
- 🧱 **Temiz Mimari** – modüler ve yeniden kullanılabilir bileşenler ile sürdürülebilir kod  
- 💾 **NeonDB ve Drizzle ORM ile Veritabanı** – güvenilir ve şema tabanlı veri yönetimi sağlar  
- 💅 **Modern ve Duyarlı Arayüz** – TailwindCSS ve Shadcn/UI ile geliştirilmiştir

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| Framework | Next.js 14 (App Router), TypeScript |
| Database | Neon PostgreSQL, Drizzle ORM |
| Authentication | Clerk |
| APIs | Google Calendar API |
| Styling | TailwindCSS, Shadcn/UI |
| Forms | React Hook Form |
| Deployment | Vercel |

---

## 🏗️ Database Structure

Kalenda uses three main tables in NeonDB:

- **`events`** → Stores created event templates  
- **`schedules`** → Stores individual scheduled bookings  
- **`scheduleAvailabilities`** → Defines user-specific available time ranges  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/serdararici/kalenda.git
cd kalenda
```
2️⃣ Install dependencies
```
npm install
```
3️⃣ Set up environment variables
Create a .env file in the root directory and fill in the following:
```
.env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/events
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/events
DATABASE_URL=
GOOGLE_OAUTH_CLIENT_ID=
GOOGLE_OAUTH_CLIENT_SECRET=
GOOGLE_OAUTH_REDIRECT_URL=
```
4️⃣ Run the development server
```
npm run dev
```
5️⃣ Open in your browser
```
http://localhost:3000
```
---

## 🧠 Lessons Learned

- Integration of **Google Calendar API** and handling **OAuth flow** securely  
- Usage of **Drizzle ORM** with **Neon** for schema-based migrations  
- Designing **public and private routes** with **Clerk authentication**  
- Building a **responsive UI** using **TailwindCSS** and **Shadcn/UI**  
- Deploying **full-stack applications** seamlessly with **Vercel**

---

## 🔮 Future Improvements

- 🔔 **Email reminders and notifications**  
- 📅 **Calendar view** for better event management  
- 🧩 **Multi-calendar integrations** (Outlook, Apple Calendar)  
- 🌙 **Dark mode support**

---

## 🖼️ Screenshots  

| Welcome Page | Home Page |
|------------|---------------|
| ![Welcome Page](https://github.com/serdararici/kalenda/blob/main/public/screenshots/welcome-page.JPG) | ![Home Page](https://github.com/serdararici/kalenda/blob/main/public/screenshots/kalenda-home-page.JPG) | 

| My Schedule Page | Public Profile Page |
|------------|---------------|
![My Schedule Page](https://github.com/serdararici/kalenda/blob/main/public/screenshots/my-schedule-page.JPG) | ![Public Profile Page](https://github.com/serdararici/kalenda/blob/main/public/screenshots/public-profile-page.JPG) |

| Create Event Page | Edit Event Page |
|------------|---------------|
| ![Create Event Page](https://github.com/serdararici/kalenda/blob/main/public/screenshots/create-event.JPG) | ![Edit Event Page](https://github.com/serdararici/kalenda/blob/main/public/screenshots/edit-event.JPG) |

| Booking Page | Booking Success Page |
|------------|---------------|
| ![Booking Page](https://github.com/serdararici/kalenda/blob/main/public/screenshots/booking-page..JPG) | ![Booking Success Page](https://github.com/serdararici/kalenda/blob/main/public/screenshots/book-success-message.JPG) |

| Google Calendar Booked | Google Calendar |
|------------|---------------|
| ![Google Calendar Booked](https://github.com/serdararici/kalenda/blob/main/public/screenshots/Google-calendar-booked.JPG) | ![Google Calendar](https://github.com/serdararici/kalenda/blob/main/public/screenshots/google-calendar-event.JPG) |

---

## 💬 Contact

👨‍💻 **Serdar Arıcı**  
🌍 [LinkedIn](https://www.linkedin.com/in/serdar-ar%C4%B1c%C4%B1-9827981a3/)  
💻 [GitHub](https://github.com/serdararici)  
✉️ **serdararici3@gmail.com**

---

Thank you for checking out **Kalenda App!** 🚀

---

<a id="kalenda-tr"></a>

# 🗓️ Kalenda (TR)

Kullanıcıların uygunluklarını yönetebildiği, genel randevu bağlantılarını paylaşabildiği ve oluşturulan toplantıları otomatik olarak **Google Takvim** ile senkronize edebildiği modern bir toplantı planlama platformudur. **Next.js 14**, **TypeScript**, **Drizzle ORM** ve **NeonDB** kullanılarak geliştirilen Kalenda; etkinlik oluşturma, uygun saat seçimi ve rezervasyon onayı gibi tüm süreçleri, sade ve kullanıcı dostu bir arayüz üzerinden kusursuz bir şekilde sunar. 

🌐 **Canlı Demo:** [kalenda-app.vercel.app](https://kalenda-app.vercel.app)

---

## 🚀 Özellikler

- 🔐 **Clerk ile Kimlik Doğrulama** – güvenli giriş ve kayıt deneyimi  
- 📅 **Google Takvim Entegrasyonu** – planlanan toplantılar otomatik olarak senkronize edilir  
- ⏰ **Dinamik Müsaitlik Yönetimi** – kullanıcılar kendi uygun zaman aralıklarını tanımlayabilir  
- 🧾 **Genel Planlama Sayfası** – ziyaretçiler üye olmadan toplantı rezervasyonu yapabilir  
- 📬 **Onay Sayfası** – toplantı oluşturulduktan sonra görsel bir başarı ekranı gösterilir  
- 🧱 **Temiz Mimari** – yeniden kullanılabilir, modüler bileşen yapısı  
- 💅 **Modern ve Duyarlı Arayüz** – TailwindCSS ve Shadcn/UI ile geliştirilmiştir  

---

## 🧩 Teknoloji Yığını

| Kategori | Teknolojiler |
|-----------|---------------|
| Framework | Next.js 14 (App Router), TypeScript |
| Veritabanı | Neon PostgreSQL, Drizzle ORM |
| Kimlik Doğrulama | Clerk |
| API'ler | Google Calendar API |
| Stil | TailwindCSS, Shadcn/UI |
| Formlar | React Hook Form |
| Dağıtım | Vercel |

---

## 🏗️ Veritabanı Yapısı

Kalenda, NeonDB üzerinde üç ana tablo kullanır:

- **`events`** → Oluşturulan etkinlik şablonlarını saklar  
- **`schedules`** → Bireysel planlanmış toplantıları saklar  
- **`scheduleAvailabilities`** → Kullanıcıya özel uygun zaman aralıklarını tanımlar  

---

## ⚙️ Kurulum ve Çalıştırma

### 1️⃣ Depoyu klonlayın
```bash
git clone https://github.com/serdararici/kalenda.git
cd kalenda
```
2️⃣ Bağımlılıkları yükleyin
```
npm install
```
3️⃣ Ortam değişkenlerini ayarlayın
Kök dizinde bir .env dosyası oluşturun ve aşağıdaki bilgileri doldurun:

```
.env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/events
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/events
DATABASE_URL=
GOOGLE_OAUTH_CLIENT_ID=
GOOGLE_OAUTH_CLIENT_SECRET=
GOOGLE_OAUTH_REDIRECT_URL=
```
4️⃣ Geliştirme sunucusunu başlatın
```
npm run dev
```
5️⃣ Tarayıcıda açın
```
http://localhost:3000
```
---

## 🧠 Öğrenilenler

- **Google Calendar API** entegrasyonu ve **OAuth akışının güvenli yönetimi**  
- **Drizzle ORM** ve **Neon** kullanarak **şema tabanlı veritabanı geçişleri**  
- **Clerk kimlik doğrulaması** ile **genel ve özel rotaların tasarlanması**  
- **TailwindCSS** ve **Shadcn/UI** ile **duyarlı kullanıcı arayüzü** oluşturma  
- **Vercel** ile **full-stack uygulamaların sorunsuz dağıtımı**

---

## 🔮 Gelecekteki Geliştirmeler

- 🔔 **E-posta hatırlatmaları ve bildirimler**  
- 📅 **Daha iyi etkinlik yönetimi için takvim görünümü**  
- 🧩 **Çoklu takvim entegrasyonları** (Outlook, Apple Calendar)  
- 🌙 **Karanlık mod desteği**

---

## 🖼️ Ekran Görüntüleri  

| Karşılama Sayfası | Ana Sayfa |
|------------|---------------|
| ![Karşılama Sayfası](https://github.com/serdararici/kalenda/blob/main/public/screenshots/welcome-page.JPG) | ![Ana Sayfa](https://github.com/serdararici/kalenda/blob/main/public/screenshots/kalenda-home-page.JPG) | 

| Takvimlerim Sayfası | Genel Profil Sayfası |
|------------|---------------|
| ![Takvimlerim Sayfası](https://github.com/serdararici/kalenda/blob/main/public/screenshots/my-schedule-page.JPG) | ![Genel Profil Sayfası](https://github.com/serdararici/kalenda/blob/main/public/screenshots/public-profile-page.JPG) |

| Etkinlik Oluşturma Sayfası | Etkinlik Düzenleme Sayfası |
|------------|---------------|
| ![Etkinlik Oluşturma Sayfası](https://github.com/serdararici/kalenda/blob/main/public/screenshots/create-event.JPG) | ![Etkinlik Düzenleme Sayfası](https://github.com/serdararici/kalenda/blob/main/public/screenshots/edit-event.JPG) |

| Rezervasyon Sayfası | Rezervasyon Başarı Sayfası |
|------------|---------------|
| ![Rezervasyon Sayfası](https://github.com/serdararici/kalenda/blob/main/public/screenshots/booking-page..JPG) | ![Rezervasyon Başarı Sayfası](https://github.com/serdararici/kalenda/blob/main/public/screenshots/book-success-message.JPG) |

| Google Takvimde Rezerve Edilen | Google Takvim |
|------------|---------------|
| ![Google Takvimde Rezerve Edilen](https://github.com/serdararici/kalenda/blob/main/public/screenshots/Google-calendar-booked.JPG) | ![Google Takvim](https://github.com/serdararici/kalenda/blob/main/public/screenshots/google-calendar-event.JPG) |

---

## 💬 İletişim

👨‍💻 **Serdar Arıcı**  
🌍 [LinkedIn](https://www.linkedin.com/in/serdar-ar%C4%B1c%C4%B1-9827981a3/)  
💻 [GitHub](https://github.com/serdararici)  
✉️ **serdararici3@gmail.com**

---

**Kalenda** uygulamasını incelediğiniz için teşekkür ederim! 🚀

