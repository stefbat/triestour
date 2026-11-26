(function(){
var LG=document.documentElement.lang||"en",M={"en": ["Pick a date to see when we meet.", "We meet at {0} in Piazza Unità · back around {1}", " · This date is not available", " · Seats left: {0}", "Total: €{0}", " for the whole van", " for {0} guest", " for {0} guests", " · meet {0}, back ~{1}", "Pay now to secure your seats", "Please add your name and a WhatsApp number or email.", "Thank you! We will reply within a few hours.", "WhatsApp is opening with your message ready. Please press Send there.", "Sorry, this date is not available. Please pick another one.", "This date already has bookings, so the private van is not available. Please pick another date.", "Only {0} seat(s) left on this date. Please reduce guests or pick another date.", "Hello Triestour! I’d like to book the 1-day minivan tour."], "it": ["Scegli una data per vedere quando ci incontriamo.", "Ci incontriamo alle {0} in Piazza Unità · rientro verso le {1}", " · Data non disponibile", " · Posti rimasti: {0}", "Totale: €{0}", " per tutto il van", " per {0} ospite", " per {0} ospiti", " · incontro {0}, rientro ~{1}", "Paga ora per bloccare i posti", "Inserisci il tuo nome e un numero WhatsApp o un’email.", "Grazie! Ti risponderemo entro poche ore.", "Si apre WhatsApp con il tuo messaggio pronto. Premi Invia lì.", "Spiacenti, questa data non è disponibile. Scegline un’altra.", "Questa data ha già prenotazioni, quindi il van privato non è disponibile. Scegli un’altra data.", "Restano solo {0} posti per questa data. Riduci gli ospiti o scegli un’altra data.", "Ciao Triestour! Vorrei prenotare il tour in minivan di un giorno."], "de": ["Datum wählen, um die Treffzeit zu sehen.", "Treffpunkt um {0} auf der Piazza Unità · zurück gegen {1}", " · Dieses Datum ist nicht verfügbar", " · Freie Plätze: {0}", "Gesamt: €{0}", " für den ganzen Van", " für {0} Gast", " für {0} Gäste", " · Treffen {0}, zurück ~{1}", "Jetzt bezahlen und Plätze sichern", "Bitte Namen und WhatsApp-Nummer oder E-Mail angeben.", "Danke! Wir antworten innerhalb weniger Stunden.", "WhatsApp öffnet sich mit Ihrer Nachricht. Bitte dort auf Senden drücken.", "Dieses Datum ist leider nicht verfügbar. Bitte wählen Sie ein anderes.", "An diesem Datum gibt es bereits Buchungen, der private Van ist nicht verfügbar. Bitte anderes Datum wählen.", "An diesem Datum sind nur noch {0} Plätze frei. Bitte weniger Gäste oder ein anderes Datum wählen.", "Hallo Triestour! Ich möchte die Minivan-Tagestour buchen."], "sl": ["Izberite datum in poglejte, kdaj se dobimo.", "Dobimo se ob {0} na Piazza Unità · vrnitev okoli {1}", " · Ta datum ni na voljo", " · Prostih mest: {0}", "Skupaj: €{0}", " za celoten kombi", " za {0} gosta", " za {0} gostov", " · zbor {0}, vrnitev ~{1}", "Plačaj zdaj in zagotovi mesta", "Vnesite ime ter številko WhatsApp ali e-pošto.", "Hvala! Odgovorili bomo v nekaj urah.", "WhatsApp se odpira z vašim sporočilom. Tam pritisnite Pošlji.", "Žal ta datum ni na voljo. Izberite drugega.", "Ta datum že ima rezervacije, zato zasebni kombi ni na voljo. Izberite drug datum.", "Na ta datum je ostalo le še {0} mest. Zmanjšajte število gostov ali izberite drug datum.", "Pozdravljeni! Rezervirati želim enodnevni izlet z minibusom."]};
function t(k){var s=(M[LG]||M.en)[k];for(var i=1;i<arguments.length;i++)s=s.replace("{"+(i-1)+"}",arguments[i]);return s}

var nv=document.querySelector("nav");
if(nv){var tk=false,upd2=function(){var y=window.scrollY;if(y>80)nv.classList.add("scrolled");else if(y<20)nv.classList.remove("scrolled");tk=false};
 window.addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(upd2)}},{passive:true});upd2()}
var $=function(i){return document.getElementById(i)};
var wa="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(t(16));
["waLink","waBar","waFoot"].forEach(function(id){var e=$(id);if(e)e.href=wa});
var m=$("mailLink");if(m)m.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Triestour 1-day tour");
function ssinfo(ds){if(!ds)return null;var p=ds.split("-").map(Number),y=p[0],mo=p[1]-1,dd=p[2],R=Math.PI/180;
 var N=Math.floor((Date.UTC(y,mo,dd)-Date.UTC(y,0,0))/864e5),g=2*Math.PI/365*(N-1),lat=45.65*R,lon=13.77;
 var eq=229.18*(0.000075+0.001868*Math.cos(g)-0.032077*Math.sin(g)-0.014615*Math.cos(2*g)-0.040849*Math.sin(2*g));
 var de=0.006918-0.399912*Math.cos(g)+0.070257*Math.sin(g)-0.006758*Math.cos(2*g)+0.000907*Math.sin(2*g)-0.002697*Math.cos(3*g)+0.00148*Math.sin(3*g);
 var ha=Math.acos(Math.cos(90.833*R)/(Math.cos(lat)*Math.cos(de))-Math.tan(lat)*Math.tan(de))/R;
 var mins=Math.round((720-4*(lon-ha)-eq)/5)*5,f=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Rome",hour:"2-digit",minute:"2-digit"});
 var t=function(x){return f.format(new Date(Date.UTC(y,mo,dd)+x*6e4))};return{dep:t(mins-480),end:t(mins+30)}}
function left(ds){if(!ds)return null;if(CLOSED.indexOf(ds)>-1)return 0;return Math.max(0,CAPACITY-(BOOKED[ds]||0))}
function seats(ds){var l=left(ds);if(l===null)return"";if(l===0)return t(2);if(l<=3)return t(3,l);return""}
var today=new Date().toISOString().slice(0,10);
["d1","date"].forEach(function(id){var e=$(id);if(e)e.min=today});
var d1=$("d1");
if(d1){d1.addEventListener("change",function(){var i=ssinfo(d1.value);$("r1").textContent=i?t(1,i.dep,i.end)+seats(d1.value):t(0)});
 $("b1").addEventListener("click",function(){location.href="contact.html"+(d1.value?"?date="+d1.value:"")})}
var form=$("leadForm");
if(form){
 var qt=$("quote"),msg=$("msg"),qd=new URLSearchParams(location.search).get("date");if(qd)$("date").value=qd;
 var upd=function(){var g=+$("guests").value,pv=$("type").value==="private",ds=$("date").value,i=ssinfo(ds);
  qt.textContent=t(4,pv?PRIVATE_PRICE:g*PRICE)+(pv?t(5):g>1?t(7,g):t(6,g))+(i?t(8,i.dep,i.end):"")+seats(ds)};
 ["date","guests","type"].forEach(function(id){$(id).addEventListener("change",upd)});
 var tp=new URLSearchParams(location.search).get("type");if(tp)$("type").value=tp;upd();
 var pay=function(pv){var u=pv?PAY_LINK_PRIVATE:PAY_LINK_SHARED;if(!u)return;var a=document.createElement("a");a.className="btn";a.href=u;a.target="_blank";a.rel="noopener";a.textContent=t(9);a.style.marginTop="14px";msg.appendChild(document.createElement("br"));msg.appendChild(a)};
 form.addEventListener("submit",function(e){e.preventDefault();msg.className="msg";var d=new FormData(form);
  if(!d.get("name").trim()||!d.get("contact").trim()){msg.className="msg err";msg.textContent=t(10);return}
  if(d.get("_gotcha"))return;
  var g=+d.get("guests"),pv=d.get("type")==="private",l=left(d.get("date"));
  if(l!==null&&(l===0||(!pv&&g>l)||(pv&&l<CAPACITY))){msg.className="msg err";msg.textContent=l===0?t(13):pv?t(14):t(15,l);return}
  var body="Name: "+d.get("name")+"\nContact: "+d.get("contact")+"\nDate: "+d.get("date")+"\nGuests: "+g+"\nType: "+d.get("type")+"\n"+qt.textContent+"\n\n"+d.get("message");
  d.set("summary",body);
  fetch(FORM_ENDPOINT,{method:"POST",body:d,headers:{Accept:"application/json"}})
   .then(function(r){if(!r.ok)throw 0;form.reset();upd();msg.className="msg ok";msg.textContent=t(11);pay(pv)})
   .catch(function(){window.open("https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(body),"_blank");msg.className="msg ok";msg.textContent=t(12);pay(pv)})})}
var rv=$("revs");if(rv&&REVIEWS.length){rv.hidden=false;REVIEWS.forEach(function(x){var d=document.createElement("div"),b=document.createElement("b");d.textContent="“"+x.q+"”";b.textContent=x.n;d.appendChild(b);$("revlist").appendChild(d)})}
if(GA_ID){var s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",GA_ID);document.addEventListener("click",function(e){var a=e.target.closest("a,button");if(a)gtag("event","cta_click",{label:(a.id||a.textContent||"").trim().slice(0,40)})})}
})();
