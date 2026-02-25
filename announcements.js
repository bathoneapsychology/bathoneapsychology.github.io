const announcements = [
  {
    id: 1,
    title: "Çok Yakında Aranızdayız!",
    date: "2026-02-23",
    text: "Avcılar Süleyman Nazif Anadolu Lisesi öğrencilerinden oluşan Bathonea Psikoloji kulübü çok yakında sizlerle! Öğrencilerin kaleme aldığı yazılar, bizzat seslendirdikleri podcast'ler ve daha fazlası... Takipte kalın!",
    img: [ "images/snalokul.jpg" ,
          "images/snallogo.jpg" 
          ]
  },
  {
    id: 2,
    title: "Gecici test duyurusu",
    date: "2026-02-24",
    text: "ol artik",
    img: "duyurular-images/etkinlik2.jpg"
  }
];

// ISO tarihi DD.MM.YYYY formatına çevir
function formatDate(isoDate){
  const d = new Date(isoDate);
  const day = String(d.getDate()).padStart(2,'0');
  const month = String(d.getMonth()+1).padStart(2,'0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}
