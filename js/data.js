// Datos de los lugares (editables). Fuente: Google Maps, nov. 2026.
const IMG={
 "hero": "images/hero.jpg",
 "caminito": "images/caminito.jpg",
 "sthero": "images/sthero.jpg",
 "plaza": "images/plaza.jpg",
 "bombonera": "images/bombonera.jpg",
 "quinquela": "images/quinquela.jpg",
 "proa": "images/proa.jpg",
 "zanjon": "images/zanjon.jpg",
 "paraiso": "images/paraiso.jpg",
 "poesia": "images/poesia.jpg",
 "federal": "images/federal.jpg",
 "mercado": "images/mercado.jpg",
 "feria": "images/feria.jpg",
 "artesania": "images/artesania.jpg",
 "barsur": "images/barsur.jpg",
 "viejo": "images/viejo.jpg",
 "chavin": "images/chavin.jpg",
 "usina": "images/usina.jpg",
 "boquense": "images/boquense.jpg",
 "g21": "images/g21.jpg",
 "g31": "images/g31.jpg",
 "g42": "images/g42.jpg",
 "g44": "images/g44.jpg",
 "g41": "images/g41.jpg",
 "g52": "images/g52.jpg",
 "g73": "images/g73.jpg",
 "g13": "images/g13.jpg",
 "g9": "images/g9.jpg",
 "g5": "images/g5.jpg",
 "g71": "images/g71.jpg",
 "g27": "images/g27.jpg",
 "g1": "images/g1.jpg",
 "g39": "images/g39.jpg",
 "g2": "images/g2.jpg",
 "g37": "images/g37.jpg",
 "g0": "images/g0.jpg"
};
const P=[
 {
  "n": "Caminito",
  "z": "cb",
  "c": "Recorridos y lugares",
  "t": "Paseo peatonal",
  "a": "Caminito, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Caminito%2C%20Caminito%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJk5Zj-LA0o5URFK_uteT36Z4",
  "d": "Calle peatonal de La Boca famosa por sus casas de chapa pintadas de colores. Hay artistas callejeros, tango, ferias de artesanías y restaurantes.",
  "f": "Sí",
  "h": "Abierto todo el día",
  "g": 4.5,
  "lat": -34.639326,
  "lon": -58.362681,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Caminito%2C%20Caminito%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJk5Zj-LA0o5URFK_uteT36Z4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Caminito%2C%20Caminito%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJk5Zj-LA0o5URFK_uteT36Z4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Caminito%2C%20Caminito%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJk5Zj-LA0o5URFK_uteT36Z4&travelmode=transit"
  ],
  "i": "caminito"
 },
 {
  "n": "La Bombonera (Estadio Alberto J. Armando)",
  "z": "cb",
  "c": "Recorridos y lugares",
  "t": "Estadio",
  "a": "Brandsen 805, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=La%20Bombonera%20%28Estadio%20Alberto%20J.%20Armando%29%2C%20Brandsen%20805%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJc1RekrY0o5URDbRYiHSypRw",
  "d": "El estadio de Boca Juniors, el gran símbolo del barrio. Se puede visitar con tour guiado junto al museo del club.",
  "f": "Sí",
  "h": "Consultar visitas guiadas",
  "g": 4.7,
  "lat": -34.635611,
  "lon": -58.364756,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=La%20Bombonera%20%28Estadio%20Alberto%20J.%20Armando%29%2C%20Brandsen%20805%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJc1RekrY0o5URDbRYiHSypRw&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=La%20Bombonera%20%28Estadio%20Alberto%20J.%20Armando%29%2C%20Brandsen%20805%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJc1RekrY0o5URDbRYiHSypRw&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=La%20Bombonera%20%28Estadio%20Alberto%20J.%20Armando%29%2C%20Brandsen%20805%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJc1RekrY0o5URDbRYiHSypRw&travelmode=transit"
  ],
  "i": "bombonera"
 },
 {
  "n": "Puente Transbordador Nicolás Avellaneda",
  "z": "cb",
  "c": "Recorridos y lugares",
  "t": "Monumento histórico",
  "a": "Puente Nicolás Avellaneda, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Puente%20Transbordador%20Nicol%C3%A1s%20Avellaneda%2C%20Puente%20Nicol%C3%A1s%20Avellaneda%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJZUJHEco1o5URGS4LFRr0iUc",
  "d": "Antigua estructura de hierro inaugurada en 1914, Monumento Histórico Nacional. Es una postal clásica de La Boca; conviene ir de día.",
  "f": "No",
  "h": "Abierto todo el día",
  "g": 4.5,
  "lat": -34.638379,
  "lon": -58.356258,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Puente%20Transbordador%20Nicol%C3%A1s%20Avellaneda%2C%20Puente%20Nicol%C3%A1s%20Avellaneda%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJZUJHEco1o5URGS4LFRr0iUc&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Puente%20Transbordador%20Nicol%C3%A1s%20Avellaneda%2C%20Puente%20Nicol%C3%A1s%20Avellaneda%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJZUJHEco1o5URGS4LFRr0iUc&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Puente%20Transbordador%20Nicol%C3%A1s%20Avellaneda%2C%20Puente%20Nicol%C3%A1s%20Avellaneda%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJZUJHEco1o5URGS4LFRr0iUc&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Plaza Dorrego",
  "z": "st",
  "c": "Recorridos y lugares",
  "t": "Plaza",
  "a": "Humberto 1º 400, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Plaza%20Dorrego%2C%20Humberto%201%C2%BA%20400%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJifSktCzLvJURsTMaMFXLu3E",
  "d": "La plaza más tradicional de San Telmo, rodeada de bares y cafés. Los domingos se llena de puestos de antigüedades y bailarines de tango.",
  "f": "Sí",
  "h": "Abierta todo el día",
  "g": 4.4,
  "lat": -34.620491,
  "lon": -58.371748,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Plaza%20Dorrego%2C%20Humberto%201%C2%BA%20400%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJifSktCzLvJURsTMaMFXLu3E&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Plaza%20Dorrego%2C%20Humberto%201%C2%BA%20400%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJifSktCzLvJURsTMaMFXLu3E&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Plaza%20Dorrego%2C%20Humberto%201%C2%BA%20400%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJifSktCzLvJURsTMaMFXLu3E&travelmode=transit"
  ],
  "i": "plaza"
 },
 {
  "n": "Parque Lezama",
  "z": "st",
  "c": "Recorridos y lugares",
  "t": "Parque",
  "a": "Calle Brasil, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Parque%20Lezama%2C%20Calle%20Brasil%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJlfwm7sw0o5URYMQbNmnr3i4",
  "d": "Parque amplio y con sombra, con juegos para chicos, al lado del Museo Histórico Nacional. Los fines de semana tiene feria.",
  "f": "No",
  "h": "Abierto todo el día",
  "g": 4.5,
  "lat": -34.627145,
  "lon": -58.370162,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Parque%20Lezama%2C%20Calle%20Brasil%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJlfwm7sw0o5URYMQbNmnr3i4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Parque%20Lezama%2C%20Calle%20Brasil%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJlfwm7sw0o5URYMQbNmnr3i4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Parque%20Lezama%2C%20Calle%20Brasil%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJlfwm7sw0o5URYMQbNmnr3i4&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Museo de la Pasión Boquense",
  "z": "cb",
  "c": "Museos y centros culturales",
  "t": "Museo de fútbol",
  "a": "Brandsen 805, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Museo%20de%20la%20Pasi%C3%B3n%20Boquense%2C%20Brandsen%20805%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJo89qx7Y0o5URLNdFe9TTbt4",
  "d": "Museo de Boca Juniors con trofeos y recuerdos del club, al lado de La Bombonera. Se puede combinar con la visita al estadio.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.6,
  "lat": -34.636568,
  "lon": -58.364781,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20de%20la%20Pasi%C3%B3n%20Boquense%2C%20Brandsen%20805%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJo89qx7Y0o5URLNdFe9TTbt4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20de%20la%20Pasi%C3%B3n%20Boquense%2C%20Brandsen%20805%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJo89qx7Y0o5URLNdFe9TTbt4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20de%20la%20Pasi%C3%B3n%20Boquense%2C%20Brandsen%20805%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJo89qx7Y0o5URLNdFe9TTbt4&travelmode=transit"
  ],
  "i": "boquense"
 },
 {
  "n": "Museo de Bellas Artes de La Boca Benito Quinquela Martín",
  "z": "cb",
  "c": "Museos y centros culturales",
  "t": "Museo de arte",
  "a": "Av. Don Pedro de Mendoza 1835, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Museo%20de%20Bellas%20Artes%20de%20La%20Boca%20Benito%20Quinquela%20Mart%C3%ADn%2C%20Av.%20Don%20Pedro%20de%20Mendoza%201835%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJ35_VZrA0o5UR7vME8-S-Tn4",
  "d": "Muestra la obra y la casa del pintor Quinquela Martín, que retrató la vida del puerto de La Boca. Tiene arte argentino del siglo XX.",
  "f": "Sí",
  "h": "Cerrado los martes",
  "g": 4.7,
  "lat": -34.639001,
  "lon": -58.360992,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20de%20Bellas%20Artes%20de%20La%20Boca%20Benito%20Quinquela%20Mart%C3%ADn%2C%20Av.%20Don%20Pedro%20de%20Mendoza%201835%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJ35_VZrA0o5UR7vME8-S-Tn4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20de%20Bellas%20Artes%20de%20La%20Boca%20Benito%20Quinquela%20Mart%C3%ADn%2C%20Av.%20Don%20Pedro%20de%20Mendoza%201835%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJ35_VZrA0o5UR7vME8-S-Tn4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20de%20Bellas%20Artes%20de%20La%20Boca%20Benito%20Quinquela%20Mart%C3%ADn%2C%20Av.%20Don%20Pedro%20de%20Mendoza%201835%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJ35_VZrA0o5UR7vME8-S-Tn4&travelmode=transit"
  ],
  "i": "quinquela"
 },
 {
  "n": "Fundación Proa",
  "z": "cb",
  "c": "Museos y centros culturales",
  "t": "Fundación de arte",
  "a": "Av. Don Pedro de Mendoza 1929, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Fundaci%C3%B3n%20Proa%2C%20Av.%20Don%20Pedro%20de%20Mendoza%201929%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJqVGUXbA0o5URAf0ghECjGg8",
  "d": "Centro de arte contemporáneo en un edificio renovado frente al Riachuelo. Tiene un café con muy buena vista.",
  "f": "Sí",
  "h": "Cerrado lunes y martes",
  "g": 4.6,
  "lat": -34.639602,
  "lon": -58.361869,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Fundaci%C3%B3n%20Proa%2C%20Av.%20Don%20Pedro%20de%20Mendoza%201929%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJqVGUXbA0o5URAf0ghECjGg8&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Fundaci%C3%B3n%20Proa%2C%20Av.%20Don%20Pedro%20de%20Mendoza%201929%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJqVGUXbA0o5URAf0ghECjGg8&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Fundaci%C3%B3n%20Proa%2C%20Av.%20Don%20Pedro%20de%20Mendoza%201929%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJqVGUXbA0o5URAf0ghECjGg8&travelmode=transit"
  ],
  "i": "proa"
 },
 {
  "n": "MARCO - Museo de Arte Contemporáneo de La Boca",
  "z": "cb",
  "c": "Museos y centros culturales",
  "t": "Museo de arte contemporáneo",
  "a": "Av. Almirante Brown 1031, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=MARCO%20-%20Museo%20de%20Arte%20Contempor%C3%A1neo%20de%20La%20Boca%2C%20Av.%20Almirante%20Brown%201031%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJdZV4Wcc0o5URDj4D5uyLlS0",
  "d": "Museo de arte contemporáneo con muestras de artistas locales. Es chico y abre de jueves a domingo.",
  "f": "No",
  "h": "Jueves a domingo",
  "g": 4.5,
  "lat": -34.634007,
  "lon": -58.35996,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=MARCO%20-%20Museo%20de%20Arte%20Contempor%C3%A1neo%20de%20La%20Boca%2C%20Av.%20Almirante%20Brown%201031%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJdZV4Wcc0o5URDj4D5uyLlS0&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=MARCO%20-%20Museo%20de%20Arte%20Contempor%C3%A1neo%20de%20La%20Boca%2C%20Av.%20Almirante%20Brown%201031%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJdZV4Wcc0o5URDj4D5uyLlS0&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=MARCO%20-%20Museo%20de%20Arte%20Contempor%C3%A1neo%20de%20La%20Boca%2C%20Av.%20Almirante%20Brown%201031%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJdZV4Wcc0o5URDj4D5uyLlS0&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Usina del Arte",
  "z": "cb",
  "c": "Museos y centros culturales",
  "t": "Centro cultural",
  "a": "Agustín R. Caffarena 1, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Usina%20del%20Arte%2C%20Agust%C3%ADn%20R.%20Caffarena%201%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJB-HjP8c0o5URweWKCQpdrg4",
  "d": "Centro cultural con conciertos y muestras en un edificio histórico. Conviene mirar la programación y volver en taxi de noche.",
  "f": "No",
  "h": "Consultar programación",
  "g": 4.6,
  "lat": -34.628562,
  "lon": -58.356958,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Usina%20del%20Arte%2C%20Agust%C3%ADn%20R.%20Caffarena%201%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJB-HjP8c0o5URweWKCQpdrg4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Usina%20del%20Arte%2C%20Agust%C3%ADn%20R.%20Caffarena%201%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJB-HjP8c0o5URweWKCQpdrg4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Usina%20del%20Arte%2C%20Agust%C3%ADn%20R.%20Caffarena%201%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJB-HjP8c0o5URweWKCQpdrg4&travelmode=transit"
  ],
  "i": "usina"
 },
 {
  "n": "El Zanjón de Granados",
  "z": "st",
  "c": "Museos y centros culturales",
  "t": "Museo de historia",
  "a": "Defensa 755, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=El%20Zanj%C3%B3n%20de%20Granados%2C%20Defensa%20755%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJxWZS0yrLvJUREyl88eDpbeM",
  "d": "Casa restaurada con túneles subterráneos que muestran los orígenes de la ciudad. Solo se visita con tour guiado.",
  "f": "Sí",
  "h": "Todos los días",
  "g": 4.8,
  "lat": -34.616606,
  "lon": -58.372068,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Zanj%C3%B3n%20de%20Granados%2C%20Defensa%20755%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJxWZS0yrLvJUREyl88eDpbeM&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Zanj%C3%B3n%20de%20Granados%2C%20Defensa%20755%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJxWZS0yrLvJUREyl88eDpbeM&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Zanj%C3%B3n%20de%20Granados%2C%20Defensa%20755%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJxWZS0yrLvJUREyl88eDpbeM&travelmode=transit"
  ],
  "i": "zanjon"
 },
 {
  "n": "Museo Moderno",
  "z": "st",
  "c": "Museos y centros culturales",
  "t": "Museo de arte moderno",
  "a": "Av. San Juan 350, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Museo%20Moderno%2C%20Av.%20San%20Juan%20350%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJhTzp3tI0o5URtSE1HNW4CdI",
  "d": "Museo de arte moderno y contemporáneo con exposiciones que rotan y colección propia. Tiene café y tienda de regalos.",
  "f": "No",
  "h": "Cerrado los martes",
  "g": 4.5,
  "lat": -34.622048,
  "lon": -58.370542,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20Moderno%2C%20Av.%20San%20Juan%20350%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJhTzp3tI0o5URtSE1HNW4CdI&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20Moderno%2C%20Av.%20San%20Juan%20350%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJhTzp3tI0o5URtSE1HNW4CdI&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20Moderno%2C%20Av.%20San%20Juan%20350%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJhTzp3tI0o5URtSE1HNW4CdI&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "MACBA",
  "z": "st",
  "c": "Museos y centros culturales",
  "t": "Museo de arte contemporáneo",
  "a": "Av. San Juan 328, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=MACBA%2C%20Av.%20San%20Juan%20328%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJD22T4NI0o5URUrud9LZoV-E",
  "d": "Museo chico de arte contemporáneo en un edificio interesante. Es una visita corta, ideal para combinar con San Telmo.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.2,
  "lat": -34.621902,
  "lon": -58.370211,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=MACBA%2C%20Av.%20San%20Juan%20328%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJD22T4NI0o5URUrud9LZoV-E&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=MACBA%2C%20Av.%20San%20Juan%20328%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJD22T4NI0o5URUrud9LZoV-E&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=MACBA%2C%20Av.%20San%20Juan%20328%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJD22T4NI0o5URUrud9LZoV-E&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Museo Histórico Nacional",
  "z": "st",
  "c": "Museos y centros culturales",
  "t": "Museo de historia",
  "a": "Defensa 1600, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Museo%20Hist%C3%B3rico%20Nacional%2C%20Defensa%201600%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJNfUyJs00o5URBEEv5fDne6U",
  "d": "Recorre la historia argentina con objetos de próceres como San Martín y Belgrano. Está frente al Parque Lezama.",
  "f": "No",
  "h": "Horario variable (consultar)",
  "g": 4.7,
  "lat": -34.626996,
  "lon": -58.370589,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20Hist%C3%B3rico%20Nacional%2C%20Defensa%201600%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJNfUyJs00o5URBEEv5fDne6U&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20Hist%C3%B3rico%20Nacional%2C%20Defensa%201600%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJNfUyJs00o5URBEEv5fDne6U&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Museo%20Hist%C3%B3rico%20Nacional%2C%20Defensa%201600%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJNfUyJs00o5URBEEv5fDne6U&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "ungallery",
  "z": "cb",
  "c": "Galerías de arte",
  "t": "Galería de arte",
  "a": "Ministro Brin 1335, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=ungallery%2C%20Ministro%20Brin%201335%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJPxIb2rDKvJURLGS0eKIVP8Y",
  "d": "Galería pequeña de La Boca con muestras de arte y un jardín. Abre solo de jueves a sábado por la tarde.",
  "f": "No",
  "h": "Jueves a sábado",
  "g": 4.6,
  "lat": -34.635413,
  "lon": -58.355516,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=ungallery%2C%20Ministro%20Brin%201335%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJPxIb2rDKvJURLGS0eKIVP8Y&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=ungallery%2C%20Ministro%20Brin%201335%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJPxIb2rDKvJURLGS0eKIVP8Y&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=ungallery%2C%20Ministro%20Brin%201335%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJPxIb2rDKvJURLGS0eKIVP8Y&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Galería de Arte Mercedes Giachetti",
  "z": "st",
  "c": "Galerías de arte",
  "t": "Galería de arte",
  "a": "Defensa 718, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Galer%C3%ADa%20de%20Arte%20Mercedes%20Giachetti%2C%20Defensa%20718%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJoc8yM9U0o5URHulZmZuj5_g",
  "d": "Galería de dos pisos con obras de varios artistas, todas a la venta. La entrada es libre y abre fines de semana.",
  "f": "No",
  "h": "Sábados y domingos",
  "g": 4.7,
  "lat": -34.616246,
  "lon": -58.37164,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Galer%C3%ADa%20de%20Arte%20Mercedes%20Giachetti%2C%20Defensa%20718%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJoc8yM9U0o5URHulZmZuj5_g&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Galer%C3%ADa%20de%20Arte%20Mercedes%20Giachetti%2C%20Defensa%20718%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJoc8yM9U0o5URHulZmZuj5_g&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Galer%C3%ADa%20de%20Arte%20Mercedes%20Giachetti%2C%20Defensa%20718%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJoc8yM9U0o5URHulZmZuj5_g&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "QUORUM Art Shop",
  "z": "st",
  "c": "Galerías de arte",
  "t": "Tienda de arte",
  "a": "Defensa 894, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=QUORUM%20Art%20Shop%2C%20Defensa%20894%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJHR4WtdQ0o5URgTXnLr016hI",
  "d": "Tienda y galería con arte original, láminas y objetos de diseño. Hay opciones para todos los presupuestos.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.7,
  "lat": -34.618329,
  "lon": -58.3716,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=QUORUM%20Art%20Shop%2C%20Defensa%20894%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJHR4WtdQ0o5URgTXnLr016hI&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=QUORUM%20Art%20Shop%2C%20Defensa%20894%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJHR4WtdQ0o5URgTXnLr016hI&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=QUORUM%20Art%20Shop%2C%20Defensa%20894%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJHR4WtdQ0o5URgTXnLr016hI&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Karina Chavin Art Space",
  "z": "st",
  "c": "Galerías de arte",
  "t": "Taller y galería",
  "a": "Defensa 1012, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Karina%20Chavin%20Art%20Space%2C%20Defensa%201012%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJIeh0TNM0o5URhHIVpOyNJu0",
  "d": "Taller de la artista, que pinta rostros femeninos y gatos. Vende cuadros, láminas, pañuelos y accesorios.",
  "f": "Sí",
  "h": "Todos los días",
  "g": 4.8,
  "lat": -34.619658,
  "lon": -58.371449,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Karina%20Chavin%20Art%20Space%2C%20Defensa%201012%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJIeh0TNM0o5URhHIVpOyNJu0&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Karina%20Chavin%20Art%20Space%2C%20Defensa%201012%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJIeh0TNM0o5URhHIVpOyNJu0&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Karina%20Chavin%20Art%20Space%2C%20Defensa%201012%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJIeh0TNM0o5URhHIVpOyNJu0&travelmode=transit"
  ],
  "i": "chavin"
 },
 {
  "n": "Calvaresi Contemporáneo",
  "z": "st",
  "c": "Galerías de arte",
  "t": "Galería de arte",
  "a": "Defensa 1136, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Calvaresi%20Contempor%C3%A1neo%2C%20Defensa%201136%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJhT3WM9M0o5UR0HWgTGGqHlQ",
  "d": "Galería de tres niveles con arte argentino contemporáneo y muebles únicos. Abre de martes a domingo.",
  "f": "No",
  "h": "Cerrado los lunes",
  "g": 4.8,
  "lat": -34.621114,
  "lon": -58.371337,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Calvaresi%20Contempor%C3%A1neo%2C%20Defensa%201136%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJhT3WM9M0o5UR0HWgTGGqHlQ&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Calvaresi%20Contempor%C3%A1neo%2C%20Defensa%201136%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJhT3WM9M0o5UR0HWgTGGqHlQ&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Calvaresi%20Contempor%C3%A1neo%2C%20Defensa%201136%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJhT3WM9M0o5UR0HWgTGGqHlQ&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Galería de Arte Mada",
  "z": "st",
  "c": "Galerías de arte",
  "t": "Galería de arte",
  "a": "Bolívar 883, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Galer%C3%ADa%20de%20Arte%20Mada%2C%20Bol%C3%ADvar%20883%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJQe0h0afLvJURKM1iodUlRcg",
  "d": "Espacio cálido con obras de distintos artistas, a veces con los artistas presentes. Abre jueves, sábados y domingos.",
  "f": "No",
  "h": "Jueves, sábados y domingos",
  "g": 5,
  "lat": -34.61822,
  "lon": -58.373102,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Galer%C3%ADa%20de%20Arte%20Mada%2C%20Bol%C3%ADvar%20883%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJQe0h0afLvJURKM1iodUlRcg&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Galer%C3%ADa%20de%20Arte%20Mada%2C%20Bol%C3%ADvar%20883%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJQe0h0afLvJURKM1iodUlRcg&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Galer%C3%ADa%20de%20Arte%20Mada%2C%20Bol%C3%ADvar%20883%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJQe0h0afLvJURKM1iodUlRcg&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Caminito Tango Show",
  "z": "cb",
  "c": "Tango y música",
  "t": "Show de tango con comida",
  "a": "Dr. del Valle Iberlucea 1151, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Caminito%20Tango%20Show%2C%20Dr.%20del%20Valle%20Iberlucea%201151%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJoWcW5rA0o5URg7iLLARY5do",
  "d": "Restaurante con espectáculo de tango en vivo, cerca de Caminito. Se puede comer mientras miran el show.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.6,
  "lat": -34.638343,
  "lon": -58.362596,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Caminito%20Tango%20Show%2C%20Dr.%20del%20Valle%20Iberlucea%201151%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJoWcW5rA0o5URg7iLLARY5do&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Caminito%20Tango%20Show%2C%20Dr.%20del%20Valle%20Iberlucea%201151%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJoWcW5rA0o5URg7iLLARY5do&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Caminito%20Tango%20Show%2C%20Dr.%20del%20Valle%20Iberlucea%201151%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJoWcW5rA0o5URg7iLLARY5do&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Argento La Vía",
  "z": "cb",
  "c": "Tango y música",
  "t": "Restaurante con show",
  "a": "Gral. José Garibaldi 1471, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Argento%20La%20V%C3%ADa%2C%20Gral.%20Jos%C3%A9%20Garibaldi%201471%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJe123hHA1o5URLI5VdZA_Oo8",
  "d": "Parrilla con tango y folklore en vivo, y mesas afuera sobre una calle de La Boca. Muy elogiada por su carne.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.7,
  "lat": -34.639722,
  "lon": -58.363509,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Argento%20La%20V%C3%ADa%2C%20Gral.%20Jos%C3%A9%20Garibaldi%201471%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJe123hHA1o5URLI5VdZA_Oo8&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Argento%20La%20V%C3%ADa%2C%20Gral.%20Jos%C3%A9%20Garibaldi%201471%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJe123hHA1o5URLI5VdZA_Oo8&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Argento%20La%20V%C3%ADa%2C%20Gral.%20Jos%C3%A9%20Garibaldi%201471%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJe123hHA1o5URLI5VdZA_Oo8&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Bar Sur",
  "z": "st",
  "c": "Tango y música",
  "t": "Show de tango con cena",
  "a": "Estados Unidos 299, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Bar%20Sur%2C%20Estados%20Unidos%20299%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJl4iOl9Q0o5URefZqJSEPbGA",
  "d": "Show íntimo de tango con bailarines, cantantes y orquesta en vivo. Conviene reservar con anticipación.",
  "f": "Sí",
  "h": "Cerrado los domingos",
  "g": 4.8,
  "lat": -34.618337,
  "lon": -58.37011,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Bar%20Sur%2C%20Estados%20Unidos%20299%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJl4iOl9Q0o5URefZqJSEPbGA&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Bar%20Sur%2C%20Estados%20Unidos%20299%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJl4iOl9Q0o5URefZqJSEPbGA&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Bar%20Sur%2C%20Estados%20Unidos%20299%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJl4iOl9Q0o5URefZqJSEPbGA&travelmode=transit"
  ],
  "i": "barsur"
 },
 {
  "n": "El Viejo Almacén",
  "z": "st",
  "c": "Tango y música",
  "t": "Show de tango con cena",
  "a": "Av. Independencia 299, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=El%20Viejo%20Almac%C3%A9n%2C%20Av.%20Independencia%20299%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJ2WvO59Q0o5URgwgu8KcMhG4",
  "d": "Cena con show de tango en un edificio histórico de San Telmo. Conviene comprar la entrada antes.",
  "f": "Sí",
  "h": "Todos los días",
  "g": 4.6,
  "lat": -34.616913,
  "lon": -58.369834,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Viejo%20Almac%C3%A9n%2C%20Av.%20Independencia%20299%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ2WvO59Q0o5URgwgu8KcMhG4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Viejo%20Almac%C3%A9n%2C%20Av.%20Independencia%20299%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ2WvO59Q0o5URgwgu8KcMhG4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Viejo%20Almac%C3%A9n%2C%20Av.%20Independencia%20299%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ2WvO59Q0o5URgwgu8KcMhG4&travelmode=transit"
  ],
  "i": "viejo"
 },
 {
  "n": "Taconeando, La Vereda de Beba",
  "z": "st",
  "c": "Tango y música",
  "t": "Clases y milonga",
  "a": "Balcarce 725, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Taconeando%2C%20La%20Vereda%20de%20Beba%2C%20Balcarce%20725%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJNfwIItU0o5URhXjgYLCDkmU",
  "d": "Lugar para tomar clases de tango y ver shows tradicionales. Ideal para bailar entre gente local.",
  "f": "No",
  "h": "Consultar horarios",
  "g": 4.3,
  "lat": -34.616299,
  "lon": -58.370448,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Taconeando%2C%20La%20Vereda%20de%20Beba%2C%20Balcarce%20725%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJNfwIItU0o5URhXjgYLCDkmU&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Taconeando%2C%20La%20Vereda%20de%20Beba%2C%20Balcarce%20725%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJNfwIItU0o5URhXjgYLCDkmU&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Taconeando%2C%20La%20Vereda%20de%20Beba%2C%20Balcarce%20725%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJNfwIItU0o5URhXjgYLCDkmU&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Torquato Tasso",
  "z": "st",
  "c": "Tango y música",
  "t": "Música en vivo",
  "a": "Defensa 1575, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Torquato%20Tasso%2C%20Defensa%201575%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJd5iDL800o5UR-o-TdQscy7o",
  "d": "Sala de música en vivo con buena acústica, donde los porteños van a ver tango. La programación cambia cada noche.",
  "f": "No",
  "h": "Cerrado los domingos",
  "g": 4.5,
  "lat": -34.626167,
  "lon": -58.371269,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Torquato%20Tasso%2C%20Defensa%201575%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJd5iDL800o5UR-o-TdQscy7o&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Torquato%20Tasso%2C%20Defensa%201575%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJd5iDL800o5UR-o-TdQscy7o&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Torquato%20Tasso%2C%20Defensa%201575%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJd5iDL800o5UR-o-TdQscy7o&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "El Gran Paraíso",
  "z": "cb",
  "c": "Dónde comer",
  "t": "Restaurante argentino",
  "a": "Gral. José Garibaldi 1428, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=El%20Gran%20Para%C3%ADso%2C%20Gral.%20Jos%C3%A9%20Garibaldi%201428%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJW1sjB7E0o5URrtSQ8vPa_7s",
  "d": "Restaurante con patio y terraza a pasos de Caminito. Tiene carne, quesos y opciones sin gluten.",
  "f": "Sí",
  "h": "Todos los días",
  "g": 4.7,
  "lat": -34.639454,
  "lon": -58.36343,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Gran%20Para%C3%ADso%2C%20Gral.%20Jos%C3%A9%20Garibaldi%201428%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJW1sjB7E0o5URrtSQ8vPa_7s&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Gran%20Para%C3%ADso%2C%20Gral.%20Jos%C3%A9%20Garibaldi%201428%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJW1sjB7E0o5URrtSQ8vPa_7s&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Gran%20Para%C3%ADso%2C%20Gral.%20Jos%C3%A9%20Garibaldi%201428%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJW1sjB7E0o5URrtSQ8vPa_7s&travelmode=transit"
  ],
  "i": "paraiso"
 },
 {
  "n": "Caminito al Toque",
  "z": "cb",
  "c": "Dónde comer",
  "t": "Parrilla / choripán",
  "a": "Gral. Gregorio Aráoz de Lamadrid 743, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Caminito%20al%20Toque%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20743%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJ0_GuTaYzo5URXK7Lo4NOdog",
  "d": "Local sencillo de choripán y parrilla sobre Caminito. Las mesas están en la calle.",
  "f": "No",
  "h": "Sin dato",
  "g": 4.8,
  "lat": -34.638879,
  "lon": -58.36289,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Caminito%20al%20Toque%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20743%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJ0_GuTaYzo5URXK7Lo4NOdog&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Caminito%20al%20Toque%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20743%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJ0_GuTaYzo5URXK7Lo4NOdog&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Caminito%20al%20Toque%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20743%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJ0_GuTaYzo5URXK7Lo4NOdog&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Cantina Patio La Boca",
  "z": "cb",
  "c": "Dónde comer",
  "t": "Cantina",
  "a": "Gral. Gregorio Aráoz de Lamadrid 843, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Cantina%20Patio%20La%20Boca%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20843%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJ2c9INyY1o5URKPhEy2w2Z7A",
  "d": "Cantina familiar con patio, pastas caseras y empanadas. Está un poco alejada del bullicio de Caminito.",
  "f": "No",
  "h": "Cerrado los miércoles",
  "g": 4.8,
  "lat": -34.639316,
  "lon": -58.364234,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Cantina%20Patio%20La%20Boca%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20843%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJ2c9INyY1o5URKPhEy2w2Z7A&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Cantina%20Patio%20La%20Boca%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20843%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJ2c9INyY1o5URKPhEy2w2Z7A&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Cantina%20Patio%20La%20Boca%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20843%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJ2c9INyY1o5URKPhEy2w2Z7A&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Encuentro Nativo",
  "z": "cb",
  "c": "Dónde comer",
  "t": "Restaurante con show",
  "a": "Magallanes 854, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Encuentro%20Nativo%2C%20Magallanes%20854%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJLYgnUbA0o5URyvJDU0WZP98",
  "d": "Restaurante colorido en Caminito con tango y música en vivo. Es una zona muy turística, con precios altos.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.6,
  "lat": -34.639759,
  "lon": -58.362621,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Encuentro%20Nativo%2C%20Magallanes%20854%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJLYgnUbA0o5URyvJDU0WZP98&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Encuentro%20Nativo%2C%20Magallanes%20854%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJLYgnUbA0o5URyvJDU0WZP98&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Encuentro%20Nativo%2C%20Magallanes%20854%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJLYgnUbA0o5URyvJDU0WZP98&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Hierro Parrilla San Telmo",
  "z": "st",
  "c": "Dónde comer",
  "t": "Parrilla",
  "a": "Bolívar 970, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Hierro%20Parrilla%20San%20Telmo%2C%20Bol%C3%ADvar%20970%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJG5tUKrfLvJURoUK0uPSA8sg",
  "d": "Parrilla dentro del Mercado de San Telmo, con barra frente al fuego. Se destacan las empanadas, el choripán y la provoleta.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.7,
  "lat": -34.619154,
  "lon": -58.372483,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Hierro%20Parrilla%20San%20Telmo%2C%20Bol%C3%ADvar%20970%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJG5tUKrfLvJURoUK0uPSA8sg&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Hierro%20Parrilla%20San%20Telmo%2C%20Bol%C3%ADvar%20970%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJG5tUKrfLvJURoUK0uPSA8sg&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Hierro%20Parrilla%20San%20Telmo%2C%20Bol%C3%ADvar%20970%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJG5tUKrfLvJURoUK0uPSA8sg&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "El Refuerzo",
  "z": "st",
  "c": "Dónde comer",
  "t": "Restaurante argentino",
  "a": "Chacabuco 860, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=El%20Refuerzo%2C%20Chacabuco%20860%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJr6zNSirLvJUR_Izb9XhJnQ4",
  "d": "Restaurante familiar de comida argentina, con porciones grandes y buen precio. Cierra los lunes.",
  "f": "No",
  "h": "Cerrado los lunes",
  "g": 4.5,
  "lat": -34.617999,
  "lon": -58.375817,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Refuerzo%2C%20Chacabuco%20860%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJr6zNSirLvJUR_Izb9XhJnQ4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Refuerzo%2C%20Chacabuco%20860%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJr6zNSirLvJUR_Izb9XhJnQ4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Refuerzo%2C%20Chacabuco%20860%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJr6zNSirLvJUR_Izb9XhJnQ4&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Desnivel",
  "z": "st",
  "c": "Dónde comer",
  "t": "Parrilla",
  "a": "Defensa 855, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Desnivel%2C%20Defensa%20855%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJ9emvzNQ0o5UROiVyLTusVNQ",
  "d": "Clásico de San Telmo para comer bife, con porciones abundantes. Es ruidoso y siempre concurrido.",
  "f": "No",
  "h": "Cerrado los lunes",
  "g": 4.3,
  "lat": -34.617873,
  "lon": -58.37182,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Desnivel%2C%20Defensa%20855%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ9emvzNQ0o5UROiVyLTusVNQ&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Desnivel%2C%20Defensa%20855%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ9emvzNQ0o5UROiVyLTusVNQ&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Desnivel%2C%20Defensa%20855%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ9emvzNQ0o5UROiVyLTusVNQ&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Parrilla La Brigada",
  "z": "st",
  "c": "Dónde comer",
  "t": "Parrilla",
  "a": "Estados Unidos 465, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Parrilla%20La%20Brigada%2C%20Estados%20Unidos%20465%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJtW9uOCvLvJURfu7PV1V3Y3g",
  "d": "Parrilla tradicional con decoración de fútbol y una gran carta de vinos. Ideal para ir en grupo.",
  "f": "No",
  "h": "Cerrado los lunes",
  "g": 4.2,
  "lat": -34.618368,
  "lon": -58.372622,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Parrilla%20La%20Brigada%2C%20Estados%20Unidos%20465%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJtW9uOCvLvJURfu7PV1V3Y3g&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Parrilla%20La%20Brigada%2C%20Estados%20Unidos%20465%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJtW9uOCvLvJURfu7PV1V3Y3g&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Parrilla%20La%20Brigada%2C%20Estados%20Unidos%20465%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJtW9uOCvLvJURfu7PV1V3Y3g&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Grandes Carnicerías del Plata",
  "z": "st",
  "c": "Dónde comer",
  "t": "Parrilla",
  "a": "Chile 592, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Grandes%20Carnicer%C3%ADas%20del%20Plata%2C%20Chile%20592%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJ63lOiCrLvJURMzQQDXcvPPI",
  "d": "Parrilla con cortes generosos para compartir, muy elogiada por sus bifes. Abre todos los días.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.4,
  "lat": -34.616158,
  "lon": -58.374372,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Grandes%20Carnicer%C3%ADas%20del%20Plata%2C%20Chile%20592%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ63lOiCrLvJURMzQQDXcvPPI&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Grandes%20Carnicer%C3%ADas%20del%20Plata%2C%20Chile%20592%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ63lOiCrLvJURMzQQDXcvPPI&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Grandes%20Carnicer%C3%ADas%20del%20Plata%2C%20Chile%20592%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ63lOiCrLvJURMzQQDXcvPPI&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "La Poesía",
  "z": "st",
  "c": "Dónde comer",
  "t": "Café / bar notable",
  "a": "Chile 502, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=La%20Poes%C3%ADa%2C%20Chile%20502%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJoyuClSrLvJURNjm1ra7PeL4",
  "d": "Café histórico con ambiente literario, carta amplia y buenas medialunas. Abre desde la mañana hasta la madrugada.",
  "f": "Sí",
  "h": "Todos los días",
  "g": 4.4,
  "lat": -34.616066,
  "lon": -58.37326,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=La%20Poes%C3%ADa%2C%20Chile%20502%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJoyuClSrLvJURNjm1ra7PeL4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=La%20Poes%C3%ADa%2C%20Chile%20502%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJoyuClSrLvJURNjm1ra7PeL4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=La%20Poes%C3%ADa%2C%20Chile%20502%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJoyuClSrLvJURNjm1ra7PeL4&travelmode=transit"
  ],
  "i": "poesia"
 },
 {
  "n": "El Federal Bar",
  "z": "st",
  "c": "Dónde comer",
  "t": "Bar / restaurante histórico",
  "a": "Carlos Calvo 599, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=El%20Federal%20Bar%2C%20Carlos%20Calvo%20599%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJc2yddyvLvJURor6ByB40YlI",
  "d": "Bar fundado en 1864 con interior de madera oscura, a pasos del Mercado. Sirve café, picadas y platos tradicionales.",
  "f": "Sí",
  "h": "Todos los días",
  "g": 4.4,
  "lat": -34.619571,
  "lon": -58.374196,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Federal%20Bar%2C%20Carlos%20Calvo%20599%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJc2yddyvLvJURor6ByB40YlI&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Federal%20Bar%2C%20Carlos%20Calvo%20599%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJc2yddyvLvJURor6ByB40YlI&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Federal%20Bar%2C%20Carlos%20Calvo%20599%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJc2yddyvLvJURor6ByB40YlI&travelmode=transit"
  ],
  "i": "federal"
 },
 {
  "n": "Café Rivas",
  "z": "st",
  "c": "Dónde comer",
  "t": "Café / bar notable",
  "a": "Estados Unidos 302, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20Rivas%2C%20Estados%20Unidos%20302%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJH_ieotQ0o5URL-BLzRH0X6A",
  "d": "Café-bar elegante pero relajado, con empanadas y postres como el flan con dulce de leche.",
  "f": "No",
  "h": "Cerrado los lunes",
  "g": 4.4,
  "lat": -34.618489,
  "lon": -58.370259,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Caf%C3%A9%20Rivas%2C%20Estados%20Unidos%20302%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJH_ieotQ0o5URL-BLzRH0X6A&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Caf%C3%A9%20Rivas%2C%20Estados%20Unidos%20302%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJH_ieotQ0o5URL-BLzRH0X6A&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Caf%C3%A9%20Rivas%2C%20Estados%20Unidos%20302%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJH_ieotQ0o5URL-BLzRH0X6A&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "SAETA Cafe",
  "z": "st",
  "c": "Dónde comer",
  "t": "Café / restaurante",
  "a": "Chile 602, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=SAETA%20Cafe%2C%20Chile%20602%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJgc3oKtjLvJURpCpFTiH-ouA",
  "d": "Café y restaurante de barrio con comida casera y desayunos. Algunas noches hay música y tango en vivo.",
  "f": "No",
  "h": "Cerrado los lunes",
  "g": 4.7,
  "lat": -34.61623,
  "lon": -58.374703,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=SAETA%20Cafe%2C%20Chile%20602%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJgc3oKtjLvJURpCpFTiH-ouA&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=SAETA%20Cafe%2C%20Chile%20602%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJgc3oKtjLvJURpCpFTiH-ouA&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=SAETA%20Cafe%2C%20Chile%20602%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJgc3oKtjLvJURpCpFTiH-ouA&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Bar Británico",
  "z": "st",
  "c": "Dónde comer",
  "t": "Bar / restaurante",
  "a": "Brasil 399, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Bar%20Brit%C3%A1nico%2C%20Brasil%20399%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJyyTsSM00o5URxzB6EWJli4E",
  "d": "Bodegón-bar clásico en la esquina de Defensa y Brasil, frente al Parque Lezama. Abre casi todo el día y tiene buenos precios.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.2,
  "lat": -34.625227,
  "lon": -58.371043,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Bar%20Brit%C3%A1nico%2C%20Brasil%20399%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJyyTsSM00o5URxzB6EWJli4E&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Bar%20Brit%C3%A1nico%2C%20Brasil%20399%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJyyTsSM00o5URxzB6EWJli4E&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Bar%20Brit%C3%A1nico%2C%20Brasil%20399%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJyyTsSM00o5URxzB6EWJli4E&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Artesanía Caminito",
  "z": "cb",
  "c": "Dónde comprar",
  "t": "Artesanías y souvenirs",
  "a": "Gral. Gregorio Aráoz de Lamadrid 766, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Artesan%C3%ADa%20Caminito%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20766%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJpbfF_bA0o5UR4LMsC4xCIrY",
  "d": "Artesanías y recuerdos sobre Caminito. Abre de lunes a sábado.",
  "f": "Sí",
  "h": "Lunes a sábado",
  "g": 4.2,
  "lat": -34.639059,
  "lon": -58.362994,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Artesan%C3%ADa%20Caminito%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20766%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJpbfF_bA0o5UR4LMsC4xCIrY&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Artesan%C3%ADa%20Caminito%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20766%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJpbfF_bA0o5UR4LMsC4xCIrY&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Artesan%C3%ADa%20Caminito%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20766%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJpbfF_bA0o5UR4LMsC4xCIrY&travelmode=transit"
  ],
  "i": "artesania"
 },
 {
  "n": "Todo Boca",
  "z": "cb",
  "c": "Dónde comprar",
  "t": "Souvenirs de Boca Juniors",
  "a": "Brandsen 758, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Todo%20Boca%2C%20Brandsen%20758%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJfWI6Wi01o5URakGsgCMw3i8",
  "d": "Todo en azul y oro: camisetas, banderas, tazas, imanes y réplicas. Según reseñas, solo aceptan efectivo.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.7,
  "lat": -34.636622,
  "lon": -58.364222,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Todo%20Boca%2C%20Brandsen%20758%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJfWI6Wi01o5URakGsgCMw3i8&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Todo%20Boca%2C%20Brandsen%20758%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJfWI6Wi01o5URakGsgCMw3i8&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Todo%20Boca%2C%20Brandsen%20758%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJfWI6Wi01o5URakGsgCMw3i8&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Centro de Exposiciones Caminito",
  "z": "cb",
  "c": "Dónde comprar",
  "t": "Feria de artesanías",
  "a": "Gral. Gregorio Aráoz de Lamadrid 784, La Boca, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Centro%20de%20Exposiciones%20Caminito%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20784%2C%20La%20Boca%2C%20CABA&query_place_id=ChIJhZw2ArE0o5UR0hC8RiPv7rc",
  "d": "Feria de artesanías y arte con puestos de recuerdos sobre Caminito.",
  "f": "No",
  "h": "Sin dato",
  "g": 4.6,
  "lat": -34.639245,
  "lon": -58.363383,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Centro%20de%20Exposiciones%20Caminito%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20784%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJhZw2ArE0o5UR0hC8RiPv7rc&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Centro%20de%20Exposiciones%20Caminito%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20784%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJhZw2ArE0o5UR0hC8RiPv7rc&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Centro%20de%20Exposiciones%20Caminito%2C%20Gral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20784%2C%20La%20Boca%2C%20CABA&destination_place_id=ChIJhZw2ArE0o5UR0hC8RiPv7rc&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Mercado de San Telmo",
  "z": "st",
  "c": "Dónde comprar",
  "t": "Mercado",
  "a": "Defensa 963, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Mercado%20de%20San%20Telmo%2C%20Defensa%20963%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJ21OGjCrLvJUR8SKFKrz5eX8",
  "d": "Mercado cubierto con puestos de antigüedades, souvenirs y comida. Es ideal para pasear y almorzar.",
  "f": "Sí",
  "h": "Todos los días",
  "g": 4.5,
  "lat": -34.618798,
  "lon": -58.372542,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Mercado%20de%20San%20Telmo%2C%20Defensa%20963%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ21OGjCrLvJUR8SKFKrz5eX8&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Mercado%20de%20San%20Telmo%2C%20Defensa%20963%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ21OGjCrLvJUR8SKFKrz5eX8&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Mercado%20de%20San%20Telmo%2C%20Defensa%20963%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ21OGjCrLvJUR8SKFKrz5eX8&travelmode=transit"
  ],
  "i": "mercado"
 },
 {
  "n": "Feria de San Telmo (Plaza Dorrego)",
  "z": "st",
  "c": "Dónde comprar",
  "t": "Feria al aire libre",
  "a": "Humberto 1º 401, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Feria%20de%20San%20Telmo%20%28Plaza%20Dorrego%29%2C%20Humberto%201%C2%BA%20401%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJodpTUM00o5URU7IRX_C0F7s",
  "d": "Feria de los domingos que ocupa varias cuadras, con antigüedades, artesanías y tango en la plaza.",
  "f": "Sí",
  "h": "Solo domingos",
  "g": 4.5,
  "lat": -34.620643,
  "lon": -58.372221,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Feria%20de%20San%20Telmo%20%28Plaza%20Dorrego%29%2C%20Humberto%201%C2%BA%20401%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJodpTUM00o5URU7IRX_C0F7s&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Feria%20de%20San%20Telmo%20%28Plaza%20Dorrego%29%2C%20Humberto%201%C2%BA%20401%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJodpTUM00o5URU7IRX_C0F7s&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Feria%20de%20San%20Telmo%20%28Plaza%20Dorrego%29%2C%20Humberto%201%C2%BA%20401%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJodpTUM00o5URU7IRX_C0F7s&travelmode=transit"
  ],
  "i": "feria"
 },
 {
  "n": "Almacén de Antigüedades",
  "z": "st",
  "c": "Dónde comprar",
  "t": "Antigüedades",
  "a": "Defensa 961, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Almac%C3%A9n%20de%20Antig%C3%BCedades%2C%20Defensa%20961%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJJQlOrdQ0o5URqjxcy7jNcu0",
  "d": "Tienda de antigüedades con objetos bien conservados y relojes. Abre todos los días.",
  "f": "No",
  "h": "Todos los días",
  "g": 5,
  "lat": -34.619155,
  "lon": -58.37161,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Almac%C3%A9n%20de%20Antig%C3%BCedades%2C%20Defensa%20961%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJJQlOrdQ0o5URqjxcy7jNcu0&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Almac%C3%A9n%20de%20Antig%C3%BCedades%2C%20Defensa%20961%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJJQlOrdQ0o5URqjxcy7jNcu0&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Almac%C3%A9n%20de%20Antig%C3%BCedades%2C%20Defensa%20961%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJJQlOrdQ0o5URqjxcy7jNcu0&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Abraxas Antiques",
  "z": "st",
  "c": "Dónde comprar",
  "t": "Antigüedades y joyas",
  "a": "Defensa 1092, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Abraxas%20Antiques%2C%20Defensa%201092%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJL30XStM0o5URcEK4pcEZvmw",
  "d": "Antigüedades, joyas y relojes antiguos, con atención muy elogiada. Abre todos los días.",
  "f": "No",
  "h": "Todos los días",
  "g": 4.9,
  "lat": -34.620489,
  "lon": -58.371343,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Abraxas%20Antiques%2C%20Defensa%201092%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJL30XStM0o5URcEK4pcEZvmw&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Abraxas%20Antiques%2C%20Defensa%201092%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJL30XStM0o5URcEK4pcEZvmw&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Abraxas%20Antiques%2C%20Defensa%201092%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJL30XStM0o5URcEK4pcEZvmw&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Arandu San Telmo",
  "z": "st",
  "c": "Dónde comprar",
  "t": "Artículos de cuero",
  "a": "Bolívar 911, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Arandu%20San%20Telmo%2C%20Bol%C3%ADvar%20911%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJaVs-WN7LvJURGwcRRDXB-6w",
  "d": "Artículos de cuero hechos en Argentina, ponchos, mantas y ropa de estilo gaucho.",
  "f": "No",
  "h": "Cerrado los lunes",
  "g": 5,
  "lat": -34.61872,
  "lon": -58.373098,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Arandu%20San%20Telmo%2C%20Bol%C3%ADvar%20911%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJaVs-WN7LvJURGwcRRDXB-6w&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Arandu%20San%20Telmo%2C%20Bol%C3%ADvar%20911%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJaVs-WN7LvJURGwcRRDXB-6w&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Arandu%20San%20Telmo%2C%20Bol%C3%ADvar%20911%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJaVs-WN7LvJURGwcRRDXB-6w&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Telcuer",
  "z": "st",
  "c": "Dónde comprar",
  "t": "Artículos de cuero",
  "a": "Defensa 905, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Telcuer%2C%20Defensa%20905%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJTW_Mfaw1o5URaRbBPB-urV4",
  "d": "Carteras, bolsos y cinturones de cuero. Cierra los lunes.",
  "f": "No",
  "h": "Cerrado los lunes",
  "g": 4.6,
  "lat": -34.618619,
  "lon": -58.371663,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Telcuer%2C%20Defensa%20905%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJTW_Mfaw1o5URaRbBPB-urV4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Telcuer%2C%20Defensa%20905%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJTW_Mfaw1o5URaRbBPB-urV4&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Telcuer%2C%20Defensa%20905%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJTW_Mfaw1o5URaRbBPB-urV4&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "Flecharte - objetos que enamoran",
  "z": "st",
  "c": "Dónde comprar",
  "t": "Artesanías regionales",
  "a": "Estados Unidos 468 Loc 150, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=Flecharte%20-%20objetos%20que%20enamoran%2C%20Estados%20Unidos%20468%20Loc%20150%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJ4RIvXBbLvJURj1NQMxMZCjc",
  "d": "Artesanías de todo el país dentro del Mercado de San Telmo: bufandas, mantas y accesorios. Cada pieza tiene su ficha del artesano.",
  "f": "No",
  "h": "Todos los días",
  "g": 5,
  "lat": -34.618995,
  "lon": -58.372541,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=Flecharte%20-%20objetos%20que%20enamoran%2C%20Estados%20Unidos%20468%20Loc%20150%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ4RIvXBbLvJURj1NQMxMZCjc&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=Flecharte%20-%20objetos%20que%20enamoran%2C%20Estados%20Unidos%20468%20Loc%20150%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ4RIvXBbLvJURj1NQMxMZCjc&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=Flecharte%20-%20objetos%20que%20enamoran%2C%20Estados%20Unidos%20468%20Loc%20150%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJ4RIvXBbLvJURj1NQMxMZCjc&travelmode=transit"
  ],
  "i": ""
 },
 {
  "n": "El Tero y Ruah",
  "z": "st",
  "c": "Dónde comprar",
  "t": "Mates y regalos",
  "a": "Humberto 1º 480, San Telmo, CABA",
  "m": "https://www.google.com/maps/search/?api=1&query=El%20Tero%20y%20Ruah%2C%20Humberto%201%C2%BA%20480%2C%20San%20Telmo%2C%20CABA&query_place_id=ChIJz_yOr0HLvJURtEXaQXKNE6o",
  "d": "Mates, bombillas y productos artesanales con impacto social. Abre de jueves a domingo.",
  "f": "No",
  "h": "Jueves a domingo",
  "g": 5,
  "lat": -34.620804,
  "lon": -58.372552,
  "r": [
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lomas%20de%20Zamora%2C%20Lomas%20de%20Zamora%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Tero%20y%20Ruah%2C%20Humberto%201%C2%BA%20480%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJz_yOr0HLvJURtEXaQXKNE6o&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Lan%C3%BAs%2C%20Lan%C3%BAs%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Tero%20y%20Ruah%2C%20Humberto%201%C2%BA%20480%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJz_yOr0HLvJURtEXaQXKNE6o&travelmode=transit",
   "https://www.google.com/maps/dir/?api=1&origin=Estaci%C3%B3n%20Temperley%2C%20Temperley%2C%20Buenos%20Aires%2C%20Argentina&destination=El%20Tero%20y%20Ruah%2C%20Humberto%201%C2%BA%20480%2C%20San%20Telmo%2C%20CABA&destination_place_id=ChIJz_yOr0HLvJURtEXaQXKNE6o&travelmode=transit"
  ],
  "i": ""
 }
];
const G=[
 [
  "g21",
  "Caminito"
 ],
 [
  "g31",
  "Figuras en los balcones de Caminito"
 ],
 [
  "g42",
  "Pintores y cuadros en Caminito"
 ],
 [
  "g44",
  "Artistas en Caminito"
 ],
 [
  "g41",
  "Arte callejero en Caminito"
 ],
 [
  "g52",
  "Casas de colores frente al Riachuelo"
 ],
 [
  "g73",
  "Vuelta de Rocha, La Boca"
 ],
 [
  "g13",
  "Mural homenaje a Quinquela Martín"
 ],
 [
  "g9",
  "Monumento a Quinquela Martín"
 ],
 [
  "usina",
  "Usina del Arte"
 ],
 [
  "bombonera",
  "Interior de La Bombonera"
 ],
 [
  "g5",
  "La Bombonera de noche"
 ],
 [
  "boquense",
  "Museo de la Pasión Boquense"
 ],
 [
  "g71",
  "Camisetas históricas de Boca"
 ],
 [
  "g27",
  "Museo Quinquela Martín"
 ],
 [
  "proa",
  "Fundación Proa"
 ],
 [
  "g1",
  "Feria de San Telmo"
 ],
 [
  "g39",
  "Calle de la feria de San Telmo"
 ],
 [
  "g2",
  "Puestos de antigüedades"
 ],
 [
  "g0",
  "Puesto de la Feria de San Telmo"
 ],
 [
  "mercado",
  "Mercado de San Telmo"
 ],
 [
  "g37",
  "Interior del Mercado de San Telmo"
 ],
 [
  "zanjon",
  "El Zanjón de Granados"
 ],
 [
  "barsur",
  "Tango"
 ]
];
