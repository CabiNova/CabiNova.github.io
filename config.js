/* ===== إعدادات الموقع : عدّل هذا الملف فقط بالمفكرة (Notepad) ثم احفظه ===== */
/* Réglages du site : modifiez ce fichier avec le Bloc-notes puis enregistrez. */
const CFG={
  whatsapp:"213671730596",            // numéro WhatsApp international sans + ni espaces (ex: 2135XXXXXXXX)
  email:"Nedjmeddineguebli42@gmail.com",      // e-mail de réception des demandes
  currency:"",
  plans:[
    {id:"t5",  price:"0",     per:{fr:"· 5 jours",ar:"· 5 أيام"}, trial:true},
    {id:"m1",  price:"3500",  per:{fr:"DA / mois",ar:"دج / شهر"}},
    {id:"m6",  price:"18000", per:{fr:"DA / 6 mois",ar:"دج / 6 أشهر"}},
    {id:"y1",  price:"32000", per:{fr:"DA / an",ar:"دج / سنة"}, featured:true}
  ],
  payments:[
    {name:"CCP (RIP)", value:"007 99999 001959351609"},
    {name:"BNA (RIB)", value:"001 00438 0200009296 69"},
    {name:"Nom du titulaire", value:"Guebli Nedjmeddine"}
  ],
  api:"https://cabinova-pay.nedjmeddineguebli42.workers.dev",                              // رابط خادم الدفع (Cloudflare Worker) — يُملأ بعد إنشائه، مثال: https://cabinova-pay.xxx.workers.dev
  download:"CabiNova_Setup.zip",
  sha256:"d1db436ff03a7cf79b6f43ce0a71579fb8a8037f6cc161d3bc5ce6fa280a8b05",
  version:"67"
};
