const announcements = [
  {
    id: 1,
    title: "Yeni Workshop Duyurusu",
    date: "2026-03-10",
    text: "Psikoloji kulübümüzün düzenleyeceği yeni workshop çok yakında. Katılım için takipte kalın!",
    img: "duyurular-images/etkinlik2.jpg"
  },
  {
    id: 2,
    title: "Çok Yakında Aranızdayız!",
    date: "2026-02-23",
    text: "Avcılar Süleyman Nazif Anadolu Lisesi öğrencilerinden oluşan Bathonea Psikoloji kulübü çok yakında sizlerle! Öğrencilerin kaleme aldığı yazılar, bizzat seslendikleri podcast'ler ve daha fazlası... Takipte kalın!",
    img: "duyurular-images/etkinlik1.jpg"
  },
  {
    id: 3,
    title: "Podcast Serimiz Başlıyor!",
    date: "2026-02-15",
    text: "Bathonea Sohbetleri podcast serimiz yayında! İlk bölümde öğrencilerimizin gözünden psikoloji dünyasını keşfedin.",
    img: "duyurular-images/podcast1.jpg"
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
