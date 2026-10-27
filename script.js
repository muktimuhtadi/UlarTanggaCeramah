/* =====================================================
   ULAR TANGGA PIDATO – Teks Ceramah (Kelas XI APHP)
   Edit bagian DATA di bawah untuk mengganti soal & tantangan.
   ===================================================== */
const DATA = {
  // Tantangan bicara per zona: [Pemanasan, Latihan, Panggung, Podium]
  talk: [
    [ // Pemanasan (kotak 1-8) – 1-2 kalimat, 15 detik
      'Ucapkan salam pembuka ceramah dan sapa teman-temanmu!',
      'Sebutkan namamu dan satu hal yang kamu sukai dari jurusan APHP.',
      'Ucapkan 1 kalimat ajakan untuk menjaga kebersihan tempat praktik.',
      'Lanjutkan kalimat ini: "Hadirin yang saya hormati, hari ini saya akan berbicara tentang ..."',
      'Ucapkan salam penutup dan terima kasih dengan suara lantang!',
      'Perkenalkan dirimu dengan 2 kalimat: nama dan kelas.',
      'Ucapkan dengan lantang: "Mari kita jaga kebersihan lingkungan sekolah!"',
      'Sapa seluruh hadirin dengan sapaan hormat yang kamu ketahui.',
      'Sebutkan 1 hasil pertanian favoritmu dan alasannya (1-2 kalimat).',
      'Ucapkan 1 kalimat yang mengajak teman rajin belajar.',
      'Katakan dengan semangat: "Bangga menjadi siswa APHP!" lalu tambahkan 1 alasan.',
      'Ucapkan satu pertanyaan retoris untuk membuka ceramah.'
    ],
    [ // Latihan (kotak 9-17) – 30 detik
      'Sampaikan PENDAHULUAN ceramah bertema keamanan pangan.',
      'Sampaikan ISI singkat: 2 manfaat mengolah hasil panen.',
      'Buat PENUTUP ceramah tentang K3 di laboratorium.',
      'Ajak teman mengurangi limbah pertanian dengan 3 kalimat persuasif.',
      'Jelaskan pentingnya cuci tangan sebelum mengolah pangan.',
      'Sampaikan alasan mengapa kita harus memakai APD saat praktik.',
      'Buat PEMBUKA ceramah tentang manfaat sayur dan buah bagi kesehatan.',
      'Jelaskan 2 cara agar hasil olahan pangan tetap higienis.',
      'Ajak teman memanfaatkan hasil panen lokal agar tidak terbuang.',
      'Sampaikan PENUTUP ceramah tentang pentingnya berwirausaha olahan pangan.',
      'Ceritakan pengalamanmu saat praktik mengolah pangan, lalu ambil satu pelajarannya.',
      'Jelaskan mengapa label dan tanggal kedaluwarsa perlu dicek.'
    ],
    [ // Panggung (kotak 18-26) – 60 detik, pilih salah satu
      'PILIH SATU: (a) Pentingnya kebersihan alat produksi  atau  (b) Manfaat makan olahan pangan lokal.',
      'PILIH SATU: (a) Ayo kurangi limbah pertanian  atau  (b) Semangat berwirausaha pangan.',
      'PILIH SATU: (a) Bahaya bahan pangan kedaluwarsa  atau  (b) Mengapa kita harus bangga menjadi siswa APHP.',
      'PILIH SATU: (a) Cara menyimpan hasil panen agar awet  atau  (b) Pentingnya memilih bahan baku yang segar.',
      'PILIH SATU: (a) Kebersihan diri pekerja pangan  atau  (b) Mengapa pangan lokal layak dibanggakan.',
      'PILIH SATU: (a) Mengolah limbah menjadi barang bermanfaat  atau  (b) Peran pemuda dalam ketahanan pangan.',
      'PILIH SATU: (a) Bahaya jajanan yang tidak higienis  atau  (b) Cara memulai usaha olahan pangan sederhana.',
      'PILIH SATU: (a) Disiplin K3 di tempat praktik  atau  (b) Pentingnya mengurangi pangan terbuang.',
      'PILIH SATU: (a) Manfaat gizi dari olahan hasil panen  atau  (b) Pentingnya kerja sama tim saat produksi.',
      'PILIH SATU: (a) Kemasan yang menarik dan aman  atau  (b) Mengapa kita perlu mencintai produk dalam negeri.'
    ],
    [ // Podium (kotak 27-30) – 120 detik
      'Bangga Mengolah Pangan Lokal',
      'Pangan Aman, Hidup Sehat',
      'Tanpa Limbah, Lebih Berkah',
      'Bersih dan Higienis, Kunci Produk Pangan Berkualitas',
      'Pemuda Tani, Pemuda Berprestasi',
      'Dari Hasil Panen Menjadi Peluang Usaha',
      'Kurangi Pangan Terbuang, Selamatkan Masa Depan',
      'Keselamatan Kerja Adalah Tanggung Jawab Kita Bersama'
    ].map(t => 'MINI CERAMAH LENGKAP (pembuka, isi, penutup): ' + t)
  ],
  quiz: [
    {q:'Struktur teks ceramah terdiri atas apa saja?', a:'Pembuka, isi, dan penutup.'},
    {q:'"Assalamualaikum warahmatullahi wabarakatuh" termasuk bagian apa?', a:'Salam pembuka.'},
    {q:'Sebutkan 1 kata/ungkapan ajakan (persuasif) dalam ceramah!', a:'Contoh: marilah, mari kita, hendaknya, ayo.'},
    {q:'Apa tujuan teks ceramah?', a:'Menyampaikan pesan atau nasihat dan mengajak pendengar.'},
    {q:'Apa yang disampaikan pada bagian isi ceramah?', a:'Pokok bahasan, alasan/argumen, serta contoh atau data.'},
    {q:'Apa isi bagian penutup ceramah?', a:'Kesimpulan, harapan/ajakan, terima kasih, dan salam penutup.'},
    {q:'Selain kata-kata, sebutkan 2 hal penting saat berpidato!', a:'Intonasi, lafal, ekspresi, gestur, kontak mata, volume suara.'},
    {q:'"Jagalah kebersihan!" termasuk kalimat apa?', a:'Kalimat perintah/imbauan (imperatif).'},
    {q:'Sebutkan ciri bahasa teks ceramah!', a:'Persuasif, komunikatif, lugas, ada sapaan kepada pendengar.'},
    {q:'Mengapa penceramah memakai kata "kita", bukan "kalian"?', a:'Agar terasa akrab dan setara, sehingga ajakan lebih mudah diterima.'},
    {q:'Apa yang dimaksud ceramah?', a:'Uraian lisan di depan orang banyak tentang suatu hal, berisi pengetahuan atau nasihat.'},
    {q:'Apa perbedaan ceramah dan pidato?', a:'Ceramah menekankan nasihat/penyuluhan dan ajakan; pidato menyampaikan gagasan atau pesan, sering di acara resmi. Keduanya lisan di depan umum.'},
    {q:'Sebutkan 1 cara menarik perhatian pendengar di awal ceramah!', a:'Contoh: sapaan hangat, pertanyaan retoris, cerita singkat, atau fakta menarik.'},
    {q:'Apa yang dimaksud kalimat retoris?', a:'Pertanyaan yang tidak perlu dijawab, dipakai untuk menegaskan atau menarik perhatian.'},
    {q:'Kata "hendaknya" menunjukkan makna apa?', a:'Harapan, anjuran, atau ajakan.'},
    {q:'Sebutkan 1 sapaan kepada hadirin dalam ceramah!', a:'Contoh: Hadirin yang saya hormati, Bapak/Ibu yang kami muliakan, saudara-saudara sekalian.'},
    {q:'Apa fungsi contoh dalam bagian isi ceramah?', a:'Memperkuat argumen dan membuat pesan lebih mudah dipahami.'},
    {q:'Apa yang dimaksud lafal?', a:'Cara mengucapkan kata atau bunyi bahasa.'},
    {q:'Apa yang dimaksud intonasi?', a:'Naik turunnya nada suara saat berbicara.'},
    {q:'Mengapa kontak mata penting saat berpidato?', a:'Agar pendengar merasa diperhatikan dan pembicara tampak percaya diri.'},
    {q:'Apa yang sebaiknya dilakukan jika tiba-tiba lupa saat berpidato?', a:'Tetap tenang, tarik napas, ulangi kalimat terakhir, lalu lanjutkan dengan poin kunci.'},
    {q:'Sebutkan 2 kata penghubung untuk menyatakan urutan dalam isi ceramah!', a:'Pertama, kedua, selanjutnya, kemudian, terakhir.'},
    {q:'Sebutkan 1 kata/ungkapan untuk membuka kesimpulan!', a:'Contoh: jadi, oleh karena itu, dengan demikian, singkatnya.'},
    {q:'Sebutkan contoh kalimat penutup ceramah!', a:'Contoh: "Demikian yang dapat saya sampaikan. Terima kasih atas perhatiannya."'},
    {q:'Apa yang dimaksud kalimat persuasif?', a:'Kalimat yang bertujuan membujuk atau mengajak pendengar melakukan sesuatu.'},
    {q:'Ubahlah kalimat "Cuci tangan!" menjadi kalimat persuasif!', a:'Contoh: "Mari kita biasakan mencuci tangan sebelum mengolah pangan."'},
    {q:'Mengapa data atau fakta diperlukan dalam ceramah?', a:'Agar argumen meyakinkan dan dapat dipercaya.'},
    {q:'Sebutkan 2 topik ceramah yang dekat dengan jurusan APHP!', a:'Contoh: keamanan pangan, K3, pengolahan hasil panen, pengurangan limbah, kewirausahaan.'},
    {q:'Apa yang dimaksud kata baku?', a:'Kata yang sesuai kaidah bahasa Indonesia standar, dipakai pada situasi resmi.'},
    {q:'Bagaimana volume suara yang baik saat berpidato?', a:'Cukup keras hingga terdengar sampai belakang, tidak berteriak, dan bervariasi untuk penekanan.'},
    {q:'Apa saja yang perlu disiapkan sebelum berceramah?', a:'Topik, kerangka (pembuka-isi-penutup), data atau contoh, dan latihan.'},
    {q:'Apa yang dimaksud gestur?', a:'Gerakan tubuh atau tangan yang mendukung pesan yang disampaikan.'}
  ],
  kata: ['bersih','aman','bersyukur','hasil panen','semangat','mari bersama','sehat','bermanfaat','peduli','wirausaha','kualitas','lokal']
};

/* ---------- Papan ---------- */
const SNAKES  = {14:5, 24:13, 26:16, 29:19};   // kepala -> ekor
const LADDERS = {2:11, 7:18, 12:22, 20:28};    // bawah -> atas
// Merk susu sebagai nama kelompok. Logo: taruh file PNG di folder logos/ (lihat logos/README.txt)
const BRANDS = [
  {name:'Greenfields', short:'GF', color:'#2e9e4f', logo:'logos/greenfields.png'},
  {name:'Ultra Milk',  short:'UM', color:'#1d4ed8', logo:'logos/ultramilk.png'},
  {name:'Frisian Flag',short:'FF', color:'#e11d2e', logo:'logos/frisianflag.png'},
  {name:'Indomilk',    short:'IM', color:'#0ea5e9', logo:'logos/indomilk.png'},
  {name:'Cimory',      short:'CY', color:'#f97316', logo:'logos/cimory.png'},
  {name:'Diamond',     short:'DM', color:'#7c3aed', logo:'logos/diamond.png'},
  {name:'Milklife',    short:'ML', color:'#ec4899', logo:'logos/milklife.png'}
];
const NAMES = BRANDS.map(b=>b.name);
// Logo merk; jika file gambar tidak ada, tampil lencana berwarna berisi singkatan
const mark = t => `<span class="logo" style="--c:${t.color}"><img src="${t.logo}" alt="${t.name}" onerror="this.remove()"><span class="fb">${t.icon}</span></span>`;
const ZN = ['Pemanasan','Latihan','Panggung','Podium'];
const SEC = [15,30,60,120];
const FACE = ['⚀','⚁','⚂','⚃','⚄','⚅'];

const $ = s => document.querySelector(s);
const rnd = n => Math.floor(Math.random()*n);
const pick = a => a[rnd(a.length)];
const zoneOf = n => n<=8?0 : n<=17?1 : n<=26?2 : 3;
function typeOf(n){
  if(SNAKES[n]) return 'snake';
  if(LADDERS[n]) return 'ladder';
  if(n===30) return 'podium';
  return n%2===0 ? 'quiz' : 'talk';
}
const ICON = {snake:'🐍',ladder:'🎋',podium:'🏆',quiz:'❓',talk:'🎤'};

function cellXY(n){            // pusat kotak dalam koordinat 600x500
  const i=n-1, r=Math.floor(i/6), c = r%2===0 ? i%6 : 5-i%6;
  return [c*100+50, (4-r)*100+50];
}

/* ---------- Status permainan ---------- */
let S = {teams:[],cur:0,busy:false,paused:false,gid:0,timer:null,names:[],count:7};
const sleep = ms => new Promise(r=>setTimeout(r,ms));
async function wait(ms){ await sleep(ms); while(S.paused) await sleep(100); }

/* ---------- Menggambar papan ---------- */
function buildBoard(){
  const b=$('#board'); b.innerHTML='';
  for(let n=1;n<=30;n++){
    const [x,y]=cellXY(n), d=document.createElement('div');
    d.className=`cell z${zoneOf(n)}${n===30?' podium':''}`;
    d.style.gridColumn=(x-50)/100+1; d.style.gridRow=(y-50)/100+1;
    const t=typeOf(n);
    d.innerHTML=`<b>${n}</b><i>${(t==='snake'||t==='ladder')?'':ICON[t]}</i>`;
    b.appendChild(d);
  }
  let svg='';
  const SC=['#2e9e4f','#d98324','#8e44ad','#2a7fba'];
  Object.entries(LADDERS).forEach(([a,b])=>{
    const [x1,y1]=cellXY(+a),[x2,y2]=cellXY(b);
    const L=Math.hypot(x2-x1,y2-y1), ux=(x2-x1)/L, uy=(y2-y1)/L, px=-uy*14, py=ux*14;
    svg+=`<line x1="${x1+px}" y1="${y1+py}" x2="${x2+px}" y2="${y2+py}" stroke="#7a4a21" stroke-width="7" stroke-linecap="round"/>
          <line x1="${x1-px}" y1="${y1-py}" x2="${x2-px}" y2="${y2-py}" stroke="#7a4a21" stroke-width="7" stroke-linecap="round"/>`;
    for(let d=22;d<L-10;d+=26){
      const cx=x1+ux*d, cy=y1+uy*d;
      svg+=`<line x1="${cx+px}" y1="${cy+py}" x2="${cx-px}" y2="${cy-py}" stroke="#c28a4a" stroke-width="5" stroke-linecap="round"/>`;
    }
  });
  Object.entries(SNAKES).forEach(([a,b],k)=>{
    const [x1,y1]=cellXY(+a),[x2,y2]=cellXY(b);
    const L=Math.hypot(x2-x1,y2-y1), px=-(y2-y1)/L*45, py=(x2-x1)/L*45;
    const c1=[x1+(x2-x1)*.33+px, y1+(y2-y1)*.33+py], c2=[x1+(x2-x1)*.66-px, y1+(y2-y1)*.66-py];
    const p=`M${x1} ${y1} C${c1[0]} ${c1[1]},${c2[0]} ${c2[1]},${x2} ${y2}`;
    svg+=`<path d="${p}" fill="none" stroke="${SC[k]}" stroke-width="15" stroke-linecap="round" opacity=".9"/>
          <path d="${p}" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 14" opacity=".7"/>
          <text x="${x1}" y="${y1+14}" font-size="44" text-anchor="middle">🐍</text>`;
  });
  $('#deco').innerHTML=svg;
}

/* ---------- Tampilan bidak & papan skor ---------- */
function render(){
  $('#tokens').innerHTML = S.teams.map((t,i)=>{
    const [x,y]=cellXY(t.pos);
    return `<div class="token" style="left:${x/6}%;top:${y/5}%;background:${t.color};--dx:${(i%3-1)*52}%;--dy:${(Math.floor(i/3)-(Math.ceil(S.teams.length/3)-1)/2)*52}%">${mark(t)}</div>`;
  }).join('');
  $('#teams').innerHTML = S.teams.map((t,i)=>`
    <li class="${i===S.cur?'on':''}" style="--c:${t.color}">
      <span class="ic">${mark(t)}</span><span class="nm">${t.name}</span>
      <span class="st">${t.pos>0?'Kotak '+t.pos:'Start'}</span>
      <span class="st" style="text-align:left">⭐ ${t.stars} &nbsp;🎁 ${t.cards}</span>
      <div class="bar"><span style="width:${t.pos/30*100}%"></span></div>
    </li>`).join('');
  $('#teams').className = S.teams.length>5 ? 'tight' : '';
  const t=S.teams[S.cur];
  if(t){ $('#turn').innerHTML=`Giliran: ${mark(t)} ${t.name}`; $('#turn').style.setProperty('--c',t.color); }
  $('#dice').disabled = S.busy;
}
const say = m => $('#msg').textContent = m;

/* ---------- Kartu / modal ---------- */
function ask(html, btns){
  return new Promise(res=>{
    const box=$('#box'); box.innerHTML=html+'<div class="btns"></div>';
    const bx=box.lastChild;
    btns.forEach(b=>{
      const e=document.createElement('button'); e.textContent=b.t; e.className=b.c||'';
      e.onclick=()=>{
        if(b.keep){ b.keep(e); return; }
        clearInterval(S.timer); $('#modal').classList.add('hidden'); res(b.v);
      };
      bx.appendChild(e);
    });
    $('#modal').classList.remove('hidden');
  });
}

async function talkCard(t, final){
  const z = final?3:zoneOf(t.pos), secs=SEC[z], topic=pick(DATA.talk[z]);
  t.turns++;
  let left=secs, running=false;
  const fmt=s=>`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
  const html=`<span class="tag">Zona ${ZN[z]} · ${mark(t)} ${t.name}</span>
    <h2>🎤 Tantangan Bicara</h2>
    <p class="task">${topic}</p>
    <div class="tm" id="tm">${fmt(left)}</div><p class="note" id="hint">Giliran bicara ke-${t.turns} · bergantian antaranggota tim</p>`;
  clearInterval(S.timer);
  S.timer=setInterval(()=>{
    if(!running||S.paused) return;
    left--; const el=$('#tm'); el.textContent=fmt(Math.max(left,0));
    if(left<=0){ running=false; el.classList.add('end'); $('#hint').textContent='⏰ Waktu habis! Beri penilaian di bawah.'; clearInterval(S.timer); }
  },1000);
  const btns=[
    {t:'▶ Mulai Timer', c:'', keep:b=>{ running=!running; b.textContent=running?'⏸ Hentikan Timer':'▶ Lanjut Timer'; }},
    {t:`🎁 Pakai Kartu Bantuan (${t.cards})`, keep:b=>{
      if(t.cards<1) return;
      t.cards--; t.helps++; left+=15; render();
      $('#tm').textContent=fmt(left);
      $('#hint').textContent=`Bantuan: +15 detik · kata kunci: ${[...DATA.kata].sort(()=>Math.random()-.5).slice(0,3).join(', ')} · boleh ditemani 1 teman`;
      b.textContent=`🎁 Pakai Kartu Bantuan (${t.cards})`; if(t.cards<1) b.disabled=true;
    }},
    {t:'😅 Belum siap', v:0},{t:'⭐ Cukup', v:1},{t:'⭐⭐ Bagus', v:2},{t:'⭐⭐⭐ Hebat!', v:3}
  ];
  if(t.cards<1) btns[1].dis=true;
  const p=ask(html,btns);
  if(t.cards<1) $('#box .btns').children[1].disabled=true;
  const v=await p; t.stars+=v;
  say(v?`${t.name} mendapat ${v} ⭐ — beri tepuk tangan! 👏`:`Tidak apa-apa, ${t.name}. Berani mencoba itu sudah hebat! 💪`);
  return v;
}

async function quizCard(t){
  const q=pick(DATA.quiz);
  const html=`<span class="tag">${mark(t)} ${t.name}</span><h2>❓ Kuis Materi</h2><p class="task">${q.q}</p><div class="ans hidden" id="ans">✅ ${q.a}</div>`;
  const reveal=ask(html,[
    {t:'👀 Tampilkan Jawaban', keep:b=>{ $('#ans').classList.remove('hidden'); b.disabled=true; }},
    {t:'✅ Benar (+1 ⭐)', v:1},{t:'❌ Belum tepat', v:0}
  ]);
  const v=await reveal; t.stars+=v;
  say(v?`${t.name} menjawab benar! +1 ⭐`:`Jawaban belum tepat. Semangat, ${t.name}!`);
  return v;
}

async function snakeCard(t, to){
  await ask(`<span class="tag">${mark(t)} ${t.name}</span><h2>⬇ Turun ke kotak ${to}</h2>
    <p class="task">Kartu Evaluasi: satu teman memberi <b>1 pujian</b> dan <b>1 saran</b> untuk ${t.name}. Setelah itu bidak turun.</p>`,
    [{t:'Lanjut ▶', v:1}]);
}

// Pilihan di kotak tangga/ular: bicara, kuis, atau menolak
function choose(t, title, text, noText){
  return ask(`<span class="tag">${mark(t)} ${t.name}</span><h2>${title}</h2><p class="task">${text}</p>`,
    [{t:'🎤 Bicara', v:'talk'},{t:'❓ Kuis', v:'quiz'},{t:noText, v:'no', c:'no'}]);
}
// Berhasil = kuis dijawab benar, atau bicara dinilai minimal 1 bintang
async function challenge(t, kind){
  const v = kind==='quiz' ? await quizCard(t) : await talkCard(t,false);
  return v>0;
}

/* ---------- Alur giliran ---------- */
async function roll(){
  if(S.busy||S.paused||!S.teams.length) return;
  S.busy=true; const g=S.gid, t=S.teams[S.cur], d=$('#dice');
  render(); d.classList.add('spin');
  for(let i=0;i<10;i++){ d.textContent=FACE[rnd(6)]; await wait(80); }
  d.classList.remove('spin');
  if(g!==S.gid) return;
  const v=1+rnd(6); d.textContent=FACE[v-1]; say(`${t.name} mendapat angka ${v}`);
  await wait(500);
  let dir=1;
  for(let i=0;i<v;i++){
    if(g!==S.gid) return;
    if(t.pos===30) dir=-1;
    t.pos+=dir; render(); await wait(280);
  }
  if(g!==S.gid) return;
  const n=t.pos, ty=typeOf(n);
  if(ty==='snake'){
    const to=SNAKES[n];
    say(`Ups! ${t.name} bertemu ular di kotak ${n}`);
    const c=await choose(t,'🐍 Ada Ular!',`Mau bertahan di kotak ${n}? Jawab kuis atau bicara dengan berhasil. Jika tidak mau (atau belum berhasil), bidak turun ke kotak ${to}.`,'⬇ Tidak, turun saja');
    if(g!==S.gid) return;
    const ok = c!=='no' && await challenge(t,c);
    if(g!==S.gid) return;
    if(ok){ say(`Hebat! ${t.name} selamat dan tetap di kotak ${n}.`); await wait(1200); }
    else { await snakeCard(t,to); if(g!==S.gid) return; t.pos=to; render(); await wait(600); }
  } else if(ty==='ladder'){
    const to=LADDERS[n];
    say(`${t.name} menemukan tangga di kotak ${n}`);
    const c=await choose(t,'🎋 Ada Tangga!',`Mau naik ke kotak ${to}? Jawab kuis atau bicara dengan berhasil. Jika tidak mau, bidak tetap di kotak ${n}.`,'🙅 Tidak, tetap di sini');
    if(g!==S.gid) return;
    const ok = c!=='no' && await challenge(t,c);
    if(g!==S.gid) return;
    if(ok){ say(`Hore! ${t.name} naik tangga ke kotak ${to}!`); await wait(900); t.pos=to; render(); await wait(600); }
    else { say(`${t.name} tidak naik dan tetap di kotak ${n}.`); await wait(1200); }
  } else if(ty==='quiz'){
    await quizCard(t);
  } else if(ty==='talk'){
    await talkCard(t,false);
  } else {
    await talkCard(t,true); if(g!==S.gid) return;
    return finish(t);
  }
  if(g!==S.gid) return;
  S.cur=(S.cur+1)%S.teams.length; S.busy=false; render();
  say(`Giliran ${S.teams[S.cur].name}. Lempar dadu!`);
}

async function finish(win){
  const rank=[...S.teams].sort((a,b)=>b.stars-a.stars);
  const rows=rank.map(t=>`<tr><td>${mark(t)} ${t.name}</td><td>⭐ ${t.stars}</td><td>🎤 ${t.turns}</td><td>🎁 ${t.helps}</td></tr>`).join('');
  await ask(`<h2>🏆 ${mark(win)} ${win.name} sampai di Podium!</h2>
    <p>Semua pembicara hebat hari ini. 👏</p>
    <table><tr><th>Tim</th><th>Bintang</th><th>Tampil</th><th>Bantuan dipakai</th></tr>${rows}</table>`,
    [{t:'🔄 Main Lagi', v:1}]);
  setup();
}

/* ---------- Pengaturan tim & kontrol ---------- */
async function setup(){
  S.gid++; S.busy=true; S.paused=false; clearInterval(S.timer);
  $('#pause').classList.add('hidden');
  const nm=i=>S.names[i]||NAMES[i];
  const inputs=[0,1,2,3,4,5,6].map(i=>`<input class="nm-in" value="${nm(i)}" maxlength="18" style="${i>=S.count?'display:none':''}">`).join('<br>');
  await ask(`<h2>🌾 Atur Tim</h2><p>Jumlah tim:
    <select id="cnt" onchange="document.querySelectorAll('.nm-in').forEach((e,i)=>e.style.display=i<this.value?'':'none')">
    ${[2,3,4,5,6,7].map(n=>`<option ${n===S.count?'selected':''}>${n}</option>`).join('')}</select></p>${inputs}`,
    [{t:'Mulai Bermain ▶', c:'go', v:1}]);
  S.count=+$('#cnt').value;
  S.names=[...document.querySelectorAll('.nm-in')].map(e=>e.value.trim());
  S.teams=Array.from({length:S.count},(_,i)=>({
    name:S.names[i]||NAMES[i], color:BRANDS[i].color, icon:BRANDS[i].short, logo:BRANDS[i].logo,
    pos:1, stars:0, cards:5, helps:0, turns:0 }));
  S.cur=0; S.busy=false; $('#dice').textContent='🎲';
  say('Permainan dimulai! Lempar dadu untuk giliran pertama.');
  render();
}

$('#dice').onclick=roll;
document.addEventListener('keydown',e=>{
  if(e.code==='Space' && !e.target.closest('input,select,button') && $('#modal').classList.contains('hidden')){
    e.preventDefault(); roll();
  }
});
$('#btnPause').onclick=()=>{ S.paused=true; $('#pause').classList.remove('hidden'); };
$('#btnResume').onclick=()=>{ S.paused=false; $('#pause').classList.add('hidden'); };
$('#btnRestart').onclick=()=>{
  if(confirm('Mulai ulang permainan dari awal? Semua posisi dan bintang akan di-reset.')) setup();
};

buildBoard();
setup();
