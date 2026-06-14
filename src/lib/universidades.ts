/**
 * Universidades públicas de España para el mapa interactivo.
 * Fuente: listado facilitado por el cliente (nombre + ciudad + ubicación + web oficial).
 */
export type Universidad = {
  name: string;
  city: string;
  lat: number;
  lng: number;
  /** Web oficial. */
  url: string;
  description: string;
};

export const UNIVERSIDADES: Universidad[] = [
  { name: "Universidad Complutense de Madrid", city: "Madrid", lat: 40.4505, lng: -3.7267, url: "https://www.ucm.es", description: "La universidad más grande de España" },
  { name: "Universidad de Barcelona", city: "Barcelona", lat: 41.3851, lng: 2.1734, url: "https://www.ub.edu", description: "Una de las más reconocidas de España" },
  { name: "Universidad Autónoma de Madrid", city: "Madrid", lat: 40.5426, lng: -3.6922, url: "https://www.uam.es", description: "Centro de referencia en investigación" },
  { name: "Universidad de Valencia", city: "Valencia", lat: 39.4761, lng: -0.3786, url: "https://www.uv.es", description: "Una de las más antiguas de España" },
  { name: "Universidad de Sevilla", city: "Sevilla", lat: 37.3891, lng: -5.9845, url: "https://www.us.es", description: "Principal universidad de Andalucía" },
  { name: "Universidad de Granada", city: "Granada", lat: 37.1773, lng: -3.5986, url: "https://www.ugr.es", description: "Reconocida por sus programas internacionales" },
  { name: "Universidad del País Vasco", city: "Bilbao", lat: 43.3169, lng: -2.9795, url: "https://www.ehu.eus", description: "Principal universidad vasca" },
  { name: "Universidad de Salamanca", city: "Salamanca", lat: 40.9654, lng: -5.6637, url: "https://www.usal.es", description: "Una de las más antiguas de Europa" },
  { name: "Universidad Politécnica de Madrid", city: "Madrid", lat: 40.3869, lng: -3.6294, url: "https://www.upm.es", description: "Referente en ingeniería y tecnología" },
  { name: "Universidad de Zaragoza", city: "Zaragoza", lat: 41.6488, lng: -0.8891, url: "https://www.unizar.es", description: "Principal universidad aragonesa" },
  { name: "Universidad de Málaga", city: "Málaga", lat: 36.7196, lng: -4.42, url: "https://www.uma.es", description: "Reconocida por su proyección internacional" },
  { name: "Universidad de Santiago de Compostela", city: "Santiago", lat: 42.8782, lng: -8.5448, url: "https://www.usc.es", description: "Principal universidad gallega" },
  { name: "Universidad Carlos III de Madrid", city: "Madrid", lat: 40.3148, lng: -3.7285, url: "https://www.uc3m.es", description: "Especializada en ciencias sociales y jurídicas" },
  { name: "Universidad Pompeu Fabra", city: "Barcelona", lat: 41.3877, lng: 2.192, url: "https://www.upf.edu", description: "Reconocida a nivel europeo" },
  { name: "Universidad de Alicante", city: "Alicante", lat: 38.3857, lng: -0.5137, url: "https://www.ua.es", description: "Referente en turismo y derecho" },
  { name: "Universitat Autònoma de Barcelona (UAB)", city: "Barcelona", lat: 41.5009, lng: 2.1091, url: "https://www.uab.cat", description: "Referente europeo en investigación, biociencias y ciencias de la salud." },
  { name: "Universitat Politècnica de Catalunya (UPC)", city: "Barcelona", lat: 41.3878, lng: 2.1124, url: "https://www.upc.edu", description: "Líder indiscutible en ingenierías, arquitectura y tecnología de vanguardia." },
  { name: "Universitat Politècnica de València (UPV)", city: "Valencia", lat: 39.4824, lng: -0.3472, url: "https://www.upv.es", description: "Excelencia técnica con fuerte enfoque en innovación e internacionalización." },
  { name: "Universidad Rey Juan Carlos (URJC)", city: "Madrid", lat: 40.3446, lng: -3.8677, url: "https://www.urjc.es", description: "Gran oferta multidisciplinar y enfoques prácticos en sus modernos campus." },
  { name: "Universidad de Alcalá (UAH)", city: "Alcalá de Henares", lat: 40.4818, lng: -3.3635, url: "https://www.uah.es", description: "Patrimonio de la Humanidad, destacada en humanidades, salud y ciencias." },
  { name: "Universidad de Valladolid (UVa)", city: "Valladolid", lat: 41.6528, lng: -4.7286, url: "https://www.uva.es", description: "Institución histórica con alto prestigio en letras, ciencias y medicina." },
  { name: "Universidad de Oviedo (UniOvi)", city: "Oviedo", lat: 43.3618, lng: -5.8481, url: "https://www.uniovi.es", description: "Única universidad pública de Asturias, motor en ciencias e ingenierías." },
  { name: "Universidad de Murcia (UMU)", city: "Murcia", lat: 37.9837, lng: -1.127, url: "https://www.um.es", description: "Gran campus de vocación internacional, destacada en ciencias biológicas y veterinaria." },
  { name: "Universidad de Las Palmas de Gran Canaria (ULPGC)", city: "Las Palmas", lat: 28.1025, lng: -15.4128, url: "https://www.ulpgc.es", description: "Especializada en ciencias del mar, turismo y tecnologías aplicadas." },
  { name: "Universidad de La Laguna (ULL)", city: "La Laguna", lat: 28.4864, lng: -16.3159, url: "https://www.ull.es", description: "Histórica institución canaria con fuerte impacto en astrofísica y ciencias experimentales." },
  { name: "Universitat de les Illes Balears (UIB)", city: "Palma", lat: 39.6419, lng: 2.6457, url: "https://www.uib.es", description: "Referente internacional en investigación turística, medio ambiente y biotecnología." },
  { name: "Universidad de Extremadura (UEx)", city: "Badajoz", lat: 38.8794, lng: -6.9706, url: "https://www.unex.es", description: "Destacada en ciencias agrarias, sostenibilidad y desarrollo tecnológico." },
  { name: "Universidad de Cantabria (UC)", city: "Santander", lat: 43.4705, lng: -3.7978, url: "https://web.unican.es", description: "Alta calidad investigadora, vinculada estrechamente a la física y la ingeniería." },
  { name: "Universidad de Vigo (UVigo)", city: "Vigo", lat: 42.1704, lng: -8.6882, url: "https://www.uvigo.gal", description: "Institución líder en investigación marina, ingeniería de telecomunicación y biotecnología forestal." },
  { name: "Universidad de Cádiz (UCA)", city: "Cádiz", lat: 36.5271, lng: -6.2886, url: "https://www.uca.es", description: "Líder europea y referente absoluto en estudios marinos, náuticos y ciencias del mar." },
  { name: "Universidad de Córdoba (UCO)", city: "Córdoba", lat: 37.8882, lng: -4.7794, url: "https://www.uco.es", description: "Prestigio internacional en veterinaria, ciencias agrarias y tecnología agroalimentaria." },
  { name: "Universidad de Almería (UAL)", city: "Almería", lat: 36.834, lng: -2.4637, url: "https://www.ual.es", description: "Puntera en investigación agrónoma, energías renovables y medio ambiente." },
  { name: "Universidad de Jaén (UJA)", city: "Jaén", lat: 37.7796, lng: -3.7849, url: "https://www.ujaen.es", description: "Excelencia en tecnologías de la información, ciencias de la tierra e investigación del olivar." },
  { name: "Universidad de Huelva (UHU)", city: "Huelva", lat: 37.2614, lng: -6.9447, url: "https://www.uhu.es", description: "Especializada en ciencias ambientales, química, geología y estudios forestales." },
  { name: "Universitat Jaume I de Castellón (UJI)", city: "Castellón", lat: 39.9929, lng: -0.0621, url: "https://www.uji.es", description: "Pionera en nuevas tecnologías, ciencias de la comunicación e investigación de materiales." },
  { name: "Universidad Miguel Hernández de Elche (UMH)", city: "Elche", lat: 38.2669, lng: -0.6985, url: "https://www.umh.es", description: "Altamente especializada en neurociencias, biotecnología y ciencias de la salud." },
  { name: "Universidad Politécnica de Cartagena (UPCT)", city: "Cartagena", lat: 37.6039, lng: -0.9897, url: "https://www.upct.es", description: "Institución técnica centrada en ingeniería naval, industrial, agronomía y telecomunicaciones." },
  { name: "Universidade da Coruña (UDC)", city: "A Coruña", lat: 43.3713, lng: -8.4197, url: "https://www.udc.es", description: "Sobresaliente en arquitectura, ingeniería civil, naval e informática en Galicia." },
  { name: "Universidad de Castilla-La Mancha (UCLM)", city: "Toledo", lat: 39.8581, lng: -4.0226, url: "https://www.uclm.es", description: "Gran motor regional con fuerte enfoque en ingeniería, humanidades y ciencias sociales." },
  { name: "Universitat Rovira i Virgili (URV)", city: "Tarragona", lat: 41.1189, lng: 1.2445, url: "https://www.urv.cat", description: "Institución clave en química, enología y turismo en el sur de Cataluña." },
  { name: "Universitat de Girona (UdG)", city: "Girona", lat: 41.9818, lng: 2.8238, url: "https://www.udg.edu", description: "Gran proyección internacional en turismo, recursos hídricos e investigación biomédica." },
  { name: "Universitat de Lleida (UdL)", city: "Lleida", lat: 41.6148, lng: 0.6244, url: "https://www.udl.cat", description: "Referente nacional en ingeniería agronómica, sector forestal y ciencias de la salud." },
  { name: "Universidad de León (ULE)", city: "León", lat: 42.5987, lng: -5.5671, url: "https://www.unileon.es", description: "Destacada en ciencias biológicas, veterinaria y ciencias de la actividad física." },
  { name: "Universidad de Burgos (UBU)", city: "Burgos", lat: 42.344, lng: -3.6969, url: "https://www.ubu.es", description: "Fuerte vinculación con el sector industrial, ciencias de la salud y tecnología de alimentos." },
  { name: "Universidad Pública de Navarra (UPNA)", city: "Pamplona", lat: 42.7968, lng: -1.6362, url: "https://www.unavarra.es", description: "Alta calidad en ingenierías, economía, empresa y ciencias de la salud." },
  { name: "Universidad de La Rioja (UR)", city: "Logroño", lat: 42.465, lng: -2.4456, url: "https://www.unirioja.es", description: "Mundialmente famosa por sus estudios e investigación en enología, agricultura y filología." },
];
