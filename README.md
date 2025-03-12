Esercizio:
Ora è il momento di prepararci al frontend della nostra Web App!

MILESTONE 0
capiamo bene quello che sarà la nostra App di FE e creiamoci lo schemino relativo (components/pages/layout/dati).

MILESTONE 1
Mettiamo su un nuovo progetto React aiutandoci con Vite
Ripuliamo come sempre l’app da file e codice di esempio non necessari
Installiamo il necessario: React Router, e Bootstrap (se volete utilizzarlo)

MILESTONE 2
Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
Creiamo 2 pagine:
La home, in cui mostreremo la lista dei film
La pagina di dettaglio di un singolo film (qui poi anche avrete le recensioni relative)

BONUS
Curare l’aspetto estetico della vostra applicazione


<!-- Diagramma di Flusso -->

Avvio App
   |
   v
Carica MainLayout
   |
   v
Carica Home (chiamata API per tutti i film)
   |
   v
Ricevi lista film e mostra MovieList
   |
   v
L'utente clicca "View Details" su un film
   |
   v
Navigazione alla rotta /movies/:id
   |
   v
Carica MovieDetail (chiamata API per dettagli del film)
   |
   v
Ricevi dettagli e mostra nella pagina
   |
   v
L'utente clicca "Back to Home" per tornare alla home