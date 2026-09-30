// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const giftData: Record<string, GiftData> = {

  // ----------------------------------------------------------
  // CUSTOMER: Aya
  // Link: yourdomain.com/gift/aya
  // ----------------------------------------------------------
  aya: {
    name: "Omar",                                     // اسم مستلم الهدية
    senderName: "your love",                                   // التوقيع في آخر الرسالة (اختياري)
    envelopeImage: "/images/envelope-aya.png",           // صورة الظرف
    birthdayImage: "/images/birthday-aya.png",           // صورة الهدية النهائية
    accentColor: "#38bdf8",                              // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
    musicUrl: "",                                        // رابط الموسيقى هنا
    message: `Happy birthday ya 3amoryy
w3obal million sana ya habibi w y5lek lia w tfdl
gambi w m3aya daymn  w a4ofk mabsot wt7kk elli ttmnah ya roh alby w a4ofk a7sn w a4tr bashmohnds f eldonia♥️♥️♥️.`,
  },

};

export default giftData;
