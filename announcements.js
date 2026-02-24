const announcements = [
  {
    id: 1,
    title: "Çok Yakında Aranızdayız!",
    date: "2026-02-23",
    text: "Avcılar Süleyman Nazif Anadolu Lisesi öğrencilerinden oluşan Bathonea Psikoloji kulübü çok yakında sizlerle! Öğrencilerin kaleme aldığı yazılar, bizzat seslendikleri podcast'ler ve daha fazlası... Takipte kalın!",
    img: "duyurular-images/etkinlik1.jpg"
  },
  {
    id: ,
    title: "",
    date: "",
    text: "",
    img: ""
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
