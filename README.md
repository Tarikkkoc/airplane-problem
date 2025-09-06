# ✈️ 100 Passenger Airplane Problem Simulation

_(100 Yolcu Uçak Problemi Simülasyonu)_

---

## 🇬🇧 English

### Description

This project simulates the **100-passenger airplane seating problem**.  
Rules:

- The **first passenger** lost their boarding pass and sits in a **random** seat.
- Each subsequent passenger:
  - If their own seat is empty, they take it.
  - If their seat is occupied, they choose a **random empty seat**.
- At the end, we check if the **last passenger (n-th)** sits in their own seat.

Known theoretical result: The probability is **about 50%**.

---

### Installation Guide

1. Make sure **Node.js** is installed (v16+ recommended).  
   [Download Node.js](https://nodejs.org/)
2. Clone or download this repository:
   ```bash
   git clone https://github.com/username/airplane-problem.git
   cd airplane-problem/src
   ```
3. Run the simulation:
   ```bash
   node app.js
   ```

---

### Usage

Function:

```js
planeProblem(passengers, trials);
```

- `passengers`: number of passengers (default 100)
- `trials`: number of simulation runs (e.g., 10_000)

Example:

```js
planeProblem(100, 10000);
```

---

### Sample Output

```
success 4978
success rate 49.78
```

---

## 🇹🇷 Türkçe

### Açıklama

Bu proje, **100 yolcu – 100 koltuk** problemine ait bir simülasyon içerir.  
Kural özetleri:

- **1. yolcu** biletini kaybetmiştir ve rastgele bir koltuğa oturur.
- Sonraki yolcular sırayla uçağa biner:
  - Kendi koltuğu boşsa oraya oturur.
  - Kendi koltuğu doluysa, kalan boş koltuklardan rastgele birini seçer.
- Simülasyon sonunda **son yolcunun (n’inci)** kendi koltuğuna oturup oturmadığı kontrol edilir.

Bilinen teorik sonuç: Son yolcunun kendi koltuğuna oturma olasılığı **yaklaşık %50**’dir.

---

### Kurulum Rehberi

1. **Node.js** kurulu olmalı (v16+ önerilir).  
   [Node.js indirme sayfası](https://nodejs.org/)
2. Bu projeyi klonla veya indir:
   ```bash
   git clone https://github.com/kullaniciadi/airplane-problem.git
   cd airplane-problem/src
   ```
3. `app.js` dosyasını çalıştır:
   ```bash
   node app.js
   ```

---

### Kullanım

Fonksiyon:

```js
planeProblem(passengers, trials);
```

- `passengers`: Yolcu sayısı (varsayılan 100)
- `trials`: Simülasyon tekrar sayısı (ör. 10_000)

Örnek:

```js
planeProblem(100, 10000);
```

---

### Örnek Çıktı

```
success 4978
success rate 49.78
```

---

## 📜 License

This project was created to experiment with the algorithm.  
Feel free to use and modify.
