# Bestellverwaltung API

Die Bestellverwaltung API ist eine auf Node.js und Express.js basierende Serveranwendung, die RESTful API-Endpunkte zur Verwaltung von Bestellungen bereitstellt. Diese API ermöglicht es Benutzern, Bestellungen zu erstellen, zu aktualisieren und abzurufen. Die Bestellungen werden in einer MongoDB-Datenbank gespeichert.

## Funktionen

- **User Authentication:** Benutzer müssen authentifiziert sein, um mit der API zu interagieren.
- **Order Creation and Management:** Erstellen, aktualisieren und abrufen von Bestellungen.
- **Data Validation:** Validierung der eingehenden Anfragedaten mit Joi.
- **Error Handling:** Zentrale Fehlerbehandlung zur effektiven Verwaltung von Fehlern.

## Verwendete Technologien

- **Node.js**: JavaScript-Laufzeitumgebung für den Aufbau serverseitiger Anwendungen.
- **Express.js**: Schnelles, unvoreingenommenes und minimalistisches Web-Framework für Node.js.
- **MongoDB**: NoSQL-Datenbank zur Speicherung von Bestellungen.
- **Mongoose**: ODM (Object Data Modeling)-Bibliothek für MongoDB und Node.js.
- **Joi**: Datenvalidierungsbibliothek für JavaScript.
- **JWT (JSON Web Token)**: Für die sichere Benutzerauthentifizierung.

## Installation

1. **Repository klonen:**

   ```bash
   git clone https://github.com/Olena-Vozniuk/Hiero-City-Practice.git
   cd Hiero-City-Practice

2. **Abhängigkeiten installieren:**

npm install   

3. **Umgebungsvariablen einrichten:**

Erstelle eine .env Datei root directory und füge folgende Variablen hinzu:

MONGODB_URI=
JWT_SECRET=
PORT=

!! Daten nach „=“ sollen separat gesendet werden!!

4. **Server starten:**
npm start

Der Server wird unter http://localhost:PORT gestartet.

**API-Endpunkte**

Authentifizierung
POST /api/users/register : Einen neuen Benutzer registrieren.
POST /api/users/login : Mit vorhandenen Anmeldedaten einloggen.
POST /api/users/logout : Ausloggen.

Bestellungen
POST /api/orders/confirm : Eine Bestellung erstellen oder bestätigen.
GET /api/orders/:id : Die Details einer bestimmten Bestellung anhand der ID abrufen.
POST /api/orders/save : Eine Bestellung speichern.
PUT /api/orders/:id : Eine bestehende Bestellung anhand der ID aktualisieren.