import Gcard from "./components/Gcard.jsx";

function Penyebab() {
  return (
    <>
      <div>
        <div className="">
          <Gcard
            kiri={false}
            head="Penyebab Gangguan Kesehatan Mental"
            subhead="Saat seseorang mengalami gangguan kesehatan mental atau kondisi mental health yang kurang baik, tentu ada pemicunya, salah satunya penyebab mental health adalah trauma akibat peristiwa buruk yang terjadi di masa lalu. Adapun beberapa penyebab mental health adalah:"
            satu="Riwayat gangguan kesehatan jiwa dalam keluarga atau faktor genetik."
            dua="Tinggal di lingkungan perumahan yang tidak sehat"
            tiga="adanya riwayat kekerasan seksual,fisik, atau bentuk pelechan lainnya"
            empat="Korban diskriminasi dab stigma"
            lima="Terangsingkan atau terisolasi secara sosial atau merasa kesepian"
            enam="Stress berat dalam jangka waktu lama"
          />
        </div>

        <div className="max-lg:mt-96">
          <Gcard
            kiri={true}
            head="Penyebab Gangguan Kesehatan Mental"
            subhead="Saat seseorang mengalami gangguan kesehatan mental atau kondisi mental health yang kurang baik, tentu ada pemicunya, salah satunya penyebab mental health adalah trauma akibat peristiwa buruk yang terjadi di masa lalu. Adapun beberapa penyebab mental health adalah:"
            satu="Sulit fokus dan berkonsentrasi"
            dua="Kesulitan dalam mengatasi stres atau masalah sehari-hari."
            tiga="Mudah emosi secara berlebihan dan rentan melakukan kekerasan."
            empat="Menarik diri dari aktivitas sosial."
            lima="Kehilangan minat untuk melakukan aktivitas yang awalnya disukai."
            enam="Muncul pikiran untuk menyakiti diri sendiri (self harm) atau orang lain."
          />
        </div>
      </div>
    </>
  );
}

export default Penyebab;
