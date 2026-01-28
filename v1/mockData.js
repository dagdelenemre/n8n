```javascript
const mockData = {
  kullanici: {
    id: "USR-2024-78492",
    ad: "Ahmet",
    soyad: "Yılmaz",
    email: "ahmet.yilmaz@example.com",
    telefon: "+90 532 123 4567",
    kimlikNo: "12345678901",
    dogumTarihi: "1990-05-15",
    adres: "Cumhuriyet Mah. Atatürk Cad. No:45 D:12 Kadıköy/İstanbul",
    hesapAcilisTarihi: "2022-03-10T09:30:00Z",
    sonGirisTarihi: "2024-01-15T14:22:15Z",
    guvenlikSeviyesi: "yuksek",
    emailDogrulandi: true,
    telefonDogrulandi: true,
    kycDurumu: "onaylandi"
  },
  
  bakiye: {
    toplam: 145000.50,
    kullanilabilir: 142350.75,
    beklemede: 2649.75,
    paraBirimi: "TRY",
    sonGuncelleme: "2024-01-15T16:45:30Z"
  },
  
  hesaplar: [
    {
      id: "ACC-001",
      tip: "vadesiz",
      bakiye: 85000.50,
      iban: "TR33 0006 1005 1978 6457 8413 26",
      hesapNo: "1234567890",
      acilisTarihi: "2022-03-10",
      aktif: true
    },
    {
      id: "ACC-002",
      tip: "vadeli",
      bakiye: 60000.00,
      iban: "TR44 0006 1005 1978 6457 8413 27",
      hesapNo: "1234567891",
      vade: "2024-12-31",
      faizOrani: 45.5,
      acilisTarihi: "2023-06-15",
      aktif: true
    }
  ],
  
  islemler: [
    {
      id: "TXN-20240115-001",
      tip: "havale",
      tutar: 1500.00,
      durum: "basarili",
      tarih: "2024-01-15T16:30:22Z",
      aciklama: "Market alışverişi",
      alici: "Migros A.Ş.",
      aliciIban: "TR12 0001 2009 3000 0000 1234 56",
      islemUcreti: 0,
      komisyon: 0,
      referansNo: "REF-2024-0115-789456",
      kategori: "alisveris"
    },
    {
      id: "TXN-20240115-002",
      tip: "eft",
      tutar: 3200.00,
      durum: "basarili",
      tarih: "2024-01-15T14:15:10Z",
      aciklama: "Kira ödemesi",
      alici: "Mehmet Demir",
      aliciIban: "TR98 0004 6007 8800 0000 6789 12",
      islemUcreti: 2.50,
      komisyon: 0,
      referansNo: "REF-2024-0115-456123",
      kategori: "fatura"
    },
    {
      id: "TXN-20240115-003",
      tip: "pos",
      tutar: 450.75,
      durum: "basarili",
      tarih: "2024-01-15T13:45:33Z",
      aciklama: "Restoran ödemesi",
      alici: "Kebapçı Halil",
      kartSonDort: "4532",
      islemUcreti: 0,
      komisyon: 6.76,
      referansNo: "REF-2024-0115-321789",
      kategori: "yemek"
    },
    {
      id: "TXN-20240115-004",
      tip: "havale",
      tutar: 850.00,
      durum: "basarisiz",
      tarih: "2024-01-15T11:20:18Z",
      aciklama: "Yetersiz bakiye",
      alici: "Teknosa Tic. A.Ş.",
      aliciIban: "TR56 0006 4000 0011 2345 6789 01",
      islemUcreti: 0,
      komisyon: 0,
      hataKodu: "ERR-001",
      hataMesaji: "Yetersiz bakiye",
      referansNo: "REF-2024-0115-654987",
      kategori: "alisveris"
    },
    {
      id: "TXN-20240114-005",
      tip: "virman",
      tutar: 10000.00,
      durum: "basarili",
      tarih: "2024-01-14T18:22:45Z",
      aciklama: "Vadeli hesaba virman",
      gonderen: "ACC-001",
      alici: "ACC-002",
      islemUcreti: 0,
      komisyon: 0,
      referansNo: "REF-2024-0114-987321",
      kategori: "virman"
    },
    {
      id: "TXN-20240114-006",
      tip: "fast",
      tutar: 2500.00,
      durum: "basarili",
      tarih: "2024-01-14T16:05:12Z",
      aciklama: "Acil para transferi",
      alici: "Ayşe Kaya",
      aliciIban: "TR77 0001 0009 4562 8745 3215 01",
      islemUcreti: 5.00,
      komisyon: 0,
      referansNo: "REF-2024-0114-741852",
      kategori: "transfer"
    },
    {
      id: "TXN-20240114-007",
      tip: "fatura",
      tutar: 175.30,
      durum: "basarili",
      tarih: "2024-01-14T10:33:27Z",
      aciklama: "Elektrik faturası",
      alici: "Bedaş",
      aboneNo: "1234567890",
      faturaNo: "FAT-2024-01-12345",
      islemUcreti: 0,
      komisyon: 0,
      referansNo: "REF-2024-0114-159753",
      kategori: "fatura"
    },
    {
      id: "TXN-20240113-008",
      tip: "pos",
      tutar: 1280.00,
      durum: "basarili",
      tarih: "2024-01-13T20:15:40Z",
      aciklama: "Online alışveriş",
      alici: "Trendyol",
      kartSonDort: "4532",
      islemUcreti: 0,
      komisyon: 19.20,
      referansNo: "REF-2024-0113-852147",
      kategori: "alisveris"
    },
    {
      id: "TXN-20240113-009",
      tip: "havale",
      tutar: 5000.00,
      durum: "beklemede",
      tarih: "2024-01-13T17:42:55Z",
      aciklama: "Transfer işlemi devam ediyor",
      alici: "Can Özdemir",
      aliciIban: "TR22 0006 2000 1470 0006 2987 45",
      islemUcreti: 0,
      komisyon: 0,
      referansNo: "REF-2024-0113-753159",
      kategori: "transfer",
      tahminiTamamlanma: "2024-01-16T09:00:00Z"
    },
    {
      id: "TXN-20240113-010",
      tip: "cekim",
      tutar: 1000.00,
      durum: "basarili",
      tarih: "2024-01-13T14:28:11Z",
      aciklama: "ATM para çekimi",
      atmNo: "ATM-IST-456",
      lokasyon: "Bağdat Cad. Kadıköy",
      islemUcreti: 0,
      komisyon: 0,
      referansNo: "REF-2024-0113-951357",
      kategori: "cekim"
    },
    {
      id: "TXN-20240112-011",
      tip: "yatirim",
      tutar: 15000.00,
      durum: "basarili",
      tarih: "2024-01-12T11:10:30Z",
      aciklama: "Fon alımı",
      urunAdi: "ABC Değişken Fon",
      birimAdet: 1500,
      birimFiyat: 10.00,
      islemUcreti: 0,
      komisyon: 150.00,
      referansNo: "REF-2024-0112-147258",
      kategori: "yatirim"
    },
    {
      id: "TXN-20240112-012",
      tip: "havale",
      tutar: 750.00,
      durum: "basarisiz",
      tarih: "2024-01-12T09:55:20Z",
      aciklama: "Hatalı IBAN",
      alici: "Hatalı hesap",
      aliciIban: "TR00 0000 0000 0000 0000 0000 00",
      islemUcreti: 0,
      komisyon: 0,
      hataKodu: "ERR-004",
      hataMesaji: "Geçersiz IBAN numarası",
      referansNo: "REF-2024-0112-369147",
      kategori: "transfer"
    },
    {
      id: "TXN-20240111-013",
      tip: "fatura",
      tutar: 89.90,
      durum: "basarili",
      tarih: "2024-01-11T15:40:05Z",
      aciklama: "İnternet faturası",
      alici: "Türk Telekom",
      aboneNo: "0212-123-4567",
      faturaNo: "FAT-2024-01-67890",
      islemUcreti: 0,
      komisyon: 0,
      referansNo: "REF-2024-0111-258963",
      kategori: "fatura"
    },
    {
      id: "TXN-20240111-014",
      tip: "pos",
      tutar: 320.50,
      durum: "basarili",
      tarih: "2024-01-11T13:22:48Z",
      aciklama: "Benzin alımı",
      alici: "Shell Petrol",
      kartSonDort: "4532",
      islemUcreti: 0,
      komisyon: 4.81,
      referansNo: "REF-2024-0111-741963",
      kategori: "ulasim"
    },
    {
      id: "TXN-20240110-015",
      tip: "transfer",
      tutar: 25000.00,
      durum: "basarili",
      tarih: "2024-01-10T10:15:30Z",
      aciklama: "Maaş yatırımı",
      gonderen: "ABC Şirket A.Ş.",
      gonderenIban: "TR11 0006 4000 0014 7852 3698 74",
      islemUcreti: 0,
      komisyon: 0,
      referansNo: "REF-2024-0110-963852",
      kategori: "gelir"
    }
  ],
  
  kartlar: [
    {
      id: "CARD-001",
      tip: "banka",
      kartNo: "4532 **** **** 8765",
      sonDort: "8765",
      sahibi: "AHMET YILMAZ",
      sonKullanmaTarihi: "12/26",
      cvv: "***",
      limit: 50000.00,
      kullanilanLimit: 12450.75,
      aktif: true,
      sanalKart: false,
      temassiz: true,
      markaAdi: "VISA"
    },
    {
      id: "CARD-002",
      tip: "kredi",
      kartNo: "5412 **** **** 3210",
      sonDort: "3210",
      sahibi: "AHMET YILMAZ",
      sonKullanmaTarihi: "08/25",
      cvv: "***",
      limit: 100000.00,
      kullanilanLimit: 35670.25,
      aktif: true,
      sanalKart: false,
      temassiz: true,
      markaAdi: "MASTERCARD",
      taksitImkani: true,
      milPuani: 8540
    },
    {
      id: "CARD-003",
      tip: "sanal",
      kartNo: "4916 **** **** 1234",
      sonDort: "1234",
      sahibi: "AHMET YILMAZ",
      sonKullanmaTarihi: "03/24",
      cvv: "***",
      limit: 5000.00,
      kullanilanLimit: 1250.00,
      aktif: true,
      sanalKart: true,
      temassiz: false,
      markaAdi: "VISA",
      geciciKart: true
    }
  ],
  
  bildirimler: [
    {
      id: "NOT-001",
      tip: "islem",
      baslik: "Para Transferi Başarılı",
      mesaj: "1.500,00 TL tutarındaki transfer işleminiz başarıyla gerçekleşti.",
      tarih: "2024-01-15T16:30:25Z",
      okundu: false,
      oncelik: "normal"
    },
    {
      id: "NOT-002",
      tip: "guvenlik",
      baslik: "Yeni Cihazdan Giriş",
      mesaj: "Hesabınıza Chrome tarayıcısından giriş yapıldı. Bu siz değilseniz hemen şifrenizi değiştirin.",
      tarih: "2024-01-15T14:22:17Z",
      okundu: false,
      oncelik: "yuksek"
    },
    {
      id: "NOT-003",
      tip: "kampanya",
      baslik: "Özel İndirim Fırsatı",
      mesaj: "Seçili mağazalarda %20'ye varan indirim! Kampanya detayları için tıklayın.",
      tarih: "2024-01-15T09:00:00Z",
      okundu: true,
      oncelik: "dusuk"
    },
    {
      id: "NOT-004",
      tip: "fatura",
      baslik: "Fatura Ödeme Hatırlatması",
      mesaj: "Elektrik faturanızın son ödeme tarihi yaklaşıyor. 3 gün içinde ödemenizi yapmanız gerekiyor.",
      tarih: "2024-01-14T18:00:00Z",
      okundu: false,
      oncelik: "orta"
    },
    {
      id: "NOT-005",
      tip: "sistem",
      baslik: "Bakım Çalışması",
      mesaj: "16 Ocak Salı günü 02:00-04:00 saatleri arası sistem bakımı yapılacaktır.",
      tarih: "2024-01-13T10:00:00Z",
      okundu: true,
      oncelik: "orta"
    }
  ],
  
  harcamaAnalizi: {
    buAy: {
      toplam: 8516.55,
      kategorilar: {
        alisveris: 2730.75,
        fatura: 265.20,
        yemek: 1450.75,
        ulasim: 520.50,
        transfer: 3200.00,
        diger: 349.35
      },
      oncekiAyKarsilastirma: 12.5
    },
    gecmisAy: {
      toplam: 7570.30,
      kategorilar: {
        alisveris: 2100.00,
        fatura: 310.40,
        yemek: 1680.90,
        ulasim: 445.00,
        transfer: 2800.00,
        diger: 234.00
      }
    },
    yillik: {
      toplam: 98450.80,
      ortalama: 8204.23,
      enYuksekAy: "Aralik",
      enDusukAy: "Mart"
    }
  },
  
  krediSkoru: {
    puan: 1850,
    maksimumPuan: 1900,
    seviye: "Mukemmel",
    sonGuncelleme: "2024-01-01",
    gecmis: [
      { ay: "Ocak 2024", puan: 1850 },
      { ay: "Aralik 2023", puan: 1820 },
      { ay: "Kasim 2023", puan: 1795 },
      { ay: "Ekim 2023", puan: 1780 },
      { ay: "Eylul 2023", puan: 1765 },
      { ay: "Agustos 2023", puan: 1750 }
    ],
    oneriler: [
      "Kredi kartı borcunuzu düzenli olarak ödemeye devam edin",
      "Kredi kullanım oranınızı %30'un altında tutun",
      "Yeni kredi başvurusu yapmadan önce mevcut borçlarınızı kapatın"
    ]
  },
  
  yatirimlar: [
    {
      id: "INV-001",
      tip: "fon",
      ad: "ABC Değişken Fon",
      kod: "ABC",
      adet: 1500,
      alisFiyati: 10.00,
      guncelFiyat: 10.85,
      toplamDeger: 16275.00,
      kar: 1275.00,
      karOrani: 8.5,
      alisTarihi: "2024-01-12"
    },
    {
      id: "INV-002",
      tip: "tahvil",
      ad: "Hazine Bonosu",
      kod: "TR012024",
      nominal: 10000,
      faizOrani: 42.0,
      vadeTarihi: "2024-12-31",
      toplamDeger: 10350.00,
      tahakkukEdenFaiz: 350.00,
      alisTarihi: "2024-01-01"
    },
    {
      id: "INV-003",
      tip: "hisse",
      ad: "XYZ Holding",
      kod: "XYZ",
      adet: 100,
      alisFiyati: 85.50,
      guncelFiyat: 92.30,
      toplamDeger: 9230.00,
      kar: 680.00,
      karOrani: 7.95,
      alisTarihi: "2023-11-15"
    }
  ],
  
  dovizKurlari: [
    {
      kod: "USD",
      sembol: "$",
      ad: "Amerikan Doları",
      alis: 32.15,
      satis: 32.25,
      degisim: 0.12,
      degisimYuzdesi: 0.37,
      sonGuncelleme: "2024-01-15T16:45:00Z"
    },
    {
      kod: "EUR",
      sembol: "€",
      ad: "Euro",
      alis: 35.10,
      satis: 35.22,
      degisim: -0.08,
      degisimYuzdesi: -0.23,
      sonGuncelleme: "2024-01-15T16:45:00Z"
    },
    {
      kod: "GBP",
      sembol: "£",
      ad: "İngiliz Sterlini",
      alis: 40.85,
      satis: 41.00,
      degisim: 0.25,
      degisimYuzdesi: 0.61,
      sonGuncelleme: "2024-01-15T16:45:00Z"
    },
    {
      kod: "CHF",
      sembol: "₣",
      ad: "İsviçre Frangı",
      alis: 38.40,
      satis: 38.55,
      degisim: 0.05,
      degisimYuzdesi: 0.13,
      sonGuncelleme: "2024-01-15T16:45:00Z"
    }
  ],
  
  sikcaSorulanlar: [
    {
      id: "FAQ-001",
      kategori: "Hesap",
      soru: "Hesabımı nasıl açabilirim?",
      cevap: "Mobil uygulamamızı indirerek veya web sitemiz üzerinden kimlik bilgilerinizle 5 dakika içinde hesap açabilirsiniz."
    },
    {
      id: "FAQ-002",
      kategori: "Transfer",
      soru: "Para transferi ne kadar sürer?",
      cevap: "Havale işlemleri anında, EFT işlemleri 1-2 saat içinde gerçekleşir. FAST ile 7/24 anında transfer yapabilirsiniz."
    },
    {
      id: "FAQ-003",
      kategori: "Güvenlik",
      soru: "Şifremi unuttum ne yapmalıyım?",
      cevap: "Giriş ekranındaki 'Şifremi Unuttum' linkine tıklayarak SMS ile şifre sıfırlama yapabilirsiniz."
    },
    {
      id: "FAQ-004",
      kategori: "Ücretler",
      soru: "İşlem ücretleri nelerdir?",
      cevap: "Havale ücretsiz, EFT 2.50 TL, FAST 5.00 TL'dir. Detayllı ücret tarifesi için web sitemizi ziyaret edebilirsiniz."
    }
  ],
  
  destek: {
    telefon: "444 0 123",
    email: "destek@fintech.com",
    adres: "Levent Mah. Buyukdere Cad. No:101 Levent/Istanbul",
    calismaSaatleri: "Pazartesi-Cuma: 09:00-18:00",
    sosyalMedya: {
      twitter: "@fintechtr",
      instagram: "@fintechtr",
      linkedin: "fintech-turkiye"
    }
  },
  
  ayarlar: {
    bildirimler: {
      emailBildirimleri: true,
      smsBildirimleri: true,
      pushBildirimleri: true,
      kampanyaBildirimleri: false,
      islemBildirimleri: true
    },
    guvenlik: {
      ikiFactorAuth: true,
      biyometrikGiris: true,
      otomatikCikis: 5,
      ipAdresiDogrulama: false
    },
    gizlilik: {
      profilGorunurlugu: "ozel",
      islemGecmisiPaylas: false,
      konum: false
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = mockData;
}
```