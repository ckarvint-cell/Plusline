const projects={
 yama:{name:'Yama Resort',category:'HOSPITALITY',hero:'yama-43',description:'Dokumentasi Yama Resort memperlihatkan perjalanan pekerjaan di lapangan: struktur, ruang dalam, hingga tampilan fasad. Jelajahi seluruh dokumentasi proses dan detail bangunannya.',photos:[['structure','Pekerjaan struktur'],['progress','Dokumentasi pekerjaan di lapangan'],['detail','Detail koridor'],['yama','Fasad dan area luar']]},
 pondok:{name:'Pondok Indah',category:'RESIDENTIAL',hero:'pondok',description:'Dokumentasi proyek Pondok Indah. Bangunan dan ruang menjadi bagian dari portofolio pekerjaan PLUSLINE.',photos:[['pondok','Dokumentasi fasad']]},
 taman:{name:'Taman Ratu',category:'RESIDENTIAL',hero:'taman',description:'Dokumentasi proyek Taman Ratu, menampilkan bangunan dan pekerjaan yang berlangsung di dalamnya.',photos:[['taman','Dokumentasi bangunan']]},
 interior:{name:'Interior Projects',category:'INTERIOR',hero:'interior',description:'Tata ruang, penyimpanan, dan detail material menjadi bagian dari pengerjaan interior PLUSLINE.',photos:[['interior','Detail kitchen set dan interior']]},
 ciseeng:{name:'Ciseeng',category:'CONSTRUCTION',hero:'ciseeng',description:'Dokumentasi bangunan proyek Ciseeng dalam portofolio PLUSLINE.',photos:[['ciseeng','Dokumentasi bangunan']]}
};
const key=new URLSearchParams(location.search).get('project');const project=projects[key];const root=document.querySelector('#project-content');
if(!project){document.title='Project not found — PLUSLINE';root.innerHTML='<h1>Project not found.</h1><a class="text-link" href="index.html#projects">Explore projects ↗</a>';}else{const heroSrc=key==='yama'?'assets/yama-cover-watermarked.webp':projectGalleries[key][0].src;document.title=project.name+' — PLUSLINE';root.innerHTML=`<a class="text-link" style="max-width:190px" href="index.html#projects">← Selected work</a><h1>${project.name}</h1><p class="section-label">PLUSLINE / ${project.category}</p><div class="detail-hero"><img src="${heroSrc}" alt="${project.name}"></div><section class="detail-overview"><p class="section-label">THE PROJECT</p><div><h2>From structure<br>to detail.</h2><p style="margin-top:25px">${project.description}</p></div></section><div class="gallery-heading"><h2>Project gallery.</h2><p>${projectGalleries[key].length} foto</p></div><div class="detail-gallery">${projectGalleries[key].map(({src},i)=>`<figure><div class="gallery-image"><img src="${src}" loading="lazy" decoding="async" draggable="false" alt="Dokumentasi ${project.name} — foto ${i+1}"></div><figcaption><span>${String(i+1).padStart(2,'0')} / ${projectGalleries[key].length}</span></figcaption></figure>`).join('')}</div><div class="detail-end"><a href="index.html#projects">← All projects</a><a href="index.html#contact">Start a conversation ↗</a></div>`;}

document.querySelectorAll('.detail-gallery img').forEach((image) => {
  const setFormation = () => {
    if (!image.naturalWidth || !image.naturalHeight) return;
    const ratio = image.naturalWidth / image.naturalHeight;
    const figure = image.closest('figure');
    figure.classList.add(ratio > 1.2 ? 'is-landscape' : ratio < 0.82 ? 'is-portrait' : 'is-square');
  };
  if (image.complete) setFormation();
  else image.addEventListener('load', setFormation, { once: true });
});
